import Grid from "@mui/material/Grid"
import Typography  from "@mui/material/Typography"
import useNoticias from "../hooks/useNotcias"
import Noticia from "./Noticia"

export default function ListadoNoticia() {

    const {noticias} = useNoticias()


  return (
<>
    <Typography
    textAlign={'center'}
    marginY={5}
    variant="h3"
    component={'h2'}
    >
        Ultimas noticias
    </Typography>

    <Grid
    container
    spacing={4}
    >
        {noticias.map(noticia =>(
            <Noticia
            key={noticia.url}
            noticia={noticia}
            />
        ))}
    </Grid>
</>
  )
}
