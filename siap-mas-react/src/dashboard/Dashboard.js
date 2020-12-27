import React, { Component } from 'react';
import { motion } from "framer-motion";
import './index.css';
import SignOut from '../store/actions/SignOut'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

    const Dash = (props) => {
    return(
    <motion.div>
        <motion.div>

            <motion.div className="Polygon-Warp Polygon-0 ">
                <motion.div className="Polygon">
                    <Link to="/profile">
                        <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }}
                            className="Polygon-2-Img">
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
             
            <motion.div className="Polygon-Warp Polygon-1">
                <motion.div className="Polygon Polygon-1">
                    <Link to="/regis">
                        <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }}
                            className="Polygon-1-Img">
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        
            <motion.div className="Polygon-Warp Polygon-2 ">
                <motion.div className="Polygon">
                    <Link to="/profile">
                        <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }}
                            className="Polygon-5-Img">
                        </motion.div>
                     </Link>
                </motion.div>
            </motion.div>
        
            <motion.div className="Polygon-Warp Polygon-3 ">
                <motion.div className="Polygon">
                    <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }} 
                        role="Button" onClick={props.SignOut} className="Polygon-6-Img">
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className="Polygon-Warp Polygon-4 ">
                <motion.div className="Polygon">
                    <Link to="/obat">
                        <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }}
                            className="Polygon-4-Img">
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className="Polygon-Warp Polygon-5 ">
                <motion.div className="Polygon">
                    <Link to="/Report">
                        <motion.div whileHover={{ scale:0.96, transition: { duration: 0.25 } }}
                            className="Polygon-3-Img">
                        </motion.div>
                    </Link> 
                </motion.div>
            </motion.div>
                
        </motion.div>
        </motion.div>
        )
    }
        
    const mapDispatchToProps = (dispatch) => {
        return {
            SignOut: () => dispatch(SignOut())
        }
    }

export default connect(null, mapDispatchToProps)(Dash);