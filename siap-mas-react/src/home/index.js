import React from "react";
import MyImage from '../assets/dog.jpg';
import styles from '../index.css';
import { motion } from "framer-motion";
 function Index() {
     return(
      <div className={styles.container}>
      <motion.h1 animate={{ fontSize:50 }} drag onDrag={ (e) => console.log("x = " + Math.trunc(e.x) + "   " + "y = " + Math.trunc(e.y)) }>
      </motion.h1>
      {/* <img src={MyImage} /> */}
      </div>)
 }

 export default Index ;
