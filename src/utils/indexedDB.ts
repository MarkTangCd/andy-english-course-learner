export interface MemoItem {
  id?: number;
  english: string;
  chinese: string;
  example: string;
  createdAt: Date;
}

const DB_NAME = "memorandumDB";
const STORE_NAME = "memoItems";
const DB_VERSION = 1;

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject("Error opening database");
    };

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });

        // Create indexes
        store.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
  });
};

export const addMemoItem = async (item: MemoItem): Promise<number> => {
  const db = await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.add(item);

    request.onsuccess = () => {
      resolve(request.result as number);
    };

    request.onerror = () => {
      reject("Error adding memo item");
    };

    transaction.oncomplete = () => {
      db.close();
    };
  });
};

export const getTodayMemoItems = async (): Promise<MemoItem[]> => {
  const db = await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index("createdAt");

    // Get today's date range
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const range = IDBKeyRange.bound(today, tomorrow);
    const request = index.getAll(range);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject("Error getting today's memo items");
    };

    transaction.oncomplete = () => {
      db.close();
    };
  });
};
