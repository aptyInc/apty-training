import { v4 as uuidv4 } from 'uuid';
export default function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, { "id": uuidv4(), "task_name": action.payload, status: false }];
      case 'TOGGLE_TASK':
        return state.map((i) => {
          if (i.id === action.payload) {
            return { ...i, status: !i.status };
          }
          return i;
        });
      case 'REMOVE':
        return state.filter((i) => i.id !== action.payload);
      default:
        return state;
    }
  }