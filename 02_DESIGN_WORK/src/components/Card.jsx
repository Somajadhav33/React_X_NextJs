import Button from "./Button";
export default function Card({title , buttonText}) {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-56 object-cover"
        src="https://cdn.pixabay.com/photo/2013/11/21/22/10/coffee-215383_1280.jpg"
        alt="Coffee"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptatum, excepturi nesciunt tempora libero accusantium!
        </p>
        <Button buttonText={buttonText}/>
      </div>
    </div>
  );
}
