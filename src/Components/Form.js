import { useState } from "react";
function Reg_Form(){
    const [inputs, setInputs] = useState({});
    return(
<>

        <div className="regForm">
            
       <h2>Registration From</h2>
<br></br>
<div className="div">
        <form>
            <label>Enter name :  </label>
            <input type="text" onChange={(e)=>{setInputs ({name: e.target.value})}}></input>
            <br></br><br></br>
            <label>Enter age :  </label>
            <input type="number" onChange={(e) => {setInputs ({age: e.target.value})}}></input>
            <br></br><br></br>
            <label>Enter email id :  </label>
            <input type="email" onChange={(e)=> {setInputs ({email: e.target.value})}}></input>
            <br></br><br></br>
            <label>Enter phone number :  </label>
            <input type="text" onChange={(e) => {setInputs ({phone: e.target.value})}}></input>
            <br></br><br></br>
            <button type="submit" className="subBtn">Submit</button>
        </form>
    </div>
        </div>
    
    </>
    );
}
export default Reg_Form;