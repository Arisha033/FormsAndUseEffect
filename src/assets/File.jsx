import React from 'react'
import { useEffect, useState } from 'react'

/* useEffect allows you to perform side effects in your component.
  ex: fetching data, directly updating the DOM,and timers.
  useEffect hook takes two values: a function and a dependency array. */

  // *******************updating DOM example*******************

export const File1 = () => {
  const [value, setValue] = useState(0)

  /* when the component renders first time it will executes all the code inside useEffect.
  when dependency array is passed then the code inside useEffect renders only once. */

  useEffect(()=> {
    console.log("hello")
    // we are doing some side effect by changing the dom
    document.title = `value changed to ${value}`
  }, [value])    // if we pass empty array inside dependency means it will only render once & if we pass the value inside dependency then it will rerenders everytime the value changes.

  return (
    <>
    <h1>{value}</h1>
    <button onClick={() => setValue((prevalue) => prevalue + 1)}>Click me</button>
    </>
  )
}

// *******************fetch data example*******************

export const File2 = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setData(data))
    
  }, [])

  return (
    <>
    <h4>Data from fetch api:</h4>
    <p>{data.map(item => (
      <li key = {Math.random()}>{item.title}</li>))}</p>
    </>
  )
}

// *******************updating timers example*******************

export const File3 = () => {
 const [time,setTime] = useState(0)

  useEffect(()=>{
     setTime((time) => new Date().getSeconds())
    
  }, [])
  return (
    <>
    <h4>Current time: {time}</h4>
    </>
  )
}

