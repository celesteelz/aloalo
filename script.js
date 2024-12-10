let coins = parseInt(localStorage.getItem("coins")) || 0; 
let coinsPerTap = parseInt(localStorage.getItem("coinsPerTap")) || 1; 
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10; 

const coinElement = document.getElementById('coin');
const coinsElement = document.getElementById('coins');
const coinsPerTapElement = document.getElementById('coinsPerTap');
const upgradeButton = document.getElementById('upgrade');
const upgradeCostElement = document.getElementById('upgradeCost');

function updateUI() {
  coinsElement.textContent = coins;
  coinsPerTapElement.textContent = coinsPerTap;
  upgradeCostElement.textContent = upgradeCost;
  upgradeButton.disabled = coins < upgradeCost; 
}

function saveGame() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("coinsPerTap", coinsPerTap);
  localStorage.setItem("upgradeCost", upgradeCost);
}

coinElement.addEventListener('click', () => {
  coins += coinsPerTap;
  saveGame();
  updateUI();
});


upgradeButton.addEventListener('click', () => {
  if (coins >= upgradeCost) {
    coins -= upgradeCost;
    coinsPerTap++;
    upgradeCost *= 2;

    saveGame();
    updateUI();
  }
});

updateUI();
