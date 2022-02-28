import "./App.css";
import Footer from "./components/layout/footer";
import HeaderSection from "./components/layout/header";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="app-wrapper">
      {/* Header Section */}
      <HeaderSection />

      {/* Content Section */}
      <div className="content-wrapper">
        <TodoList />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
