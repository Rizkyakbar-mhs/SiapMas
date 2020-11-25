import React,{ useState } from "react";
import LogoUser from '../assets/LoginLogo.png';
import styles from './home.css';
import { motion } from "framer-motion";
 function Index() {

    const s = 10;
    const shadowColor = `rgb(142, 141, 141)`;


    const click = {
        up: {
          x: -s * 1.5,
          y: -s * 1.5,
          boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`
        },
        static: { x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}` },
        down: { x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }
      };

     return(
        <motion.div 
            className={styles.container}
            initial={{ scale:0 }}
            animate={{ scale:1, x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}` }}
            whileHover={{ scale:1.02, x:"-1%", x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
            transition={{ duration:0.4 }}>
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
                transition={{delay:1.7,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                >
                Forgot Password
                </motion.label>
        </motion.div>
                <motion.div 
                    style={{ padding:0 }}
                    animate={{ x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}` }}
                    whileHover={{  x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
                    whileTap={{ x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }}
                    className={styles.containerInput}
                    transition={{ boxShadow: { velocity: 0 }, default: { type: "spring" }}}>
                    <motion.input type="submit" 
                    className={styles.InputButton}
                    value="LOGIN"
                    transition={{delay:2.1,duration:0.4,}}
                    initial={{ opacity:0, }}
                    animate={{ opacity:1 }}
                    />
                </motion.div>
        </motion.div>
     )}

 export default Index ;
