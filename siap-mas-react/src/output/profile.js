import React,{ Component } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './profile.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


class Pr extends Component {
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
        
     <div className="container-form-profile">
     <div className="div-nip">
        NIP 
        <div className="titik">
        :
        </div>
     </div>
     <div className="div-nama">
            Nama
            <div className="titik">
        :
        </div>
     </div>
<div className="div-hp">
    No HP
    <div className="titik">
        :
        </div>
</div>
<div className="div-alamat">
    Alamat
    <div className="titik-2">
        :
        </div>
</div>
   </div>
     

   

       
       
        
</div>)
    }
}
export default Pr ;
