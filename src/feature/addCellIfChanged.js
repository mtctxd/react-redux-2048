import { addRandom } from "./addRandom";
import { wasGamefieldChanged } from "./wasGamefieldChanged";

export const addCellIfChanged = (state, prevGamefiend, newGamefield) => {
  if (!wasGamefieldChanged(prevGamefiend, newGamefield)) {
    addRandom(state);
  }
};
