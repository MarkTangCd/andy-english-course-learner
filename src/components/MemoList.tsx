"use client";

import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { MemoItem } from "@/utils/indexedDB";
import { synthesizeSpeech } from "@/utils/TTS";

interface MemoListProps {
  items: MemoItem[];
}

export default function MemoList({ items }: MemoListProps) {
  const [visibleChinese, setVisibleChinese] = useState<Record<number, boolean>>(
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

  const toggleChinese = (id: number) => {
    setVisibleChinese((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (items.length === 0) {
    return (
      <div className="bg-base-200 p-6 rounded-lg text-center">
        <p className="text-gray-500">No memo items added today</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="bg-base-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-bold">{item.english}</div>
            <button
              className="btn btn-circle btn-sm"
              onClick={() => handlePlayAudio(item.english)}
            >
              <BsPlayCircle />
            </button>
          </div>

          {visibleChinese[item.id!] ? (
            <div className="text-[#ce282b] mb-2">{item.chinese}</div>
          ) : (
            <button
              className="btn btn-active btn-link btn-sm mb-2"
              onClick={() => toggleChinese(item.id!)}
            >
              Show Chinese
            </button>
          )}

          {item.example && (
            <div className="mt-2 text-sm italic border-t pt-2">
              <span className="font-medium">Example:</span> {item.example}
            </div>
          )}

          <div className="text-xs text-gray-500 mt-2">
            Added: {new Date(item.createdAt).toLocaleTimeString()}
          </div>
        </li>
      ))}
    </ul>
  );
}
