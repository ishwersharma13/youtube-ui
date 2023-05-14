import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Watch } from './pages/Watch'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/watch/:id' element={<Watch />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
