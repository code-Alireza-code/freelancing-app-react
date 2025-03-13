import HomePage from "../features/Home/HomePage";
import { useDarkMode } from "../hooks/useDarkMode";

function Home() {
  useDarkMode();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container flex items-center justify-center max-w-screen-2xl">
        <HomePage />
      </div>
    </div>
  );
}

export default Home;
