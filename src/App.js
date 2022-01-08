import "./app.scss";
import IntroSection from "./components/intro-section";
import QuotesSection from "./components/quotes-section";
import RatingSection from "./components/rating-section";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="split">
            <IntroSection />
            <RatingSection />
          </div>
          <QuotesSection />
        </div>
      </main>
    </div>
  );
}

export default App;
