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
            <motion.img 
                src={LoginBox}
                initial={{ width:"25%",height:"60%",x:"290%",y:"36%",scale:0 }} 
                transition={{ duration:0.4 }} 
                animate={{ scale:1 }} />
            
        <motion.div 
            className={styles.UsernameLogo}
            initial={{ x:"397%",y:"-200%",opacity:0 }}
            transition={{ delay:0.4, duration:0.4 }}
            animate={{ opacity:1 }}>
            <motion.img 
                src={LogoUser} 
                initial={{ width:"70%",x:"20%",y:"22%" }}
                transition={{ delay:0.4, duration:0.4 }}
                animate={{ opacity:1 }} />
        </motion.div>

        <motion.input 
            type="text" 
            placeholder="USERNAME" 
            className={styles.InputUsername} 
            initial={{ x:"385%",y:"-630%",opacity:0 }}
            transition={{ delay:0.8, duration:0.3 }}
            animate={{ opacity:1 }}
            />
            
        <motion.input 
            type="text" 
            placeholder="PASSWORD" 
            className={styles.InputUsername} 
            initial={{ x:"285%",y:"-450%",opacity:0 }}
            transition={{ delay:1.1, duration:0.3 }}
            animate={{ opacity:1 }}
            />

                <motion.img 
                src={LogoUsername}  
                initial={{ x:"2650%",y:"-783%", width:"2%",opacity:0 }}
                transition={{ delay:0.8, duration:0.3 }}
                animate={{ opacity:1 }}
                />

                <motion.img 
                src={LogoPassword}  
                initial={{ x:"2550%",y:"-550%",width:"2%",opacity:0 }}
                transition={{ delay:1.1, duration:0.3 }}
                animate={{ opacity:1 }}
                />
                <motion.input type="radio" 
                value="lupa password"
                    initial={{x:"3780%", y:"-830%"}}
                />
                <motion.p 
                initial={{x:"76%", y:"-500%", marginLeft:"1%"}}
                >
                Remember me
                </motion.p>

                <motion.div
                initial={{ x:"87%", y:"-598%" }}
                >
                <label>
                Lupa Password
                </label>
                </motion.div>

                <motion.input type="submit" 
                value="LOGIN"
                className={styles.InputButton}
                initial={{x:"590%", y:"-440%"}}
                />
    </div>
     )}

 export default Index ;
