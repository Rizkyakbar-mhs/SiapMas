import React,{ useState } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './Home.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
 const HomeIndex = () => {
    const s = 10;
    const shadowColor = `rgb(142, 141, 141)`;
    const [isActive, setActive] = useState(false);


    // const click = {
    //     up: {
    //       x: -s * 1.5,
    //       y: -s * 1.5,
    //       boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`
    //     },
    //     static: { x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}` },
    //     down: { x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }
    //   };

     return(
        <motion.div 
            className="container"
            onHoverStart={() => setActive(true)}
            onHoverEnd={() => setActive(false)}
            initial={{ scale:0 }}
            animate={{ scale:1, x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}` }}
            whileHover={{ scale:1.02, x: -12 * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
            transition={{ duration:0.4 }}>
            {/* <motion.img 
                src={LoginBox}
                initial={{ width:"25%",height:"60%",x:"290%",y:"36%",scale:0 }} 
                transition={{ duration:0.4 }} 
                animate={{ scale:1 }} /> */}
            
        <motion.div 
            className="UsernameLogo"
            transition={{ delay:0.4, duration:0.4 }}
            initial={{opacity:0}}
            animate={{ opacity:1 }}>
            <motion.img 
                className="UsernameLogoImg"
                src={LogoUser} 
                transition={{ delay:0.4, duration:0.4 }}
                initial ={{opacity:0}}
                animate={{ opacity:1 }} />
        </motion.div>
        <form>
        <motion.div className="BoxUsername"
                    whileHover={{ scale:1.1, }} >
            <motion.input 
                type="text" 
                placeholder="USERNAME" 
                className="InputUsername"
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
            
        <motion.div 
                whileHover={{ scale:1.1 }}>

            <motion.input 
                type="text" 
                placeholder="PASSWORD" 
                className="InputPassword"
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

        <motion.div className="LupaPassword">
        <input className="inp-cbx" id="cbx" type="checkbox" style={{display:"none"}} />
            <label className="cbx" htmlFor="cbx">
                <span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1">
                        </polyline>
                    </svg>
                </span>
                <span>
                    Remember Me
                </span>
            </label>
                    {/* <motion.input 
                type="checkbox" 
                value="Remember me"
                transition={{delay:1.3,duration:0.4, type:"spring", bounceDamping:100}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                {/* /> 
                <motion.label
                transition={{delay:1.3,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                >
                Remember Me    
                </motion.label> */}

            <Link to='/LupaPassword'>
                <motion.label className="LupaPasswordLink"
                transition={{delay:1.7,duration:0.4}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                >
                Forgot Password
                </motion.label>
            </Link>
        </motion.div>
        <motion.div 
                initial={{ opacity:0 }}
                style={{ padding:0 }}
                animate={ isActive ? {opacity:1, x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}`} : {opacity:0} }
                whileHover={{  x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
                whileTap={{ x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }}
                className="containerInput"
                transition={{ duration:0.4, boxShadow: { velocity: 0 }, default: { type: "spring" }}}>
                  <Link to="/home"> 
                    <motion.input type="submit" 
                    className="InputButton"
                    value="LOGIN"
                    />
                  </Link>
        </motion.div>
        </form>
        </motion.div>
     )}

 export default HomeIndex ;
