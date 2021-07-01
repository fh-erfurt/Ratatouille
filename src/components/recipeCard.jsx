import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';



const RecipeCard = ({cardProduct}) => {
    const [loginStatus, setLogingStatus] = useState([]);

    const   setfavorite = async () => {

         const res = await axios({
             method: "post",
             url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/like",
             data: {
                 "accountId": window.$id,
                 "recipeId": cardProduct.id 
                 
             }
           }).catch(error => {
             return { error: error };
           });
        }

    const checkUserStatus = () =>{
        if(window.$id === undefined && window.$id !== cardProduct.creatorId)
        {
            <p>nicht von mir</p>
        }
        else if(window.$id === cardProduct.creatorId){
            <p>von mir</p>
        }
    }

    return(
    checkUserStatus(),
    console.log(cardProduct.creatorId),
    
    <Card className="p-mb-2" title={cardProduct.name} subTitle={<Chip label={cardProduct.categories} className="p-mr-2 p-mb-2 custom-chip" />} style={{ width: '25em', height:'30em'}} footer={cardProduct.averagetimeinminutes + " Minuten"} header={<div><img alt="pictureRecipe" src={cardProduct.imageurl}></img></div>}>
        <div onClick={setfavorite} className = "likeButton"><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text"/></div>
    </Card>
    
    )
    
}
export default RecipeCard;