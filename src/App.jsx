import "./App.css";

import Board from "./Board";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>Lights Out Game</h1>
      <Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />
    </div>
  );
}

export default App;
