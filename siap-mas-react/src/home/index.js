import React from "react";
import MyImage from '../assets/dog.jpg';
import styles from '../index.css';
import { motion } from "framer-motion";
 function Index() {
     return(
      <div className={styles.container}>
      <motion.h1 animate={{ fontSize:50 }} drag onDrag={ (e) => console.log(e.x,e.y) }>
          Welcome to SiapMas
      </motion.h1>
      {/* <img src={MyImage} /> */}
      </div>)
 }

 export default Index ;
