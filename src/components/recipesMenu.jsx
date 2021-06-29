import RecipeCard from './recipeCard';
import { Card } from 'primereact/card';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const RecipesMenu = () => {
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
                        <Card className="p-mb-2" title={product.name} subTitle={product.categories} style={{ width: '25em' }} footer={product.averagetimeinminutes + " Minuten"} header={product.imageurl}/>
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
