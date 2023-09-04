
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
//import AppContext from '../Context/store';
import AppContext from '../Context/store';
import axios from 'axios';
//import { searchOne } from '../Store/searchTermSLice';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import DataTable from '../components/DataTable';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';
//import { deleteCookie } from 'cookies-next';
//import { getCookie } from 'cookies-next';
//import { deleteCookie } from 'cookies-next';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Dashboard = () => {

    const target = useContext(AppContext);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState('');
    const [final, setFinal] = useState('');
    const [url, setUrl] = useState([]);
    const [sambata, setSambata] = useState([]);

    useEffect(() => {
        console.log("yedfksgskbg");
        fetchs();
        console.log("array-chaeck", sambata);
    }, [fetchs()]);

    const handleChnage = (event) => {
        event.target.value;
        setSearch(event.target.value);
    }


    const apiUrl = 'https://fade-117-99-241-39.ngrok-free.app/';

    
    const collectResult = async (final) => {

        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${search}`)
            .then(function (response) {
                // context.setFinal(response.data.result.short_link);
                target.setWeapon(response.data.result.short_link);
                setFinal(response.data.result.short_link);
                let noise = response.data.result.short_link;
                sessionStorage.setItem("noisee", noise);
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {

            });
    };


    //const jaybhim = "http://127.0.0.1:4040  
    


    const putShortnerTostrapi = async (final) => {

        const ress = await axios.post(`${apiUrl}api/Shortner`, {
            data: {
                URL: sessionStorage.getItem("noisee"),
                USEREMAIL: sessionStorage.getItem("MyKey")
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {

            });
    }

    async function fetchs() {
        const lus = sessionStorage.getItem("MyKey");   
        try {
            const response = await fetch(`http://localhost:1337/api/shortner?populate=*&filters[USEREMAIL][$eq]=${lus}`); // Replace with your API endpoint
            const jsonData = await response.json();
            console.log(jsonData);
            // const nobita = JSON.parse(jsonData);
            //   setDatas(jsonData.data); // Update state with fetched data
            setSambata(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const doremon = () => {
        const lectureone = sessionStorage.getItem("noisee");
        const lecturetwo = sessionStorage.getItem("MyKey");
        if (lectureone !== null && typeof lectureone === 'string' && lecturetwo !== null && typeof lecturetwo === 'string') {
            const ress = putShortnerTostrapi(final);
            // fetchs();
        } else {
            console.log("retry");
            alert("Please Enter A Valid URL OR Wait For 8 Seconds And Try Again");
        }
    }

    const handlesubmit = async (event, final) => {
        event.preventDefault();
        const res = await collectResult();
        // const ress = putShortnerTostrapi(final);
        doremon();

        console.log("form submit");
        sessionStorage.removeItem("noisee");
        handleClose();

    }

    const deleteUrl = async (row) => {
        const tiger = row.id;
        try {
            const respone = await axios.delete(`http://localhost:1337/api/Shortner/${tiger}`);
            fetchs();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleCopy = (row) => {
        navigator.clipboard.writeText(row.attributes.URL);
        alert('URL Copied');
    }

    const handle = () => {
        router.push("/");
        sessionStorage.removeItem("MyKey");
        //deleteCookie('MyKey');
       // deleteCookie("logged");
        //deleteCookie("islogins");
    }

    return (
        <div>
            <div>

                {/*     <Button onClick={handleOpen}>Open modal</Button>   */}
                <button className="mango" onClick={handleOpen}> Shorten URL <span>+</span> </button>
                <button className="mangos" onClick={handle}> Log Out  </button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ px: "2rem" }}  >
                        <form onSubmit={handlesubmit}>
                            <Box sx={{
                                display: "block",
                                justifyContent: "center",
                                margin: "auto",
                                maxWidth: "698px",
                                backgroundColor: "#FFFFFF",
                                height: "250px",
                                mt: "11rem",
                                //     alignItems: "center",
                                boxShadow: "0 1px 4px #ccc",
                                mb: "17px",
                            }} >
                                <Box sx={{ margin: "auto", maxWidth: "37.5rem", justifyContent: "center", display: "flex", }}>
                                    <Typography className="pastetheurl" sx={{
                                        margin: "auto", pt: "25px", fontSize: "2rem",
                                        fontWeight: "bold", color: "#505050", font: " asap,arial",
                                        letterSpacing: "0",
                                    }}>Paste the URL to be shortned</Typography>
                                </Box>

                                <Box className="padingchange"
                                    sx={{
                                        border: "2px solid red",
                                        //     width: "550px",
                                        maxWidth: '34.375rem',
                                        height: "20  px",
                                        display: "flex",
                                        flexDirection: "row",
                                        margin: "auto",
                                        //  marginTop:"15rem",
                                        border: "none",
                                        paddingTop: "25px",
                                        px: "1rem"
                                    }}
                                >
                                    <TextField sx={{ border: "none" }} fullWidth label="Enter the link here" id="fullWidth" placeholder='Enter the link here' value={search} onChange={handleChnage} />
                                    <button className="don" type="submit">Shorten URL</button>
                                    {/*  <Button sx={{ width: "8rem", border: "none", height: "57px", fontSize: "13px", textDecoration: "none", borderRadius: "none" }} variant="contained" type="submit" type="button">ShortenURL</Button> */}
                                </Box>

                                <Box sx={{ px: "2rem" }}>
                                    <Box sx={{
                                        display: "block",
                                        width: "510",
                                        margin: "auto",
                                        textAlign: "center",
                                        letterSpacing: "0",
                                        mt: "17px"

                                    }}>
                                        <Typography className="stylechnage" sx={{ textAlign: "center", fontSize: "16px", fontFamily: "source sans pro,arial", color: "#202020", letterSpacing: "0" }}>   ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it easy to share</Typography>
                                        {/*  <Typography  cla sx={{ textAlign: "center", fontSize: "16px", fontFamily: "source sans pro,arial", color: "#202020", letterSpacing: "0" }}>URL shortener allows to create a shortened link making it easy to share</Typography>     */}

                                    </Box>
                                </Box>

                            </Box>
                        </form>
                    </Box>
                </Modal>
                {/* <DataTable datas={datas} />  */}

            </div>
            <Box sx={{ padding: "2rem  6rem 0rem 6rem" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: " #cceeff" }}>
                            <TableRow sx={{ maxWidth: "6rem" }}>
                                <TableCell className="heaadone"  ><Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>Short URL</Typography></TableCell>
                                <TableCell className="heaadone"  ><Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>Copy</Typography></TableCell>
                                <TableCell align="right"><Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>Id</Typography></TableCell>
                                <TableCell align="right">  <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>Delete</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sambata.map((row) => (
                                <TableRow
                                    key={row.URL}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.attributes.URL}
                                    </TableCell>
                                    <TableCell align="right">  <button onClick={(event) => handleCopy(row)} className="renuka">Copy URL</button> </TableCell>
                                    <TableCell align="right">  <Typography sx={{ font: "bold", fontSize: "1rem" }}> {row.id}</Typography>  </TableCell>
                                    <TableCell align="right"> <button className="vivek" onClick={() => deleteUrl(row)}> Delete</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </div>
    );
}

export default Dashboard;

