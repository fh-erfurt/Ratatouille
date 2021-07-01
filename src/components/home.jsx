import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Carousel } from 'primereact/carousel';
import imageHome from '../images/imageHome.PNG';
import homepage from '../images/homepage.jpg';
import { Button } from 'primereact/button';
import axios from "axios";


const Home = () => {
    const [products, setProducts] = useState('');
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
       fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
          })
        setProducts(res.data);
    };
    
    const productTemplate = () => {
        return (
            <div className="product-item">
                <img src={products[currentPosition].imageurl} width="500"/>   
            </div>
        );
    }

    return (
        <div className="home">
            <div className="row">
            <img alt="Let's get Cooking" src={imageHome} ></img>
            <img alt="homepage" src={homepage}  height="500" ></img>
            </div>
         <div className="card">
           <Carousel value={products} itemTemplate={productTemplate} />
         </div>
         </div>
    );
}
export default Home;
