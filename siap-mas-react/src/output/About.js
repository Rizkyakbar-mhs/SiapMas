import React,{ Component } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './profile.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class About extends Component {
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
    
 <div className="container-form-profile">
 <div><br/>
        <h2 align="center">PROFIL</h2>
        </div>
    <div>
    <br/><br/>
    SIAP MAS atau Sistem Informasi Apotek Puskesmas adalah Sistem Informasi yang bergerak pada bidang farmasi
    untuk pengelolaaan data obat-obatan dan Alkes dari Puskesmas Sumber Wringin Bondowoso dan puskesmam pembantu, untuk
    bertujuan untuk mempermudah dalam pencatatan data obat-obatan    
    </div>
 </div>
 </div>)
}


const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.authm,
      profile:state.firebase.profile
    }
  }
export default connect(mapStateToProps)(About) ;
