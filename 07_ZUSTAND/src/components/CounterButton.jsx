import { useCounterStore } from "../store/counterStore";

function CounterButton() {
  const { increase, decrease } = useCounterStore();
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        Quick Actions
      </h2>
      <div className="flex gap-3">
        <button
          onClick={decrease}
          className="px-4 py-2 rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition active:scale-95 flex-1 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 cursor-pointer"
        >
          -
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 rounded-lg bg-green-50 text-green-600 font-medium hover:bg-green-100 transition active:scale-95 flex-1 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterButton;
