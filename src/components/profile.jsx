import React, { useState, useEffect, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { useHistory } from 'react-router-dom';



const Profile = (props) => {
    const history = useHistory();

    const [Email, setEmail] = useState(window.$email);
    const [Password, setPassword] = useState("********");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    }

    const fetchAccountInfo = async () => {
        let id;
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/accounts",
          }).catch(error => {
            return { error: error };
          });

          res.data.forEach(account => {
            if (account.email.toLowerCase() === window.$email)
            {
                id = account.id;
                setEmail(res.data[id].email);
            }
        });

    }

    return (
        <React.Fragment>
            <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <div className="p-inputgroup" style={{width:'400px'}}>
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user" ></i>
                            </span>
                            <InputText disabled placeholder="Email Adresse" value={Email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="p-inputgroup" style={{width:'400px'}}>
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-key" ></i>
                            </span>
                            <InputText placeholder="Passwort" value={Password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div>
                        <Button onClick label="Speichern" className="p-button-primary p-mr-2" />
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default Profile;
