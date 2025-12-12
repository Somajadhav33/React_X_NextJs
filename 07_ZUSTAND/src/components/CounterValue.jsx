import { useCounterStore } from "../store/counterStore";

export default function CounterValue() {
  const { count } = useCounterStore();
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
        Current Count
      </h2>
      <div className="text-3xl font-bold text-gray-800 dark:text-white">
        {count}
      </div>
    </div>
  );
}
