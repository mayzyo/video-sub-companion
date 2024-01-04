import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useSignal } from '@preact/signals'

export const FilePicker = ({ file }) => {
    const loading = useSignal(false)

    const onClick = async () => {
        loading.value = true
        const response = await file_selector()
        if(response) {
            file.value = response
        }

        loading.value = false
    }
    const onDelete = () => file.value = null

    return file.value ? (
        <Chip label={file.value} onDelete={onDelete} />
    ) : (
        <Button
            component="label"
            variant="contained"
            disabled={loading.value}
            startIcon={<CloudUploadIcon />}
            onClick={onClick}
        >
            Select file
        </Button>
    )
}