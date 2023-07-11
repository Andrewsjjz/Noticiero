import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NoticiaProvider } from './context/NoticiasProvider';

import Formulario from './components/Formulario';
import ListadoNoticia from './components/ListadoNoticia';

function App() {

    return (
            <NoticiaProvider>

                <Container>
                    <header>
                        <Typography align='center' marginY={7} variant='h3'>
                            Hola Noticias
                        </Typography>
                    </header>

                    <Grid
                        container
                        justifyContent='center'
                        alignItems='center'
                        direction='row'

                    >
                        <Grid item md={6} xs={12} lg={4}>
                            <Formulario />
                        </Grid>
                    </Grid>

                    <ListadoNoticia/>
                </Container>
            </NoticiaProvider>

    )
}

export default App
