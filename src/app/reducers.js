import { combineReducers } from 'redux'

const items = (state = [], { type, payload }) => {
  switch (type) {
    case `ADD`:
      return [...state, payload]
    case `REMOVE`:
      return state.filter(x => x.id !== payload.id)
    case `TOGGLE`:
      return state.map(x =>
        x.id === payload.id ? { ...x, active: !x.active } : x
      )
    default:
      return state
  }
}

export default combineReducers({
  items,
})
