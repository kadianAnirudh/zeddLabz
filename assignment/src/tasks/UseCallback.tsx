import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

const Usecallback = () => {
const [count, setCount] = useState(0);

const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 5);
  }, []);

  return (
        <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> useCallback Hook </h1>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> UseCallback allows functions to reference values based on dependencies  </h2>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> The current Count is {count} </h2>
        <div className="flex mt-12 justify-center items-center px-4">
        <Button onClick={incrementCount}>Increment by 5</Button>
        </div>
        <div className="flex mt-12">
          <Link to="/task3">
            <Button className='mx-4' rounded> 🡸 Back </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Usecallback