export class LoginEntry {
    email: string;
    Password: string;

    constructor(email?: string, password?: string) {
        this.email = email;
        this.Password = password;
    }
}
