import { useEffect, useState } from "react"
import { Link_URL } from "./utils/Constants";
import { Link } from "react-router-dom";

const ViewAll = () => {
    const[allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(Link_URL);
        const json = await data.json();
        setAllProduct(json?.products);

    };
    return(
        <div>
            <span  className="m-4 text-2xl font-bold flex flex-wrap justify-center">🔥Trending Products 🔥</span>
            <div className = "flex flex-wrap justify-center">
                {
                allProduct.map((item) => (
                    <div className="m-4 p-4 w-{350px} h-{200px} flex flex-wrap rounded-lg bg-gray-400" key={item.id}>
                        <Link to={`/products/${item.id}`}>
                        <img className="rounded-lg cursor-pointer object-cover h-40 w-80 border border-solid border-black" src={item.thumbnail} alt = {item.title}></img>
                        <h3 className="mt-2 text-center font-bold">{item.title}: ${item.price}</h3>
                        <h3 className="mt-2 text-center font-bold">{item.rating}</h3>
                       
                        </Link>
                        
                    </div>
                    


                ))}
            </div>
            <div className="flex flex-wrap justify-center">
            <button className="p-2 bg-gray-300 shadow-lg m-4 rounded-lg border border-solid border-black "
                    onClick={() => { 
                        const filteredProduct = allProduct.filter(
                        (product) => product.rating>=4.5

                        );
                        setAllProduct(filteredProduct);
        
                    }}>Top rated Product</button>
            </div>
        </div>
    )
}

export default ViewAll;