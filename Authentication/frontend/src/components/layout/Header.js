import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

class Header extends Component {
   
    render() { 
        return ( 
            <header className="header">
                <Link to="/"><h2 className="title">Watch-Party Authentication</h2></Link>
                <AuthOptions />
            </header>
         );
    }
}
 
export default Header;