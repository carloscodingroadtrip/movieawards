export const arrayToObject = (array) =>
                    array.reduce((obj, item,idx) => {
                        obj[idx] = item
                        return obj
    }, {})