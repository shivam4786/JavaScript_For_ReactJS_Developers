import Person_1 from './Person';

export function promote(){}

export default class Teacher_1 extends Person_1{
  constructor(name, degree){
    super(name);
    this.name = name;
    this.degree = degree;
  }
  teach(){
    console.log('teach');
  }
}
