import { Box, TextField, Alert} from "@mui/material";
import { useState } from "react";
import { LoadingButton } from '@mui/lab';


const Contacto = () => {

    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setTimeout(() => {
            setIsLoading(false);
            if(!msg || !email){
                setError("Ningún campo puede estar vacío");
                return;
            }

            if (!emailRegex.test(email)) {
                setEmailError('Email no válido');
                return;
            }
            
        }, 2000);

    }

    return(
        <>
        <form onSubmit={handleSubmit} className="lg:w-3/6">
        <Box gap={2} display="flex" flexDirection="column">
        {error && <Alert severity="error">{error}</Alert>}  {/* Mostrar alerta si hay error */}
        <TextField 
        label="Email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        variant="outlined"
        error={emailError}
        helperText={emailError}
        fullWidth
        />

        <TextField
            label="Escribe su mensaje"
            multiline
            rows={4}
            value={msg}
            onChange={(e) => {setMsg(e.target.value)}}
            variant="outlined" 
            fullWidth 
            placeholder="Escribe aquí..."
        />

        <LoadingButton 
        loading={isLoading}
        variant="contained"
        color="primary"
        type="submit"
        >
            Enviar
        </LoadingButton>
        </Box>
        </form>
        </>
    )
}

export default Contacto;