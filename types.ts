export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface PatientConfig {
  name: string;
  gender: Gender;
}