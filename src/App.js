import React from 'react';
import BlogList from './Component/BlogList';
import Show from './Component/Show';
import { Route, Routes } from 'react-router-dom';
import New from './Component/New';
import NavBar from './Component/NavBar';
import Edit from './Component/Edit';

function App() {
  return (
    <div>

      <NavBar/>

      <Routes>
        <Route path='/blogs' element={<BlogList/>}></Route>
        <Route path='/blog/new' element={<New/>}></Route>
        <Route path='/blog/:id/edit' element={<Edit/>}></Route>
        <Route path='/blogs/:id' element={<Show/>}></Route>
      </Routes>

    </div>
  )
}
export default App;