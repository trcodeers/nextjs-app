import { FormControl, InputLabel, Select, OutlinedInput, MenuItem } from "@mui/material";
import { useEffect } from "react";

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: '200px',
      },
    },
};

type Props = {
    name: string,
    label: string,
    data: any
    fieldWidth?: string,
    rest?: any,
    onFieldChange?: (value: any) => void,
    value?: number | any,
    disable?: boolean
}
const AppFormSelectField = (props: Props) =>{

    const { data, disable, label, fieldWidth, rest, onFieldChange, value } = props

    useEffect(() =>{
        console.log(disable)
    }, [disable])

    return(
        <>
            <FormControl>  
                <InputLabel shrink={true}>{label}</InputLabel>
                <Select
                    disabled={disable}
                    value={value || ''}
                    label={label}
                    style={{ width: fieldWidth || '300px' }}
                    MenuProps={MenuProps}
                    inputProps={{
                        shrink: true,
                    }}
                    size="small"
                    input={<OutlinedInput notched label={label} />}
                    onChange={onFieldChange ? (e) => onFieldChange(e.target.value) : ''}
                    {...rest}
                >
                    {data.map((el: any, index: number) =>  {
                        const { label, value } = el
                        return <MenuItem key={value} value={value}>{label}</MenuItem>
                    })}
                </Select>
            </FormControl> 
        </>
    )
}

export default AppFormSelectField;