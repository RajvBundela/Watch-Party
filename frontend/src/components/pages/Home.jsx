import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <h3>Welcome {userData.user.displayName}</h3>
            ) : (
                <>
                    <h5>NOT LOGGED IN</h5>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;