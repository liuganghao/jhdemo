import { ILocation } from '@/shared/model/location.model';
import { IEmployee } from '@/shared/model/employee.model';

export interface IDepartment {
  id?: string;
  departmentName?: string;
  location?: ILocation;
  employees?: IEmployee[];
}

export class Department implements IDepartment {
  constructor(public id?: string, public departmentName?: string, public location?: ILocation, public employees?: IEmployee[]) {}
}
