import React from 'react';

const upgrades = [
  { name: 'Двойные ноты', cost: 10, power: 1 },
  { name: 'Тройные ноты', cost: 50, power: 2 },
  { name: 'Квадро ноты', cost: 100, power: 3 },
];

function Upgrades({ buyUpgrade, score }) {
  return (
    <div className="upgrades">
      <h2>Улучшения</h2>
      {upgrades.map((upgrade, index) => (
        <button 
          key={index} 
          onClick={() => buyUpgrade(upgrade.cost, upgrade.power)}
          disabled={score < upgrade.cost}
        >
          {upgrade.name} (Стоимость: {upgrade.cost})
        </button>
      ))}
    </div>
  );
}

export default Upgrades;