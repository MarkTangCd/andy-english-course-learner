"use client";
import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { synthesizeSpeech } from "@/utils/TTS";

export default function WordList({ words }: { words: Word[] }) {
  const [visibleEnglish, setVisibleEnglish] = useState<Record<number, boolean>>(
    {}
  );

  const handlePlayAudio = (english: string) => {
    try {
      synthesizeSpeech(english);
    } catch {
      const utterance = new SpeechSynthesisUtterance(english);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleEnglish = (id: number) => {
    setVisibleEnglish((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className="lesson-list">
      {words?.map((item) => (
        <li key={item.id} className="lesson-list-item">
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold">{item.chinese}</div>
            <button
              className="btn btn-circle btn-sm"
              onClick={() => handlePlayAudio(item.english)}
            >
              <BsPlayCircle />
            </button>
          </div>
          {visibleEnglish[item.id] ? (
            <div className="text-[#ce282b]">{item.english}</div>
          ) : (
            <button
              className="btn btn-active btn-link btn-sm"
              onClick={() => toggleEnglish(item.id)}
            >
              Show English
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
