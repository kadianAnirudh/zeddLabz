import { Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Task3 = () => {
  return (
        <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center font-semibold font-mono"> Task 3 </h1>
          <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:my-24">
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl">
          I had to create examples for these react hooks ( click to view )
        </h2>
        <div className="flex flex-col px-4 py-8 mt-4 justify-center items-center lg:flex lg:flex-row">
        <Link to="/usestate">
        <Button className="mx-4 my-4">useState</Button>
        </Link>
        <Link to="/usecallback">
        <Button className="mx-4 my-4">useCallback</Button>
        </Link>
        <Link to="/useeffect">
        <Button className="mx-4 my-4">useEffect</Button>
        </Link>
        <Link to="/usecontext">
        <Button className="mx-4 my-4">useContext</Button>
        </Link>        
        </div>
      </div>
    </div>
        <div className="flex mt-8 lg:mt-2">
          <Link to="/task2">
            <Button className='mx-4' rounded> 🡸 Back </Button>
          </Link>
          <Link to="/task4">
            <Button className='mx-4' rounded> Proceed 🡺 </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Task3