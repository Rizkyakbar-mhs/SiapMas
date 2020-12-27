import React,{ Component } from 'react';
import { motion } from "framer-motion";
import './DetailObat.css';   
import {connect} from 'react-redux'
import InputProduct from '../store/actions/InputProduct'


class DetailObat extends Component {
    state ={
        Code:'',
        Name:'',
        Qty:'',
        Price:'',
        Date:''
    }

    handleChange = (e) =>{
        this.setState({
        [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.InputProduct(this.state);
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
        
     <motion.div className="container-obat"
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:1, duration:1.5}}
     >

     <div className="divo">
        
       
         <label className="label1">
             No. Obat
         </label>
         
     </div>
     <div className="divI">
     <input type="text" id="Code" onChange={this.handleChange} className="InputKodeObat">
         </input>
     </div>
     <div className="divN">
     <label className="label2">
     Nama Obat
     </label>
     </div>
     <div className="divN1">
         <input type="text" id="Name" onChange={this.handleChange} className="NamaObat">

         </input>
     </div>
     <div className="divQTY">
         <label>
             QTY
         </label>
     </div>
     <div className="divIQTY">
         <input type="number" id="Qty" onChange={this.handleChange} className="QTY">

         </input>
     </div>
     <div className="divHrg">
         <label className="label3">
             Harga
         </label>
     </div>
     <div className="divIHrg">
         <input type="number" id="Price" onChange={this.handleChange} className="HRG">

         </input>
     </div>
     <div className="divDate">
         <label className="label4">
             Exp Date
         </label>
     </div>
     <div className="divIDate">
         <input type="date" id="Date" onChange={this.handleChange} className="Date">
             
         </input>
     </div>
     <div className="divButton">
     <motion.input type="submit" onClick={this.handleSubmit} className="InputSubmitObat" value="Tambah Obat"
     whileHover={{scale:1.2}}
     >

     </motion.input>

     </div>
    

    
                    </motion.div>
     </div>
     

   

       
       
        
</div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        InputProduct:(product) => dispatch(InputProduct(product))
    }   
   }
export default connect(null,mapDispatchToProps)(DetailObat);