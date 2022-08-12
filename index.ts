const accounts: account[] = []

type account = {
    number: string,
    balance: number
}

function openAccount(number: string, balance: number): void {
    const account: account = { number: number, balance: balance };
    accounts.push(account)
}

function getBalance(number: string): number {
    const account: account | undefined = accounts.find((account: account) => account.number === number)
    if (!account) throw new Error("La cuenta no se encontró")
    return account.balance
}

function deposit(number: string, amount: number): void {
    const account: account | undefined = accounts.find((account: account) => account.number === number)
    if (!account) throw new Error("La cuenta no se encontró")

    account.balance += amount
}

function withdraw(number: string, amount: number): void {
    const account: account | undefined = accounts.find((account: account) => account.number === number)
    if (!account) throw new Error("La cuenta no se encontró")

    if (account.balance - amount < 0) throw new Error("Fondos insuficientes")
    account.balance -= amount
}

openAccount("111", 0)

deposit("111", 1000)
console.log(getBalance("111"))

withdraw("111", 500)
console.log(getBalance("111"))
