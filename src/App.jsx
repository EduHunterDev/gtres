import { Header } from './components/Header'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Contact from './Contact';

function App() {
  return (
  <BrowserRouter>
      <Header
        brand="Geração Tech" 
        description="Sede Bezerra"
      >
        <a href="/#equipe">Equipe</a>
        <NavLink to= "/Contato">Contato</NavLink>
      </Header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element= {<Home/>}/>
          <Route path='/Contato' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  
  )
}

export default App;
