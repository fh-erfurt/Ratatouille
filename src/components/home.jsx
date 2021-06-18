import React, {  } from "react";


const Home = (props) => {


    return (
        <div class="home">
            <img alt="Let's get Cooking" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="500" ></img>
            <img alt="Bild" src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="500" ></img>
        </div>

    );
}

export default Home;
