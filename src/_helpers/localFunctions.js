export const localFunctions = {
    addLocalCity,
    changeLocalCity,
    deleteLocalCity,
    changeLocalIndexCity
};

function addLocalCity(newCity) {
    localStorage.setItem("city", localStorage.getItem("city") !== null ? localStorage.getItem("city") + `|${newCity}` : `${newCity}`)
    localStorage.setItem("indexCity", newCity)
}
function changeLocalCity(indexCity, newCity) {
    let arrayCity = localStorage.getItem("city").split('|');
    arrayCity.pop();
    arrayCity.push(newCity)
    arrayCity = arrayCity.join('|');
    localStorage.setItem("city", arrayCity)
    localStorage.setItem("indexCity", indexCity)
}
function deleteLocalCity(indexCity, newCity) {
    let arrayCity = localStorage.getItem("city").split('|').filter(elem => elem !== newCity).join('|');
    localStorage.setItem("city", arrayCity)
    localStorage.setItem("indexCity", indexCity)
}
function changeLocalIndexCity(indexCity) {
    localStorage.setItem("indexCity", indexCity)
}