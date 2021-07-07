import RecipeCard from './recipeCard';
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const RecipesMenu = () => {
    const [products, setProducts] = useState(null);
    const [favorites, setFavorites] = useState(null);
    const [status, setStatus] = useState(404);
    const [recipecards, setRecipeCards] = useState([]);

    useLayoutEffect(() => {
        console.clear();
        fetchAllRecipes();
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
                console.log(alreadyliked);
                tempcardarray.push(genRecipeCard(product, alreadyliked, catarray));
            })
            setRecipeCards(tempcardarray);
        }
        else {
            console.log("No products");
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [products, favorites]);

    const fetchAllRecipes = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
            data: {
                "accountId": window.$id
            }
        }).catch(error => {
            return { error: error };
        });


        if (window.$id) {
            console.log("Fetching favorite recipes with accountId: " + window.$id);
            const favres = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites",
            data: {
                "accountId": window.$id
            }
            }).catch(error => {
                return { error: error };
            });

            
            if (favres.status === 200) {
                setFavorites(favres.data);
            }
            else {
                setFavorites([]);
            }
        }

        setProducts(res.data);
        if (res.status === 200) {
            setStatus(200);
        }
    };

    const genRecipeCard = (recipe, alreadyliked, catarray) => {
        const card = (
            <RecipeCard className="p-mb-2 p-shadow-2" id={recipe.id} key={recipe.id} liked={alreadyliked} img={recipe.imageurl} categories={catarray} style={{ width: '25em' }} name={recipe.name} time={recipe.averagetimeinminutes + " Minuten"} />
        );

        return card; 
    }

    //Conditional Rendering
    if (status === 200) {
        return (
            <React.Fragment>
                <div className="cards p-mt-4 p-mb-4">
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
