import {type Context, createContext, type ReactNode, useMemo} from "react";

const DataContext: Context<any | undefined> = createContext(null);

const fetchJsonData = async (): Promise<any> => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}data.json`
  );

  return await response.json();
}

export const DataProvider = (children: ReactNode) => {
  const jsonData = useMemo(() => fetchJsonData(), []);

  return (
    <DataContext.Provider value={jsonData}>
      {children}
    </DataContext.Provider>
  )
}