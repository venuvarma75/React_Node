import React,{useState,useCallback} from "react";
import Parent from "./Usecallback/Parent";
import Child from "./Usecallback/Child";
import Parent1 from "./Usecallback/Parent1"
import Child1 from "./Usecallback/Child1"
const App = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0); 
  const NameChange =useCallback(()=>{
    const name="varma"
    return show===true  ? name.toUpperCase(): name.toLowerCase();

  },[show]);
  return (
    <div>  
      <h1>Parent</h1>
      <p>{count}</p>
      <Child  name={NameChange}/>
      <Parent />
      <Child1/> 
      <Parent1/>

      <button
        onClick={()=>{
          setCount(count + 1);
           console.log(count)
        }}
       
      >
        Increment
      </button>
      <button onClick={()=>setShow(!show)}>name change</button>
    </div>
  );
};

export default App;


// import React, { useState, useCallback } from "react";
// import Lazyloading from "./Lazyloading/Lazyloading"
// import Home from "./Lazyloading/Home"
// import Profile from "./Lazyloading/profile";
// import Child from "./Usecallback/Child";
// import Parent from "./Usecallback/Parent"; // Assuming this is another component you want to include

// const App = () => {
//   const [show, setShow] = useState(false);
//   const [count, setCount] = useState(0);

//   const NameChange = useCallback(() => {
//     const name = "varma";
//     return show ? name.toUpperCase() : name.toLowerCase();
//   }, [show]);

//   return (
//     <div>
//       <h1>Parent</h1>
//       <p>Counter: {count}</p>
      
//       <Child name={NameChange} />
//       <Parent />

//       <button
//         onClick={() => {
//           setCount((prev) => prev + 1);
//         }}
//       >
//         Increment
//       </button>

//       <button onClick={() => setShow((prev) => !prev)}>
//         Toggle Name Case
//       </button>

//       <Lazyloading/>
//       <Home/>
//       <Profile/>
//     </div>
//   );
// };

// export default App;


// import React, { useState, lazy, Suspense } from "react";
// import Home from "./Home"
// import Profil from "./Profil"

// // Lazy load the Profile component
// const Profile = lazy(() => import("./Profil"));

// const App = () => {
//   const [showProfile, setShowProfile] = useState(false);

//   return (
//     <div className="p-6">
//       <h1>Welcome to the Basic React App</h1>
//       <Home />

//       <button
//         onClick={() => setShowProfile(true)}
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Show Profile
//       </button>

//       {/* Load Profile only when button is clicked */}
//       {showProfile && (
//         <Suspense fallback={<p>Loading Profile...</p>}>
//           <Profile />
//         </Suspense>
//       )}
//     </div>
//   );
// };

// export default App;
