import React from "react";
import Redux from "./Context/Redux";
import Account from "./screens/Account";
import Posts from "./screens/Posts";
import { store } from "./store";

function App() {
  return (
    <Redux store={store}>
      {/* <Routes /> */}
      <Posts/>
      <Account/>
    </Redux>
  );
}

export default App;
