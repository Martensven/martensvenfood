import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HeadNav } from './features/headNav'
import { Recipes } from './features/recipes/recipes'
import { Ingredients } from './features/ingredients/ingredients'
import { Menu } from './features/menu/menu'

function App() {

  return (
    <>
      <HeadNav />
      <Routes>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/ingredients' element={<Ingredients />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
    </>
  )
}

export default App
