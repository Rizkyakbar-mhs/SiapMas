import React,{ useState } from "react";
import LogoUser from '../assets/LoginLogo.png';
import styles from './home.css';
import { motion } from "framer-motion";
 function Index() {
     return(
        <motion.div 
            className={styles.container}>
            {/* <motion.img 
                src={LoginBox}
                initial={{ width:"25%",height:"60%",x:"290%",y:"36%",scale:0 }} 
                transition={{ duration:0.4 }} 
                animate={{ scale:1 }} /> */}
            
        <motion.div 
            className={styles.UsernameLogo}
            transition={{ delay:0.4, duration:0.4 }}
            initial={{opacity:0}}
            animate={{ opacity:1 }}>
            <motion.img 
                className={styles.UsernameLogoImg}
                src={LogoUser} 
                transition={{ delay:0.4, duration:0.4 }}
                initial ={{opacity:0}}
                animate={{ opacity:1 }} />
        </motion.div>

        <motion.div className={styles.BoxUsername} >
            <motion.input 
                type="text" 
                placeholder="USERNAME" 
                className={styles.InputUsername}
                transition={{ delay:0.8, duration:0.3 }}
                initial={{opacity:0}}
                animate={{ opacity:1 }}
                />

                {/* <motion.img 
                src={LogoUsername}  
                transition={{ delay:0.8, duration:0.3 }}
                animate={{ opacity:1 }}
                /> */}

            </motion.div>
            
        <motion.div>

            <motion.input 
                type="text" 
                placeholder="PASSWORD" 
                className={styles.InputPassword}
                transition={{ delay:1.1, duration:0.3 }}
                initial={{opacity:0}}
                animate={{ opacity:1 }}
                />

            {/* <motion.img 
                src={LogoPassword}
                transition={{ delay:1.1, duration:0.3 }}
                animate={{ opacity:1 }}
                /> */}
        </motion.div>

        <motion.div className={styles.LupaPassword}>
                <motion.input 
                type="radio" 
                value="Remember me"
                 transition={{delay:1.3,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                /><motion.label
                 transition={{delay:1.3,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                >
                Remember Me    
                </motion.label>


                <motion.label className={styles.LupaPasswordLink}
                 transition={{delay:1.3,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                >
                Forgot Password
                </motion.label>
        </motion.div>

                <motion.input type="submit" 
                value="LOGIN"
                className={styles.InputButton}
                transition={{delay:1.8,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                />
        </motion.div>
     )}

 export default Index ;
