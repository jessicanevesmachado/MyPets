import { IDog } from "../../types/IDog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";

export const Dog = ({ name, description, image, breed }: IDog) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={image} alt={breed} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
