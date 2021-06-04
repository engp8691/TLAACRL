export interface PeopleRequest {
  job: string;
  name: string;
  patients: Array<string>;
}

export interface PatientInfo {
  // TODO add more detail to the object
  patient: string;
  treatment: string;
}

export class PeopleDto {
  public greeting: string;
  public patients: Array<PatientInfo>;

  public sayHi(greeting) {
    this.greeting = greeting;
  }

  public treatments(job: any, patients: any) {
    this.patients = patients.map(p => ({ patient: p, treatment: job === 'doctor' ? 'flu shot' : 'shots and a chew toy' }));
  }
}
