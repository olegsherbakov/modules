let nextId = 0

export const add = item => ({
  type: `ADD`,
  payload: {
    ...item,
    id: ++nextId,
    active: true,
  },
})

export const toggle = id => ({
  type: `TOGGLE`,
  payload: { id },
})

export const remove = id => ({
  type: `REMOVE`,
  payload: { id },
})
