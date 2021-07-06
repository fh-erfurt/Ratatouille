import RecipeCard from './recipeCard';
import { Card } from 'primereact/card';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const MyRecipes = () => {
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
                        <RecipeCard cardProduct = {product}></RecipeCard>
                        </div>
                    </React.Fragment>
                );
                setRecipeCards(allRecipes);
            })
        }
     }, [products]);

    const fetchProducts = async () => {
        const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/mycreated",
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
                <p>Keine vorhandene eigenen Rezepte.</p>
            </React.Fragment>
        );
    }
}

export default MyRecipes;