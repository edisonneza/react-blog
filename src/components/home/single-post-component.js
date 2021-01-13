import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/sq';

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function SinglePost(props) {
  const classes = useStyles();
  const history = useHistory();
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          {/* <CardActionArea component="a" href="#"> */}
          {/* <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card> */}
          <CardMedia
            component="img"
            alt={post.imageTitle}
            height="140"
            image={post.image}
            title={post.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              dangerouslySetInnerHTML={{
                __html:
                  post.shortDesc.split(" ").splice(0, 20).join(" ") + "...",
              }}
            ></Typography>
            <i>{moment(post.date).locale('sq').fromNow()}</i>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            color="primary"
            aria-label="Facebook"
            component="span"
            size="small"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="WhatsApp"
            component="span"
            size="small"
          >
            <WhatsAppIcon />
          </IconButton>

          <Button
            size="small"
            color="primary"
            onClick={() => history.push({ pathname: post.link, state: { post } })}
          >
            Vazhdo leximin...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

SinglePost.propTypes = {
  post: PropTypes.object,
};
