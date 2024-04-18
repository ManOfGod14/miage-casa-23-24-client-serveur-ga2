// déclaration de l'objet geometrie exportable
export const geometrie = {
  aireCarre: function (cote) {
    return cote * cote;
  },

  perimetreCarre: function (cote) {
    return 4 * cote;
  },
};
