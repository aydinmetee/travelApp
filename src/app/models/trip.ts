import { User } from './user';
export class Trip{
    slocation:string;
    flocation:string;
    sdate:string;
    assignee:User;
    participants:User[];
    id:number;

    constructor(slocation:string,flocation:string,sdate:string,assignee:User){
        this.slocation=slocation;
        this.flocation=flocation;
        this.sdate=sdate;
        this.assignee=assignee;
        this.participants=[];
    }
}