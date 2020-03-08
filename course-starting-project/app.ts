let useInput: unknown;
let userName: string;

useInput = 5;
useInput = 'Max';

if (typeof useInput === 'string') {
    userName = useInput;
}

function generateError(message: string, code: number): never {
    throw {
        message,
        errorCode: code
    };
}

generateError('An error occurred!', 500);