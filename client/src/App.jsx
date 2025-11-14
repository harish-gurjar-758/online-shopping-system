import Registration from "./assets/pages/registration";

function App() {

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl text-blue-600 font-bold">Tailwind Working!</h1>
        <button className="px-6 py-2 mt-4 bg-green-500 text-white rounded-lg">
          Test Button
        </button>
      </div>
      <Registration />
    </div>
  )
}

export default App
