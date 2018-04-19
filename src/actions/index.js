// export function getRepos(response) {
//     return{
//       type: 'Get_Repos',
//       payload: response
//     }
//   }

//   export function getRepoThunk() {
//     return function(dispatch, getState) {
//       fetch('https://api.github.com/repositories')
//       .then(e => e.json())
//         .then(function(response){
//           console.log(response);
//            var arr = JSON.stringify(response)
           
//            dispatch(getRepos(arr))
//         })
//         .catch((error) => {
//           console.error(error,"ERRRRRORRR");
//         });
//     }
//   }
 


//   export function repoSelected(repo){
//     return{
//       type: 'Repo_Selected',
//       payload: repo
//     }
//   }

export const repoSelected= (repoItem) => {
    return {
      type: 'list_selected',
      payload: repoItem
    };
  };

  export const updateListItem= (updatedata) => {
    return {
      type: 'update_data',
      payload: updatedata
    };
  };