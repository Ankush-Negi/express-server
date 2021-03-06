import IVersionableDocument from '../versionable/IVersionableDocument';
export default interface IUserModel extends IVersionableDocument {
  originalId: string;
  email: string;
  name: string;
  role: string;
  address: string;
  dob: Date;
  mobileNumber: number;
  hobbies: string[];
  password: string;
}
