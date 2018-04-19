 
  export default (state = null, action) => {
    switch (action.type) {
      case 'list_selected':
        return action.payload;
      default:
        return state;
    }
  };