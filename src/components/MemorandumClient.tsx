"use client";

import { useState, useEffect } from "react";
import { MemoItem, addMemoItem, getTodayMemoItems } from "@/utils/indexedDB";
import MemoForm from "./MemoForm";
import MemoList from "./MemoList";

export default function MemorandumClient() {
  const [todayItems, setTodayItems] = useState<MemoItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load today's items when component mounts
    loadTodayItems();
  }, []);

  const loadTodayItems = async () => {
    try {
      setIsLoading(true);
      const items = await getTodayMemoItems();
      setTodayItems(items);
    } catch (error) {
      console.error("Error loading today's items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = async (item: Omit<MemoItem, "id" | "createdAt">) => {
    try {
      const newItem: MemoItem = {
        ...item,
        createdAt: new Date(),
      };

      await addMemoItem(newItem);
      // Reload today's items to include the new one
      await loadTodayItems();
    } catch (error) {
      console.error("Error adding memo item:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Add New Memo</h2>
        <MemoForm onSubmit={handleAddItem} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">
          Today&apos;s Memos
        </h2>
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <MemoList items={todayItems} />
        )}
      </div>
    </div>
  );
}
