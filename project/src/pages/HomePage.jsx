import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

function HomePage(props) {
  const products = props.globalState.products;
  const globalsetState = props.globalsetState;
  let shownProducts = props.globalState.shownProducts;

  if(Object.keys(shownProducts).length === 0 ) shownProducts = products;

  console.log(shownProducts)
  const history = useHistory();
  const handleClick = (id)=> {
     globalsetState((prevState) => {
        return {
          ...prevState,
          selectedProductId: id
        }
     });
      history.push("/product");
  }
  console.log("HomePage---------> ",shownProducts)

  return (
    <Container sx={{marginTop: '10px'}}>
      <Grid container spacing={2}>
      {Object.keys(shownProducts).map((key) => {
        const product = shownProducts[key];
        return (
        <Grid item>
          <Card key = {key} sx={{ width: 345, margin: '50px'}}>
            <CardMedia
              sx={{ height: 400 }}
              image={product.img}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" onClick={() => handleClick(key)}>Open</Button>
            </CardActions>
          </Card>
          </Grid>
        );
      })}
      </Grid>
    </Container >
  )
}

export default HomePage