import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';

import { SidebarContents } from "./Sidebar";
import Navbar from "./Navbar";
import { getProfile } from "../../redux/profile/ProfileActions";

import '../../styles/pages/PagesContainer.css';

const PagesContainer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const session = sessionStorage.getItem('isMySessionActive');
        if(!session) {
            navigate('/auth/login');
        }
        else {
            if(token)
                dispatch(getProfile("user/getinfo", {}))
        }
    }, [token]);

    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const now = new Date();
        const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0, 0); // 11am
        const timeUntilTarget = targetTime - now;
        if (timeUntilTarget > 0) {
            const timeoutId = setTimeout(() => {
            const lastShown = localStorage.getItem('popupLastShown');
            const today = new Date().toDateString();
            }, timeUntilTarget);
            return () => clearTimeout(timeoutId);
        }
       
    }, []);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="pagesContainer"
        >

            <Grid item className="sidebar" sx={{ display: { xs: 'none', lg: 'block' }, backgroundColor: "#52045e)" }} xs={2}>
                <SidebarContents />
            </Grid>

            <Grid item xs>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item style={{ width: "100%" }}>
                        <Navbar toggleSidebar={setShowSidebar} />
                    </Grid>

                    <Grid item className="outlet-box">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default PagesContainer;