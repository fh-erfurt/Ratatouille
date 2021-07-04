import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';
import imageHome from '../images/imageHome.PNG'
import axios from "axios";
import { Card } from 'primereact/card';


const Home = () => {
    const [products, setProducts] = useState(null);
    const [status, setStatus] = useState(404);
    const [recipecards, setRecipeCards] = useState([]);

    useLayoutEffect(() => {
        fetchProducts();
     }, []);

    useEffect(() => {
        if (products) {
            products.forEach(product => {
                let allRecipes = recipecards;
                allRecipes.push (
                    <React.Fragment key={product.id}>
                        <Card title={product.name} header={<img src={product.imageurl}></img>} style={{ width: '33em'}}/>
                    </React.Fragment>
                );
                setRecipeCards(allRecipes);
            })
        }
     }, [products]);

     const fetchProducts = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
        }).catch(error => {
            return { error: error };
        });
        setProducts(res.data);
        if (res.status === 200) {
            setStatus(200);
        }
    };
  
    const itemTemplate = (recipes) => {
      return recipes;
    }
  

    return (
        <div className="home">
            <div className="row">
            <img alt="Let's get Cooking" src={imageHome} ></img>
            <img alt="Bild" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="500" ></img>
            </div>
         <div className="card">
         <Carousel value={recipecards} itemTemplate={itemTemplate} numVisible={3} numScroll={1} circular
                    autoplayInterval={4000}  />
         </div>
         </div>
    );
}
export default Home;
