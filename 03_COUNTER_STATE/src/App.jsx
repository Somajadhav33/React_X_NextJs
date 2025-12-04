import { useState } from "react";
import "./App.css";

export default function App() {
  // 1. Declare state variables
  const [count, setCount] = useState(0);        // Main counter
  const [userCount, setUserCount] = useState(0); // For input

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">
        Counter is <span className="text-blue-600">{count}</span>
      </h1>

      <div className="text-center space-x-4">
        {/* Good: Use updater function for accuracy */}
        <button
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={() => setCount(prev => prev + 1)}
        >
          Increase
        </button>

        {/* Prevent negative values */}
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          onClick={() => setCount(prev => Math.max(prev - 1, 0))}
        >
          Decrease
        </button>

        <button
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      <div className="text-center mt-10">
        <input
          type="number"
          value={userCount}
          onChange={(e) => setUserCount(Number(e.target.value) || 0)}
          className="px-4 py-2 border border-gray-400 rounded-lg text-center"
          placeholder="Enter number"
        />
        <button
          className="ml-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={() => {
            setCount(userCount);
            setUserCount(0); // Clear input
          }}
        >
          Set Counter to {userCount}
        </button>
      </div>
    </>
  );
}