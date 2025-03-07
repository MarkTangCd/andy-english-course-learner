"use client";

import { useState } from "react";
import { MemoItem } from "@/utils/indexedDB";

interface MemoFormProps {
  onSubmit: (item: Omit<MemoItem, "id" | "createdAt">) => void;
}

export default function MemoForm({ onSubmit }: MemoFormProps) {
  const [english, setEnglish] = useState("");
  const [chinese, setChinese] = useState("");
  const [example, setExample] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!english.trim() || !chinese.trim()) {
      alert("English and Chinese words are required");
      return;
    }

    // Submit the new memo item
    onSubmit({
      english: english.trim(),
      chinese: chinese.trim(),
      example: example.trim(),
    });

    // Reset form
    setEnglish("");
    setChinese("");
    setExample("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-200 p-4 rounded-lg">
      <div className="form-control mb-3">
        <label className="label">
          <span className="label-text">English Word</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          placeholder="Enter English word"
          required
        />
      </div>

      <div className="form-control mb-3">
        <label className="label">
          <span className="label-text">Chinese Translation</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          value={chinese}
          onChange={(e) => setChinese(e.target.value)}
          placeholder="Enter Chinese translation"
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Example Sentence (optional)</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          value={example}
          onChange={(e) => setExample(e.target.value)}
          placeholder="Enter an example sentence using this word"
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Add Memo
      </button>
    </form>
  );
}
