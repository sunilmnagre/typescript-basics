const userObj = {
    "name": "Sunil",
    "email": "email@gmail.com",
    "isPaid": false
}

// const createUser = ({name: string, email: string}) => {
//     console.log(name);
// }

//createUser({name: "sunil", email: "sunil@gmail.com"});

const createCourse = (): {name: string, price: number} => {
    return {
        "name": "Reactjs",
        "price": 1000
    };
}

type userSchema = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

const updateUser = (userData: userSchema): userSchema => {
    return {_id: "adfdsf", name: "Sunil", email: "S@s.com", isActive: true}
}


updateUser({_id: "adfdsf", name: "Sunil", email: "S@s.com", isActive: false});

type ccName = {
    cName: string;
}

type ccNum = {
    ccNumber: number;
}

type ccDetails = ccName & ccNum & {
    expiry: string;
    cvv: number;
}

const myCC: ccDetails ={
    cName: "sunil",
    ccNumber: 121212,
    expiry: "dsfasdf",
    cvv: 3232
}


export {}