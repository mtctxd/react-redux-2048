export const wasGamefieldChanged = (prevGamefiend, newGamefield) => {

  for (let i = 0; i < prevGamefiend.length; i++) {
    if (prevGamefiend[i] !== newGamefield[i]) {
      return false;
    }
  }

  return true;
};
