import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Carousel } from 'primereact/carousel';
import imageHome from '../images/imageHome.PNG'
import { Button } from 'primereact/button';
import axios from "axios";



const Home = () => {
    const [products, setProducts] = useState('');
    const [currentPosition, setCurrentPosition] = useState(0);

    const getProducts = async () => {
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/recipes",
          })
          setProducts(res.data);
          console.log(res);
        };
    
        const productTemplate = () => {
            return (
                <div className="product-item">
                    <img src={products[currentPosition].imageurl} width="500"/>   
                </div>
            );
        }

    return (
        <div class="home">
            <div class="row">
            <img alt="Let's get Cooking" src={imageHome} onClick={getProducts} ></img>
            <img alt="Bild" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="500" ></img>
            </div>
         <div className="card">
           <Carousel value={products} itemTemplate={productTemplate} />
         </div>
         </div>
    );
}
export default Home;