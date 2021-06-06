import React, { Component } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default class RecipeCard extends Component {
    state = {};

    render() {
        const cardheader = (
            <img alt="Card" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} /> //recipe picture
        );
        const cardfooter = (
            <span>
                <Button label="Favorit" icon="pi pi-heart" />
            </span>
        );
        return (
            <div class="recipecard">
                    <Card title="Rezept" subTitle="Subtitle" style={{ width: '25em' }} footer={cardfooter} header={cardheader}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
                </div>
        );
    }
}