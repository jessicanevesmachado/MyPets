import { IDog, RenderDogPaginantion } from "../../types/IDog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TOTAL_PER_PAGE } from "../../constants";

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

export const RenderPaginantionDog = ({
  currentPage,
  totalItens,
}: RenderDogPaginantion) => {
  const totalOfPage = parseInt((totalItens / TOTAL_PER_PAGE).toString());
  return (
    <Box sx={{ float: "right", marginBottom: "10px" }}>
      {`Exibindo a página ${currentPage}/${totalOfPage} de um total de ${totalItens} dogs. `}
    </Box>
  );
};
