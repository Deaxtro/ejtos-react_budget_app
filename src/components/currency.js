import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency=()=>{
    const {currency,dispatch}=useContext(AppContext);
    const [isOpen, setIsOpen]=useState(false);

    const currencyChange=(currency)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: currency,
        });
    };

    const currency_label=()=>{
        switch(currency){
            case '$':
                return("$ Dollar");
            case '£':
                return("£ Pound");
            case '€':
                return("€ Euro");
            case '₹':
                return("₹ Rupee");
            default:
                return("£ Pound")
        }
    };

    return(
        <div id="currency-menu" className="dropdown" style={{cursor: "pointer"}}>
            <button
                id="currency-menu-button"
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{backgroundColor: "#93e399", color: "#fff"}}
                onClick={()=>setIsOpen(!isOpen)}
            >Currency{'('}{currency_label()}{')'}</button>
            <ul className={`custom-menu dropdown-menu ${isOpen?'show':''}`}>
                <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={()=>currencyChange('$')}
                    >$ Dollar</button>
                </li>
                 
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={()=>currencyChange('£')}
                    >£ Pound</button>
                </li>

                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={()=>currencyChange('€')}
                    >€ Euro</button>
                </li>

                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={()=>currencyChange('₹')}
                    >₹ Rupee</button>
                </li>
            </ul>
        </div>
    );
};

export default Currency;