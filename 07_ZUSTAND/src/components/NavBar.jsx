import { useAppStore } from "../store/appStore";

function NavBar() {
  const { user, theme, logout, login, toggleTheme } = useAppStore();
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Zustand Demo
        </h1>
        <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-1.5 dark:bg-gray-700">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Theme: {theme}
          </span>
          <button
            onClick={toggleTheme}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 cursor-pointer"
          >
            Toggle
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user !== "" ? (
          <>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                {user.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {user}
              </span>
            </div>
            <button
              onClick={logout}
              className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100 active:scale-95 cursor-pointer dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              Guest Mode
            </span>
            <button
              onClick={login}
              className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-all hover:bg-green-100 active:scale-95 cursor-pointer dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
