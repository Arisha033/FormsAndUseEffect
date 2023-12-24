// **********controlled component************

/* In react it is convenient to have js function
 that handles the submission of form and has access
 to the data the user enters
 */

/* In HTML, form data is usually handled by the DOM.
 In React, form data is usually handled by the components.
 When the data is handled by the components, all the data is stored in the component state.
 You can control changes by adding event handlers in the onChange attribute.
*/

// useId is a ReactHook used for generating unique IDs that can be passed to accessibility attributes.

import React from 'react'
import { useState } from 'react'
import { useId } from 'react'

export const Form = () => {
    const [formData, setformData] = useState({
      userName: "",
      comments: "",
      isFriendly: true,
      employment: "",
      jobTitle: ""
    })

    const id = useId()

    const handleChange = (event) => {
      const {name, value, type, checked} = event.target     // destructuring the object

        setformData((prevData)=> {
          return {
            ...prevData,
            [name]: type === "checkbox" ? checked : value
          }
        })
        // console.log(formData)
     }
      
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`${formData.userName} commented : ${formData.comments}`)
        console.log(`The current employment status of ${formData.userName} is ${formData.employment}.`)
        setformData({userName: "",comments: ""})
    }

  return (
    <>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor={id + '-userName'}>UserName:</label>
      <br />
        <input type="text"
          value={formData.userName}
          name='userName'
          id={id + '-userName'}
          onChange={handleChange} 
        />
          <br />

      {/* In react textarea behaves same as that of input, it is self closing in react. */}
      <label htmlFor={id + '-comment'}>Comment:</label>
      <br />
      <textarea 
              type="text" 
              value={formData.comments}  
              name='comments'
              id={id + '-comment'} 
              onChange={handleChange}/>
              <br 
      />

        {/*In checkbox the 'value' property is replaced by 'checked' property bcz we are providing boolean to it. */}
        <label 
        htmlFor={id + '-isFriendly'}>
        Are you friendly?
        </label>

        <input 
        type="checkbox" 
        checked={formData.isFriendly} 
        name="isFriendly" 
        id={id + 'isFriendly'} 
        onChange={handleChange} 
        />

        {/*Radio buttons are similar to that of checkbox in some ways but it takes string value rather than boolean */}
      <fieldset>
        <legend>Current employment status</legend>

       <input 
       type="radio" 
       name="employment"     // same name to every input to ensure only one is clickable at a time.
       id={id + '-unemployed'} 
       value="unemployed"
       checked={formData.employment === "unemployed"}     // converted string value to a boolean n order to make 'checked' work.
       onChange={handleChange}
       />
        <label 
        htmlFor={id + 'unemployed'}>
          Unemployed
        </label>
        <br />

        <input 
        type="radio" 
        name="employment" 
        id={id + '-part-time'} 
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
        />
        <label 
        htmlFor={id + '-part-time'}>
          Part-time
        </label>
        <br />

        <input 
        type="radio" 
        name="employment" 
        id={id + '-full-time'} 
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
        />
        <label 
        htmlFor={id + '-full-time'}>
          full-time
        </label>
        <br />
      </fieldset>

      {/* Select and options */}
      <label 
      htmlFor={id + '-jobTitle'}
      onChange={handleChange}
      value={formData.jobTitle}
      name="jobTitle"
      >
        Job Title:
      </label>
      <br/>

      <select id={id + '-jobTitle'}>
        <option value="">--Choose--</option>
        <option value="web developer">Web Developer</option>
        <option value="data analyst">Data Analyst</option>
        <option value="software engineer">Software Engineer</option>
        <option value="junior manager">Junior Manager</option>
      </select>
      <br />
      <br />

  <button>Submit</button>
    </form>
    </>
  )
}
