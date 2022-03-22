import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import katie from './images/katie-zaferes.png';

function App() {
  return (
    <div className="container">
     <Navbar />
     <Hero />
     <Card 
      image={katie}
      rating="5.0"
      reviewCount="6"
      country="USA"
      title="Life lessons with Katie Zaferes"
      price="136"
     />
    </div>
  );
}

export default App;
