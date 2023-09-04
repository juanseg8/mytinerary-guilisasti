import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='NavBar'>
            
            <h4 className=' w-screen text-3xl ml-40 flex sm:ml-20 sm:text-2xl'>
            <img className='h-14 w-auto pb-3 mr-2 sm:10 sm:pb-5' src="https://images.vexels.com/media/users/3/207228/isolated/preview/affec54749806d2752556ed7e77378c6-mapa-de-ubicacion-colorido-icono-trazo.png" alt="logo" />
                My Tinerary</h4>
            <div className=' w-screen flex gap-8 justify-end mr-40 sm:mr-10'>
                <Link to="/" className='Home mt-2 hover:font-semibold text-xl'>Home</Link>
                <Link to="/cities" className='Cities mt-2 hover:font-semibold text-xl'>Cities</Link>
                <button className=' h-8 text-sm mt-2  bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded-md flex'>
                    <span className="material-icons text-lg mr-1 pt-1">person</span>
                    <p className='mt-1.5'>Longin</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar