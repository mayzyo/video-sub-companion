import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export const FunctionPanel = ({ file, running }) => {
    const onConvert = async () => {
        running.value = true
        const response = await convert_to_audio(file.value);
        console.log('return value', response)
        running.value = false
    }

    return running.value ? (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    ) : (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onConvert}>Convert to mp3</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
}