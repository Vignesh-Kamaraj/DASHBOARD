import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
function App() {

  return (
    <>
      <div className="container-fluid d-flex flex-row justify-content-between">
      <BrowserRouter>
      <Sidebar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='*' element={<Navigate to='/dashboard'/>}/>
    </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
