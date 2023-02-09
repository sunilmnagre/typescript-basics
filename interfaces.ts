interface LoginMethod {
    googleId? : string,
    facebookId? : string,
    username: string,
    password: string,
    getLoggedInUserId() : number
}

interface LoginMethod {
    gitUserId: string
}

interface AdminLogin extends LoginMethod {
    accessType: string,
    type?: "admin" | "superadmin"
}

let loggingIn: AdminLogin = {
    username: "myuser",
    password: "password",
    gitUserId: "mygitId",
    getLoggedInUserId(){
        return 12
    },
    accessType: "Full Access"
};