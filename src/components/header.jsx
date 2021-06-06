import React, { Component } from "react";

import PrimeReact from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Menubar } from "primereact/menubar";
import { InputText } from 'primereact/inputtext';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'Rezepte',
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
                    },
            {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in'
            }
        ];
    }

  state = {};
  render() {
    const start = <img alt="logo" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;//Logo einfügen
    const end = <InputText placeholder="Search" type="text" />;
    
    return (
      <div class="header">
            <Menubar model={this.items} start={start} end={end} />
                </div>
    );
  }
}
