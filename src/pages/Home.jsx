import React from 'react'
import Gain from '../components/Gain'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Gain />
      <Row title='Up Coming' fetchUrl ={requests.requestUpcoming}/>
      <Row title='Popular' fetchUrl ={requests.requestPopular}/>
      <Row title='Trending' fetchUrl ={requests.requestTrending}/>
      <Row title='Top Rated' fetchUrl ={requests.requestTopRated}/>
      {/* <Row title='Horror' fetchUrl ={requests.requestHorror}/> */}
    </>
  )
}

export default Home