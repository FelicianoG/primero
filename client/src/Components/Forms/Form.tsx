import { FormProvider, useForm } from "react-hook-form";


interface FormProps{
    defaultValues?:any;
    onSubmit( data:{}, reset:Function ) : void;
    children?:React.ReactNode;
    clearAfterSubmit?:boolean;
}

export default function Form({ defaultValues, onSubmit, children }:FormProps){

    const methods = useForm<any>({
        defaultValues: defaultValues ?? {}
    });

    const onFormSubmit = (data:any) => {
        onSubmit(data, methods.reset);
    };

return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onFormSubmit)} autoComplete= "off">
            { children }
        </form>
    </FormProvider>
)

}