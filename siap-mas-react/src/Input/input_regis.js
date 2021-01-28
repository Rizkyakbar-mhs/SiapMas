import React,{ Component } from 'react';
import { motion } from "framer-motion";
import './input.css';   
import {connect} from 'react-redux'
import {SignUp} from '../store/actions/SignUp'
import { Link } from 'react-router-dom';

class Inpt extends Component {
    state ={
        Nip:'',
        nama:'',
        hp:'',
        email:'',
        password:'',
        konfirm:'',
        Alamat:''
    }

    handleChange = (e) =>{
        this.setState({
        [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.SignUp(this.state);
    }

    componentDidMount(){
        document.title = "SIAPMAS - OBAT";
        document.body.className = "backgroundInpt";
    }
    render() {
        return(
<div>
    <div>
        <div className="container-form">
        <h2 align="center">Registrasi</h2>
        <div className="div1">
        <motion.input 
                    type="text" 
                    placeholder="Masukkan Nip" 
                    id="Nip"
                    onChange={this.handleChange}
                    className="InputNip"
                    transition={{delay:0.5 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div2    ">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Nama" 
                    id="nama"
                    onChange={this.handleChange}
                    className="InputPasswords"
                    transition={{delay:0.5 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div  className="div4">
                    <motion.input
                    
                    placeholder="No Hp" 
                    id="hp"
                    className="InputKonfirm"
                    onChange={this.handleChange}
                    transition={{delay:0.7 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    
                    <div  className="div3">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Email" 
                    id="email"
                    className="InputNama"
                    onChange={this.handleChange}
                    transition={{delay:0.7 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                
                    </div>
                    <div className="div6">
                    <motion.input 
                    type="text" 
                    placeholder="Konfirmasi Password" 
                    id="konfirm"
                    className="InputEmail"
                    onChange={this.handleChange}
                    transition={{delay:1 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div7">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Password" 
                    id="password"
                    className="InputAlamat"
                    onChange={this.handleChange}
                    transition={{delay:1 ,duration:0.5}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div1">
                    <motion.textarea 
                    type="text" 
                    placeholder="Alamat" 
                    id="Alamat"
                    className="InputHp"
                    onChange={this.handleChange}
                    transition={{delay:1.2 ,duration:0.5}}
                        initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <Link to="/Dashboard">
                    <div className="div5">
                    <motion.input type="submit" 
                    // onClick={this.handleSubmit}
                    transition={{delay:1.2 ,duration:0.5}}
                    initial={{scale:0}}
                    animate={{scale:1}}
                    whileTap={{opacity:0}}
                        value="Daftar"
                        className="Inputtombol"/>
                    </div>
                    </Link>
     </div>
</div>
</div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        SignUp:(newUser) => dispatch(SignUp(newUser))
    }   
   }
export default connect(null,mapDispatchToProps)(Inpt);