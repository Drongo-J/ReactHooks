import { useState } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Form from './Form';
import Gallery from './Gallery';
import Person from './Person';


// function App() {
//   const [score, setScore] = useState(0);

//   function increment(val){
//     setScore(score + val);
//   }

//   return (
//     <div>
//       {/* <Toolbar onPlayMovie={() => alert("Playing")}
//                onUploadImage={() => alert("Uploading successfully")}>
//       </Toolbar> */}


//       <button onClick={() => increment(1)}>+1</button>
//       <button onClick={() => {
//         increment(3);
//       }}>+3</button>

//       <h1>Score: {score}</h1>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       {/* <Form></Form> */}
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <Gallery></Gallery>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <Person></Person>
    </div>
  );
}

export default App;
