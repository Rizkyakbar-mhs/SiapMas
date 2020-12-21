import React,{ Component } from 'react';
import { motion } from "framer-motion";
import './dataObt.css';   
import {connect} from 'react-redux'
import {SignUp} from '../store/actions/SignUp'

class DataObts extends Component {
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
    this.props.SignUp(this.state);
    console.log(this.state);
}

    componentDidMount(){
        document.title = "SIAPMAS - OBAT";
        document.body.className = "backgroundInpt";
    }
    render() {
        return(
            <div>
<div>
        
     <div className="container-obat">

     <div className="divo">
        
       
         <label className="label1">
             No. Obat
         </label>
         
     </div>
     <div className="divI">
     <input type="text" className="InputKodeObat">
         </input>
     </div>
     <div className="divN">
     <label className="label2">
     Nama Obat
     </label>
     </div>
     <div className="divN1">
         <input type="text" className="NamaObat">

         </input>
     </div>
     <div className="divQTY">
         <label>
             QTY
         </label>
     </div>
     <div className="divIQTY">
         <input type="number" className="QTY">

         </input>
     </div>
     <div className="divHrg">
         <label className="label3">
             Harga
         </label>
     </div>
     <div className="divIHrg">
         <input type="number" className="HRG">

         </input>
     </div>
     <div className="divDate">
         <label className="label4">
             Date
         </label>
     </div>
     <div className="divIDate">
         <input type="date" className="Date">
             
         </input>
     </div>
     <div className="divButton">
     <input type="submit" className="InputSubmitObat" value="Tambah Obat">

     </input>

     </div>
    

    
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
export default connect(null,mapDispatchToProps)(DataObts);