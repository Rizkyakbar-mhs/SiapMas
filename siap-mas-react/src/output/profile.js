import React,{ Component } from "react";
import LogoUser from '../assets/LoginLogo.png';
import './profile.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


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
 <div className="div-nip">
 <div className="tulisan">
        PROFIL
        </div>
    Email 
    <div className="titik">
    :{props.profile.Email}        
    </div>
 </div>
 <div className="div-nama">
        Nama
        <div className="titik">
    :{props.profile.Nama}
    </div>
 </div>
<div className="div-hp">
No HP
<div className="titik">
    :{props.profile.No_hp}
    </div>
</div>
<div className="div-alamat">
Alamat
<div className="titik-2">
    :{props.profile.Alamat}
    </div>
</div>
</div>

 
 <div className="bulat">
 <div className="profile-img">
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
export default connect(mapStateToProps)(Pr) ;
