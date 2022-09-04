import { Checkbox, Typography } from "@mui/material";
import Colors from "../../../config/colors";
import { ErrorMessage, useFormikContext } from "formik";

type Props = {
    name: string,
    label: string,
    defaultChecked?: boolean
}
const AppFormCheckBox = (props: Props) =>{
    
    const { name, label, defaultChecked } = props
    const { errors, setFieldValue, touched, values, getFieldProps } = useFormikContext();

    return(
        <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex'}}>
               <Checkbox defaultChecked={defaultChecked || false} size="small" {...getFieldProps(name)} />
                <p> <Typography variant="caption">{label}</Typography></p>
            </div> 
            <div style={{ color: Colors.danger, fontSize: '10px'}}>
                <ErrorMessage name={name} />
            </div>
            
        </div>

        </>
    )
}

export default AppFormCheckBox;