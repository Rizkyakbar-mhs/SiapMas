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
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div2    ">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Nama" 
                    id="Password"
                    className="InputPasswords"
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div  className="div4">
                    <motion.input
                    
                    placeholder="No Hp" 
                    id="Konfirmasi"
                    className="InputKonfirm"
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    
                    <div  className="div3">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Email" 
                    id="Nama"
                    className="InputNama"
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                
                    </div>
                    <div className="div6">
                    <motion.input 
                    type="text" 
                    placeholder="Konfirmasi Password" 
                    id="Email"
                    className="InputEmail"
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div7">
                    <motion.input 
                    type="text" 
                    placeholder="Masukkan Password" 
                    id="Alamat"
                    className="InputAlamat"
                    initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div1">
                    <motion.textarea 
                    type="text" 
                    placeholder="Alamat" 
                    id="Nomer_hp"
                    className="InputHp"
                        initial={{scale:0}}
                        animate={{scale:1}}
                    />
                    </div>
                    <div className="div5">
                    <motion.input type="submit" 
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