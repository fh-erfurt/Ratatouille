import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';

const RecipeCard = () => {
    const [products, setProducts] = useState('');
    const [currentPosition, setCurrentPosition] = useState(3);

    useEffect(() => {
        fetchProducts();
     }, []);
 
     const fetchProducts = async () => {
         const res = await axios({
             method: "get",
             url: "http://localhost:8000/recipes",
           })
         setProducts(res.data);
     };
        const cardheader = () => (
           <img src={products[currentPosition].imageurl} width="500"/>
        );
        const cardfooter = (
            <span>
                <Button label="Favorit" icon="pi pi-heart" />
            </span>
        );
        return (
            <div class="recipecard">
                    <Card title={products[currentPosition].name} subTitle={products[currentPosition].categories} style={{ width: '25em' }} footer={cardfooter} header={cardheader}>
                </Card>
                </div>
        );
}
export default RecipeCard;