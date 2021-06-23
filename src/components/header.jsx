import React, { useEffect, useState, useCallback } from "react";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useHistory } from 'react-router-dom';
import { Menubar } from "primereact/menubar";


const Header = (props) => {

    const history = useHistory();

    const navigateToPage = useCallback((path) => history.push(path), [history]);

    const [windowEmailActive, setWindowEmailActive] = useState(false);
    useEffect(() => {
            window.$email != null && setWindowEmailActive(true);
        }, []);

    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0);

    const authBtn = (windowEmailActive) =>
    windowEmailActive !== false ? (
        <Button
        label="Logout"
        icon="pi pi-fw pi-sign-out"
        className="p-shadow-1"
        onClick={() => {
                            setCount(count => count + 1);
                            window.$email = null;
                            setWindowEmailActive(false)
                        }
                }
        />
    ) : (
        <Link to="/login">
            <Button label="Login" icon="pi pi-fw pi-sign-in" className="p-shadow-1"/>
        </Link>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-file',
            command:()=>{ navigateToPage("/")}
        },
        { 
            label: 'Rezepte',
            icon: 'pi pi-fw pi-file',
            command:()=>{ navigateToPage("/menu")}
        },
        {
            label: 'Erstellen',//in Profil einfügen?
            icon: 'pi pi-fw pi-pencil',
            command:()=>{ navigateToPage("/create")}
        },
        {
            label: 'Profil',
            icon: 'pi pi-fw pi-user',
            command:()=>{ navigateToPage("/profile")}
        },
        {
            label: 'Favoriten',
            icon: 'pi pi-fw pi-calendar',
            command:()=>{ navigateToPage("/favorites")}
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;


    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={
                <div>
                    {authBtn(windowEmailActive)}
                </div>} />
            </div>
        </div>
    );
}

export default Header;
