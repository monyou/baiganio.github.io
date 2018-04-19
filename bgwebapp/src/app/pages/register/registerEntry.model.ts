export class RegisterEntry {
    Email: string;
    Password: string;
    IP: string;

    /**
     *
     */
    constructor(email?: string, password?: string, ip?: string) {
        this.Email = email;
        this.Password = password;
        this.IP = ip;
    }
}
