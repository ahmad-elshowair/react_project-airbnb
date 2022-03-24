import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {data} from './data'

const cards = data.map(card =>{
  return (
    <Card 
      key={card.id}
      card={card}
    />
  )
});

function App() {
  return (
    <div className="container">
     <Navbar />
     <Hero />
     <section className="stories">
      {cards}
     </section>
    </div> 
  );
}

export default App;
