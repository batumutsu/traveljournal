import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import datas from './components/data';

function App() {
  const card = datas.map(data => <
    Card
    key={data.id}
    {...data}
    />)
  return (
    <>
      <Navbar />
      <section className="cards-list">
        {card}
      </section>
    </>
  );
}

export default App;
