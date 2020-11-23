import React from "react";
import MyImage from '../assets/dog.jpg';
import { motion } from "framer-motion";
 function Index() {
     return(
      <div className="container">
      <motion.h1 animate={{ fontSize:50 }}>
          Welcome to SiapMas
      </motion.h1>
      {/* <img src={MyImage} /> */}
      </div>)
 }

 export default Index ;
