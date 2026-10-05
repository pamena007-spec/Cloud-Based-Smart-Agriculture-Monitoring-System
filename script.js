function updateData() {

    let soil = Math.floor(Math.random() * 31) + 50;
    let temperature = Math.floor(Math.random() * 8) + 25;
    let water = Math.floor(Math.random() * 31) + 50;
    let humidity = Math.floor(Math.random() * 21) + 60;

    document.getElementById("soil").innerText = soil + "%";
    document.getElementById("temperature").innerText = temperature + "°C";
    document.getElementById("water").innerText = water + "%";
    document.getElementById("humidity").innerText = humidity + "%";

    let alertBox = document.getElementById("alertBox");

    if (soil < 60) {
        alertBox.innerHTML =
            "<strong>⚠️ Low Soil Moisture</strong>" +
            "<p>Please provide water to the crops.</p>";
    }
    else if (temperature > 30) {
        alertBox.innerHTML =
            "<strong>⚠️ High Temperature</strong>" +
            "<p>Temperature is above normal.</p>";
    }
    else {
        alertBox.innerHTML =
            "<strong>✓ All Systems Normal</strong>" +
            "<p>No critical alerts at the moment.</p>";
    }
}