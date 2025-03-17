import React from 'react'

function StudentForm() {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <h1>Add Student</h1>
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input type="text" id='name' placeholder='please enter your name' />
            </label>
            <br />
            <label htmlFor="registerNumber">Register Number
                <input type="text" name="registerNumber" id="registerNumber" placeholder='please enter your register number' />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default StudentForm