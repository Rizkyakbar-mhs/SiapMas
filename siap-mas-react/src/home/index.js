import React,{ useState } from "react";
import LoginBox from '../assets/LoginBox.png';
import LogoUser from '../assets/LoginLogo.png';
import LogoUsername from '../assets/Username.png';
import LogoPassword from '../assets/Password.png';
import styles from '../index.css';
import { motion } from "framer-motion";
 function Index() {
     return(
<div>
    <div>
        <motion.div 
            className={styles.container}
            initial={{ x:"130%",y:"40%",width:"25%",paddingBottom:"4%",paddingTop:"2%" }}>
            {/* <motion.img 
                src={LoginBox}
                initial={{ width:"25%",height:"60%",x:"290%",y:"36%",scale:0 }} 
                transition={{ duration:0.4 }} 
                animate={{ scale:1 }} /> */}
            
        <motion.div 
            className={styles.UsernameLogo}
            transition={{ delay:0.4, duration:0.4 }}
            animate={{ opacity:1 }}>
            <motion.img 
                src={LogoUser} 
                initial={{ width:"70%",x:"20%",y:"22%" }}
                transition={{ delay:0.4, duration:0.4 }}
                animate={{ opacity:1 }} />
        </motion.div>

        <motion.div
            initial={{ y:"10%",x:"10%" }} >
            <motion.input 
                type="text" 
                placeholder="USERNAME" 
                className={styles.InputUsername}
                initial={{ paddingBottom:"1%" }}
                transition={{ delay:0.8, duration:0.3 }}
                animate={{ opacity:1 }}
                />
                
            <motion.input 
                type="text" 
                placeholder="PASSWORD" 
                className={styles.InputUsername} 
                transition={{ delay:1.1, duration:0.3 }}
                animate={{ opacity:1 }}
                />

                <motion.img 
                src={LogoUsername}  
                transition={{ delay:0.8, duration:0.3 }}
                initial={{ y:"-105%",width:"10%",x:"-120%"}}
                animate={{ opacity:1 }}
                />

                <motion.img 
                src={LogoPassword}
                transition={{ delay:1.1, duration:0.3 }}
                initial={{ x:"690%",y:"-105%",width:"10%" }}
                animate={{ opacity:1 }}
                />
            </motion.div>

                <motion.input 
                type="radio" 
                initial={{ marginLeft:"14%" }}
                value="lupa password"
                />Remember Me      

                <motion.label initial={{ marginLeft:"5%" }}>
                Lupa Password
                </motion.label>

                <motion.input type="submit" 
                value="LOGIN"
                initial={{ marginLeft:"25%",marginTop:"7%" }}
                className={styles.InputButton}
                />
        </motion.div>
    </div>
</div>
     )}

 export default Index ;
