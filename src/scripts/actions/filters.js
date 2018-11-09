export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
}
export const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}
export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
export const setStartDate = (val = undefined) => {
    return {
        type: 'SET_START_DATE',
        val: val
    }
}
export const setEndDate = (val = undefined) => {
    return {
        type: 'SET_END_DATE',
        val: val
    }
}