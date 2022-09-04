import { ErrorMessage, useFormikContext } from "formik";
import Colors from "../../../config/colors";
import AppFormSelectField from "./appFormSelectField";


type Props = {
    name: string,
    label: string,
    data: any
    fieldWidth?: string,
    disable?: boolean 
}
const AppFormSelectInput = (props: Props) => {

    const { name, label, data,disable, fieldWidth } = props
    const { errors, setFieldValue, touched, values, getFieldProps, getFieldMeta } = useFormikContext();

    return(
        <>    
            <div style={{ display: 'flex', flexDirection: 'column' }}> 
                <AppFormSelectField
                   name={name}
                   label={label}
                   data={data}
                   rest={{...getFieldProps(name) }}
                   disable={disable}
                />
                <div style={{ color: Colors.danger, fontSize: '10px'}}>
                    <ErrorMessage name={name} />
                </div>
            </div>       
        </>
    )
}

export default AppFormSelectInput;