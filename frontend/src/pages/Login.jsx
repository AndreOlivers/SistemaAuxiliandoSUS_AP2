
import { TextField, Button, Box, InputAdornment } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    // const classes = useStyles();


    return (
        <>
            <Box component="span" width="50vw" height="40vh" m={1} display="flex" justifyContent="center" alignItems="center" >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        label="E-mail"
                        variant="outlined"
                        type="email"
                        {...register("email")}
                        // InputProps={{
                        //     endAdornment: (
                        //         <InputAdornment>
                        //             {/* <EmailOutlinedIcon /> */}
                        //         </InputAdornment>
                        //     )
                        // }}
                    />

                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        {...register("senha")}
                        // InputProps={{
                        //     endAdornment: (
                        //         <InputAdornment>
                        //             {/* <LockOutlinedIcon /> */}
                        //         </InputAdornment>
                        //     )
                        // }}
                    />
                    <Button variant="contained" type="submit">Default</Button>
                </form>
            </Box>
        </>
    )
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         justifyContent: 'center',
//         display: 'flex',
//     },
// }));