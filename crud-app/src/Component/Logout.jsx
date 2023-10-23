import React, { useState } from "react";
import { Box, Typography, styled } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Logouti from '../Assets/Images/logout.gif';
import { useCookies } from "react-cookie";


const Image = styled('img')({
  width: '50%',
  height: '50%'
});

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  removeCookie("token");
  const timer = setTimeout(() => {
    clearCacheData()
    navigate("/login");
    window.location.reload(true);
  }, 3000);

  const clearCacheData = () => {
    caches.keys().then((names) => {
        names.forEach((name) => {
            caches.delete(name);
        });
    });
};

  return (
    <div className="logout">
      <h2>Logout</h2>
      <Box style={{display: 'flex'}}>
                <Image src={Logouti} />
            </Box>
    </div>
  );
};

export default Logout;