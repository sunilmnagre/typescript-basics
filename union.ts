type User = {
    name: string;
    isAdminAccess: boolean;
}

type Admin = {
    username: string;
    isAdminAccess: string;
}

let user: User | Admin = { name: "John", isAdminAccess: true};

user = { name: "Sunil", isAdminAccess: true };

const getList = (id: string | number): [] => {
    return [];
}

getList("3");


