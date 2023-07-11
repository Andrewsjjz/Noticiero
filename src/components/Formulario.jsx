import { FormControl, MenuItem, InputLabel, Select, Button, Box } from '@mui/material';
import useNoticias from '../hooks/useNotcias';


const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]


export default function Formulario() {


    const {categoria, HandleChangeCategoria} = useNoticias()


    return (
        <form>

            <FormControl fullWidth>
                <InputLabel>Categorias</InputLabel>
                <Select
                    label='Categorias'
                    onChange={HandleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>

                <Box sx={{marginTop:5}}>
                    <Button
                    fullWidth
                        color='primary'
                        variant='contained'
                    >
                        Buscar noticia
                    </Button>
                </Box>



            </FormControl>

        </form>

    )
}
