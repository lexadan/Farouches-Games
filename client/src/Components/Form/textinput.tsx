import { TextField } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface Props {
    title: string;
    validator: (value: any) => string | null;
    setValue: (value: any) => void;
    width?: string;
    height?: string;
    type?: string;
    defaultValue?: string;
}

const TextInput: FunctionComponent<Props> = (props: Props) => {

    const {title, validator, setValue, width, height, type, defaultValue} = props;

    const [error, setError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>('');


    function handleChange(event: any) {
        const value = event.target.value;
        setValue(value)
        if (value === undefined) {
            setError(false);
            setErrorText('');
        }
        if (value === '') {
            setError(true);
            setErrorText('Champ obligatoire');
        }
        else if (validator(value) !== null) {
            setError(true);
            setErrorText(validator(value)!);
        } else {
            setError(false);
            setErrorText('');
        }
    }

    return (
        <TextField
            defaultValue={defaultValue}
            error={error}
            helperText={errorText}
            style={{
                width: width,
                height: height,
            }}
            label={title}
            onChange={handleChange}
            type={type}
        />
    );
}

TextInput.defaultProps = {
    width: '300px',
    height: 'max-content',
    type: 'text',
    defaultValue: '',
}

export default TextInput;