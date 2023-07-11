import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia

  return (

<Grid item md={6} lg={3}>
<Card>
      <CardMedia
        component="img"
        height="240"
        image={urlToImage}
      />
      <CardContent>

        <Typography gutterBottom variant="body2" color='error'>
          {source.name}
        </Typography>

        <Typography variant="h5" color="text.secondary">
        {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={url}>Leer noticia</Button>
      </CardActions>
    </Card>
</Grid>

  )
}

export default Noticia
