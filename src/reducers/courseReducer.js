export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ];
      //ES6 spread operator:
      //represents existing array and then spreads it out as if you defined the values in
      //returns a new instance of the state array
      //then use Object.assign to create a deep copy of the course that's passed in
    default:
      return state;
  }
}

//if you don't like the switch statement, there are alternatives

//reducers handle initial state as a default param 
