import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { PrismaClient } from "@prisma/client";

export const PrismaContext = createContext<PrismaClient | null>(null);

export const usePrismaContext = () => {
  const context = useContext(PrismaContext);
  if (!context) {
    throw new Error("usePrismaContext must be used within a PrismaProvider");
  }
  return context;
};

export const PrismaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<PrismaClient | null>(null);

  useEffect(() => {
    // Initialize Prisma Client
    const prisma = new PrismaClient();
    setClient(prisma);
  }, []);

  return (
    <PrismaContext.Provider value={client}>{children}</PrismaContext.Provider>
  );
};
