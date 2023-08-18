import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Cbody} from './Cards';
import { StuCard } from './StuCard';
import Layout from './Layout';
import SearchFaculty from './SearchFaculty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Cbody />}></Route>
          <Route path='/student' element={<StuCard />}></Route>
          <Route path='/search' element={<SearchFaculty />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </>
);
