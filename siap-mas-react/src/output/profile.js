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
        </div>
    Email 
    <div className="titik">
    :asunayuuki289@gmail.com     
    </div>
 </div>
 <div className="div-nama">
        Nama
        <div className="titik">
    :RizkyAkbar
    </div>
 </div>
<div className="div-hp">
Telp
<div className="titik">
    :08165428465
    </div>
</div>
<div className="div-alamat">
Alamat
<div className="titik-2">
    :Bondowoso
    </div>
</div>
<Link to="/EditProfile">
<button style={{ height:"40px",width:"100px",paddingTop:"2px",paddingBottom:"2px",float:"right",marginTop:"80px",marginRight:"20px" }} className="InputButton"> Edit </button>
</Link>
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
