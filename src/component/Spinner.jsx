// import React, { Component } from 'react'
// import loading from './loading.gif';

// export default class spinner extends Component 
// {
//   render() 
//   {
//     return (
//       <div className="text-centre">
//       <img src={loading} alt="loading"/>
        
//       </div>
//     )
//   }
// }

//---------------------------------------------------------------------------------
//functional based component


import React, { Component } from 'react'
import loading from './loading.gif';

const Spinner=()=>{
  {
    return (
      <div className="text-centre">
      <img src={loading} alt="loading"/>
        
      </div>
    )
  }
}
 
export default Spinner;

