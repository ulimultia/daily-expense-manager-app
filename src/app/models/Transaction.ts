export type Category = "Transportation" | "Food & Beverage" | "Rentals" | "Other Expense"

export type Transaction = {
    category: Category,
    amount: number,
    description: string,
    date: Date,
}