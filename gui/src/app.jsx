import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import viteLogo from '/logo.svg'
import { useSignal, effect } from '@preact/signals'
import { FilePicker } from './components/file-picker'
import { FunctionPanel } from './components/function-panel'
import './app.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

export function App() {
    const file = useSignal(null)
    const running = useSignal(false)

    effect(() => file.value === null && (running.value = false))

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <img src={viteLogo} class="logo" alt="Vite logo" />

            <h1>Video Sub Companion App</h1>

            <Stack spacing={{ xs: 1, sm: 2 }} direction="column" alignItems="center">
                <p>Select the file to create subtitle</p>
                <FilePicker file={file} />
                {file.value && (
                    <FunctionPanel file={file} running={running} />
                )}
            </Stack>

            <p class="read-the-docs">
                Created by Michael May
            </p>
        </ThemeProvider>
    )
}