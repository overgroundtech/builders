import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles, Typography } from '@material-ui/core';
import { Carousel as Slider } from 'react-responsive-carousel';

const demoData = [
    {
        image: 'assets/wp1842346.webp'
    },
    {
        image: 'assets/wp1842347.webp'
    },
    {
        image: 'assets/wp1842349.webp'
    },
    {
        image: 'assets/wp1842350.webp'
    }
]

const useStyles = makeStyles((theme) => ({
    sliderTitle: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginLeft: '-45%',
        width: '90%',
        borderRadius: '10px',
        background: 'transparent',
        padding: theme.spacing(3),
        textAlign: 'center',
        opacity: .8,
        [theme.breakpoints.only("xs") ]: {
            fontSize: theme.spacing(1.45)
        },
        [theme.breakpoints.only("sm")]: {
            fontSize: theme.spacing(2.5)
        },
        [theme.breakpoints.only("md")]: {
            fontSize: theme.spacing(4)
        }
    },
    sliderImage: {
        maxWidth: '100%',
        maxHeight: 480,
        height: 'auto'
    }
}))

export default function Carousel () {
    const classes = useStyles()

    return(
        <Slider  showThumbs={false} showStatus={false} >
            {demoData.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt={`slide ${index}`} className={classes.sliderImage}/>
                    <Typography variant="h3" className={classes.sliderTitle} color="textSecondary">
                         BUILDERS OPTION.
                        <Typography variant="h5"  component="p">
                            Building Kenya, the Modern.
                        </Typography>
                    </Typography>
                </div>
            ))}
        </Slider>
    )
}
