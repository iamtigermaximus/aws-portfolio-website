import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProject from './pages/CreateProjects'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/create-projects' element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
