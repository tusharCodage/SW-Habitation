export const jsonToObj = (str) => {
    try {
        return JSON.parse(str)
    } catch (err) {
        return str
    }
}
export const objToJson = (val) => {
    if (typeof val == 'string') return val;
    try {
        return JSON.stringify(val)
    } catch (err) {
        return val
    }
}