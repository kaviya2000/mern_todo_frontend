import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StoryBook from "../assets/storybook.jpeg"

const Explore = () => {
  return (
    <div>
      <center> <h1>WELCOME HERE TO EXPLORE YOUR KNOWLEDGE</h1>  </center> 
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={StoryBook}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STORY BOOK
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Story books make our mind and body to be fresh and make us to jump into the child hood 
          </Typography>
        </CardContent>
      </CardActionArea>
      WANT TO EXPLORE CLICK HERE:
      <CardActions>
        <Button size="small" color="primary">
          EXPLORE
        </Button>
      </CardActions>
    </Card>
      
    </div>
  )
}

export default Explore
