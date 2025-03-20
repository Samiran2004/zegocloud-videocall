import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Room from './Room';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
  );
}

export default App;
