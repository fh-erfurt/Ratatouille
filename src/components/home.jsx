import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';
import LetsGet from '../images/Lets_get_.png';
import Cooking from '../images/Cooking.png';
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
                        <Card className="Card" title={product.name} footer={product.averagetimeinminutes + " Minuten"} header={<img alt="Product" src={product.imageurl}></img>} style={{border:'1px solid var(--surface-d)'}}/>
                    </React.Fragment>
                );
                setRecipeCards(allRecipes);
            })
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const responsiveOptions = [
        {
            breakpoint: '1200px',
            numVisible: 3,
            numScroll: 2
        },
        {
            breakpoint: '1020px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '550px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className="home p-mt-6">
            <div className="row p-grid p-m-3">
                <div className="p-col">
                    <img className="Images p-mr-5" alt="Let's" src={LetsGet} width="450px"></img> 
                    <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://i.ibb.co/d6P2dT2/rataicon.png'}
                    className="logo p-mr-2" width="180px">
                    </img>
                    <img className="Images p-ml-5" alt="Cooking" src={Cooking} width="450px"></img>
                </div>
            </div>
            <div className="card p-mt-6">
                <Carousel className="carousel " value={recipecards} itemTemplate={itemTemplate} numVisible={4} numScroll={2} responsiveOptions={responsiveOptions}circular
                            autoplayInterval={5000}
                />
            </div>
         </div>
    );
}
export default Home;
