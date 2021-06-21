import React, {  } from "react";
import { Carousel } from 'primereact/carousel';
import imageHome from '../images/imageHome.PNG'


const Home = (props) => {

    return (
        <div class="home">
            <img alt="Let's get Cooking" src={imageHome} ></img>
            <img alt="Bild" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="500" ></img>
        
        </div>
    

    );
}
export default Home;
