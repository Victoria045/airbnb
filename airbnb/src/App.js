import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card';
// import card from './assets/image 12.png';
import Data from './Data';

function App() {
  const dataElements = Data.map(data => {
    return <Card 
                 key={data.id}
                //  data={data}
                 {...data}
                //  image={data.image}
                //  rating={data.stats.rating}
                //  reviewCount={data.stats.reviewCount}
                //  location={data.location}
                //  title={data.title}
                //  price={data.price}
                //  openSpots={data.openSpots}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='card--stats'>
        {dataElements}
      </div>
      {/* <Card 
        // image="Star 1.png"
        image={card}
        rating="5.0"
        reviewCount={6}
        country="Kenya"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  );
}

export default App;
