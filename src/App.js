import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const OnCLose = () => {
    tg.close();
  };
  return (
    <div className="App">
      work
      <button onClick={OnCLose}>Закрыть</button>
    </div>
  );
}

export default App;
