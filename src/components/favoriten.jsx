import RecipeCard from './recipeCard';
import { Card } from 'primereact/card';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const Favoriten = () => {
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
                        <div class="oneRecipe p-m-1 p-p-1 p-m-lg-3 p-b-lg-3"> 
                        <Card className="p-mb-2" title={product.name} subTitle={product.categories} style={{ width: '25em', height:'30em' }} footer={product.averagetimeinminutes + " Minuten"} header={<div><img alt="pictureRecipe" src={product.imageurl}></img></div>}></Card>
                        </div>
                    </React.Fragment>
                );
                setRecipeCards(allRecipes);
            })
        }
     }, [products]);

    const fetchProducts = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites/",
            data: {
                "accountId": window.$id,
            }
        }).catch(error => {
            return { error: error };
        });

        setProducts(res.data);
        if (res.status === 200) {
            setStatus(200);
        }
    };

    //Conditional Rendering
    if (status === 200) {
        return (
            <React.Fragment>
                {recipecards}
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <p>Keine vorhandene Favoriten.</p>
            </React.Fragment>
        );
    }
}

export default Favoriten;