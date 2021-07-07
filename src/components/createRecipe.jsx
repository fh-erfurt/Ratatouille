import React, { useState, useCallback, useRef} from "react";
import { useHistory } from 'react-router-dom';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from 'primereact/inputtextarea';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import axios from "axios";




const CreateRecipe = (props) => {
    const history = useHistory();
    const toast = useRef(null);
    
    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    };

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    const handleOnAddRecipeSuccess = useCallback(() => history.push('/'), [history]);

    const [recipeName, setRecipeName] = useState("");
    const [recipeImageUrl, setRecipeImageUrl] = useState("");
    const [recipeavgtime, setRecipeAvgTime] = useState('30');
    const [recipedifficulty, setRecipeDifficulty] = useState();
    const [recipeingredients, setRecipeIngredients] = useState("");
    const [recipeinstruction, setRecipeInstruction] = useState("");
    const [selectedcategorys, setSelectedCategorys] = useState([]);

    const difficultys = [
        {name: 'einfach'},
        {name: 'normal'},
        {name: 'schwer'}
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
       setRecipeDifficulty(); 
       setRecipeIngredients(""); 
       setRecipeInstruction("");
       setSelectedCategorys([]);
   };

   const setImageUrlToDefault = () =>{
    setRecipeImageUrl("http://myminidoxie.com/wp-content/uploads/2012/11/which-came-first-the-wiener-or-the-dachshund.jpg");
};
    
   const checkIfInputIsValid = () =>{
        console.log(recipeName , recipeImageUrl , recipedifficulty , recipeingredients , recipeinstruction , selectedcategorys)

        if(recipedifficulty){
            if(recipeinstruction !== ""){
                if(recipeingredients !== ""){
                    if(recipeImageUrl !== ""){
                        if(recipeImageUrl.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|))/) != null){
                            if(recipeName !== ""){
                                if(selectedcategorys.length == 0){
                                    console.log("arrrrraaaay:"+ selectedcategorys)
                                    showInputValidError("Kategorien");
                                   }   
                                else{
                                    addRecipe("");
                                    console.log("Kategorien: " + selectedcategorys)
                                   }
                            }   
                            else{
                                showInputValidError("Rezeptname");
                                console.log("Rezeptname: " + recipeName)
                            }
                        }
                        else
                        {
                            showAddRecipeImageUrlError();
                        }
                        
                    }
                    else{
                        //showInputValidError("Bild Url");
                        //console.log("Bild Url: " + recipeImageUrl)
                        setImageUrlToDefault();
                        if(recipeName !== ""){
                            if(selectedcategorys.length == 0){
                                console.log("arrrrraaaay:"+ selectedcategorys)
                                showInputValidError("Kategorien");
                               }   
                            else{
                                addRecipe("mit Platzhalter als Bild");
                                console.log("Kategorien: " + selectedcategorys)
                               }
                        }   
                        else{
                            showInputValidError("Rezeptname");
                            console.log("Rezeptname: " + recipeName)
                        }
                    }
                }
                else{
                    showInputValidError("Zutaten");
                    console.log("Zutaten: " + recipeingredients)
                }
            }
            else{
                showInputValidError("Arbeitsanweisung");
                console.log("Arbeitsanweisung: " + recipeinstruction)
            }
        }
        else{
            showInputValidError("Schwierigkeit");
            console.log("Schwierigkeit: " + recipedifficulty)
        }
    };  
   const showAddRecipeSuccess = (entry) => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Rezept wurde gespeichert!', detail:(entry), life: 1500, closable: false});
    };
    

    const showAddRecipeError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Speichern fehlgeschlagen!', detail:'Bitte versuchen Sie es erneut.', life: 3000, closable: false});
    };

    const showInputValidError = (entry) => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: ("Es fehlt "+ entry + "!"), detail:'Bitte alle Felder füllen.', life: 3000, closable: false});
    };

    const showAddRecipeImageUrlError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Bild Url ist ungültig!', detail:'Die Url sollte mit "https://" beginnen und mit ".jpg, .png, .jpeg, .gif" enden.', life: 5000, closable: false});
    };

    const clearToast = () => {
        toast.current.clear();
    }

   const addRecipe = async () => {
       console.log("Sending recipe to backend");
       let catarray = [];
       console.log(window.$id);
       selectedcategorys.forEach(cat => {
           catarray.push(cat.name);
       })
        const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/recipes/create",
            data: {
                "name": recipeName,
                "imageurl": recipeImageUrl,
                "averagetimeinminutes": recipeavgtime,
                "difficulty": recipedifficulty.name,
                "ingredients": recipeingredients,
                "preparation": recipeinstruction,
                "categories": JSON.stringify(catarray),
                "creatorId": window.$id
            }
          }).catch(error => {
            return { error: error };
          });

          if (res.status === 200) {
                changeInputToDefault();
                showAddRecipeSuccess(entry);
                sleep(1500).then(r => {
                    handleOnAddRecipeSuccess();
                });
          }
          else {
                showAddRecipeError();
          }
    }


    return (
        
        <React.Fragment>
            <Toast ref={toast} onClick={clearToast} className="ToastMsg" />
            <div className="createrecipe">
                        <h1 >Rezept erstellen</h1>
                        <span className="recipename">
                            <label htmlFor="recipename">Rezeptname: </label>
                            <br/>
                            <InputText id="recipename" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder ="... Bauernsalat" /> 
                            <br/>
                        </span>
                        <br/>  
                        <span className="recipeimageurl">
                            <label htmlFor="recipeimageurl">Bild Url: </label>
                            <br/>
                            <InputText id="recipeimageurl" value={recipeImageUrl} onChange={(e) => setRecipeImageUrl(e.target.value)} placeholder ="... http://link-zum-bild"/> 
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
                            <InputTextarea value={recipeingredients} onChange={(e) => setRecipeIngredients(e.target.value)} placeholder="... Eier 3Stk, Milch 300ml, ..." rows={5} cols={30} autoResize />
                
                        </div>
                        <div className="recipecategory">
                            <h5>Arbeitsanweisung: </h5>
                            <InputTextarea value={recipeinstruction} onChange={(e) => setRecipeInstruction(e.target.value)} placeholder="... erst Mixen, dann Backen" rows={5} cols={30} autoResize />
            
                        </div>
                        <div className="recipecategory">
                            <h5>Kategorien</h5>
                            <MultiSelect value={selectedcategorys} options={categorys} onChange={(e) => setSelectedCategorys(e.value)} optionLabel="name" filter filterPlaceholder= "Vegan" selectionLimit = "4" placeholder="Wähle eine Kategorie" display="chip" showSelectAll={false} />
                            <br/>
                        </div>
                        <br/>
                        <span>
                             <Button label="Rezept einreichen" icon="pi pi-check" className="p-button-success p-buttonset" onClick={checkIfInputIsValid}/>
                             <Button label="Zurücksetzen" icon="pi pi-replay" className="p-button-raised p-button-danger" onClick={changeInputToDefault}/>
                        </span>
            </div>
        </React.Fragment>
    );
}

export default CreateRecipe;
