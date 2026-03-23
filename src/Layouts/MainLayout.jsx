import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min h-screen"><NavBar />
    
    <main className="max-w-6xl w-full mx-auto flex-1">
        {children}
        </main>
    <Footer />
    </div>
  )
}

export default MainLayout