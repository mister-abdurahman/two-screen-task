import { ScreenOne } from "./screens/ScreenOne";
import { ScreenTwo } from "./screens/ScreenTwo";
import { ScreenThree } from "./screens/ScreenThree";

function App() {
  return (
    <div className="!scroll-smooth">
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
    </div>
  );
}

export default App;
