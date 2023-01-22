
import './Style.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Weather = () => {
    let [city,updateCity]=useState(null)
    let [search,setSearch]=useState("indore")
    useEffect(()=>
    {
        fetchApi()
        return ()=>{alert("are you sure")}
            
        
    },[search])

    const fetchApi= async ()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=2757e7303d1d10327820df42057c4612`
            // const res= await fetch(url)
            const res= await axios.get(url)
            // const resJson=await res.json()
            // console.log(resJson.main)
            console.log(res.data.main)
            updateCity(res.data.main)
                    }
    let dt=new Date() //By empty Arguments
    let MM=dt.getMonth()
    let DD=dt.getDate()
    let YY=dt.getFullYear()
 
  return (
    <div className='box'>
        <input placeholder={'Type City'} type="search" onChange={(e)=>{setSearch(e.target.value)}}></input>
        {!city?(<p>No Data</p>):( 
        <>
        <div className='row1'>  
            <div className='box1'><h1><i class="fa-solid fa-street-view"></i>{search}</h1></div>
            {/* <div className='box2'><h5>{city[0].id}</h5></div> */}
        </div>
            <div className='Time'>
            <div className='box1'><h1>{DD+"/"+(MM+1)+"/"+YY}</h1></div>
            <div className='box2'><h3><i class="fa-solid fa-temperature-three-quarters"></i>Temperature</h3><h4>{city.temp}</h4></div>  
            </div>
        
        <div className='footer'>
            <div className='fbox1'><i class="fa-thin fa-droplet-percent"></i><h5>Humidity</h5><h4>{city.humidity}</h4></div>
            <div className='fbox1'><h5>Pressure</h5><h4>{city.pressure}</h4></div>
            <div className='fbox1'><h5>Sea Level</h5><h4>{city.sea_level}</h4></div>
        </div>
        </>)}
       
    </div>
  )
}

export default Weather