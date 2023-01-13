    import React,{useState} from 'react';


    function Profile() 

    {
                
        const [loggedIn, setLoggedIn]=useState(3) 
    
//1,2,3
        return ( 
            <div>
            {loggedIn==1?
            <h1>Wellcome user 1</h1>:loggedIn==2?
            <h1>Wellcome user 2</h1>:
            <h1>Wellcome user 3</h1>  }
            </div>
            )
        } 
    export default Profile; 