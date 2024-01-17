import { useEffect, useState } from "react";
import { Link_URL } from "./utils/Constants";
import { Link } from "react-router-dom";
 


const Header = () => {

    return(
        <div className="bg-pink-200 px-4 shadow-lg border-2 border-solid border-blue-200">
            <div className="flex justify-between">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMP5PxaEd1XtMuydlVyMLqQjwRXi2iRi4f1A&usqp=CAU"
                 className="p-2 w-1/12 rounded-full text-center shadow-lg bg-green-200  border-2 border-solid border-blue-200"></img>
                <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <Link to={"/"}><li className="px-2 underline">Home</li></Link>
                    <li className="px-2 underline">About Us</li>
                    <li className="px-2 underline">Contact Us</li>
                </ul>
                </div>
            </div>
         </div> 

    );
}
export default Header;