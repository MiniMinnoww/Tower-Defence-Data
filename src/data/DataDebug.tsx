import {useGameData} from "./DataProvider.tsx";

export const DataDebug = () => {
  const data = useGameData();

  if (!data)
    return <p>Loading...</p>;

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}