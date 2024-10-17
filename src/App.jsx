import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import appleSvg from "../src/assets/apple.svg";
import googleSvg from "../src/assets/google.svg";
import twitterSvg from "../src/assets/twitter.svg";
import "./App.css";

function App() {
  const logos = [
    {
      imgUrl: appleSvg,
      title: "appple",
    },
    {
      imgUrl: googleSvg,
      title: "google",
    },
    {
      imgUrl: twitterSvg,
      title: "twitter",
    },
  ];
  return (
    <div className="container">
      <Header />
      <Section logos={logos} />
    </div>
  );
}

export default App;
