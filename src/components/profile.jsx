import React, { useState, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';



const Profile = (props) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("********");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
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
            <div className="p-field p-grid">
                        <label htmlFor="email" className="p-col-fixed" style={{width:'100px'}}>Email</label>
                        <div className="p-col">
                            <InputText id="email" type="text" value={Email}/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="password" className="p-col-fixed" style={{width:'100px'}}>Passwort</label>
                        <div className="p-col">
                            <InputText id="password" type="text" value={Password}/>
                        </div>
                    </div>
        </React.Fragment>
    );
};

export default Profile;
