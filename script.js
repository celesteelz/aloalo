let coins = 0;
let coinsPerTap = 1;
let upgradeCost = 10;

const coinElement = document.getElementById('coin');
const coinsElement = document.getElementById('coins');
const coinsPerTapElement = document.getElementById('coinsPerTap');
const upgradeButton = document.getElementById('upgrade');
const upgradeCostElement = document.getElementById('upgradeCost');

// Обработка нажатия на монету
coinElement.addEventListener('click', () => {
  coins += coinsPerTap;
  coinsElement.textContent = coins;
  checkUpgradeAvailability();
});

// Обработка улучшения
upgradeButton.addEventListener('click', () => {
  if (coins >= upgradeCost) {
    coins -= upgradeCost;
    coinsPerTap++;
    upgradeCost *= 2;

    coinsElement.textContent = coins;
    coinsPerTapElement.textContent = coinsPerTap;
    upgradeCostElement.textContent = upgradeCost;

    checkUpgradeAvailability();
  }
});

// Проверка доступности улучшения
function checkUpgradeAvailability() {
  upgradeButton.disabled = coins < upgradeCost;
}

// Инициализация
checkUpgradeAvailability();
