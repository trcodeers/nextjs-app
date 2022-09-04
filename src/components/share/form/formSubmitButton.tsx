import { Button } from "@mui/material"
import { useEffect } from "react"

type Props = {
    title?: string,
    btnDisabled: boolean,
    disabledTitle?: string
}

const FormSubmitButton = (props: Props) =>{
    
    const { title, btnDisabled, disabledTitle } = props

    return(
        <>
            <Button style={{ height: '45px', width: '100px' }} disabled={btnDisabled} type='submit' variant="contained">
                {btnDisabled ? (disabledTitle || 'Submitting') :  (title || 'Submit') }
            </Button>
        </>

    )
}

export default FormSubmitButton;