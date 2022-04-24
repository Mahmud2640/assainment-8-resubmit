import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Js/Header/Header";
import Shop from "./Components/Js/Shop/Shop";
import QaSection from "./Components/Js/QaSection/QaSection";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <QaSection></QaSection>
    </div>
  );
}

export default App;
