import React, { Component } from "react";
import { MegaMenu } from 'primereact/megamenu';
import RecipeCard from './recipeCard';

export default class RecipesMenu extends Component {
    state = {};

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
            }
        ];
    }


    render() {
        return (
            <div class="recipesmenu">
                <div class="navbar">
                    <MegaMenu model={this.items} /></div>
                <div class="recipes">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    </div></div>
      

        );
    }
}