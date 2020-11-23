import React from "react";
import MyImage from '../assets/LoginBox.png';
import styles from '../index.css';
import { motion } from "framer-motion";
 function Index() {
     return(
      <div>
      <motion.h1 animate={{ fontSize:50 }} drag onDrag={ (e) => console.log("x = " + Math.trunc(e.x) + "   " + "y = " + Math.trunc(e.y)) }>
      </motion.h1>
       <motion.img src={MyImage} 
            initial={{ width:"25%",height:"60%",x:1100,y:150,scale:0 }} 
            transition={{ duration:0.4 }} 
            animate={{ scale:1 }} /> 
      </div>)
 }

 export default Index ;
