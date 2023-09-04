import React, { useEffect, useState, useRef } from 'react'
import { Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AppContext from '../Context/store';
import { useContext } from 'react';
import { CopyToClipboard, onCopy } from 'react-copy-to-clipboard';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
import { Router, useRouter } from 'next/router';
import Footer from '../components/Footer';

const FinalResult = () => {

    const contexts = useContext(AppContext);

    const router = useRouter();

    const [finalSearch, setFinalSearch] = useState(contexts.search);
    const [copied, setCopied] = useState(false);

    const harshal = getCookie('keey');

    const handleCopy = () => {
        navigator.clipboard.writeText(harshal);
        alert('URL Copied');
    }


    const homeRedirect = () => {
        router.push("/");
    }

    return (
        <>

            <Box sx={{ px: "2rem", alignItems: "center", justifyContent: "center" }}>
                <Box className="daku" sx={{ maxWidth: "40rem", m: "auto", pt: "2rem", pb: "2rem", }}>
                    <Box sx={{ margin: "auto", maxWidth: "40rem", }}>
                        <Typography sx={{
                            margin: "auto",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#505050", font: " asap,arial",
                            letterSpacing: "0", textAlign: "left"
                        }}>Your shortned URL</Typography>
                    </Box>
                    <Box sx={{ m: "auto", maxWidth: "40.625rem" }}>
                        <Typography sx={{
                            textAlign: "center",
                            fontSize: "0.9rem",
                            fontFamily: "source sans pro,arial",
                            color: "#202020",
                            letterSpacing: "0",
                            textAlign: "left"
                        }}>
                            Copy the shortened link and share it in messages, texts, posts, websites and other locations.
                        </Typography>
                    </Box>
                </Box>

                <Box className="rename" sx={{
                    display: "block",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    height: "14rem",
                    mt: "25px",
                    maxWidth: "40rem",
                    boxShadow: "0 1px 4px #ccc",
                    margin: "auto"

                }}>

                    <Box className="rakesh" sx={{
                        display: "flex",
                        maxHeight: "3.2rem",
                        maxWidth: "21rem",
                        mx: "auto",
                        pt: "3rem"


                    }}>
                        <Box
                            sx={{
                                width: '300',
                                maxWidth: '100%',
                                height: "3.2rem",
                            }}
                        >
                            <TextField type="text"
                                fullWidth id="fullWidth" value={harshal} className="mom" />
                        </Box >
                        <button className="sex" onClick={handleCopy}>
                            Copy URL
                        </button>
                    </Box>

                    <Box className="arjun" sx={{ maxWidth: "21rem", mx: "auto", mt: "5rem", height: "2rem", justifyContent: "center" }}>
                        <button onClick={homeRedirect} className="dighi">Shortner Another URL</button>
                    </Box>

                </Box>

                <Box className="john" sx={{ maxWidth: "40rem", m: "auto", height: "3rem" }}>
                    <Typography sx={{
                        textAlign: "left",
                        font: "Roboto,Helvetica ,Arial,sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        color: "#505050",
                        letterSpacing: "0",
                        pt: "1.7rem"

                    }}> Share URL</Typography>
                    <Box className="vicky" sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", textAlign: "left", float: "left", }}>
                        <button className="facebook"> Facebook</button>
                        <button className='twit'> Twitter</button>
                        <button className="pin">Pintrest</button>
                        <button className="tum">Tumbl</button>

                    </Box>
                </Box>
            </Box>
            <Footer/>
        </>
    );
}

export default FinalResult;