import React, { useState, useEffect, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import MyRecipes from './myRecipes.jsx';

/**
 * Component for showing details of the user and allowing to change the account password.
 *
 * @component
 */
const Profile = (props) => {
    const history = useHistory();

    const toast = useRef(null);

    const [Email, setEmail] = useState("");
    const [Pass, setPassword] = useState("");
    const [Pic, setPic] = useState("");

    useEffect(() => {
        fetchAccountInfo();
    })

    const handleNotLoggedIn = useCallback(() => history.push('/login'), [history]);
    if (window.$email == null) {
        handleNotLoggedIn();
    }

    const showPwChangeSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Passwort erfolgreich geändert', life: 2000, closable: false});
    }

    const showPwChangeError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Passwort darf nicht leer sein', detail:'Bitte Eingaben überprüfen', life: 3000, closable: false});
    }

    const clearToast = () => {
        toast.current.clear();
    }
    


    const fetchAccountInfo = async () => {
        const res = await axios({
            method: "get",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/" + window.$id,
          }).catch(error => {
            return { error: error };
          });

          if (res.status === 200) {
              setEmail(res.data.email);
              setPic(res.data.pictureurl);
          }
    }
    /**
     * Sends new Password to backend
     */
    const submitPassword = async () => {
        if (Pass !== "")
        {
            const res = await axios({
                method: "post",
                url: "https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/newpw",
                data: {
                    "accountId": window.$id,
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
            <Toast ref={toast} onClick={clearToast} />
            <div className="p-grid p-fluid p-mt-4">
                    <div className="p-mx-auto">
                        <div className="p-col-12 p-md-4">
                            <img className="profilePic p-shadow-3 p-mb-3" src={Pic} alt="Profile" />
                            <div className="p-inputgroup" style={{width:'400px'}}>
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user" ></i>
                                </span>
                                <InputText disabled placeholder="Email Adresse" value={Email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="p-inputgroup p-mt-1" style={{width:'400px'}}>
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-key" ></i>
                                </span>
                                <InputText placeholder="neues Passwort" value={Pass} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div>
                            <Button onClick={submitPassword} label="Speichern" className="p-button-primary p-mt-1" />
                            </div>
                        </div>
                        </div>
                    
                </div>
                <div className="p-mt-4 p-mx-auto MyRecipes">
                    <MyRecipes></MyRecipes>
                </div>
                
        </React.Fragment>
    );
};

export default Profile;
