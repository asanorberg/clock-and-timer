import "./App.css";
import Timer from "./Components/Timer";
import Clock from "./Components/Clock";

function App() {
  return (
    <div className="app flex gap-6">
      <div className="timers flex-col space-y-6">
        <Timer startTime={5} />
        <Timer startTime={60} />
        <Timer startTime={300} />
      </div>
      <div className="clocks flex-col space-y-8 justify-center ">
        <h1 className="text-xl font-bold">World Clock</h1>
        <Clock city="Paris" timeZone="Europe/Paris" />
        <Clock city="Los Angeles" timeZone="America/Los_Angeles" />
        <Clock city="New York" timeZone="America/New_York" />
        <Clock city="Tokyo" timeZone="Asia/Tokyo" />
        <Clock city="Sydney" timeZone="Australia/Sydney" />
      </div>
    </div>
  );
}

export default App;
