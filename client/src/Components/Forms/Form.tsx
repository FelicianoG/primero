import { FormProvider, useForm } from "react-hook-form";


interface FormProps{
    defaultValues?:any;
    onSubmit( data:{}, reset:Function ) : void;
    children?:React.ReactNode;
    clearAfterSubmit?:boolean;
}

export default function Form(props:FormProps){

    const methods = useForm<any>({
        defaultValues: props.defaultValues
    });

    const onSubmit = (data:any) => {
        props.onSubmit(data, methods.reset);
    };

    return (
        <FormProvider {...methods}>
            {console.log('XX'+JSON.stringify(props.defaultValues,null,2))}
            <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete= "off">
                { props.children }
            </form>
        </FormProvider>
    )

}