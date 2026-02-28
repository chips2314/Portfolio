const slider = document.getElementById("investmentSlider");
  const investmentValue = document.getElementById("investmentValue");
  const monthlyProfit = document.getElementById("monthlyProfit");
  const yearlyProfit = document.getElementById("yearlyProfit");

  function formatNumber(num) {
    return num.toLocaleString("ru-RU");
  }

  function updateCalculator() {
    const amount = parseInt(slider.value);
    const monthlyRate = 0.15;

    const monthProfit = amount * monthlyRate;
    const yearProfit = (amount * Math.pow(1 + monthlyRate, 12)) - amount;

    investmentValue.textContent = "$" + formatNumber(amount);
    monthlyProfit.textContent = "+$" + formatNumber(Math.round(monthProfit));
    yearlyProfit.textContent = "+$" + formatNumber(Math.round(yearProfit));
  }

  slider.addEventListener("input", updateCalculator);
  updateCalculator();