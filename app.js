const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");
const notes = document.querySelectorAll(".note");

const labels = {
  monthly: { unit: "per month", note: "Billed monthly" },
  yearly: { unit: "per year", note: "Billed once a year, about 20% less" }
};

function setPeriod(period) {
  prices.forEach(function (el) {
    el.textContent = Number(el.dataset[period]).toLocaleString("en-IN");
  });
  units.forEach(function (el) { el.textContent = labels[period].unit; });
  notes.forEach(function (el) { el.textContent = labels[period].note; });

  [monthlyBtn, yearlyBtn].forEach(function (btn) {
    const isActive = btn.id === period;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

monthlyBtn.addEventListener("click", function () { setPeriod("monthly"); });
yearlyBtn.addEventListener("click", function () { setPeriod("yearly"); });

setPeriod("monthly");
