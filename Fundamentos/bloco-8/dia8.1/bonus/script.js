const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damegeDragon = () => {
  const dano = Math.floor(Math.random()* (50 - 15 +1)) + 15 ;
  return dano;
};

const damegeWarrior = () => {
  const minimo = warrior.strength;
  const maximo = minimo * 2;
  const dano =  Math.floor(Math.random()* (maximo - minimo +1)) + minimo; 
  return dano;
};

const damegeMage = () => {
  const mana = mage.mana;
  const minimo = mage.intelligence;
  const maximo = minimo * 2;
  const manaState = { dano: 'Não possui mana suficiente', mana: 0 };

  if (mana > 15 ) {
    const dano =  Math.floor(Math.random()* (maximo - minimo +1)) + minimo;  
    manaState.mana = mana - 15;
    manaState.dano = dano;
  }
 
 return manaState;
};

console.log(damegeMage());