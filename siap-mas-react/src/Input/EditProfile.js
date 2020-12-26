import React,{ Component } from "react";
import { motion } from "framer-motion";
import LogoUser from '../assets/LoginLogo.png';
import './EditProfile.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UpdateUser from '../store/actions/UpdateUser'


class EditPr extends Component {
    state = {
        isActive : false,
        Email: '',
        Nama: '',
        No_hp:'',
        Alamat:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        this.props.UpdateUser(this.state)
    }

    render(){
        const { profile } = this.props;
        const Profil = this.Profile;
        return(<Profil profile={profile} />
            )
        }

Profile = (props) => {
    
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
         <input type="text" onChange={this.handleChange} id="Email" className="Email" placeholder={props.profile.Email} >
             
         </input>
         </div>
    
    <div className="divButton2">
        <motion.input
        type="submit"
        onClick={this.handleSubmit}
        className="InputEditPr"
        value="Simpan Peruban" 
        whileHover={{scale:1.2}}
        ></motion.input>
        </div>
 </div>
 <div className="div-nama">
        Nama
        <div className="titik">
    :
    </div>
    <div className="divNamaUser">
         <input type="text" id="Nama" onChange={this.handleChange} className="NamaU" placeholder={props.profile.Nama}>
             
         </input>
         </div>
 </div>
<div className="div-hp">
No HP
<div className="titik">
    :
    </div>
    <div className="divNomerHp">
         <input type="text" id="No_hp" onChange={this.handleChange} className="NomerHp" placeholder={props.profile.No_hp}>
             
         </input>
         </div>
</div>
<div className="div-alamat">
Alamat
<div className="titik-2">
    :
    </div>
    
    <div className="divAlamatUser">
         <input type="text" id="Alamat" onChange={this.handleChange} className="AlamatUser" placeholder={props.profile.Alamat}>
             
         </input>
         </div>
        
</div>

</motion.div>

 
 
</div>)
}}

const mapDispatchToProps = (dispatch) => {
    return{
    UpdateUser:(User) => dispatch(UpdateUser(User))
    }   
   }

const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.authm,
      profile:state.firebase.profile
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(EditPr) ;
