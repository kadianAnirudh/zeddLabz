import { useRef } from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Task4 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="overflow-y-auto scrollbar-none">
      <div className="px-8 py-8 flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> Task 4 </h1>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl">
          Click the button below to scroll for the Back / Proceed buttons 
        </h2>
        <Button className='mt-12' rounded onClick={scrollToDiv}> Scroll 🡻 </Button>
      </div>
      <hr/>
      <div ref={scrollRef} className="flex mt-16 h-screen justify-center items-center">
        <Link to="/task3">
          <Button className='mx-4' rounded> 🡸 Back </Button>
        </Link>
        <Link to="/task5">
          <Button className='mx-4' rounded> Proceed 🡺 </Button>
        </Link>
      </div>
    </div>
  );
};

export default Task4;
