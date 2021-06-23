import React, { useState, useEffect, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import axios from "axios";
import { useHistory } from 'react-router-dom';



const Profile = (props) => {
    const history = useHistory();

    const toast = useRef(null);

    const [Email, setEmail] = useState(window.$email);
    const [Pass, setPassword] = useState("");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    }

    const showPwChangeSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Passwort erfolgreich geändert', life: 2000});
    }

    const showPwChangeError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Passwort darf nicht leer sein', detail:'Bitte Eingaben überprüfen', life: 3000});
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

    const submitPassword = async () => {
        if (Pass !== "")
        {
            const res = await axios({
                method: "post",
                url: "http://localhost:8000/accountmgr/newpassword",
                data: {
                    "email": window.$email,
                    "password": Pass
                }
              }).catch(error => {
                return { error: error };
              });
    
            if (res.status === 200)
            {
                showPwChangeSuccess();
            }
        }
        else {
            showPwChangeError();
        }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} />
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
                            <InputText placeholder="... neues Passwort" value={Pass} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div>
                        <Button onClick={submitPassword} label="Speichern" className="p-button-primary p-mr-2" />
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default Profile;
