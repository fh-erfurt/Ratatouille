import React, { useState, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';

/**
 * Component to authenticate the user with email and password.
 *
 * @component
 */
const Login = (props) => {
    const history = useHistory();

    const toast = useRef(null);
    const [Email, setEmail] = useState("");
    const [Pass, setPassword] = useState("");

    const handleOnLoginSuccess = useCallback(() => history.push('/'), [history]);

    const showLoginSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Login erfolgreich', detail:"Sie werden nun weitergeleitet", life: 2000, closable: false});
    }

    const showRegistrationSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Registrierung erfolgreich', detail:"Sie können sich nun anmelden", life: 2000, closable: false});
    }

    const showLoginError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Login fehlgeschlagen', detail:'Bitte Eingaben überprüfen', life: 3000, closable: false});
    }

    const showRegistrationError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Registrierung fehlgeschlagen', detail:'Email Adresse wird bereits verwendet', life: 3000, closable: false});
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const clearToast = () => {
        toast.current.clear();
    }

    /**
     * Fetches all accounts from the backend and checks if given password matches the given email
     */
    const login = async () => {
        let loggedin = false;
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/accounts",
          }).catch(error => {
            return { error: error };
          });

          //console.log(res.data);

        res.data.forEach(account => {
            if (account.email.toLowerCase() === Email.toLowerCase() && account.password === Pass)
            {
                loggedin = true;
                window.$email = Email.toLowerCase();
                showLoginSuccess();
                sleep(2000).then(r => {
                    handleOnLoginSuccess();
                });
            }
        });

        if (!loggedin) {
            showLoginError();
        }
    }

    /**
     * Sends a new email and password to the backend to register a new user
     */
    const register = async () => {
        const res = await axios({
            method: "post",
            url: "http://localhost:8000/accountmgr/register",
            data: {
                "email": Email,
                "password": Pass
            }
          }).catch(error => {
            return { error: error };
          });

          if (res.status === 200) {
            showRegistrationSuccess();
          }
          else {
              showRegistrationError();
          }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} onClick={clearToast} className="ToastMsg" />
            <div className="p-mt-6" >
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText placeholder="... Email Adresse" id="email" name="Email" onChange={e => setEmail(e.target.value)} type="text" className="email"/>
                    </div>
                </div>
                
                <div className="p-field p-grid">
                    <div className="p-col">
                        <Password toggleMask placeholder="... Password "id="password" name="Password" onChange={e => setPassword(e.target.value)} type="text" feedback={false} className="password"/>
                    </div>
                </div>
            </div>
            <Button onClick={login} label="Anmelden" className="p-button-primary p-mr-2 p-shadow-1" />
            <Button onClick={register} label="Registrieren" className="p-button-primary p-shadow-1" />
        </React.Fragment>
    );
};

export default Login;
