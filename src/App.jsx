import React from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Content4 from './components/Content4'
import Accordion from './components/Accordion'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Header />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Accordion />
      <Footer />
    </div>
  )
}

export default App
