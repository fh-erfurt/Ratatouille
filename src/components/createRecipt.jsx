import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from 'primereact/inputtextarea';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';




const CreateRecipt = (props) => {
    const history = useHistory();
   

    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    };

    const [recipeName, setRecipeName] = useState('');
    const [recipeImageUrl, setRecipeImageUrl] = useState('');
    const [recipeavgtime, setRecipeAvgTime] = useState('30');
    const [recipedifficulty, setRecipeDifficulty] = useState(null);
    const [recipeingredients, setRecipeIngredients] = useState('');
    const [recipeinstruction, setRecipeInstruction] = useState('');
    const [selectedcategorys, setSelectedCategorys] = useState(null);

    const difficultys = [
        {name: 'einfach', value: 1},
        {name: 'normal', value: 2},
        {name: 'schwer', value: 3}
    ];

    const categorys = [
        { name: 'Hauptspeise'},
        { name: 'Gemüse'},
        { name: 'Vegetarisch'},
        { name: 'Auflauf'},
        { name: 'Nudeln'},
        { name: 'Suppe'},
        { name: 'Salat'},
        { name: 'Backen'},
        { name: 'Torte'},
        { name: 'Vegan'}
    ];

   const changeInputToDefault = () =>{
       setRecipeName("");
       setRecipeImageUrl("");
       setRecipeAvgTime("30");
       setRecipeDifficulty(null); 
       setRecipeIngredients(""); 
       setRecipeInstruction("");
       setSelectedCategorys(null);
   };
    
    return (
        
        <React.Fragment>
            <div className="createrecipe">
                        <h1>Rezept erstellen</h1>
                        <span className="recipename">
                            <label htmlFor="recipename">Rezeptname: </label>
                            <br/>
                            <InputText id="recipename" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder ="z.B: Bauernsalat" /> 
                            <br/>
                        </span>
                        <br/>  
                        <span className="recipeimageurl">
                            <label htmlFor="recipeimageurl">Bild Url: </label>
                            <br/>
                            <InputText id="recipeimageurl" value={recipeImageUrl} onChange={(e) => setRecipeImageUrl(e.target.value)} placeholder ="http://..."/> 
                            <br/>
                        </span>
                        <br/>  
                        <div className="recipeavetime">
                            <span>Arbeitszeit: {recipeavgtime} Minuten</span>
                            <br/>
                            <InputNumber value={recipeavgtime} style={{ width: '12rem', hight: '12rem' }} mode="decimal" onValueChange={(e) => setRecipeAvgTime(e.target.value)} />
                            <Slider value={recipeavgtime} style={{ width: '12rem', hight: '12rem', margin: "auto"  }} onChange={(e) => setRecipeAvgTime(e.value)}  min={0} max={555}/>
                            
                        </div>
                        <div className="recipedifficulty">
                            <h5>Schwierigkeit</h5>
                            <SelectButton value={recipedifficulty} options={difficultys} onChange={(e) => setRecipeDifficulty(e.value)} optionLabel="name"/>
                            
                        </div>
                        <div className="recipecategory">
                            <h5>Zutaten: </h5>
                            <InputTextarea value={recipeingredients} onChange={(e) => setRecipeIngredients(e.target.value)} placeholder="z.B: Eier 3Stk, Milch 300ml, ..." rows={5} cols={30} autoResize />
                
                        </div>
                        <div className="recipecategory">
                            <h5>Arbeitsanweisung: </h5>
                            <InputTextarea value={recipeinstruction} onChange={(e) => setRecipeInstruction(e.target.value)} rows={5} cols={30} autoResize />
            
                        </div>
                        <div className="recipecategory">
                            <h5>Kategorien</h5>
                            <MultiSelect value={selectedcategorys} options={categorys} onChange={(e) => setSelectedCategorys(e.value)} optionLabel="name" filter filterPlaceholder= "Vegan" selectionLimit = "4" placeholder="Wähle eine Kategorie" display="chip" />
                            <br/>
                        </div>
                        <br/>
                        <span className="p-buttonset">
                             <Button label="Submit" icon="pi pi-check" />
                             <Button label="Cancel" icon="pi pi-times" className="p-button-raised p-button-danger" onClick={changeInputToDefault}/>
                        </span>
            </div>
        </React.Fragment>
    );
}

export default CreateRecipt;
