/* const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
 */
/* for (const chave in coolestTvShow) {
  console.log(chave);
}; */

//console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkill = (student) => {
  const skillkey = Object.keys(student);
  for (const index in skillkey) {
   console.log(`${skillkey[index]}, Nível: ${student[skillkey[index]]}`); 
  }
}
listSkill(student1);
listSkill(student2);