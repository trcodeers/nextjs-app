import { MenuItem, TextField } from "@mui/material";
import Colors from "../../../config/colors";
import { ErrorMessage, useFormikContext } from "formik";

type Props = {
    name: string,
    label: string,
    data: Array<any>,
    fieldWidth?: string
}
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: '30px',
      },
    },
  };
const AppDropdownField = (props: Props) =>{
    
    const { data, name, label, fieldWidth } = props
    const { errors, getFieldProps, getFieldMeta } = useFormikContext();
    
    return(
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    select
                    label={label}
                    size={'small'}
                    style={{ width: fieldWidth || '300px' }}   
                    InputLabelProps={{
                        shrink: true,
                    }}  
                    {...getFieldProps(name)}
                >
                    {data.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ color: Colors.danger, fontSize: '10px'}}>
                    <ErrorMessage name={name} />
                </div>
            </div>
        </>
    )
}

export default AppDropdownField;