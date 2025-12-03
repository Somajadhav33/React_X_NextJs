export default function Button({buttonText}) {
  return (
    <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          {buttonText}
    </button>
  )
}
