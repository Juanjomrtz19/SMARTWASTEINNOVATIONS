import { Grid2, IconButton} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';


const Footer = () => {
    return(
        <>
        <section className="bg-black  p-4">
        <Grid2 container spacing={2} sx={{justifyContent: "space-between"}}>
            <Grid2 item xs={12} sm= {4}>
                <IconButton sx={{color: 'white'}}><Facebook /></IconButton>
            </Grid2>
            <Grid2 item xs={12} sm= {4}>
                <IconButton sx={{color: 'white'}}><Instagram /></IconButton>
            </Grid2>
            <Grid2 item xs={12} sm= {4}>
                <IconButton sx={{color: 'white'}}><LinkedIn /></IconButton>
            </Grid2>
        </Grid2>   
        </section>
        </>
    );
}

export default Footer;