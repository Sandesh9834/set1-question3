//Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.

import { items } from "./data";
import { StationaryList } from "./StationaryList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StationaryList header={"Stationery Items"} items={items} />
    </div>
  );
}
