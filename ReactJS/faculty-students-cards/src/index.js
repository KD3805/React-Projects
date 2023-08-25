import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Cbody } from './Cards';
import { StuCard } from './StuCard';
import Layout from './Layout';
import SearchFaculty from './SearchFaculty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailFile from './DetailFile';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Cbody />} />
        <Route path="/detail/:id" element={<DetailFile />} />
        <Route path="/student" element={<StuCard />} />
        <Route path="/search" element={<SearchFaculty />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
