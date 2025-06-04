



//---------------------------------------------------------------------------------------------------------------
//using class based component




// import React, { Component } from 'react'
// import Navbar from './component/Navbar';
// import News from './component/News';
// import {BrowserRouter,Routes,Route} from  'react-router-dom';
// import LoadingBar from "react-top-loading-bar";





// export default class App extends Component {
//   name="sameer";                         //class field or more specifically a property or better way of calling a class property available to all, understand in class or functional base component we cant use let,const..etc these names inside class we can write either inside methods or as a class fiels
//   person = { name: 'Alice', age: 30 };    // class field or more specifically a object


//   state={
//     progress:0

//   };

//     setProgress = (progress) => {             //a function which changes progress when called and with the passed value in it,  we will call it for every tiem we click any link in the navbar and also whenever the page relods 
//       setState({progress:progress}); 
//      };


//   render() {
//     return (
//     <div>
//       <BrowserRouter>
//         <Navbar />                   

//         <LoadingBar                  //whenever the page reloads it will run   and here understand loading bar and navbar will always be rendered as they are written outside routes and inside browser stack
//           color="#ff5733"
//           height={16}
//           progress={state.progress}
//           onLoaderFinished={() => setProgress(state.progress)}
//         />

//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="general"
//                 pageSize={6}
//                 country="us"
//                 category="general"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/business"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="business"
//                 exact
//                 pageSize={6}
//                 country="us"
//                 category="business"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/entertainment"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="entertainment"
//                 pageSize={6}
//                 country="us"
//                 category="entertainment"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/health"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="health"
//                 pageSize={6}
//                 country="us"
//                 category="health"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/science"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="science"
//                 pageSize={6}
//                 country="us"
//                 category="science"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/sports"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="sports"
//                 pageSize={6}
//                 country="us"
//                 category="sports"
//               />
//             }
//           ></Route>
//           <Route
//             exact
//             path="/technology"
//             element={
//               <News
//                 setProgress={setProgress}
//                 key="technology"
//                 pageSize={6}
//                 country="us"
//                 category="technology"
//               />
//             }
//           ></Route>
//         </Routes>
//       </BrowserRouter>
    
// {/* <Navbar/>
//     <News pageSize={6} country="us"  category="general"/>  In JSX (JavaScript XML), which is what you're using here:   pageSize={5} passes the number 5 as a JavaScript expression.     If you write pageSize="5", you'd be passing a string, not a number */}

//     </div>
//     )
//   }
// }


//-----------------------------------------------------------------------------------------------
//using functional based componen


import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';

const App=()=>{

  const pageSize=5;
  const [progress,setProgress]=useState(0);
  /*
  Explanation:
    const [progress,setProgress]=useState(0);
    
    This creates a state variable progress with an initial value of 0.

    setProgress is the function to update the progress state later.

    React automatically provides this function when you use useState.

    The progress variable is a new state variable that you create using
    React's useState hook. It has nothing to do with the top loading bar initially.
  
  
  */


    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#ff5733"
            height={16}
            progress={progress}
            onLoaderFinished={() => setProgress(progress)}


            /*important:-              progress={progress}

            On the left side, progress is the property that 
            the React Top Loading Bar expects to control how much of the bar is filled.
            
            On the right side, progress is the state variable in your component that holds 
            the current progress value (from useState). 
            */
            
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={6}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={6}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={6}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={6}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={6}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={6}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App






















