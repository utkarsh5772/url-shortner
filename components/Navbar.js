import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "75px"
    }}>

      <Typography sx={{
        color: "#0186da",
        textShadow: "0 2px 2px #ddd",
        fontSize: "2.7rem",
        fontWeight: "bold",
        margin: "auto",
        pt:"1.9rem"
      }}>
        Short URL
      </Typography>


    </Box>
  );
};

export default Navbar;


/*<div className={styles.navbar}>
     <div className={styles.links}>
       <Link href="/"> Home</Link>
       <Link href="/about"> About</Link>
       <Link href="/profile"> Profile</Link>
     </div>
                      </div>*/

