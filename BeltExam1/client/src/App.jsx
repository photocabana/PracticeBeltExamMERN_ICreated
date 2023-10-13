import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'
import Form from './components/Form'
import EditUser from './components/EditUser'
import Nav from './components/Nav'

function App() {

  const [userList, setUserList] = useState([])

  return (
    <>
    <div className='App'>
    <h1>Users</h1>
      <BrowserRouter>
      <Nav/>
      <br />
        <Routes>
          <Route index element={ <DisplayAll userList={userList} setUserList={setUserList}/> } />
          <Route path="/new" element={ <Form userList={userList} setUserList={setUserList} /> } />
          <Route path="/edit/:id" element={ <EditUser userList={userList} setUserList={setUserList} /> } />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
