import React, { Component } from 'react'
import LogoUser from '../assets/LoginLogo.png';
import './lupa.css';
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { resetPass } from "../store/actions/ResetPass";

class LupaPass extends Component {
    state = {
        email: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const s = 10;
        const shadowColor = `rgb(142, 141, 141)`;
        return(
            <div className="container">
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

                <motion.div 
                whileHover={{ scale:1.1 }}>

            <motion.input 
                type="text" 
                placeholder="Email" 
                className="InputUsername"
                id="email"
                onChange={this.handleChange}
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
        <motion.div 
                initial={{ opacity:0 }}
                style={{ padding:0 }}
                animate={{opacity:1, x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}`}}
                whileHover={{  x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
                whileTap={{ x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }}
                className="containerInput1"
                transition={{ duration:0.4, boxShadow: { velocity: 0 }, default: { type: "spring" }}}>
        <motion.input type="submit" 
                    className="InputButton"
                    value="Lupa Password"
                    onClick={this.handleSubmit}
                    />
                    </motion.div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetPass: (creds) => dispatch(resetPass(creds))
    }
}
export default connect(null,mapDispatchToProps)(LupaPass);