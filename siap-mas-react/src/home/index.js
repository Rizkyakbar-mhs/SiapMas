import React from "react";
import MyImage from '../assets/dog.jpg';

 function Index() {
     return(
      <div className="home containt">
      <h1>
          Welcome to SiapMas
      </h1>
      <img src={MyImage} />
      </div>)
 }

 export default Index ;
