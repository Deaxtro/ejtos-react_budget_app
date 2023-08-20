import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const MaxBudget=20000;
const Budget =()=>{
    const {budget,expenses,currency,dispatch}=useContext(AppContext);
    const totalExpenses=expenses.reduce((total,item)=>{
        return (total+=item.cost);
     },0);
    const BudgetChange=(event)=>{
        const inputVal=Number(event.target.value);

        if(Number.isNaN(inputVal)){
            alert("Please enter a valid number!");
            return;
        }

        if(!Number.isInteger(inputVal)){
            alert("Please enter an integer value!");
            return;
        }

        if(inputVal<totalExpenses){
            alert("Budget cannot be lower than expenses: "+currency+totalExpenses);
       
        }

        if(inputVal>MaxBudget){
            alert("Budget cannot be higher than max limit of: "+currency+MaxBudget);
        
        }

        else{
            dispatch({
                type: "SET_BUDGET",
                payload: inputVal,
            });
            
        }
    };
    return(
        <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={BudgetChange}
        ></input>
      </div>
    </div>
    );
};
export default Budget;