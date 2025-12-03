import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-500 mb-10">
        Learn Tailwind CSS – It's Awesome!
      </h1>
      <div className="flex flex-wrap gap-3">
        <Card title={"Card_01"} buttonText={"Buy Now"} />
        <Card title={"Card_02"} buttonText={"Check In"} />
        <Card title={"Card_03"} buttonText={"Open"} />
        <Card title={"Card_04"} buttonText={"Sell"} />
        
      </div>
    </div>
  );
}

export default App;
