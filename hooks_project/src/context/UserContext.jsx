

// ! step 1 : create the context 

import { createContext, useContext, useState } from "react";

let userContext = createContext();

// ! 2. creating component 

let UserProvider =({children})=>{
    let [number ,setNumber]    = useState(0)
    
    let increaseNumber =()=>{
      setNumber(number+1)
    }
    let decreaseNumber =()=>{
      setNumber(number-1)
    }
    return(
        <userContext.Provider value={{sim:"jio", network:"5G", talktime :"unlimited",number,increaseNumber,decreaseNumber}}>
            {children}
        </userContext.Provider>
    )
}

// ! custom hook

export let useMyhook =()=>{
     return useContext(userContext);
}

export default UserProvider;