import React,{useState} from "react"
import { useHistory } from "react-router-dom";

function Authentication(){
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // let history = useHistory();


    // useEffect(()=>{
    //     return ( if(isAuthenticated){
    //          setIsLoggedIn(true);
    //          history.pushState('/')        }
    //     )
    // },[isAuthenticated,history])
    
    function submit(e){
e.preventdefault()
    }
   
    
    return(
        <div>

            <h1>Login</h1>
            
            <form onSubmit={submit} id="form">
                <label for="username"></label>
                <input type="text" placeholder="username" name="username" id="name"/>
                <label for="email"></label>
                <input type="email" placeholder="Email" name="email" id="email"/>
                <label for="password"></label>
                <input type="password" placeholder="password" name="password" id="password"/>
              
                <button type="submit">Submit</button>

                 </form>
        </div>
    )
}
export default Authentication 