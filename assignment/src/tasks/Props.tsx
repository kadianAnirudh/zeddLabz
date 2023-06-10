interface PropType{
    age: number
}

const Props = ({age}:PropType) => {
return (
<>
<h2 className="mx-8 font-semibold font-mono text-xl lg:text-3xl "> You are {age} years old </h2>
</>
  );
};

export default Props;