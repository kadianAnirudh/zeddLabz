import { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const useEffectExample = () => {
  const [number, setNumber] = useState(0);
  const [increasingNumber, setIncreasingNumber] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIncreasingNumber(increasingNumber + 2);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [increasingNumber]);

  useEffect(() => {
    setNumber((prevNumber) => prevNumber + 2);
  }, [increasingNumber]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono">useEffect Hook</h1>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl">
          The number increments by 2, every 2 seconds
        </h2>
        <div className="flex mt-12 justify-center items-center px-4">
          <div className="flex mt-2 justify-center items-center">
            <h3 className="text-4xl font-semibold mx-4">{number}</h3>
          </div>
        </div>
            <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl">
         Increment is executed when another value increases, thus creating a [dependency]
        </h2>
        <div className="flex mt-12">
          <Link to="/task3">
            <Button className="mx-4" rounded>
              🡸 Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default useEffectExample;
