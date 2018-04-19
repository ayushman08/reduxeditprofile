import data from './LibraryList.json';
// export default () => data;

export default (state = data, action) => {
    switch (action.type) {
      case 'update_data':
      return [...state,action.payload]
   
   default:
        return state;
    }
  };