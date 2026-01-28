function parseDateString(dateString) {
    let parts = dateString.split(" ");
    let format = parts[0];
    let date = parts[1];
    let splitDate = date.split("-");

    let firstDate = Number(splitDate[0]);
    let secondDate = Number(splitDate[1]);
    let thirdDate = Number(splitDate[2]);

    if (format === "MDY") {
        return {day: secondDate, month: firstDate, year: thirdDate}
    } else if (format === "DMY") {
        return {day: secondDate, month: firstDate, year: thirdDate}
    } else {
        return `Error! Please enter a valid date format.`;
    }
}