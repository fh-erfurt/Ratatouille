import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';

const RecipeCard = () => {
    const [products, setProducts] = useState([{id: 1, name: "SUPERyummy", imageurl: "https://cdn.pixabay.com/photo/2017/05/25/21/22/pizza-2344399_960_720.jpg", categories: "[Hauptspeise, Vegetarisch, Vegan, Backen]" },{id: 1, name: "SUPERyummy", imageurl: "https://cdn.pixabay.com/photo/2017/05/25/21/22/pizza-2344399_960_720.jpg", categories: "[Hauptspeise, Vegetarisch, Vegan, Backen]" },{id: 1, name: "SUPERyummy", imageurl: "https://cdn.pixabay.com/photo/2017/05/25/21/22/pizza-2344399_960_720.jpg", categories: "[Hauptspeise, Vegetarisch, Vegan, Backen]" }]);
    const [currentPosition, setCurrentPosition] = useState(3);
    const [final, setFinal] = useState([]);

    useEffect(() => {
        fetchProducts();
        postSomeRecipes();
     }, []);

     
    const fetchProducts = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes",
        })
        setProducts(res.data);
    };

    const cardheader = (x) => (
        <img src={x.imageurl} width="500"/>
    );  

    const cardfooter = (
        <span>
            <Button label="Favorit" icon="pi pi-heart" />
        </span>
    );

    const postSomeRecipes = () =>{
        let x = [];
       for (let element of products) {
          x.push(<Card title={element.name} subTitle={element.categories} style={{ width: '25em' }} footer={cardfooter} header={cardheader(element)}/>);  
         };
         setFinal(x);
    };
    

    return (
        <div class="recipecard"> 
        {final}
        </div>
    );
}
export default RecipeCard;