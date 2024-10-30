// Passing Events as Props in React | Control Parent Function Using Child Component
export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert("Thanks for hovering me");
    };

    return(
    <>
        <WelcomeUser onButtonClick={() => handleWelcomeUser("Rana")}
            onMouseEnter={handleHover}/>
    </>)
}

const WelcomeUser = (props) => {

    const {onButtonClick, onMouseEnter} = props;

    const handleGreetings = () => {
        alert("Hey User Welcome");
    };

    return(
        <>
            <button className="bg-orange-500 text-white font-medium text-3xl px-[4rem] py-[2rem] mt-8" onClick={onButtonClick}>Click me</button>
            <button className="bg-yellow-500 text-white font-medium text-3xl px-[4rem] py-[2rem] mt-8" onMouseEnter={onMouseEnter}>Hover me</button>
            <button className="bg-blue-500 text-white font-medium text-3xl px-[4rem] py-[2rem] mt-8" onClick={handleGreetings}>Click me</button>
        </>
    )
}