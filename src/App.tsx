import {DataProvider} from "./data/DataProvider.tsx";
import {TowerTable} from "./components/TowerTable.tsx";

import "./style/main.css";
import "./style/table.css";

export const App = () => {
  return (
    <DataProvider>
      <TowerTable />
    </DataProvider>
  )
}

export default App
