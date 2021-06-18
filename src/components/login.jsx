import React, { useState, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';



const Login = (props) => {

    const toast = useRef(null);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const history = useHistory();

    const handleOnLoginSuccess = useCallback(() => history.push('/'), [history]);

    const showSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Login erfolgreich', detail:"Sie werden nun weitergeleitet", life: 2000});
    }

    const showError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Login Fehlgeschlagen', detail:'Bitte Eingaben überprüfen', life: 3000});
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const login= async () => {
        let loggedin = false;
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/accounts",
          }).catch(error => {
            return { error: error };
          });

        res.data.forEach(account => {
            if (account.EMail.toLowerCase() === Email.toLowerCase() && account.Password === Password)
            {
                loggedin = true;
                window.$email = Email.toLowerCase();
                showSuccess();
                sleep(3000).then(r => {
                    handleOnLoginSuccess();
                });
            }
        });

        if (!loggedin) {
            showError();
        }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} />
            <div className="p-field p-grid">
                <label htmlFor="email" className="p-col-fixed" style={{width:'100px'}}>Email</label>
                <div className="p-col">
                    <InputText id="email" name="Email" value={Email} onChange={e => setEmail(e.target.value)} type="text"/>
                </div>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="password" className="p-col-fixed" style={{width:'100px'}}>Password</label>
                <div className="p-col">
                    <InputText id="password" name="Password" onChange={e => setPassword(e.target.value)} type="text"/>
                </div>
            </div>
            <Button onClick={login} label="Anmelden" className="p-button-rounded p-button-secondary" />
            <Button label="Registrieren" className="p-button-rounded p-button-secondary" />
        </React.Fragment>
    );
};

export default Login;
