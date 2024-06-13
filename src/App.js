import React from 'react';
import './App.css';
import Detail from './Detail';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
