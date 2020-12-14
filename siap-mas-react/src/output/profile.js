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

        const mapStateToProps = (state) => {
            console.log(state);
        }

    
         return(
            <div>
        
     <div className="container-form-profile">
     <div className="div-nip">
     <div className="tulisan">
            PROFIL
            </div>
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
   
     
     <div className="bulat">
     <div className="profile-img">
    </div>
     </div>

   

       
       
        
</div>)
    }
}
export default Pr ;
