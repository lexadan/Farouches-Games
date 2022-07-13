import Button from '@mui/material/Button';

interface Props {
    title: String;
    onClick: () => void;
}

export const FormValidationButton = (props: Props) => {
    const {title, onClick} = props;

    return  (
        <div>
            <Button
                variant='contained'
                color='primary'
                onClick={onClick}
            >
                {title}
            </Button>
        </div>
    );
}