import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import '../styles/image-viewer.css'

export default function ImageViewer({ open, setOpen, image }) {
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    maxHeight: '80%'
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="image_viewer">
            <img loading="lazy" src={image.urls.raw} alt={image.id} style={{ height: '100%', width: '100%', objectFit: 'contain', maxWidth: 500, maxHeight: 500, borderRadius: 10, marginRight: 20 }} />

            <div style={{ width: '100%', flex: 1, overflowY: 'scroll' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt={image.user.username} src={image.user.profile_image.small} />
                <h2 style={{ marginLeft: 10 }} >{image.user.username}</h2>
              </div>
              <div className="unsplash_stats">
                <div style={{ textAlign: 'center' }}>
                  <strong>{image.user.total_collections}</strong>
                  <p>Total Collections</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <strong>{image.user.total_likes}</strong>
                  <p>Total Likes</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <strong>{image.user.total_photos}</strong>
                  <p>Total Photos</p>
                </div>
              </div>
              <div>
                <h3>Bio</h3>
                <p>{image.user.bio}</p>
              </div>

              {image.description || image.alt_description ? (
                <div>
                  <h3>Image Description</h3>
                  <p>{image.description || image.alt_description}</p>
                </div>) : null}

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ color: 'red' }} />
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`${image.likes}` || '229'} Likes
                </Typography>
              </div>
              <div className="social">
                {image.user.twitter_username ? (
                  <a href={"https://twitter.com/" + image.user.twitter_username} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                  </a>
                ) : null}
                {image.user.instagram_username ? (
                  <a href={"https://instagram.com/" + image.user.instagram_username} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </a>
                ) : null}
                {image.user.portfolio_url ? (
                  <a href={image.user.portfolio_url} target="_blank" rel="noopener noreferrer">
                    <IconButton >
                      <LanguageIcon />
                    </IconButton>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

        </Box>

      </Modal>
    </div>
  );
}
