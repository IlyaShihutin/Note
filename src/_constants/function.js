export const regular_hastag = /#[0-9A-Za-zА-Яа-яё]+/g;

export const breakString = (string) => {
    const text = string.replaceAll(regular_hastag, "").replaceAll("#", "");
    const tagsArray = string.replaceAll("#", " #").split(" ")
    const tags = [];

    tagsArray.forEach(elem => {
        if (elem[0] === "#" && elem.length > 1) {
            tags.push(elem.substr(1, elem.length - 1));
        }
    })
    return [text, tags];
}

export const handleFilterTag = (notes, filterTag) => {
    if (filterTag !== "") {
        return notes.filter(elem => elem.tag.includes(filterTag))
    } else {
        return notes;
    }
}