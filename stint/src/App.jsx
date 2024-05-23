import React from 'react'
// import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Status from './components/Status'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import AssignedTask from './components/AssignedTask'
import TaskCompleted from './components/TaskCompleted';
import TaskPending from './components/TaskPending';
import YetToStart from './components/YetToStart';
import ViewUsers from './components/ViewUsers';

export default function App() {
  return (
    <div className='container'>
    <Sidebar/>
    <Navbar/>
    <div className='sub-container'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/assigned' element={<AssignedTask/>}/>
    <Route path='/completed' element={<TaskCompleted/>}/>
    <Route path='/pending' element={<TaskPending/>}/>
    <Route path='/yet' element={<YetToStart/>}/>
    <Route path='/users' element={<ViewUsers/>}/>
    <Route path='/status' element={<Status/>}/>

    </Routes>
    </div>
    </div>
  )
}
