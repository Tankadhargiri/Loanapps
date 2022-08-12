export interface Loan {
    id: number,
    loanNo?: number,
    loanDetail: string,
    loanType: string,
    uFirstName: string,
    uLastName: string,
    uEmail: string,
    uAddress?: string,
    term:number,
    amount:number
}