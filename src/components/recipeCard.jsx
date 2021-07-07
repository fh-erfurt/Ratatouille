import React, { useState } from "react";
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';


const RecipeCard = (props) => {
    const [showlike, setShowLike] = useState(props.liked);

    const toggleLike = async () => {
        if (window.$id) {
            const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/like",
            data: {
                "accountId": window.$id,
                "recipeId": props.id
            }
            }).catch(error => {
                return { error: error };
            });

            
            if (res.status === 200) {
                if (showlike === false) {
                    setShowLike(true);
                }
                else {
                    setShowLike(false);
                }
            }
        }
    }

    let chips = [];
    props.categories.forEach((category) => {
        chips.push(
            <Chip label={category} className="p-shadow-1 p-mr-2 p-mb-2 custom-chip" />
        )
    })

    const header = (
        <img alt="Card" style={{ height:'15rem', "border-radius": "5px 5px 2px 2px"}} src="showcase/demo/images/usercard.png" onError={(e) => e.target.src=props.img} />
    );

    let footer;
    if (window.$id) {
        if (showlike === true) {
        footer = (
            <span>
                <Button className="p-shadow-1 likebtn" label="Gemerkt" icon="pi pi-star" onClick={toggleLike} />
            </span>
        );
        }
        else if (showlike === false) {
            footer = (
                <span>
                    <Button className="p-shadow-1 likebtn" label="Merken" icon="pi pi-star-o" onClick={toggleLike} />
                </span>
            );
        }
        else if (showlike === "editable") {
            footer = (
            <span>
                <Button className="p-shadow-1 likebtn" label="Bearbeiten" icon="pi pi-pencil" />
            </span>
            )
        }
    }
    else {
        footer = (
            <span>
                <Button disabled className="p-shadow-1 likebtn" label="Merken" icon="pi pi-star-o" onClick={toggleLike} />
            </span>
        );
    }
    
    
    return(
        <div className="fullCard p-d-block p-mx-auto" >
            <Card className="cardContent" title={props.name} subTitle={props.time} style={{ "box-shadow": "0 4px 7px 0 rgba(0, 0, 0, 0.15) , 0 6px 10px 0 rgba(0, 0, 0, 0.19)" }} footer={footer} header={header}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{props.description}</p>
                <div className="chip-holder">
                    {chips}
                </div>
            </Card>
        </div>
    )
}

export default RecipeCard;
