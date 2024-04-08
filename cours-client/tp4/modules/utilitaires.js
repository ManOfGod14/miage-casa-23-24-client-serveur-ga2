export default function genererNombreAleatoire() {
  const nbrAlea = Math.random();
  const nbrMulti100 = nbrAlea * 100 + 1;
  return Math.floor(nbrMulti100);
}

// function genererNombreAleatoire() {
//   const nbrAlea = Math.random();
//   const nbrMulti100 = nbrAlea * 100 + 1;
//   return Math.floor(nbrMulti100);
// }

// export default genererNombreAleatoire;
