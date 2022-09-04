import { TextField } from "@mui/material";
import Colors from "../../../config/colors";
import { ErrorMessage, useFormikContext } from "formik";

type Props = {
    name: string,
    label: string,
    type?: string,
    fieldWidth?: string,
    multiline?: boolean
}
const AppTextField = (props: Props) =>{
    
    const { name, label, type, fieldWidth, multiline } = props
    const { errors, setFieldValue, touched, values, getFieldProps } = useFormikContext();

    return(
        <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
                type={type || "text"}
                label={label}
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                multiline={multiline || false}
                rows={multiline ? 5 : 0}
                style={{ width: fieldWidth || '300px' }}
                {...getFieldProps(name)}  
            />
               <div style={{ color: Colors.danger, fontSize: '10px'}}>
                    <ErrorMessage name={name} />
               </div>
        </div>

        </>
    )
}

export default AppTextField;