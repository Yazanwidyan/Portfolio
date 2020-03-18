import React from "react";
import ResponsiveDrawer from "./Component/Sidebar";
import Layout from "./Container/Layout";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Layout />
    </div>
  );
}

export default App;
