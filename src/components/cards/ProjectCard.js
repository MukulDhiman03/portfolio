import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizRSMZLPMCXIyF8Q2nyW7KMP9Yo-bLGec5Jl83NxOUofIJ265ulBusnwcW4YCN2dDsRI&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.project}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {project.description} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
}
