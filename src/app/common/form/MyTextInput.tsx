import { useField } from 'formik';
import React from 'react';

interface Props{
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function MyTextInput (props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <form > 
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <label  color='red'>{meta.error}</label>
            ): null}
        </form>
    )
}