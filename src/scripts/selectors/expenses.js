export const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense)=>{
        let start = typeof startDate !== 'number' || expense.createdAt >= startDate 
        let end = typeof endDate !== 'number' || expense.createdAt <= endDate 
        let included = typeof text !== 'string'|| text.length == 0 || expense.description.toLowerCase().includes(text.toLowerCase())

        return start && end && included
    }).sort((a, b)=>{
        if (sortBy == 'date'){
            return a.createdAt > b.createdAt ? -1 : 1
        }else if (sortBy == 'amount') {
            return a.amount > b.amount ? -1 : 1
        }else {
            return 0
        }
    })
}