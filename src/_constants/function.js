export const breakString = (string) => {
    const arr = string.split("#");
    if (arr.length < 2) {
        return [arr[0], ""]
    } else {
        const tag = arr.filter((elem, index) => index !== 0)
        return [arr[0], tag]
    }

}
export const handleFilterTag = (notes, filterTag) => {
    if (filterTag !== "") {
        return notes.filter(elem => elem.tag.includes(filterTag))
    } else {
        return notes;
    }
}