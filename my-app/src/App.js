import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Eat" />
      <Todo text="Sleep" />
      <Todo text="Code" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
