/* I could not figure out how to properly create arrays
and call the function using them as input for the printWeather function
*/

const cities = [
  { city: "Amsterdam", temp: 22, windSpeed: 15 },
  { city: "Berlin",    temp: 15, windSpeed: 20 },
  { city: "Copenhagen",temp: -5, windSpeed: 25 }
];

function convertToFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}

function convertToKelvin(temp) {
  return temp + 273.15;
}

function calcWindChill(temp, windSpeed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function tempStatus(temp) {
  if (temp < 0) {
    return `Freezing`;
  } else if (temp < 10) {
    return `Cold`;
  } else if (temp < 20) {
    return `Mild`;
  } else if (temp < 30) {
    return `Warm`;
  } else {
    return `Hot`;
}
} 

function printWeather(city, temp, windSpeed) {
  const tempF = convertToFahrenheit(temp).toFixed(2);
  const tempK = convertToKelvin(temp).toFixed(2);
  const status = tempStatus(temp)
  const windChill = calcWindChill(temp, windSpeed).toFixed(2);

  console.log(`Weather Report for ${city}`);
  console.log(`Temperature: ${temp} °C`);
  console.log(`Temperature: ${tempF} °F`);
  console.log(`Temperature: ${tempK} K`);
  console.log(`Status: ${status}`);
  console.log(`Wind chill in ${city}: ${windChill} °C`)
}
