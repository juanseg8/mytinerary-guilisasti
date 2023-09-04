import React from 'react'
import Cities from "../../components/Cities"
import { Provider } from 'react-redux'
import { store } from '../../store/store'


function index() {

  return (
    <Provider store={store}>
      <div className='w-screen flex flex-col justify-center items-center '>
        <h1 className='text-6xl'>Cities</h1>
        <Cities></Cities>
      </div>
    </Provider>



  )
}

export default index