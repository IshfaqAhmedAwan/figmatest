import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LoadingOverlay from 'react-loading-overlay-ts';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import logo from './logo.svg';

interface IFormInput {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    password: string;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {

            }
        },

        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        formdiv: {
            backgroundColor: "#FFFFFF",
            maxWidth: "414px",
            paddingLeft: "45px",
            "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {
                padding: "18px",
                
            }
        },
        formnames: {
            width: "180px",
            height: "58px",

            borderWidth: "1px",
            borderColor: "#DFDFDF",
            borderStyle: "ridge",

        },
        formfields: {
            width: "366px",
            height: "58px",

            borderWidth: "1px",
            borderColor: "#DFDFDF",
            borderStyle: "ridge",
            "& .MuiFormControl-root": {
                padding: "55px !important",
                color: "#FFFFFF !important"
            }
        }


    })
);

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function GridForm() {
    const classes = useStyles();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IFormInput>({ mode: "onChange" });

    const onSubmit = (data: IFormInput) => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000)
        console.log("loader :", Loader)
        data.firstName = capitalizeFirstLetter(data.firstName)
        data.lastName = capitalizeFirstLetter(data.lastName)
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    //This code is for loader over the page
    const [Loader, setLoader] = useState(false)


    return (
        <LoadingOverlay
            active={Loader}
            spinner={true}
            text='Loading ...'>
            <div className={classes.formdiv}>

                <form onSubmit={handleSubmit(onSubmit)} >


                    <Grid container direction="row" spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={5} >
                                <TextField id="standard-basic" label="First Name" className={classes.formnames}
                                    {...register("firstName", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i,

                                    })}
                                />
                                {errors?.firstName?.type === "required" && <p>This field is required</p>}
                                {errors?.firstName?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </Grid>
                            <Grid item xs={5}>

                                <TextField id="standard-basic" label="Last Name" className={classes.formnames}
                                    {...register("lastName", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i,

                                    })}
                                />
                                {errors?.lastName?.type === "required" && <p>This field is required</p>}
                                {errors?.lastName?.type === "pattern" && (
                                    <p>Alphabetical characters only for last name</p>
                                )}

                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>




                                <TextField id="standard-basic" label="Phone Number" className={classes.formfields}
                                    {...register("phoneNumber", { required: true })} />
                                {errors?.phoneNumber?.type === "pattern" && (
                                    <p>invalid Phone number</p>
                                )}
                            </Grid>

                            <Grid item xs={12}>


                                <TextField id="standard-basic" label="Email" className={classes.formfields}
                                    {...register("email", {required: true, pattern: /^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                {errors?.email?.type === "pattern" && (
                                    <p>invalid email address</p>
                                )}
                            </Grid>

                            <Grid item xs={12}>

                                <TextField id="standard-basic" label="Password" className={classes.formfields}
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/i
                                    })}
                                />
                                {errors?.password?.type === "required" && <p>This field is required</p>}
                                {errors?.password?.type === "minLength" && (
                                    <p>Oops! You need a password longer than 8 characters with numbers and letters.</p>
                                )}
                                {errors?.password?.type === "pattern" && (
                                    <p>Password must contain atleast 1 uppercase, lowercase and number</p>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <input disabled={!isValid} type="submit" />
                            </Grid>
                        </Grid>
                    </Grid>

                </form>

            </div>

        </LoadingOverlay>

    );
}
export default GridForm;
