import { Box } from "@mui/material";
import { Typography } from "@mui/material";



const Footer = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#333", borderTop: "4px  solid #00a0db", mt: "8.5rem", paddingBottom: "2.5rem", width: "100%" }}>



                <Box sx={{mx:"auto", px:"2rem"}}> <Typography className="jungle" sx={{
                    color: "#eee",
                    fontFamily: "source sans pro, aria",
                    font: "source sans pro, aria",
                    fontSize: "1.2rem",
                    textAlign: "center",
                    mt: "16px"

                }}> © 2023 ShortUrl.at - Tool to shorten a long link</Typography>
                </Box>


                <Box sx={{ px: "2rem", mx:"auto" }}>
                    <Box className="frog" sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <ul className="vaishu">
                            <li>Short URL</li>
                            <hr></hr>
                            <li>URL Click counter</li>
                            <hr></hr>
                            <li>Unshorten URL</li>
                            <hr></hr>
                            <li>Report Malicious URL</li>
                            <hr></hr>
                            <li>Terms of service</li>
                            <hr></hr>
                            <li>Privacy</li>
                            <hr></hr>
                            <li>Contact</li>
                        </ul>

                    </Box>
                </Box>

            </Box>
        </>
    );
}

export default Footer;