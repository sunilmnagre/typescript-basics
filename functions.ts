const myFunction = (inputNum: number): number => {
    return inputNum + 2;
}

const getUpperCase = (str: string) => {
    return str.toUpperCase();
}

const signIn = (userName: string, password: string, isNewUser: boolean = false): boolean => {
    return isNewUser;
}

const hte: string = "Sunil";

const hotels: Array<string> = ['Redis', 'BlueBell', 'Moon'];
const processed = hotels.map((hotel): string => {
    return hotel;
});

console.log(processed);


const handleError = (message: string): never => {
    throw new Error(message);
};

myFunction(5);

getUpperCase("sunil");

let status = signIn("username", "password", false);


export {}