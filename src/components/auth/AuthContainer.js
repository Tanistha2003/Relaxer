import React from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';

import Card from '@mui/material/Card';

import GoogleAuth from "./GoogleAuth";
import LogoColoured from '../../assets/images/LogoColoured.png';
import '../../styles/Auth.css';

const AuthContainer = () => {
    return (
        <>
            <div className="googleAuthContainer">
                <Card className="authCard">
                    <img src={LogoColoured} alt="logo" width="150px" className="logo" />

                    <GoogleOAuthProvider clientId="468790857089-jqb3p8u713qaiq90ulrbgk17n12sqnf3.apps.googleusercontent.com">
                        <GoogleAuth />
                    </GoogleOAuthProvider>
                </Card>
            </div>
            
        </>
    );
}

export default AuthContainer;