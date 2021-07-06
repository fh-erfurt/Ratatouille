import RecipeCard from './recipeCard';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";



const RecipesMenu = () => {
    const [products, setProducts] = useState(null);
    const [status, setStatus] = useState(404);
    const [recipecards, setRecipeCards] = useState([]);
    const [favourites, setFavourites] = useState(null);

    useLayoutEffect(() => {
        fetchProducts();
        fetchFavourites();
     }, []);

     useEffect(() => {
        if (products) {
            console.log(products)

            products.forEach(product => {
                let allRecipes = recipecards;
             
                allRecipes.push (
                   
                    <React.Fragment key={product.id}> 
                        <div class="oneRecipe p-p-1 p-m-lg-3 p-b-lg-3"> 
                        <RecipeCard cardProduct = {product}></RecipeCard>
                        </div>
                    </React.Fragment>
                );
                setRecipeCards(allRecipes);
            })
        }
     }, [products]);

    const fetchProducts = async () => {
        const fav = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
        }).catch(error => {
            return { error: error };
        });

        setProducts(fav.data);
        if (fav.status === 200) {
            setStatus(200);
        }
    };

    const fetchFavourites = async () => {
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
                <p>Rezepte konnten nicht geladen werden. Bitte später erneut versuchen.</p>
            </React.Fragment>
        );
    }
}

export default RecipesMenu;
