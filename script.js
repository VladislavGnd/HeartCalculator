function calculateBSI() {
    const height = parseFloat(document.getElementById("height").value); // Convert to meters
    const weight = parseFloat(document.getElementById("weight").value);
    const volumeLA = parseFloat(document.getElementById("volumeLA").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Будь ласка, введіть коректні значення зросту та ваги.");
        return;
    }
    const bmi = Math.sqrt((height * weight) / 3600);
    const lavi = volumeLA / bmi;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "ППТ: " + bmi.toFixed(2);

    const resultLAVI = document.getElementById("resultLAVI");
    resultLAVI.textContent = "іОЛП: " + lavi.toFixed(2);


    // Додатково: Ви можете додати інтерпретацію ІМТ тут
    // наприклад, використовуючи умовні оператори (if/else)
}