import RecipeCard from './recipeCard';
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const MyRecipes = () => {
    const [products, setProducts] = useState(null);
    const [status, setStatus] = useState(404);
    const [recipecards, setRecipeCards] = useState([]);

    useLayoutEffect(() => {
        fetchProducts();
     }, []);

     useLayoutEffect(() => {
        if (products) {
            let tempcardarray = [];
            products.forEach(product => {
                const catarray = product.categories.match(/[A-Za-z0-9_äÄöÖüÜß]+/g);

                tempcardarray.push(genRecipeCard(product, catarray));
            })
            setRecipeCards(tempcardarray);
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const genRecipeCard = (recipe, catarray) => {
        const card = (
            <React.Fragment key={recipe.id}>
                <RecipeCard liked="editable" className="p-mb-2 p-shadow-2" id={recipe.id} key={recipe.id} editable={true} img={recipe.imageurl} categories={catarray} style={{ width: '25em' }} name={recipe.name} time={recipe.averagetimeinminutes + " Minuten"} />
            </React.Fragment>
        );

        return card; 
    }

    //Conditional Rendering
    if (status === 200) {
        return (
            <React.Fragment>
                <div className="">
                    {recipecards}
                </div>
                
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <p>Rezepte werden geladen.</p>
            </React.Fragment>
        );
    }
}

export default MyRecipes;
