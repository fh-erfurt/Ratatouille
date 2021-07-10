import React, {  useEffect, useState } from "react";
import axios from "axios";
import { Chip } from 'primereact/chip';


const RecipeDetail = (props) => {

    useEffect(() => {
        fetchRecipeInfo();
    })

    const recipeID = props.recipeId.match.params.recipeId;
    const [recipe, setRecipe] = useState("");
    const [recipecreatedat, setCreatedAt] = useState("2021-06-29T14:03:01.000Z");

    const fetchRecipeInfo = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/recipe/" + recipeID,
          }).catch(error => {
            return { error: error };
          });

          if (res.status === 200) {
              setRecipe(res.data);
              setCreatedAt(res.data.createdAt)
          }
    }

    return (
        
        <React.Fragment>
            <div className = "recipeMeta">
                <h1>{recipe.name}</h1>
                <div className = "recipeMetaInfo">
                    <img alt="Product" style = {{borderRadius: "5px 5px 5px 5px", maxHeight: "25rem"}} src={recipe.imageurl}></img>
                    <div>
                         <Chip label={recipe.averagetimeinminutes + " Min."} icon="pi pi-clock" className="p-mr-2 p-mb-2 custom-chip" />
                         <Chip label={recipe.difficulty} icon=" pi pi-compass" className="p-mr-2 p-mb-2 custom-chip" />
                         <Chip label={((recipecreatedat.split("T"))[0]).replaceAll('-','.')} icon=" pi pi-calendar" className="p-mr-2 p-mb-2 custom-chip" />
                    </div>
                </div>
                <div>
                    <h2>Zutaten</h2>
                    <span>{recipe.ingredients}</span>
                </div>
                <div>
                    <h2>Zubereitung</h2>
                    <span>{recipe.preparation}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecipeDetail;
