import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ImageCard({imageLink, username, likes, avatar}) {
  const randomImage = 'https://source.unsplash.com/random';


  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
            {username.charAt(0)}
          </Avatar>
        }
        title={`${username}` || "Shrimp and Chorizo Paella"}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageLink || randomImage}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color: 'red'}} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${likes}` || '229'} Likes
        </Typography>
      </CardActions>
    </Card>
  );
}
