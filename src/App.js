import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">My Portfolio</h1>
        <nav className="flex space-x-6">
          {["Home", "Projects", "About", "Contact"].map((menu) => (
            <button
              key={menu}
              className="relative px-4 py-2 group"
            >
              <span className="absolute inset-0 w-full h-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10 text-lg">{menu}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;
