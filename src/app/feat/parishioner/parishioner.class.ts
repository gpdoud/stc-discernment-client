export class Parishioner {

    id: number = 0;
    firstname: string = '';
    lastname: string = '';
    email: string = '';
    cellphone: string = ''
    homephone: string = '';
    ministry: string = '';
    year: number = (new Date).getFullYear();
    reviewed: boolean = false;
    status: string = '';
    submittedBy: string = '';

    active: boolean = true;
    created!: string;
    updated!: string;

}
