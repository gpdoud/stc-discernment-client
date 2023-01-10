export class Parishioner {

    id: number = 0;
    firstname: string = '';
    lastname: string = '';
    email: string | null = null;
    cellphone: string | null = null;
    homephone: string | null = null;
    ministry: string | null = null;
    year: number = (new Date).getFullYear();
    reviewed: boolean = false;
    status: ParishionerStatus | null = null;
    submittedBy: string | null = null;

    active: boolean = true;
    created: string = '';
    updated: string | null = null;

}

export enum ParishionerStatus {
    Yes, No, CallNextYear, CallThisYear
};