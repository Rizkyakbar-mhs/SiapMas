import React,{ Component } from 'react';
import { motion } from "framer-motion";
import './Obat.css';   

class Obt extends Component {

    componentDidMount(){
        document.title = "SIAPMAS - OBAT";
        document.body.className = "backgroundHome";
    }
    render() {
        return(
            <Obat />
        )
    }
}
function Obat () {
return(
    <div>
<div>
        
     
       

   

       
        <div className="Polygon-yellow-shadow Polygon-yellow ">
            <div className="Polygon-l">
            <div className="obat-3-img"></div>
            </div>
            </div>
            <div className="Polygon-red-shadow Polygon-red ">
            <div className="Polygon-n">
            <div className="obat-2-img"></div>
            </div>
            </div>

            <div className="Polygon-green-shadow  Polygon-green ">
            <div className="Polygon-G">
            <div className="obat-1-img"></div>
            </div>
            </div>
       
        
</div>
</div>
)
}

export default Obt;