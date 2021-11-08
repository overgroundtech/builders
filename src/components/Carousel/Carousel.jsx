import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles, Typography } from '@material-ui/core';
import { Carousel as Slider } from 'react-responsive-carousel';

const demoData = [
    {
        image: 'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?b=1&k=20&m=182691828&s=170667a&w=0&h=gZj86NU5-6ocvWuFUeh8rLJwOOsaK7Y-vhwOeSWz4U4='
    },
    {
        image: 'https://media.istockphoto.com/photos/house-chores-for-kids-picture-id1256019135?b=1&k=20&m=1256019135&s=170667a&w=0&h=pvGNqEqYaKQKmWY-Q-r6T2eFQQfc5r_X-iHoV8UebnU='
    },
    {
        image: 'https://media.istockphoto.com/photos/pouring-water-from-a-faucet-picture-id855532396?b=1&k=20&m=855532396&s=170667a&w=0&h=El06cjuMg1SJC5Ozf4daCgBwDeal1IsIkCAdqZ9wskQ='
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
        color: '#ffffffff',
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
                    <Typography variant="h5" className={classes.sliderTitle}>
                        Hero Slide
                        <Typography variant="h6" className={classes.sliderTitle}>
                            sub Title
                        </Typography>
                    </Typography>
                </div>
            ))}
        </Slider>
    )
}
