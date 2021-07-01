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
    const [recipID, setRecipID] = useState([]);

    useLayoutEffect(() => {
        fetchProducts();
     }, []);

    const   setfavorite = async () => {
           console.log(recipID)
            const res = await axios({
                method: "post",
                url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/like",
                data: {
                    "accountId": window.$id,
                    "recipeId": recipID 
                    
                }
              }).catch(error => {
                return { error: error };
              });
        }
     useEffect(() => {
        if (products) {
            products.forEach(product => {
                console.log(product.id)

                setRecipID(product.id)
                let allRecipes = recipecards;

             
                allRecipes.push (
                   
                    <React.Fragment key={product.id}> 
                        <div class="oneRecipe p-p-1 p-m-lg-3 p-b-lg-3"> 
                        <Card className="p-mb-2" title={product.name} subTitle={<Chip label={product.categories} className="p-mr-2 p-mb-2 custom-chip" />} style={{ width: '25em', height:'30em'}} footer={product.averagetimeinminutes + " Minuten"} header={<div><img alt="pictureRecipe" src={product.imageurl}></img></div>}>
                        <div onClick={setfavorite} className = "likeButton"><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text"/></div>
                        </Card>
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
