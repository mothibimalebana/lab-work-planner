import { createContext, useContext} from "react";
import type { AppDataContextType } from "../../../types/context";


export const AppDataContext = createContext<AppDataContextType | undefined>(undefined);



export const useAppData = (): AppDataContextType => {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
