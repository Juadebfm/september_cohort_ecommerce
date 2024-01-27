import "./App.css";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Special from "./components/Special";

function App() {
  return (
    <>
      <main>
        <Special
          message="Hello Juadeb"
          greetings=",Welcome to class"
          className="red"
          title="First Component"
        />
        <Special
          message="Hello Henry"
          greetings=",Welcome to Flex"
          className="blue"
          title="Second Component"
        />
        <Special
          message="Hello Kenny"
          greetings=",Welcome to Shima"
          className="green"
          title="Third Component"
        />
        <h1>Hello World</h1>
      </main>
      <Footer placeNumber={1} />
      <Footer placeNumber={2} />
      <Footer placeNumber={3} />
      <Footer placeNumber={4} />
      <Footer placeNumber={5} />
    </>
  );
}

export default App;
