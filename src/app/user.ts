export class User {
    Id: number;
    EmailId:string;
    UserName:string;
    Password:string;
    constructor( Id: number, EmailId:string,UserName:string,Password:string ) {
        this.Id=Id;
        this.EmailId=EmailId;
        this.UserName=UserName;
        this.Password=Password
    }
}
