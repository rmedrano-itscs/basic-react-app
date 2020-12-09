/*
- Description
  state management with react hook context

 
*/


import React, { useReducer} from 'react'

const initialState = {
  temp: 0
 

 };

const store = React.createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    
    case 'act1':
       return{
         ...state,  
//         managedDatasets:action.payload, 
//         loadingManagedDatasets:false 
       };

//     case 'datasetsListLoaded':

//       return {
//         ...state,
//         datasetsList: action.payload,
//         loadingDatasetsList: false
//       };
//   //   case 'govDataSetsLoaded':
//   //     // console.log('reducer:', action.paylod)
//   //     return{...state, 
//   //       govDatasets:{
//   //         columns: action.payload.columns,
//   //         metada: action.payload.metadata,
//   //         numColumns: action.payload.numColumns,
//   //         numRows: action.payload.numRows,
//   //         rows: action.payload.rows,
//   //       },
//   //       loadingGovDatasets:false
//   //     }

//     case 'setShowOnlyMissed':
//       return {
//         ...state,
//         showOnlyMissed: !state.showOnlyMissed
//       };

//     case 'setSelectedDataset':
//       // console.log('reducer - payload:', action.payload)
//       return {
//         ...state,
//         selectedDataset: action.payload.selectedDataset
//       };

//     case 'toggleDatasetModal':
//       return {
//         ...state,
//         showDatasetModal: !state.showDatasetModal,
//         datasetModalAction: !state.showDatasetModal ? '' : state.datasetModalAction
//       };
     
//     case 'setDatasetModalAction':
//       return {
//         ...state,
//         // this should be: create, update
//         datasetModalAction: action.payload
//       }  ;
//   //   case 'updateDataset':
//   //     let newDataset = action.payload.updatedDataset;
//   //     console.log('stateProvider - updateDataset:',newDataset)
//   //     let newDatasets = state.datasets.map( d => d.datasetId === newDataset.datasetId ? newDataset : d )
//   //     return {...state, datasets: newDatasets }

//     //this inserts a new dataset into the state. The whole state has to be exported to domo since there is no an interface to domo that allos to upate just one record.
//     case 'registerDataset':
//       return {
//         ...state,
//         managedDatasets: {
//           columns: state.managedDatasets.columns,
//           rows: state.managedDatasets.rows.push(action.payload)
//         }
//       }
    
    default:
      return state;
  }
}

const StateProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <Provider value = {{ state,  dispatch}}>
      {children}
    </Provider>
  )
}

export { store, StateProvider }