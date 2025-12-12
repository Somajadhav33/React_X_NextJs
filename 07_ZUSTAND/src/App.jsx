import { useEffect } from "react";
import { useAppStore } from "./store/appStore";
import Counter from "./components/Counter";
import CounterValue from "./components/CounterValue";
import "./App.css";
import CounterButton from "./components/CounterButton";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Optionally set a default background for the body in case the App div doesn't cover everything (though min-h-screen handles it)
  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <div className="space-y-6">
            <Counter />
            <CounterValue />
            <CounterButton />
          </div>
          <div className="lg:col-span-2">
            <Posts />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
