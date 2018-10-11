import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './../asset/css/listItem.css';


export default withRouter((props) => {
    return (
        <div className="list-container" onClick={()=>{
            props.history.push('/detail/'+props.elem.product_id)
        }}>
            <div className="list-img">
                <img src={props.elem.img} alt=""/>
            </div>

            <div className="list-detail">
                <p className="list-title">{props.elem.product_name}</p>
                <p className="list-voucher">{props.elem.description}</p>
                <div>
                    <span className="list-online-price">￥{props.elem.price} </span>
                    <span className="list-door-price">门市价:{props.elem.discount_price}</span>
                    <span className="list-sold">{props.elem.num}已售</span>
                </div>
            </div>
        </div>
    )
})