import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <Todo/>
          <TodoList />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
