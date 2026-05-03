import solarTeam from "./assets/solar_team_2026.jpg";
import "./App.css";

function App() {
  return (
    <section id="center">
      <h1>Solar Car Team Website</h1>
      <div>
        <img src={solarTeam} height="500" alt="the solar car team" />
      </div>
    </section>
  );
}

export default App;
