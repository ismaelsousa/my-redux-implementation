import React from "react";
import Redux from "./Context/Redux";
import Routes from "./Routes";
import New from "./screens/New";
import Start from "./screens/Start";
import { store } from "./store";

function App() {
  return (
    <Redux store={store}>
      {/* <Routes /> */}
      <Start/>
      <New/>
    </Redux>
  );
}

export default App;
