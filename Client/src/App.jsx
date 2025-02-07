import React from 'react'
import Header from './Components/Header'

const App = () => {
  return (
    <div className='font-primary'>
      <section id="home" className="border border-red-500 w-full h-screen">
        <div className='w-full py-10 fixed top-0 right-0'>
          <Header />
        </div>
      </section>
      <section id="about" className="border border-blue-500 w-full h-screen">

      </section>
      <section id="projects" className="border border-green-500 w-full h-screen">

      </section>
      <section id="members" className="border border-stone-500 w-full h-screen">

      </section>
      <section id="contact" className="border border-red-500 w-full h-screen">

      </section>
    </div>
  )
}

export default App