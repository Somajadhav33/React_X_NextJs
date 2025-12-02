import "./App.css";

function App() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-sky-400 mb-10">
        Learn Tailwind CSS – It's Awesome!
      </h1>

      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-56 object-cover"
          src="https://cdn.pixabay.com/photo/2013/11/21/22/10/coffee-215383_1280.jpg"
          alt="Coffee"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fresh Coffee</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptatum, excepturi nesciunt tempora libero accusantium!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;