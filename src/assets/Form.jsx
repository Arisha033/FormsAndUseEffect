// **********controlled component************
// in react it is convenient to have js function
// that handles the submission of form and has access
// to the data the user enters

// In HTML, form data is usually handled by the DOM.
// In React, form data is usually handled by the components.
// When the data is handled by the components, all the data is stored in the component state.
// You can control changes by adding event handlers in the onChange attribute.




import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const [username, setUsername] = useState("")

    const handleChange = (event) => {
        setUsername( event.target.value)
     }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert( `You typed: ${username}`)
        setUsername("")
    }

  return (
    <>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
    </form>
    </>
  )
}
