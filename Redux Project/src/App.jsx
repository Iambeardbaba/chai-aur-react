import Productlist from "./components/ProductList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar></NavBar>
      <main>
        <Productlist />
      </main>
    </div>
  );
}

export default App;
