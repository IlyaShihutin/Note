export function createOwnArrayCity(cityInfo) {
    const info = cityInfo.data.weather;
    const currentInfo = cityInfo.data.current_condition[0];
    const currentImg = currentInfo.weatherIconUrl[0].value.split("_");
    const name = cityInfo.data.request[0].query;
    const arrayWeather = [];
    arrayWeather.current = {};
    info.forEach((arrayCity, i) => {
        const indexTime = 5;//15:00 time  
        const img = arrayCity.hourly[indexTime].weatherIconUrl[0].value.split("_");
        let precipMM = 0;
        let precipInches = 0;
        arrayCity.hourly.forEach(elem => {
            precipMM = precipMM + Number(elem.precipMM);
            precipInches = precipInches + Number(elem.precipInches);
        })
        arrayWeather.push({
            nameCity: name,
            date: arrayCity.date,
            feelsLikeC: arrayCity.hourly[indexTime].FeelsLikeC + "°C",
            feelsLikeF: arrayCity.hourly[indexTime].FeelsLikeF + "F",
            maxTempC: arrayCity.maxtempC > 0 ? "+" + arrayCity.maxtempC + "°" : arrayCity.maxtempC + "°",
            minTempC: arrayCity.mintempC > 0 ? "+" + arrayCity.mintempC + "°" : arrayCity.mintempC + "°",
            maxTempF: arrayCity.maxtempC > 0 ? "+" + arrayCity.maxtempF + "F" : arrayCity.maxtempF + "F",
            minTempF: arrayCity.mintempF > 0 ? "+" + arrayCity.mintempF + "F" : arrayCity.mintempF + "F",
            humidity: arrayCity.hourly[indexTime].humidity,
            visibilityKM: arrayCity.hourly[indexTime].visibility,
            visibilityM: Math.round(arrayCity.hourly[indexTime].visibility * 1000 * 100) / 100,
            visibilityMiles: arrayCity.hourly[indexTime].visibilityMiles,
            precipMM: Math.round(precipMM * 100) / 100,
            precipInches: Math.round(precipInches * 100) / 100,
            winddir16Point: arrayCity.hourly[indexTime].winddir16Point,
            pressure: arrayCity.hourly[indexTime].pressure,
            windspeedKmph: arrayCity.hourly[indexTime].windspeedKmph,
            windspeedMps: Math.round(arrayCity.hourly[indexTime].windspeedKmph * 0.278 * 100) / 100,
            windspeedMiles: arrayCity.hourly[indexTime].windspeedMiles,
            weatherDesc: arrayCity.hourly[indexTime].weatherCode,
            weatherCode: img[img.length - 1] === "night.png" ? arrayCity.hourly[indexTime].weatherCode + "_night" : arrayCity.hourly[indexTime].weatherCode,
        })
    })
    arrayWeather[0].current = {
        temp_C: currentInfo.temp_C > 0 ? "+" + currentInfo.temp_C + "°" : currentInfo.temp_C + "°",
        temp_F: currentInfo.temp_F > 0 ? "+" + currentInfo.temp_F + "F" : currentInfo.temp_F + "F",
        feelsLikeC: currentInfo.FeelsLikeC > 0 ? "+" + currentInfo.FeelsLikeC + "°" : currentInfo.FeelsLikeC + "°",
        feelsLikeF: currentInfo.FeelsLikeF > 0 ? "+" + currentInfo.FeelsLikeF + "F" : currentInfo.FeelsLikeF + "F",
        weatherDesc: currentInfo.weatherCode,
        weatherCode: currentImg[currentImg.length - 1] === "night.png" ? currentInfo.weatherCode + "_night" : currentInfo.weatherCode,
        winddir16Point: currentInfo.winddir16Point,
        windspeedKmph: currentInfo.windspeedKmph,
        windspeedMps: Math.round(currentInfo.windspeedKmph * 0.278 * 100) / 100,
        windspeedMiles: currentInfo.windspeedMiles,
        visibilityKM: currentInfo.visibility,
        visibilityM: Math.round(currentInfo.visibility * 1000 * 100) / 100,
        visibilityMiles: currentInfo.visibilityMiles,
        humidity: currentInfo.humidity,
        pressure: currentInfo.pressure,
    }
    return [arrayWeather, name]
}
export function createOwnArrayCityPast(cityInfo) {
    const arrayWeather = [];

    cityInfo.data.weather[0].hourly.forEach((arrayCity) => {
        const img = arrayCity.weatherIconUrl[0].value.split("_");
        arrayWeather.push({
            time: arrayCity.time / 100,
            tempC: arrayCity.tempC > 0 ? "+" + arrayCity.tempC + "°" : arrayCity.tempC + "°",
            tempF: arrayCity.tempF > 0 ? "+" + arrayCity.tempF + "F" : arrayCity.tempF + "F",
            windspeedKmph: arrayCity.windspeedKmph,
            windspeedMps: Math.round(arrayCity.windspeedKmph * 0.278 * 100) / 100,
            windspeedMiles: arrayCity.windspeedMiles,
            weatherCode: img[img.length - 1] === "night.png" ? arrayCity.weatherCode + "_night" : arrayCity.weatherCode
        })
    })
    return arrayWeather
}
export function windDirection(wind) {
    switch (wind) {
        case "S":
            return "rotate(0deg)";
        case "SSW":
            return "rotate(23deg)";
        case "SW":
            return "rotate(45deg)";
        case "WSW":
            return "rotate(67deg)";
        case "W":
            return "rotate(90deg)";
        case "WNW":
            return "rotate(115deg)";
        case "NW":
            return "rotate(135deg)";
        case "NNW":
            return "rotate(160deg)";
        case "N":
            return "rotate(180deg)";
        case "SSE":
            return "rotate(-23deg)";
        case "SE":
            return "rotate(-45deg)";
        case "ESE":
            return "rotate(-67deg)";
        case "E":
            return "rotate(-90deg)";
        case "ENE":
            return "rotate(-115deg)";
        case "NE":
            return "rotate(-135deg)";
        case "NNE":
            return "rotate(-160deg)";
        default:
            return "rotate(0deg)";
    }
}

export const switchWindowLang = (lng) => {
    switch (lng) {
        case "es":
        case 'es-es':
            return 'es';
        case "ru":
        case "ru-ru":
            return 'ru';
        case "fr":
        case "fr-fr":
            return "fr";
        case "de":
        case "de-de":
            return "de";
        default:
            return "en";
    }
};


export const switchColorArrow = (speed) => {
    if (speed < 6) {
        return "green"
    } else if (speed >= 6 && speed <= 10) {
        return "orange";
    }
    else if (speed >= 11 && speed <= 25) {
        return "red";
    } else if (speed > 25) {
        return "burgundy";
    }
};