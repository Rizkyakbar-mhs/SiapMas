import React,{ Component } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './Home.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../store/actions/SignIn';

class Login extends Component {
    state = {
        isActive : false,
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }


    render(){
        const s = 10;
        const shadowColor = `rgb(142, 141, 141)`;
        const { authError } = this.props;
    
    
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
             <div>
            <motion.div 
                className="container"
                onHoverStart={() => this.setState({ isActive: true })}
                onHoverEnd={() => this.setState({ isActive: false })}
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
            <form onSubmit={this.handleSubmit}>
            <motion.div className="BoxUsername"
                        whileHover={{ scale:1.1, }} >
                <motion.input 
                    type="text" 
                    placeholder="USERNAME" 
                    id="email"
                    className="InputUsername"
                    onChange={this.handleChange}
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
                    id="password"
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
                    animate={ this.state.isActive ? {opacity:1, x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}`} : {opacity:0} }
                    whileHover={{  x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}` }}
                    whileTap={{ x: -3, y: -3, boxShadow: `3px 3px 0 ${shadowColor}` }}
                    className="containerInput"
                    transition={{ duration:0.4, boxShadow: { velocity: 0 }, default: { type: "spring" }}}>
                      <Link to="/home"> 
                        <motion.input type="submit" 
                        className="InputButton"
                        onClick={this.handleSubmit}
                        value="LOGIN"
                        />
                      </Link>
            </motion.div>
            <div> { authError ? <p style={{ color:"red" }}>{ authError }</p> : null }</div>
            </form>
            </motion.div>
            
            <marquee direction="left" className="marquee"> Date now ||Selamat Datang di Sistem Informasi Apotek Puskesmas,Silahkan Login menggunakan username dan password yang telah and miliki|| copy right by Siap-Mas Dev-Team </marquee>
            </div>
            
         )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(Login) ;
