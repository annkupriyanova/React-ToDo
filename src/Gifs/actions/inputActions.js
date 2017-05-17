export const INPUT_CHANGE = 'INPUT_CHANGE'
export const NUMBER_OF_ELEMENTS_CHANGE = 'NUMBER_OF_ELEMENTS_CHANGE'

export const inputChange = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const elementsChange = (elements) => ({
    type: NUMBER_OF_ELEMENTS_CHANGE,
    elements
})