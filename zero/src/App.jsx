import "./App.css";
import AppHeader from "./components/AppHeader.jsx";
import Interview from "./components/Interview.jsx";
import Message from "./components/Message.jsx";
import Info from "./components/Info.jsx";

function App() {
  return (
    <div id="app-div">
      <AppHeader />
      <Info />
      <main id="main-id">
        <Interview id="interview" description="empty" />
        <Message id="message" />
      </main>
      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
}

export default App;
