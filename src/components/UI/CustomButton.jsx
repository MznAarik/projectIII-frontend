import { Button } from '@mantine/core';

function CustomButton({ buttonText, onClick }) {
    return (
        <Button
            variant="gradient" size="md" radius="md"
            gradient={{ from: 'red', to: 'teal', deg: 213 }}
            onClick={onClick}>{buttonText}
        </Button>
    );
}

export default CustomButton;