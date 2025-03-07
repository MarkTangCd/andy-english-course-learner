import MemorandumClient from "@/components/MemorandumClient";
import IndexedDBProvider from "@/components/IndexedDBProvider";

export default function MemorandumPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Memorandum</h1>
      <IndexedDBProvider>
        <MemorandumClient />
      </IndexedDBProvider>
    </div>
  );
}
