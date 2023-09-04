import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCitie } from '../../services/citiesQueries';
import { Link } from 'react-router-dom';
import Itinerary from '../Itinerary';
import { useDispatch, useSelector } from 'react-redux';
import { chargeCitieDetail, chargeItinerary } from '../../store/actions/citiesActions';


function DetailCard() {

  const dispatch = useDispatch()

  const citie = useSelector(store => store.detail)

  const citieDetail = citie.citieDeatil


  const { _id } = useParams()

  useEffect(() => {
    getCitie(_id)
      .then((citie) => dispatch(chargeCitieDetail(citie)))
      .catch((err) => console.log(err))
  }, [])

  const it = useSelector(store => store.itinerary)

  const itineraries = it.itinerary
  
console.log(itineraries);

  const guide = itineraries.guide

  console.log(guide);

  useEffect(() => {
    getCitie(_id)
      .then((it) => dispatch(chargeItinerary(it.itinerary)))
      .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <div className='grid grid-cols-1'>
        <div className="h-screen w-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${citieDetail.image}")` }} >

          <div className='NavBar'>
            <h4 className=' w-screen text-3xl ml-40 flex text-white sm:ml-20 sm:text-2xl '>
              <img className='h-14 w-auto pb-3 mr-2 sm:10 sm:pb-5 ' src="https://images.vexels.com/media/users/3/207228/isolated/preview/affec54749806d2752556ed7e77378c6-mapa-de-ubicacion-colorido-icono-trazo.png" alt="logo" />
              My Tinerary</h4>
            <div className=' w-screen flex gap-8 justify-end mr-40 sm:mr-10'>
              <Link to="/" className='Home mt-2 hover:font-semibold text-xl text-white'>Home</Link>
              <Link to="/cities" className='Cities mt-2 hover:font-semibold text-xl text-white'>Cities</Link>
              <button className=' h-8 text-sm mt-2  bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded-md flex'>
                <span className="material-icons text-lg mr-1 pt-1">person</span>
                <p className='mt-1.5'>Longin</p>
              </button>
            </div>
          </div>
          <div className='mt-24'>
            <p className='text-white text-center text-8xl font-extralight'>{citieDetail.name}</p>
            <p className='text-white text-center text-lg font-blod mr-28 ml-28 mt-4'>{citieDetail.description}</p>

          </div>
        </div>

        <div className='h-auto w-screen flex flex-col items-center mb-28'>
          <p className='text-4xl font-bold text-center mt-20'>Itinerary</p>
          {itineraries.map(itinerary => <Itinerary guide={guide} data={itinerary}></Itinerary>)}
        </div>




      </div>


    </>


  )
}

export default DetailCard