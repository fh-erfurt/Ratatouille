import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const RecipeDetail = (props) => {

    const id = props.recipeId.match.params.recipeId;


    return (
        
        <React.Fragment>
            <p>
                Recipe ID: {id}
            </p>
        </React.Fragment>
    );
}

export default RecipeDetail;
