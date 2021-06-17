import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Menubar } from "primereact/menubar";
import { InputText } from 'primereact/inputtext';


const Header = (props) => {

    const [windowEmailActive, setWindowEmailActive] = useState(false);
        useEffect(() => {
            window.$email != null && setWindowEmailActive(true);
        }, []);

    const [count, setCount] = useState(0);

    const authBtn = (windowEmailActive) =>
    windowEmailActive !== false ? (
        <Button
        label="Logout"
        icon="pi pi-fw pi-sign-in"
        onClick={() => {setCount(count => count + 1);window.$email = null;setWindowEmailActive(false)}}
        />
    ) : (
        <Link to="/login">
            <Button label="Login" icon="pi pi-fw pi-sign-in" />
        </Link>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-file',
        },
        {
            label: 'Erstellen',//in Profil einfügen?
            icon: 'pi pi-fw pi-pencil',
        },
        {
            label: 'Profil',
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Favoriten',
            icon: 'pi pi-fw pi-calendar',
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    /*let btn;
    const returnAuthButton = () => {
        if (window.$email != null)
        {
            btn = <Button label="Logout" icon="pi pi-fw pi-sign-in" onClick={window.$email = null} />;
        }
        else {
            btn = <Button label="Login" icon="pi pi-fw pi-sign-in"/>;
        }
    }*/

    /*let authbtn;
    useEffect(() => {
        if (window.$email != null)
        {
            authbtn = <Button label="Logout" icon="pi pi-fw pi-sign-in" onClick={window.$email = null} />;
        }
        else {
            authbtn = <Button label="Login" icon="pi pi-fw pi-sign-in"/>;
        }
    }, [])*/

    
    /*if (window.$email != null)
    {
        authbtn = <Button label="Logout" icon="pi pi-fw pi-sign-in" onClick={window.$email = null} />;
    }
    else {
        authbtn = <Button label="Login" icon="pi pi-fw pi-sign-in"/>;
    }*/

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







/*export default class Header extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Erstellen',//in Profil einfügen?
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Profil',
                icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Favoriten',
                icon: 'pi pi-fw pi-calendar',
            }
        ];
    }

  state = {};
  render() {
    const start = <img alt="logo" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;//Logo einfügen
    const end = <InputText placeholder="Search" type="text" />;

    let authbtn;
    if (window.$email != null)
    {
        authbtn = <Button label="Logout" icon="pi pi-fw pi-sign-in"/>;
    }
    else {
        authbtn = <Button label="Login" icon="pi pi-fw pi-sign-in"/>;
    }
    
    return (
        <div class="header">
            <Menubar model={this.items} start={start} end={
                <Link to="/login">
                    {authbtn}
                </Link>} />
        </div>
    );
  }
}
*/