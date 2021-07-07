import React, { Component } from "react";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { TabView,TabPanel } from 'primereact/tabview';

export default class Recipe extends Component {
    constructor(props){
    super(props);
    this.state = {
        selectedIngredient:null,
        activeIndex:1
    };
    this.ingredients = [
        {name: 'Tomate'},
        {name: 'Salz'},
        {name: 'Brot'},
    ];
}
    render() {
        return (
            <div class="recipe">
                <div class="recipeTop">
                <div class="recipeLeft">
               <h3>Name</h3>
               <h4>Kategorien</h4>
               <img alt="bild" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="400px" />
               </div>
               <div class="recipeRight">
                <Button label="Favorit" icon="pi pi-heart" />
                <h4>Zutaten</h4>
                    <ListBox value={this.state.selectedIngredient} options={this.ingredients} onChange={(e) => 
                        this.setState({selectedIngredient: e.value})} optionLabel="name" style={{width: '15rem'}} />
               <h4>Dauer:</h4>
               <h4>Schwierigkeit:</h4>
               <h4>Erstellt von: ... am ...</h4>
               </div>
               </div>
               <div class="recipePreparation">
               <TabView>
                        <TabPanel header="Schritt 1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TabPanel>
                        <TabPanel header="Schritt 2">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Schritt 3">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
               </div>
               </div>
      

        );
    }
}