const celsiusParaFahrenheit = function(Celsius) {
    return (Celsius * 9/5) + 32;
};

const temperaturaCelsius = 20;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(temperaturaFahrenheit)
