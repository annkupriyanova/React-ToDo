export const INPUT_CHANGE = 'INPUT_CHANGE'
export const NUMBER_OF_ELEMENTS_CHANGE = 'NUMBER_OF_ELEMENTS_CHANGE'
//export const SUBMIT_CLICK = 'SUBMIT_CLICK'

export const inputChange = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const numberOfElemntsChange = (numberOfElemnts) => ({
    type: NUMBER_OF_ELEMENTS_CHANGE,
    numberOfElemnts
})

/*
export const submitClick = () => ({
    type: SUBMIT_CLICK
})
*/