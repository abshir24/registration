export class User {
    constructor(
        public firstName:string = "",
        public lastName:string = "",
        public email:string = "",
        public password:string="",
        public confirmPassword:string="",
        public streetaddress:string="",
        public city:string="",
        public state:string=""
    ){}
}
