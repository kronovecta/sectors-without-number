import Chance from 'chance';

import { LOCATION_CHANGE } from 'react-router-redux';
import { UPDATE_SECTOR } from '../actions/sector.actions';
import sectorGenerator from '../../utils/sector-generator';

const initialState = {
  seed: new Chance().hash({ length: 15 }),
  columns: 8,
  rows: 10,
};

export default function sector(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SECTOR:
      return {
        ...state,
        [action.key]: action.value,
      };
    case LOCATION_CHANGE:
      if (action.payload.pathname === '/sector') {
        const { seed, columns, rows } = state;
        return {
          ...state,
          ...sectorGenerator({ seed, columns, rows }),
        };
      }
      return state;
    default:
      return state;
  }
}