"use client";
import { useState, useMemo, useReducer, useEffect } from "react";
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
  const [sentences, setSentences] = useState<string[]>([]);
  const [showSentenceModal, setShowSentenceModal] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [currentSentence, setCurrentSentence] = useState("");
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

  const handlePlayAudio = (sentence?: string) => {
    try {
      synthesizeSpeech(sentence || list[state.index].english);
    } catch {
      const utterance = new SpeechSynthesisUtterance(list[state.index].english);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    handlePlayAudio();
    if (list[state.index].english.split(" ").length > 4) {
      processNextLogic();
    } else {
      setShowSentenceModal(true);
    }
  };

  const handleSentenceSubmit = () => {
    handlePlayAudio(currentSentence);
    const newSentences = [...sentences];
    newSentences[state.index] = currentSentence;
    setSentences(newSentences);
    setCurrentSentence("");
    setShowSentenceModal(false);
    processNextLogic();
  };

  const processNextLogic = () => {
    dispatch({ type: "TOGGLE_EN", showEn: true });
    if (state.showEN === false) {
      delay(
        () => {
          dispatch({ type: "NEXT" });
        },
        list[state.index].english.length * speed < 1000
          ? 1000
          : list[state.index].english.length * 100
      );
    } else {
      dispatch({ type: "NEXT" });
    }
  };

  const handleModalSkip = () => {
    setShowSentenceModal(false);
    processNextLogic();
  };

  const handleDone = () => {
    setShowSummary(true);
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
          <button className="btn btn-square" onClick={() => handlePlayAudio()}>
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
        {state.index === words.length - 1 ? (
          <button className="btn btn-success" onClick={handleDone}>
            Done
          </button>
        ) : (
          <button
            className="btn btn-neutral"
            disabled={state.index === words.length - 1}
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>

      {/* Sentence Input Modal */}
      {showSentenceModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Create a sentence with: {list[state.index].english}
            </h3>
            <input
              type="text"
              placeholder="Enter your sentence"
              className="input input-bordered w-full mt-4"
              value={currentSentence}
              onChange={(e) => setCurrentSentence(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn btn-ghost" onClick={handleModalSkip}>
                Skip
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSentenceSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary Modal */}
      {showSummary && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="text-lg font-bold mb-4">Your Sentences</h3>
            <ul className="list-disc pl-5">
              {list.map((word, index) => (
                <li key={word.id} className="mb-2">
                  <span className="font-semibold">{word.english}:</span>{" "}
                  {sentences[index] || "No sentence created"}
                </li>
              ))}
            </ul>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowSummary(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
