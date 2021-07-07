import RecipeCard from './recipeCard';
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const RecipesMenu = () => {
    const [products, setProducts] = useState(null);
    const [favorites, setFavorites] = useState(null);
    const [status, setStatus] = useState(404);
    const [recipecards, setRecipeCards] = useState([]);

    useLayoutEffect(() => {
        fetchProducts();
        fetchFavorites();
        console.clear();
     }, []);

     useLayoutEffect(() => {
        if (products) {
            let tempcardarray = [];
            products.forEach(product => {
                const catarray = product.categories.match(/[A-Za-z0-9_äÄöÖüÜß]+/g);
                let alreadyliked = false;

                if (favorites != null && favorites.length > 0) {
                    favorites.forEach(favorite => {
                        if (product.id === favorite.id) {
                            alreadyliked = true;
                        }
                    })
                }

                /*if (alreadyliked != null) {
                allRecipes.push (
                    <React.Fragment key={product.id}>
                        <RecipeCard className="p-mb-2 p-shadow-2" key={product.id} liked={alreadyliked} categories={catarray} style={{ width: '25em' }} name={product.name} time={product.averagetimeinminutes + " Minuten"} />
                    </React.Fragment>
                );
                }
                setRecipeCards(allRecipes);*/
                console.log(alreadyliked);
                tempcardarray.push(genRecipeCard(product, alreadyliked, catarray));
            })
            setRecipeCards(tempcardarray);
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [products, favorites]);

    const fetchProducts = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
            data: {
                "accountId": window.$id
            }
        }).catch(error => {
            return { error: error };
        });

        setProducts(res.data);
        if (res.status === 200) {
            setStatus(200);
        }
    };

    const fetchFavorites = async () => {
        if (window.$id) {
            console.log("Fetching favorite recipes with accountId: " + window.$id);
            const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites",
            data: {
                "accountId": window.$id
            }
            }).catch(error => {
                return { error: error };
            });

            
            if (res.status === 200) {
                setFavorites(res.data);
            }
            else {
                setFavorites([]);
            }
        }
    };

    const genRecipeCard = (recipe, alreadyliked, catarray) => {
        /*let allRecipes = recipecards;
        //console.log(alreadyliked);
        allRecipes.push (
            <React.Fragment key={recipe.id}>
                <RecipeCard className="p-mb-2 p-shadow-2" id={recipe.id} key={recipe.id} liked={alreadyliked} img={recipe.imageurl} categories={catarray} style={{ width: '25em' }} name={recipe.name} time={recipe.averagetimeinminutes + " Minuten"} />
            </React.Fragment>
        );

        setRecipeCards(allRecipes);*/
        const card = (
            <React.Fragment key={recipe.id}>
                <RecipeCard className="p-mb-2 p-shadow-2" id={recipe.id} key={recipe.id} liked={alreadyliked} img={recipe.imageurl} categories={catarray} style={{ width: '25em' }} name={recipe.name} time={recipe.averagetimeinminutes + " Minuten"} />
            </React.Fragment>
        );

        return card; 
    }

    //Conditional Rendering
    if (status === 200) {
        return (
            <React.Fragment>
                <div className="cards p-mt-4">
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
//{recipecards}
export default RecipesMenu;
