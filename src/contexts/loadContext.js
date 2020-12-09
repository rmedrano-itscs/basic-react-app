/*
-  Description
  Initializes context
  Loads managed datasets
  Loads full list of datasets. I load this to get time of last update. I takes more than 20 seconds since there are around 
*/

import React, { useEffect, useContext } from 'react';
import { store } from './stateProvider'; 

const LoadContext = (props) => {
  const { state, dispatch  } = useContext(store);

  // useEffect ( () => {loadManagedDatasets(dispatch)}, []);
  // useEffect ( () => {loadDatasetsList(dispatch)}, []);

  return  props.children;

};

export default LoadContext; 



 
/*
  const loadDatasetCollection =  async () => {
    try {
      let resp = await domoGetDocuments('datasets');
      // console.log('loadDatasetInfo en App:',resp) 
      dispatch({type:'datasetsLoaded',payload:resp} )

      let onlyIds = resp.map((d)=> {
        return (`'${d['datasetId']}'`)
      })
  
      //console.log('only ids:', onlyIds);

      resp = await domo.post('/sql/v1/govDatasets', 

     `SELECT  * FROM govDatasets where "Dataset ID" in ( ${onlyIds} )`, {contentType: 'text/plain'});

      // `SELECT  "Dataset ID", Name, "Owner Name", Description FROM govDatasets  limit 10`, {contentType: 'text/plain'});
      
      dispatch({type:'govDataSetsLoaded',payload:resp} )
      // console.log('GOV_datasets:', resp);

    } catch (error) {
      console.log('error en carga de datasets',error)
    }
  };
*/

  // const loadCollections = async () => {
  //   let resp;
  //   let onlyIds;
  //   try {
  //     resp = await domoGetCollections();
  //     console.log('App - loadCollections:', resp);

  //     dispatch({type:'collectionsLoaded', payload:resp});


  //   } catch (error) { 
  //     console.log('App - loadCollections - error:', error)
  //   };
  // };
  // const initLoad = async () => {
  //   let resp;
  //   try { 
  //     // resp = await domoDeleteCollection('datasets');
  //     // resp = await domoCreateCollection(datasetsSchema);
  //     // resp = await domoCreateCollection(documentsSchema);
  //     // resp = await domoCreateCollection(fieldsSchema);
  //     // resp = await domo.get('/data/v1/managedDatasets');
  //     // resp = await domoUpdateCollection('datasets', datasetsSchema);
  //     // dispatch({type:'datasetsLoaded',payload:resp} );
  //   } catch (error) {
  //     console.log('App - initLoad:', error)
  //   }
  // };


  // import domoGetCollections from '../appdbApi/collections/domoGetCollections';

// import domoDeleteCollection from '../appdbApi/collections/domoDeleteCollection'; 
// import domoGetDocuments from '../appdbApi/documents/domoGetDocuments';
// import datasetsSchema from '../appdbApi/schemas/datasetsSchema'; 
// import domoUpdateCollection from '../appdbApi/collections/domoUpdateCollection';
