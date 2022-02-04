import React, { useState } from 'react'
import {
    makeStyles,
    Paper,
    TextField,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    Typography,
    Card,
    CardActionArea,
    CardMedia
} from '@material-ui/core';
import {Counties} from './counties';

const useStyles = makeStyles(theme=>({
    paper: {
        margin: theme.spacing(2),
        padding: '20px'
    },
    fieldContainer: {
        margin: theme.spacing(2)
    },
    fields: {
        width: '100%',
        margin: '12px 0px 12px'
    }
}))

export default function CheckoutForm ({ user }){
    const classes = useStyles();

    const [firstname, setFirstname] = useState();
    const [location, setLocation] = useState();
    const [Lastname, setLastname] = useState();
    const [region, setRegion] = useState();
    const [phone, setPhone] = useState();
    const [delivery, setDelivery] = useState();
    const [email, setEmail] = useState(user? user.email: null);

    const [regionChoice, setRegionChoice] = useState([]);

    const handleChange = (event) => {
        setLocation(event.target.value);
        handleRegion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleRegion = (reg) => {
        let selected = Counties.filter(county => county.name === reg);
        let regions = selected.map(reg => reg.capital);
        setRegionChoice(regions);
    }

    return(
        <Paper elevation={2} className={classes.paper}>

            {user && (
            <form className={classes.fieldContainer} onSubmit={handleSubmit}>
                <Typography variant={'h5'}>Shipping Info</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            className={classes.fields}
                            label={"Firstname"}
                            required
                            onChange={e => setFirstname(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            className={classes.fields}
                            label={"Lastname"}
                            required
                            onChange={e => setLastname(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <TextField
                    className={classes.fields}
                    label={"Email"}
                    type={"email"}
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField
                    className={classes.fields}
                    label={"Phone number"}
                    required
                    onChange={e => setPhone(e.target.value)}
                />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FormControl className={classes.fields}>
                            <InputLabel htmlFor="age-native-simple">Select Location</InputLabel>
                            <Select
                                native
                                className={classes.fields}
                                value={location}
                                onChange={handleChange}
                            >
                                <option></option>
                                {
                                    Counties.map(county => (
                                        <option key={county.code} value={county.name}>{county.name}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FormControl className={classes.fields}>
                            <InputLabel htmlFor="age-native-simple">Select Region</InputLabel>
                            <Select
                                native
                                className={classes.fields}
                                value={region}
                                onChange={e => setRegion(e.target.value)}
                            >
                                <option></option>
                                {
                                    regionChoice.map((county, index) => (
                                        <option key={index} value={county}>{county}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <TextField
                    rows={2}
                    multiline
                    label={'Delivery Address'}
                    className={classes.fields}
                    placeholder={'StreetName / Building Name'}
                    required
                    onChange={e => setDelivery(e.target.value)}
                />

                <Button className={classes.fields} type={'submit'} variant={'contained'} color={'primary'}>Proceed To Payment</Button>

            </form>)}
        </Paper>
    )
}
