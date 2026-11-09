import {DataProvider} from "./data/DataProvider.tsx";
import {DataDebug} from "./data/DataDebug.tsx";

export const App = () => {
  return (
    <DataProvider>
      <DataDebug />
    </DataProvider>
  )
}

export default App
