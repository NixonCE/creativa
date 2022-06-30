import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Card from './components/Card';

function App() {
  let det = 'Soy un desarrollador web, con muchas ganas de trabajar y dispuesto a cumplir cualquier reto.'
  let img1 = 'https://st2.depositphotos.com/1203257/8733/i/950/depositphotos_87331584-stock-photo-programming-works-concept.jpg'
  return (
    <div>
      <Navbar nombre={'Nixon Developer'} />
      <Section pre={"I'm Nixon Dev" } info={det}/>
      <div className='cards'>
        <Card title={'Data'} img={img1} des={'Developer'}/>
        <Card title={'Service'} img={img1} des={'Services'}/>
        <Card title={'Webs'} img={img1} des={'Webs'}/>
      </div>
      
     
    </div>
  );
}

export default App;
