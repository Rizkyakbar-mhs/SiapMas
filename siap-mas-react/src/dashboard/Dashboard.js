import React, { Component } from 'react';
import { motion } from "framer-motion";
import './index.css';
import SignOut from '../store/actions/SignOut'
import { connect } from 'react-redux'

    const Dash = (props) => {
        return(
            <div>
        <div>
                <div className="Polygon-Warp Polygon-0 ">
                    <div className="Polygon">
                    <div className="Polygon-2-Img"></div>
                    </div>
                </div>
             
                <div className="Polygon-Warp Polygon-1">
                    <div className="Polygon Polygon-1">
                    <div className="Polygon-1-Img"></div>
                </div>
            </div>
        
            <div className="Polygon-Warp Polygon-2 ">
                    <div className="Polygon">
                    <div className="Polygon-3-Img"></div>
                    </div>
                </div>
        
                <div className="Polygon-Warp Polygon-3 ">
                    <div className="Polygon">
                    <div className="Polygon-5-Img"></div>
                    </div>
                </div>
                <div className="Polygon-Warp Polygon-4 ">
                    <div className="Polygon">
                    <div className="Polygon-4-Img"></div>
                    </div>
                </div>
                <div className="Polygon-Warp Polygon-5 ">
                    <div className="Polygon">
                    <div role="Button" onClick={props.SignOut} className="Polygon-6-Img">
                    </div>
                    </div>
                </div>
                
        </div>
        </div>
        )
    }
        
    const mapDispatchToProps = (dispatch) => {
        return {
            SignOut: () => dispatch(SignOut())
        }
    }

export default connect(null, mapDispatchToProps)(Dash);