import {type Context, createContext, type ReactNode, useContext, useEffect, useState} from "react";


const DataContext: Context<DataStructure | undefined> = createContext<DataStructure | undefined>(undefined);

export interface DataStructure {
  [table: string]: Record<string, unknown>[]
}

const fetchJsonData = async (): Promise<DataStructure> => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}/database.json`
  );

  if (!response.ok)
  {
    console.log(response.status);
    throw new Error("Failed to fetch database");
  }

  return await response.json();
}

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [jsonData, setJsonData] = useState<DataStructure>();

  useEffect(() => {
    fetchJsonData().then(setJsonData);
  }, []);

  return (
    <DataContext.Provider value={jsonData}>
      {children}
    </DataContext.Provider>
  )
}

export const useGameData = (): DataStructure | undefined => {
  return useContext(DataContext);
}