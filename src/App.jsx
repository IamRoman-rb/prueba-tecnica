import React from 'react';
import Release from './components/Release'
import { ReleaseNotes } from "./components/ReleaseNotes"
import { Header } from "./components/layouts/Header"
import './styles/main.css'
function App() {

  return (
    <>

      <Header></Header>
      <main className="main">
        <header className="header-release">
          <h1>Release 6.5</h1>
          <form>
            <p>Sort by:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">Feat</option>
              <option value="">Fix</option>
            </select>
          </form>
        </header>
        <Release></Release>
        <ReleaseNotes></ReleaseNotes>
      </main>
    </>
  )
}

export default App
