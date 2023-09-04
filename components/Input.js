import React from 'react'
import { Box, Typography } from '@mui/material';
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppContext from '../Context/store';
import { useContext } from 'react';
import axios from 'axios';
//import { searchOne } from '../Store/searchTermSLice';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { setCookie } from 'cookies-next';



const Input = () => {

    const context = useContext(AppContext);

    const router = useRouter();

    const collectResult = async () => {

        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${context.search}`)
            .then(function (response) {
                // handle success
                context.setSearchone(response.data.result.short_link);
               const rohan = response.data.result.short_link;
               setCookie('keey', rohan); 
                //sessionStorage.setItem("mohit", rohan);
             


                console.log(response);
                //   console.log(response.data.result.short_link);
                console.log(context.searchone);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    const handleChnage = (event) => {
        event.target.value;
        context.setSearch(event.target.value);
    }

    const handlesubmit = async (event) => {
        event.preventDefault();
        const res = await collectResult();
        console.log("form submit");
        //  router.push('/FinalResult');
        //  context.setSearchone("");
        const str = context.search;
        checkUrl(str);

    }

    const checkUrl = (str) => {
        const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str)) {
            router.push('/FinalResult');

        }
        else {
            alert("Please Enter A Valid URL");
        }
    }

    return (

        <>
            <form onSubmit={handlesubmit}>
                <Box className="one" sx={{
                    display: "block",
                    justifyContent: "center",
                    margin: "auto",
                    maxWidth: "800px",
                    backgroundColor: "#FFFFFF",
                    height: "250px",
                    mt: "25px",
                    boxShadow: "0 1px 4px #ccc",
                    mb: "17px",

                }} >
                    <Box className="jivan" sx={{ margin: "auto", width: "550pxpx", justifyContent: "center", display: "flex", }}>
                        <Typography className="lets" sx={{
                            margin: "auto", pt: "25px", fontSize: "32px",
                            fontWeight: "bold", color: "#505050", font: " asap,arial",
                            letterSpacing: "0", textAlign: "center"
                        }}>Paste the URL to be shortned</Typography>
                    </Box>

                    <Box
                        className="two"
                        sx={{
                            border: "2px solid red",
                            width: "550px",
                            // maxWidth: '100%',
                            height: "20   px",
                            display: "flex",

                            flexDirection: "row",
                            margin: "auto",
                            border: "none",
                            paddingTop: "25px"
                        }}
                    >
                        <TextField className="laxman" sx={{ border: "none", borderRadius: "none", textDecoration: "none", }} fullWidth label="Enter the link here" id="fullWidth" placeholder='Enter the link here' value={context.search} onChange={handleChnage} />
                        {/*  <Button sx={{
                            width: "170px", border: "none", height: "57px",
                            fontSize: "8px", textDecoration: "none", borderRadius: "none",
                            backgroundColor: "#2c87c5", fontSize: "bold", fontWeight: "bold", letterSpacing: "-8"
                        }} variant="contained" type="submit" type="button">Shorten URL</Button> */}
                        <button className="don" type="submit">Shorten URL</button>

                    </Box>

                    <Box className="robot" sx={{
                        display: "block",
                        width: "510",
                        margin: "auto",
                        textAlign: "center",
                        letterSpacing: "0",
                        mt: "17px",
                        px:"2rem"

                    }}>
                        <Typography className="lion" sx={{ textAlign: "center", fontSize: "16px", fontFamily: "source sans pro,arial", color: "#202020", letterSpacing: "0" }}>   ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it easy to share</Typography>
                        { /*     <Typography sx={{ textAlign: "center", fontSize: "16px", fontFamily: "source sans pro,arial", color: "#202020", letterSpacing: "0" }}>URL shortener allows to create a shortened link making it easy to share</Typography> */}
                    </Box>

                </Box>
            </form>
        </>
    );
}

export default Input;

