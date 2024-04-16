import './App.css';
import Card from './compontents/card/card';
import './App.scss'
import { PROFILE_DATA } from './data/Dummy';
import Navbar from './compontents/navbar/Navbar';

function App() {
  return<>
  <Navbar/>
  <div className='card'>
  {
    PROFILE_DATA.map((item,id)=>{
      return <Card key={id} data={item}/>

    })
  }
  </div>
  </>
}

export default App;
