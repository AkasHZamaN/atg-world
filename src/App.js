import { Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './Pages/Article/Article';
import Carousal from './Pages/Home/Carousal';
import Home from './Pages/Home/Home';

import Navbar from './Pages/Navbar/Navbar';
import SubNavbar from './Pages/SubNavbar/SubNavbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousal></Carousal>
      <SubNavbar></SubNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/article' element={<Article></Article>}></Route>
      </Routes>
    </div>
  );
}

export default App;
