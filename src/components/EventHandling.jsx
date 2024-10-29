export const EventHandling = () => {

    const handleButtonClick = (event) => {
        alert("Someone clicked me...")
    }

    const handleClick = (name) => {
        alert(`${name} Clicked me...`)
    }

    return(
    <>
        <div className="w-full flex items-center justify-center">
            <button className="bg-orange-800 text-white font-medium text-3xl px-[4rem] py-[2rem] mt-8" onClick={handleButtonClick}>Click me</button>
            <button className="bg-orange-800 text-white font-medium text-3xl px-[4rem] py-[2rem] mt-8" onClick={() => handleClick("Rana")}>Click me</button>
        </div>
        
    </>)
}