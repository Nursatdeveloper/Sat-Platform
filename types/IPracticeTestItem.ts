export interface IPracticeTestItem {
    id: number;
    year:string;
    month:string;
    type: string;
    reading: boolean;
    writing: boolean;
    math: boolean;
    answers: boolean;
    verified: boolean
}