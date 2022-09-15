import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

function NewsCard({ articles }) {
  return articles.map((ar) => {
    return (
      <Card style={{ maxWidth: 745, maxHeight: 450, marginTop: "30px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={ar.urlToImage}
            alt="Not found"
            style={{height: "250px"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ar.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ar.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
}

export default NewsCard;
