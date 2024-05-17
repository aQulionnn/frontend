import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RemoteControllers from './pages/RemoteControllers/RemoteControllers';
import Accessories from './pages/Accessories/Accessories';
import CarKeys from './pages/Keys/Car/CarKeys';
import HouseKeys from './pages/Keys/House/HouseKeys';
import Keys from './pages/Keys/Keys';
import Cart from './pages/Cart/Cart';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/keys' element={<Keys />} />
          <Route path='/keys/car' element={<CarKeys />} />
          <Route path='/keys/house' element={<HouseKeys />} />
          <Route path='/remote-controllers' element={<RemoteControllers />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
