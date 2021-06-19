import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom';


const CreateReceipt = (props) => {
    const history = useHistory();

    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    }
  

    return (
        <React.Fragment>
            <h1>Rezept erstellen</h1>
        </React.Fragment>
    );
}

export default CreateReceipt;
