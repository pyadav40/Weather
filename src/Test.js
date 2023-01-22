import React, { useEffect, useState } from 'react'

const Test = () => {

let [name, updateName]=useState("XYZ")

useEffect(()=>{alert("use effect called")},[name])
 
  return (
    <div>
        <h1>{name}</h1>
        <input onChange={(e)=>{updateName(e.target.value)}}></input>
    </div>
  )
}

export default Test