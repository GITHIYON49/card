import './App.css';
import Card from './compontents/card/card';
import './App.scss'
import { PROFILE_DATA } from './data/Dummy';
import Header from './compontents/header/header';

function App() {
  return<>
  <Header/>
  {
    PROFILE_DATA.map((item,id)=>{
      return <Card key={id} data={item}/>

    })
  }
  </>
}

export default App;
