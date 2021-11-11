import React,{useContext} from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import { List,ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import ProductCard from '../components/Products/ProductCard';
// import { ProductContext } from '../Context/ProductContext';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor:theme.palette.background,
        backgroundColor:'#f5f5f5',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            width: '100%',
            textAlign: 'center',
            // justifyContent: 'space-between',
            marginTop:theme.spacing(2),
        }
    },
    productDetailsRight: {
        display: 'flex',
        marginLeft:theme.spacing(3),
        borderLeft: '1px solid #e0e0e0',
       },
    productDetailsLeft: {
        display: 'flex',
        textAlign: 'center',
    },
    quantityBox: { 
        display: 'flex',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderColor: '#000',
        padding:'0 20px',
        margin:theme.spacing(2),
        width:'40px',
        height:'auto',
        position:'relative',
        justifyContent:'space-between',
        alignItems:'center',
        color:'black'
        },
        productDescription: {
            display: 'flex',
            textAlign: 'center',
            justifyContent:'center'
        },
        productDescriptionImage: {
            width:'100%',
            height:'100%',
            objectFit:'cover',
        }
}));

export default function ProductDetail () {
    const available = 'instock'
    // const {products} = useContext(ProductContext);
    // console.log(products)

    const classes = useStyles();

    return (
        <>
            <Container>
                <Box className={classes.root}>
                    <Grid container spacing={2} className={classes.productDetailsLeft}>
                        <Grid item xs={12} sm={6}>
                        <Box><Typography variant="h6"> Floor Drain Strainer </Typography> </Box>
                            <Box>
                                <img className= {classes.productDescriptionImage} src="https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272__340.jpg" alt="product" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.productDetailsRight}>
                        <Grid item xs={12} sm={6} style={{display:'flex'}} >
                            <Box>
                                <Typography variant="h5">KSH 1,500</Typography>
                                <Typography variant="subtitle1">Status: {available}</Typography>
                                <Divider/>
                                <List>
                                    <Typography variant="subtitle1">Product Details</Typography>
                                    <ListItem><Typography variant="subtitle1">Applicable in kitchen, bathroom, garage, basement and toilet where shallow drain is required.</Typography></ListItem>
                                    <Divider/>
                                    <Button>
                                    <Box className={classes.quantityBox}>
                                        <div className='decrease'> - </div>
                                        <div className='quantity'> 1 </div>
                                        <div className='increase'> + </div>
                                    </Box>
                                    </Button>
                                    <Button variant="contained" color="primary">Add to Cart</Button>
                                    <Divider style={{marginTop:'2px'}}/>
                                    <Box style={{display:'flex', justifyContent:'flex-start',marginTop:'5px'}}>Categories here</Box>
                                </List>
                            </Box>
                        </Grid>
                        </Grid>
                </Box>
                <Container>
                <Grid container spacing={2} className={classes.productDescription} >
                    <Grid item xs={12} sm={6}>
                       <Box>
                           <Typography>Product description here:</Typography>
                           <Typography variant='subtitle1'>stainless steel toothbrush holder toothbrush holder stainless steel toothbrush and toothpaste holder stand razor blade organizer stand for bathroom square stainless steel toothbrush holder manufacture.Wall-mounted square toothbrush storage rack. Made up of stainless steel material, durable and solid enough. 4 toothbrush slots, 1 toothpaste slots, enough storage to for your toothbrush, toothpaste, razor, comb and so on. Easily put it on the counter or install it on your bathroom wall by 2 Screws.</Typography>
                           </Box> 
                    </Grid>
                </Grid>
                </Container >
                <Grid container spacing={2} className={classes.relatedProducts} >
                <Grid item xs={12} sm={6}>
                    <Box><Typography variant="h6">Related Products</Typography> </Box>
                </Grid>
                        
                </Grid>
            </Container>
        </>
    )
}