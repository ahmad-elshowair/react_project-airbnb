import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {data} from './data'

const cards = data.map(card =>{
  return (
    <Card 
      key={card.id}
      image={card.coverImg}
      rating = {card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
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
