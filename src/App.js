import { useState } from 'react';
import Array from './Components/Array';
import Sorts from './Components/Sorts';


function App() {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let shuffledArray = tmp.sort((a, b) => 0.5 - Math.random());
  const [array, setArray] = useState(shuffledArray);

  return (
    <div className="h-screen w-screen bg-[#222222] text-[#E2FCEF] flex flex-col items-center justify-evenly ">
      <h1 className='w-full text-center text-4xl'>Prumme Sorts</h1>

      <Array array={array} />

      <Sorts array={array} setArray={setArray} />

    </div>
  );
}

export default App;
