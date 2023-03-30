import "./App.scss";
import { useState } from "react";

function App() {
  const [cards] = useState([
    {
      title: "Card-1",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
    {
      title: "Card-2",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
    {
      title: "Card-3",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
    {
      title: "Card-4",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
    {
      title: "Card-5",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
    {
      title: "Card-6",
      text: "Length and appearance do not determine whether a section in a paper is a paragraph",
    },
  ]);
  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Cards</h1>
          <div className="Cards">
            {cards.map((card, index) => (
              <div key={index} className="Card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
