import React,{useState, useContext} from 'react'
import { Container, Grid, InputBase, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import back from '../../src/images/back.png'
import { Link } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/YouTube';
import TwitterIcon  from '@material-ui/icons/Twitter'
import { Carousel } from 'react-responsive-carousel';
import { useQuery } from '@apollo/client'
import {PRODUCT} from '../graphql/query'
import {ADD_ITEM} from '../graphql/mutation'
import {useMutation} from '@apollo/client';
import { CartContext } from '../Context/CartContext'
import Products from '../components/Products/Products'




 

const useStyles = makeStyles( theme => ({
    root : {
        backgroundColor : 'white',
        display : 'flex',
        marginTop : theme.spacing(1),
    },
    root2:{
        display : 'flex',
        marginTop : theme.spacing(1),
        marginBottom : theme.spacing(1),
        justifyContent : 'center',
    },
    imageContainer : {
        display : 'flex',
        flexDirection : 'column',
    },
    productDetailImage : { 
        width : '100%',
        '&:hover' : {
            cursor : 'pointer',           
        }
    },
    productDetailSmall : {
        display : 'flex',
        marginTop : theme.spacing(1),
        marginLeft : theme.spacing(.5),
        '&:hover' : {
            cursor : 'pointer',           
        },
        // justifyContent : 'start',
        [theme.breakpoints.down('md')] : {
            width : '30%',
        },
     },
        productDescContainer : {
            display : 'flex',
            flexDirection : 'column',
            border: '1px solid rgba(0, 0, 0, 0.09)',
            // margin : theme.spacing(2),
        },
        quantityBox : {
            display : 'flex',
            border: '1px solid rgba(0, 0, 0, 0.25)',
            borderColor: '#000',
            borderRadius: '5px',
            WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,1)',
            width : '50px',
            height : '30px',
            alignItems : 'center',
            justifyContent : 'center',
            marginTop : theme.spacing(1),
            margin : theme.spacing(1),
            marginLeft : theme.spacing(5),
            '&:hover' : {
                cursor : 'pointer',           
            }
        },
        quantityAndAddContainer : {
            display : 'flex',
            justifyContent: 'space-between',
            maxWidth: theme.spacing(30),
            alignItems: 'center',
            margin: theme.spacing(1)
        },
        textField : {
            // backgroundColor:'red',
            width : '90%',
            marginLeft : 'auto',
            paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
        },
        searchMediaDelivery:{
            display : 'flex',
            flexDirection : 'column',
            [theme.breakpoints.down('xs')] : {
                display:'none'
            }
        },
        search : {
            display : 'flex',
        },
        facebookPluginBox : {
            display : 'flex',
            flexDirection : 'column',
        },
        facebookLikeImage : {
            backgroundImage: `url(${back})`,
            position : 'relative',
            display : 'flex',
            objectFit : 'contain',
            width : '70%',
            height : '70%',
        },
        categoryLinks:{
            display:'flex',
            flexDirection:'row',
            marginTop:'5px'
        },
        socialLink:{
            display:'flex',
            flexDirection:'row',
        },
        linksContainer:{
            display:'flex',
            justifyContent:'center',
            marginBottom:'5px',
        },
        link:{
            backgroundColor:'#FF8C00',
            color:'white',
            borderRadius:'5px',
            margin:'2px',
            padding:'5px',
        },
        description:{
            display:'flex',
            alignItems:'center',
        },
        butonsContainer:{
            display:'flex',
        },
        buttonSelf:{
            // backgroundColor:'#FF8C00',
            width:'20px',
            height:'30px',
        },
        InputBaseCont:{
            width: theme.spacing(10)
        },
        addtoCart:{
            display:'flex',
            height:'30px',
            width:'70%',
        },
        relatedProductsCont:{
            // textAlign:'center'
        },
        relatedProdsText:{
            display:'flex',
            justifyContent:'center',
            marginTop:'5px',
            fontWeight:'bold'
        }
}))



function ProductDetail({match}) {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(0)
    const [addtoCart] = useMutation(ADD_ITEM)
    const {setCart} = useContext(CartContext);


   const {loading, error, data} = useQuery(PRODUCT, {variables:{productId:parseInt(match.params.id)}})
    if (loading) return <p>Loading...</p>
    if (error) return `Error! ${error.message}`

    // console.log(quantity)
    
    
    
    return (
        <>
        <Container>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={4} className={classes.imageContainer}>
                <Carousel> 
                    {data.product.images.map((image,index) =>(
                        <div key={index}>
                        <img src={image} alt={image.alt} className={classes.productDetailImage}/>
                        </div>
                    ))}
            </Carousel>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.productDescContainer}>
                    <Typography variant="h5">{data.product.name}</Typography>
                    <Typography variant="h6">${data.product.price}</Typography>
                            <Typography variant="body1">Product Description </Typography>
                            <Typography>{data.product.description}</Typography>
                    <div className={classes.quantityAndAddContainer}>
                    <Button size="small" variant="outlined" color="secondary" onClick={()=>{ if (quantity <= 1 ){
                        setQuantity(1) 
                    }
                    else {
                        setQuantity(quantity-1)
                    }
                     } } className={classes.buttonSelf}>-</Button>
                    <TextField  type='number' onChange={(e)=>setQuantity(parseInt(e.target.value))} variant="outlined" size="small" className={classes.InputBaseCont} value={quantity} />
                    <Button onClick={()=>setQuantity(quantity+1)} size="small" variant="outlined" color="secondary" className={classes.buttonSelf}>+</Button>
                    </div>
                <Button
                onClick ={ async () => {
                    try {
                        const {data: cartData} = await addtoCart({
                            variables: {
                                cartId: new String(localStorage.getItem('cartId')),
                                productId:data.product.id,
                                quantity:quantity
                            }
                        })
                        setCart(cartData.addItem.cart)
                    } catch(err) {
                        console.log(err)
                    }
                }}
                 className={classes.addtoCart} variant="outlined" color="secondary" size='small'>Add to Cart</Button>
                <Grid item xs={12} sm ={6} className={classes.categoryLinks} >
                    <Typography>Categories:</Typography>
                    <Link>Taps</Link>,
                    <Link>Basins</Link>
                </Grid>
                <Grid item xs ={12} sm={6} className={classes.socialLink}>
                    <Link underline='none'> <FacebookIcon className={classes.icons} /> </Link>
                    <Link underline='none'> <InstagramIcon className={classes.icons} /> </Link>
                    <Link underline='none'> <TwitterIcon className={classes.icons} /> </Link>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.searchMediaDelivery}>
                    <Typography variant="h5">Search Any Product Here</Typography>
                    <div className={classes.search}>
                    <TextField id="outlined-basic" label="Search for products" variant="outlined" className={classes.textField} />
                    <Button variant="contained" color="primary"><SearchIcon/></Button>
                    </div>
                    <div className={classes.facebookPluginBox}>
                        <Typography variant="h6">Like us on Facebook</Typography>
                        <div className={classes.facebookLikeImage}>
                        {/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="100%" height="100%" style={{border: 'none',overflow: 'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe> */}
                        </div>
                        </div>
                        <Grid>
                            <Typography variant="h6">Delivery Information</Typography>
                            <Typography variant="body1">Same Day Delivery in Nairobi and  24 hours max delevery countrywide</Typography>
                            </Grid>
                            <Grid>
                            <Typography variant="h6">Return and Refunds</Typography>
                            <Typography variant="body1">Easy Returns and Quick refunds</Typography>
                            </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.root2}>
                    <Grid item xs={12} sm={6} className={classes.linksContainer}>
                        <Grid>
                            <Link underline='none'className={classes.link} >Description</Link>
                            <Link underline='none'className={classes.link} >Reviews(0)</Link>
                            <Link underline='none'className={classes.link}>Delivey & Returns</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.root2}>
                <Grid item xs={12} sm={6} className={classes.description}>
                        <Grid>
                            <Typography variant='h5' >Product Description</Typography>
                            <Typography>{data.product.description}
                            </Typography>
                            </Grid>
                    </Grid>
                    </Grid>
                </Grid>
               <div className={classes.relatedProductsCont}> 
                <Typography className={classes.relatedProdsText}>Related Products</Typography>
               <Products products={data.similarProducts.slice(0,4)} />  
               </div>
        </Container>             
        </>
    )
}

export default ProductDetail
