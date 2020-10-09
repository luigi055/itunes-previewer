import React from "react";
import ClientRouter from "./client-router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ClientRouter />
    </Router>
  );
}

export default App;
