import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { logos } from '../Assest/logo.jpg';
import { useEffect } from "react";
//import { AppContext } from "next/app";
import AppContext from "../Context/store";
import { useContext } from "react";
import { Router, useRouter } from 'next/router';
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from "next/image";
import thumb from '../Assest/thumb.png';
import Links from '../Assest/Links.png';
import secure from '../Assest/secure.png';
import monitor from '../Assest/monitor.png';
import hand from '../Assest/hand.png';
import ressponse from '../Assest/ressponse.png';
import Footer from "../components/Footer";
//import { Theme } from "@mui/material";
import { deleteCookie } from 'cookies-next';

  //import { makeStyles } from '@mui/styles';

export default function Home() {
  const router = useRouter();
  const context = useContext(AppContext);

  /*useEffect(() => {
    console.log("hii");
    //console.log(context.search);
  },)*/

  const createAccount = () => {
    router.push('/Login');
  }

  useEffect(() => {
    deleteCookie('keey');
  }, [])

  return (
    <>
      <Input />

      <Box className="jadu" sx={{
        display: "block",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "800px",
        backgroundColor: "#FFFFFF",
        height: "250px",
        mt: "25px",
        boxShadow: "0 1px 4px #ccc",
        mb: "17px",
      }}>
        <Box className="createaccount" sx={{ margin: "auto", width: "600px", justifyContent: "center", display: "flex", }}>
          <Typography className="fonts" sx={{
            fontSize: "28px",
            pt: "16px",
            fontWeight: "bold", color: "#505050", font: " asap,arial",
            letterSpacing: "0",
            textAlign: "center"
          }}>Want More? Try Premium Features!</Typography>
        </Box>

        <Box className="createaccountdiv" sx={{
          display: "block",
          width: "510px",
          margin: "auto",
          textAlign: "center",
          letterSpacing: "0",
          mt: "17px"

        }}>
          <Typography className="fontwo" sx={{
            textAlign: "center", fontSize: "16px",
            fontFamily: "source sans pro,arial", color: "#202020",
            letterSpacing: "0"
          }}>   Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app integrations and support</Typography>
          {/*   <Typography sx={{ textAlign: "center", fontSize: "16px", fontFamily: "source sans pro,arial", color: "#202020", letterSpacing: "0" }}>browser extension, 50+ app integrations and support</Typography> */}
        </Box>

        <Box sx={{
          margin: "auto",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          mt: "23px",

        }}>
          {/*  <Button sx={{
            background: "#2c87c5",
            color: "#fff",
            borderRadius: "3px",
            py: "10px",
            textDecoration: "none",
            px: "12px",
          }}> Create Account</Button>   */}

          <button onClick={createAccount} className="ktmrc">Create Account</button>

        </Box>

        <Box sx={{
          margin: "auto",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          mt: "12px",
          textAlign: "center",
        }}>

        </Box>
        <Typography className="doll" sx={{ fontSize: "13px", color: "#999", textAlign: "center" }}>Sign up at</Typography>
      </Box>

      <Box className="divya" sx={{
        display: "block",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "800px",
        height: "150px",
        mt: "25px",
        mb: "17px",
      }}>

        <Typography sx={{
          font: "bold 26px asap,arial",
          color: "#505050",
          letterSpacing: "0",
          pt: "12px",
          ml: "6px"

        }}>Simple and fast URL shortener!</Typography>

        <Typography className="morjim" sx={{
          font: "source sans pro,arial",
          fontSize: "17px",
          color: "#202020",
          textAlign: "left",
          lineHeight: "1.5",
          pt: "9px",
          ml: "6px"
        }}>
          ShortURL allows to shorten long links from  <span className="vikram">Instagram, Facebook, YouTube, Twitter, Linked In,
            WhatsApp, TikTok, </span> blogs and sites. Just paste the long URL and click the Shorten URL button. On the
          next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL,
          check <span className="vikram">how many clicks it received.</span>
        </Typography>

      </Box>


      <Box className="divya" sx={{
        display: "block",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "800px",
        height: "150px",
        mt: "25px",
        mb: "17px",

      }}>

        <Typography sx={{
          font: "bold 26px asap,arial",
          color: "#505050",
          letterSpacing: "0",
          pt: "12px",
          ml: "6px"

        }}>   Shorten, share and track</Typography>

        <Typography className="morjim" sx={{
          font: "source sans pro,arial",
          fontSize: "17px",
          color: "#202020",
          textAlign: "left",
          lineHeight: "1.5",
          pt: "9px",
          ml: "6px"
        }}>
          Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant
          messages, and other locations. Track statistics for your business and projects by monitoring the
          number of hits from your URL with our click counter.
        </Typography>

      </Box>

      <Box className="grid" sx={{ margin: "auto", width: "900px", }}>

        <Grid container spacing={1} sx={{ bgcolor: "  " }}>
          <Grid item xs={4} sx={{}}>


            <Box >
              <Box sx={{
                margin: "auto",
                width: "84px"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={thumb} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Easy</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "15px",
                mt: "10px",
                textAlign: "center"
              }}>ShortURL is easy and fast, enter the long link to get your shortened link</Typography>
            </Box>


          </Grid>
          <Grid item xs={4}>



            <Box>
              <Box sx={{
                margin: "auto",
                width: "84px"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={Links} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Shortned</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "15px",
                mt: "10px",
                textAlign: "center"
              }}>Use any link, no matter what size, ShortURL always shortens</Typography>
            </Box>




          </Grid>
          <Grid item xs={4}>



            <Box>
              <Box sx={{
                margin: "auto",
                width: "84px"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={secure} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Secure</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "15px",
                mt: "10px",
                textAlign: "center"
              }}>It is fast and secure, our service has HTTPS protocol and data encryption</Typography>
            </Box>




          </Grid>
          <Grid item xs={4}>



            <Box>
              <Box sx={{
                margin: "auto",
                width: "84px",
                mt: "2.6rem"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={monitor} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Statistics</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "15px",
                mt: "10px",
                textAlign: "center"
              }}> Check the number of clicks that your shortened URL received</Typography>
            </Box>

          </Grid>
          <Grid item xs={4}>



            <Box>
              <Box sx={{
                margin: "auto",
                width: "84px",
                mt: "2.6rem"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={hand} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Reliable</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "15px",
                mt: "10px",
                textAlign: "center"
              }}>All links that try to disseminate spam, viruses and malware are deleted</Typography>
            </Box>


          </Grid>
          <Grid item xs={4} sx={{}}>



            <Box>
              <Box sx={{
                margin: "auto",
                width: "84px",
                mt: "2.6rem"
              }}>
                <Image sx={{ m: "auto", width: "75px", height: "75px" }} src={ressponse} />
                <Typography sx={{
                  textAlign: "center",
                  font: "bold 20px asap,arial",
                  color: "#505050"
                }}>Devices</Typography>
              </Box>

              <Typography sx={{
                fontFamily: "source sans pro, arial",
                font: "Arial ,sans-serif",
                color: "#202020",
                lineHeight: "1.5",
                fontSize: "16px",
                mt: "10px",
                textAlign: "center"
              }}>Compatible with smartphones, tablets and desktop</Typography>
            </Box>


          </Grid>
        </Grid>

      </Box>

        <Footer /> 




    </>
  );
}




