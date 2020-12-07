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
     <input 
                    type="text" 
                    placeholder="Masukkan Nip" 
                    id="Nip"
                    className="InputNip"/>
                    </div>
                    <div className="div2    ">
                    <input 
                    type="text" 
                    placeholder="Masukkan Password" 
                    id="Nip"
                    className="InputPasswords"/>
                    </div>
                    <div  className="div4">
                    <input 
                    type="text" 
                    placeholder="Konfirmasi Password" 
                    id="Nip"
                    className="InputKonfirm"/>
                    </div>

                    <div  className="div3">
                    <input 
                    type="text" 
                    placeholder="Masukkan Nama" 
                    id="Nip"
                    className="InputNama"/>
                    </div>
                    <div className="div1">
                    <input 
                    type="text" 
                    placeholder="Masukkan Email" 
                    id="Nip"
                    className="InputEmail"/>
                    </div>
                    <div className="div1">
                    <input 
                    type="text" 
                    placeholder="Masukkan Alamat" 
                    id="Nip"
                    className="InputAlamat"/>
                    </div>
                    <div className="div1">
                    <input 
                    type="text" 
                    placeholder="Masukkan Nomer Handphone" 
                    id="Nip"
                    className="InputHp"/>
                    </div>
                    
     </div>
     

   

       
       
        
</div>
</div>
)
}

export default Inpt;