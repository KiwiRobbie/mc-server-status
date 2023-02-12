import "./App.css";
import "./theme.css";

import {default as config} from "./config.json"
import { useState, useEffect } from "react";
import { ServerList } from "./components";

function App() {
  return (
    <div className="AppContainer">
      <ServerList servers={config.servers} updated_date={config.updated}/>
    </div>
    );
}

export default App;
