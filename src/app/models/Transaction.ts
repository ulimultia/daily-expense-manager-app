export type Category = "Transportation" | "Food & Beverage" | "Rentals" | "Other Expense" | "Salary"

export let categoryDict = {
    "expense": [
        "Transportation",
        "Food & Beverage",
        "Rentals",
        "Other Expense" 
    ],
    "income": [
        "Salary"
    ]
}

export type Transaction = {
    category: Category,
    amount: number,
    description: string,
    date: Date,
}