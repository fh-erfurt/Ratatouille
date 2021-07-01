import RecipeCard from './recipeCard';
import { Card } from 'primereact/card';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const MyRecipesMenu = () => {
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
                        <div className = 'allRecipes'>
                        <Card className="p-mb-2" title={product.name} subTitle={product.categories} style={{ width: '25em', height:'30em' }} footer={product.averagetimeinminutes + " Minuten"} header={<div><img alt="pictureRecipe" src={product.imageurl}></img></div>}>
                        
                        </Card>
                        <console className="log">1</console>
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
                "accountId": '1'
       
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

export default MyRecipesMenu;