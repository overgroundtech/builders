import React from 'react';
import {makeStyles, Typography, Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(2)
    }
}))

export default function Cart() {
    const classes = useStyles();

    return(
        <>
            <Container maxWidth={"xl"} className={classes.container}>
                <Typography>
                    Cart
                </Typography>
            </Container>
        </>
    )
}