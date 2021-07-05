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

    const showNoValidCredentialsError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Registrierung fehlgeschlagen', detail: 'Bitte eine gültige Daten angeben', life: 3000, closable: false});
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const clearToast = () => {
        toast.current.clear();
    }

    /**
     * Cheks whether an email is valid
     * @param {*} email 
     * @returns true or false depending on whether it is a valid email
     */
    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    /**
     * Request cat pic from thatcopy.pw/catapi
     * @returns Cat pic webp url
     */
    const requestCatPic = async () => {
        const res = await axios({
            method: "get",
            url: "https://thatcopy.pw/catapi/rest/"
          }).catch(error => {
            return { error: error };
          });

          return res.data.webpurl;
    }

    /**
     * Sends Email and password to api and checks response
     */
    const login = async () => {
        if (Pass !== "") {
            const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/login",
            data: {
                "email": Email,
                "password": Pass
            }
          }).catch(error => {
            return { error: error };
          });

          console.log(res.data);

          if (res.status === 200) {
              window.$email = Email.toLowerCase();
              window.$id = res.data.accountId;
              showLoginSuccess();
                sleep(2000).then(r => {
                    handleOnLoginSuccess();
                });
          }
          else {
            showLoginError();
          }
        }
        else {
            showNoValidCredentialsError();
        }
    }

    /**
     * Sends a new email and password to the backend to register a new user
     */
    const register = async () => {
        const mail = Email.toLocaleLowerCase();
        if (validateEmail(mail) && Pass !== "") {
            const picurl = await requestCatPic();
            const res = await axios({
            method: "post",
            url: "https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/register",
            data: {
                "email": mail,
                "password": Pass,
                "pictureurl": picurl
            }
          }).catch(error => {
            return { error: error };
          });

          if (res.status === 200) {
              console.log(res.data);
              window.$email = res.data.email;
              window.$id = res.data.id;
              showRegistrationSuccess();
          }
          else {
              showRegistrationError();
          }
        }
        else {
            showNoValidCredentialsError();
        }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} onClick={clearToast} className="ToastMsg" />
            <div className="p-mt-6" >
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText placeholder="Email Adresse" id="email" name="Email" onChange={e => setEmail(e.target.value)} type="text" className="email"/>
                    </div>
                </div>
                
                <div className="p-field p-grid">
                    <div className="p-col">
                        <Password placeholder="Password "id="password" name="Password" onChange={e => setPassword(e.target.value)} type="text" feedback={false} className="password"/>
                    </div>
                </div>
            </div>
            <Button onClick={login} label="Anmelden" className="p-button-primary p-mr-2 p-shadow-1" />
            <Button onClick={register} label="Registrieren" className="p-button-primary p-shadow-1" />
        </React.Fragment>
    );
};

export default Login;
