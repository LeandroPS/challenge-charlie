import colors from "../styles/colors";

var directions = [
    "Norte",
    "Nordeste",
    "Leste",
    "Sudeste",
    "Sul",
    "Sudoeste",
    "Oeste",
    "Nordeste"
];

export const getDirection = heading => {
    const index =
        Math.round(((heading %= 360) < 0 ? heading + 360 : heading) / 45) % 8;
    return directions[index] || "--";
};

export const getWeatherColor = (temperature, tone = "normal", alpha = 1) => {
    function getOpacityInHex(alpha) {
        return Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0");
    }

    if (temperature < 15) return colors["blue"][tone] + getOpacityInHex(alpha);
    else if (temperature >= 15 && temperature <= 35)
        return colors["yellow"][tone] + getOpacityInHex(alpha);
    else if (temperature > 35)
        return colors["red"][tone] + getOpacityInHex(alpha);
    else return colors["gray"][tone] + getOpacityInHex(alpha);
};

export const getWeatherIcon = weather => {
    const icons = {
        clear: require("../assets/icons/clear.svg"),
        clouds: require("../assets/icons/clouds.svg"),
        thunderstorm: require("../assets/icons/thunderstorm.svg"),
        snow: require("../assets/icons/snow.svg"),
        mist: require("../assets/icons/snow.svg"),
        rain: require("../assets/icons/rain.svg"),
        drizzle: require("../assets/icons/drizzle.svg")
    };

    return weather === undefined ? "--" : icons[weather.toLowerCase()];
};

export const getTranslatedWeather = weather => {
    const weathers = {
        clear: "Ensolarado",
        clouds: "Nuvens",
        thunderstorm: "Tempestade",
        snow: "Neve",
        mist: "Nevoeiro",
        rain: "Chuva",
        drizzle: "Chuvisco"
    };

    return weather === undefined ||
        weathers[weather.toLowerCase()] === undefined
        ? "--"
        : weathers[weather.toLowerCase()];
};

export const toFahrenheit = temperature_in_celsius =>
    temperature_in_celsius * (9 / 5) + 32;
