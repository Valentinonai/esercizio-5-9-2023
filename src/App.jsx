import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/topBar";
import MyFooter from "./components/MyFooter";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Jumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
