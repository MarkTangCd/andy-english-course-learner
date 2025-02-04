"use client";
import { useMemo, useReducer, useEffect } from "react";
import { delay } from "lodash";
import { redirect } from "next/navigation";
import { BsPlayCircle } from "react-icons/bs";
import { synthesizeSpeech } from "@/utils/TTS";

interface ReviewState {
  index: number;
  showEN: boolean;
}

type ReviewActionType = "NEXT" | "PREV" | "TOGGLE_EN";

const initialState: ReviewState = {
  index: 0,
  showEN: false,
};

function reducer(
  state: ReviewState,
  action: { type: ReviewActionType; showEn?: boolean }
) {
  switch (action.type) {
    case "NEXT":
      return { ...state, index: state.index + 1, showEN: false };
    case "PREV":
      return { ...state, index: state.index - 1, showEN: false };
    case "TOGGLE_EN":
      return {
        ...state,
        showEN: action.showEn ? action.showEn : !state.showEN,
      };
    default:
      return state;
  }
}

export default function Review({
  words,
  courseId,
}: {
  words: Word[];
  courseId: string;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const speed = 60; //TODO: add speed option feature later.

  if (words.length === 0) {
    // doesn't have the lesson about the id
    redirect("/");
  }

  const list = useMemo(() => words.sort(() => Math.random() - 0.5), [words]);

  useEffect(() => {
    if (state.index === words.length - 1) {
      if (courseId) {
        fetch("/api/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ courseId: Number(courseId) }),
        }).catch(console.error);
      }
    }
  }, [state.index, words, courseId]);

  const handlePlayAudio = () => {
    try {
      synthesizeSpeech(list[state.index].english);
    } catch {
      const utterance = new SpeechSynthesisUtterance(list[state.index].english);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    handlePlayAudio();
    dispatch({ type: "TOGGLE_EN", showEn: true });
    if (state.showEN === false) {
      delay(
        () => dispatch({ type: "NEXT" }),
        list[state.index].english.length * speed < 1000 // delay is different according to the length of the english
          ? 1000
          : list[state.index].english.length * 100
      );
    } else {
      // if the english has already shown, turn the page directly.
      dispatch({ type: "NEXT" });
    }
  };

  return (
    <>
      <div className="w-[100px]">
        <button
          className="btn btn-neutral"
          disabled={state.index === 0}
          onClick={() => dispatch({ type: "PREV" })}
        >
          Previous
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-y-5">
        <div className="flex gap-x-5 text-4xl font-bold text-[#0d262c]">
          <div>{list[state.index].chinese}</div>
          <button className="btn btn-square" onClick={handlePlayAudio}>
            <BsPlayCircle />
          </button>
        </div>
        {state.showEN ? (
          <div className="text-2xl text-[#ce282b]">
            {list[state.index].english}
          </div>
        ) : (
          <button
            className="btn btn-active btn-link"
            onClick={() => dispatch({ type: "TOGGLE_EN" })}
          >
            Show English
          </button>
        )}
      </div>
      <div className="w-[100px]">
        <button
          className="btn btn-neutral"
          disabled={state.index === words.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
