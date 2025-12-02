import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn To Integrate Tailwind
      </h1>
      <div className="max-w-80 bg-white border border-gray-200 rounded-xl mt-8 shadow-blue-300 overflow-hidden transition-shadow">
        <img
        className="w-full h-50 object-cover"
          src="https://cdn.pixabay.com/photo/2013/11/21/22/10/coffee-215383_1280.jpg"
          alt="sample"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 italic">Card Title</h2>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            inventore facilis tempore dignissimos quod suscipit adipisci veniam
            ipsa laudantium dolorum qui esse, quisquam accusamus nulla quis
            delectus voluptate. Repellat, quod?
          </p>
          <button className="m-3 ">Buy Now</button>
        </div>
      </div>

      
    </>
  );
}

export default App;
