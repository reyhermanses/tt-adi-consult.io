export interface Employee {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate?: Date | null;
    basicSalary: number;
    status: string;
    group: string;
    description: string;
}