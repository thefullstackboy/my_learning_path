import Hero from './componets/Hero';
import Navbar from './componets/Navbar';
import Card from './componets/Card';
import data from './data'
import './index.css';
function App() {
const cards = data.map((item) => {
   return (
    <Card
       key={item.id}
       {...item}
    />
   )
})


  return (
    <div>
    {/* This is navbar */}
      <Navbar/>
      <Hero/>
      <section className="cards-list">
                {cards}
      </section>
    </div>
  );
}

export default App;
