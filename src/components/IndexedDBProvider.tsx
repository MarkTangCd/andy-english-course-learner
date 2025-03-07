"use client";

import { useEffect, useState } from "react";
import { initDB } from "@/utils/indexedDB";

export default function IndexedDBProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initDB();
        setIsInitialized(true);
      } catch (err) {
        console.error("Failed to initialize IndexedDB:", err);
        setError(
          "Failed to initialize database. Some features may not work properly."
        );
      }
    };

    initialize();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
        {error}
        {children}
      </div>
    );
  }

  if (!isInitialized) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return <>{children}</>;
}
