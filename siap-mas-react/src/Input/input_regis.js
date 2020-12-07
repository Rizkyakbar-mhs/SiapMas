import React,{ Component } from 'react';
import { motion } from "framer-motion";
import './input.css';   

class Inpt extends Component {

    componentDidMount(){
        document.title = "SIAPMAS - OBAT";
        document.body.className = "backgroundInpt";
    }
    render() {
        return(
            <Input />
        )
    }
}
function Input () {
return(
    <div>
<div>
        
     <div className="container-form">

     <div className="div1">
     <motion.input 
                    type="text" 
                    placeholder="Masukkan Nip" 
                    id="Nip"
                    className="InputNip"
                    transition={{delay:0.2,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div2    ">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Password" 
                    id="Password"
                    className="InputPasswords"
                    transition={{delay:0.7,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div  className="div4">
                    <motion.input 
                    type="text" 
                    placeholder="Konfirmasi Password" 
                    id="Konfirmasi"
                    className="InputKonfirm"
                    transition={{delay:0.8,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    
                    <div  className="div3">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Nama" 
                    id="Nama"
                    className="InputNama"
                    transition={{delay:0.3,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div1">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Email" 
                    id="Email"
                    className="InputEmail"
                    transition={{delay:0.4,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div1">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Alamat" 
                    id="Alamat"
                    className="InputAlamat"
                    transition={{delay:0.5,duration:1}}
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div1">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Nomer Handphone" 
                    id="Nomer_hp"
                    className="InputHp"
                    transition={{delay:0.6,duration:0.5}}
                        initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div5">
                    <motion.input type="submit" 
                    transition={{delay:0.9,duration:0.5}}
                    initial={{scale:0}}
                    animate={{scale:1}}
                    whileTap={{opacity:"0"}}
                        value="Daftar"
                        className="Inputtombol"/>
                    </div>
     </div>
     

   

       
       
        
</div>
</div>
)
}

export default Inpt;