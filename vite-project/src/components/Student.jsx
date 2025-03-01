// import React from 'react'
// import Proptypes from 'prop-types'

// export const Student = (props) => { 
//   return (
//     <div className='student'>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Student: {props.isStudent? "Yes" : "No"}</p>
//     </div>
//   )
// }

// Student.roptypes = {
//   name: Proptypes.string,
//   age: Proptypes.number,
//   isStudent: Proptypes.bool
// }


export const Student = (props) => {

  const isStudent = props.isStudent ? "Yes" : "No"

  return(

    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {isStudent}</p>
    </div>

  )
}


//sum of two numbers

export const sum = (props) => {
  return (
    <div>
      <p>Sum of {props.a} and {props.b} is {props.a+props.b}</p> 
      </div>
  );
}
