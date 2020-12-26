import React,{ Component } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './EditProfile.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class EditPr extends Component {
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
        const { profile } = this.props;
        return( <Profile profile={profile} />)
}
}

const Profile = (props) => {
    
    const s = 10;
    const shadowColor = `rgb(142, 141, 141)`;
     return(
        <div>
    
 <motion.div className="container-form-edit-profiles"
 initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{delay:1 , duration:1.2}}
 >
 <div className="div-nip">
 <div className="tulisan">
        PROFIL
        </div>
    Email 
    <div className="titik">
    :  
    </div>
    <div className="divEmail">
         <input type="text" className="Email" placeholder="Email">
             
         </input>
         </div>
         <div className="divButton2">
         <motion.input type="submit" className="InputEditPr" value="Simpan Peruban" 
         whileHover={{scale:1.2}}
         >
             
         </motion.input>
         </div>
 </div>
 <div className="div-nama">
        Nama
        <div className="titik">
    :
    </div>
    <div className="divNamaUser">
         <input type="text" className="NamaU" placeholder="Nama">
             
         </input>
         </div>
 </div>
<div className="div-hp">
No HP
<div className="titik">
    :
    </div>
    <div className="divNomerHp">
         <input type="text" className="NomerHp" placeholder="Nomer Handphone">
             
         </input>
         </div>
</div>
<div className="div-alamat">
Alamat
<div className="titik-2">
    :
    </div>
    
    <div className="divAlamatUser">
         <input type="text" className="AlamatUser" placeholder="Alamat">
             
         </input>
         </div>
        
</div>

</motion.div>

 
 
</div>)
}


const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.authm,
      profile:state.firebase.profile
    }
  }
export default connect(mapStateToProps)(EditPr) ;
