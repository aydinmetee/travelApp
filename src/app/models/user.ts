import { Crew } from './crew';
import { Bike } from './bike';

export class User{
    id:number;
    username:String;
    password:String;
    email:String;
    bike:Bike;
    location:String;
    myCrew:Crew=null;
}