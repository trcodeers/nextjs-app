import { Formik } from "formik";


type Props = {
    formInitialState: any,
    formValidationSchema: any,
    onSubmitForm: (values: any, formikComponent: any) => any,
    children: any
}
const AppForm = (props: Props) =>{

    const { formInitialState, formValidationSchema, onSubmitForm, children } = props

    return(
        <>
            <Formik
                initialValues={formInitialState}
                validationSchema={formValidationSchema}
                onSubmit={onSubmitForm}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {children} 
                   </form>  
                )}
            </Formik>
        </>
    )
}

export default AppForm;