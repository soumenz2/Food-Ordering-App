
const Header=()=>{
    return(
        <div className="h-18 w-full bg-green-700  overflow-hidden flex justify-around p-1 ">
           <div className="font-semibold text-2xl ">
            <img className="w-16" src="https://previews.123rf.com/images/butenkov/butenkov2004/butenkov200400033/143760140-vector-logo-of-food-delivery.jpg" alt="logo" />
           </div>
            <div className="my-4">
            <ul className="flex  font-semibold">
                <li className="mx-4  text-black hover:text-white">Home</li>
                <li className="mx-4  text-black hover:text-white">Contact</li>
                <li className="mx-4  text-black hover:text-white">About Us</li>
            </ul>
    
            </div>
            <button className="bg-blue-800 px-4 rounded-md h-8 hover:bg-sky-600 text-white my-4">Login</button>
        </div>

    )
}
export default Header