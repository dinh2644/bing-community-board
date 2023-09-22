import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title'
import Card from './components/Card'
import "./App.css"



const App = () => {
  return (
    <>
    <Title title="Binghamton University STEM Clubs"/>
    <div className='container'>
    <Card/>
    </div>
    </>
  )
}

export default App