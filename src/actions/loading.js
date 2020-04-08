export const requestFinish = () => ({
    type: 'REQUEST_FINISH',
    isFetching: false
})

export const requestStart = () => ({
    type: 'REQUEST_START',
    isFetching: true
})