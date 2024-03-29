export class Parishioner {

    id: number = 0;
    firstname: string = '';
    lastname: string = '';
    email: string = '';
    cellphone: string = ''
    homephone: string = '';
    ministry: string = 'Parishioner';
    year: number = (new Date).getFullYear();
    reviewed: boolean = false;
    status: string = '';
    submittedBy: string = '';

    isCaller: boolean = false;
    callerId?: number | null = null;
    caller!: Parishioner;
    callerName: string = '';

    active: boolean = true;
    created!: string;
    updated!: string;

}
