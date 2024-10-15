/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import { useEffect, useState } from "react";
import aemHeadlessClient from "./aemHeadlessClient";

/**
 * This file contains the React useEffect custom hooks that:
 * 1. Are called by the React components
 * 2. To get data from AEM GraphQL persisted queries
 *
 * Each custom hook maps to a persisted query and is responsible for:
 * 1. Calling the AEM persisted query
 * 2. Collecting and transforming the returned data into the format expected by the React view components
 * 3. Setting and returning any error state
 */

/**
 * Private, shared function that invokes the AEM Headless client.
 * 
 * @param {String} persistedQueryName the fully qualified name of the persisted query
 * @param {*} queryParameters an optional JavaScript object containing query parameters
 * @returns the GraphQL data or an error message 
 */
async function fetchPersistedQuery(persistedQueryName, queryParameters) {
  let data;
  let error;

  try {
    // AEM GraphQL queries are asynchronous, either await their return or use Promise-based .then(..) { ... } syntax
    const response = await aemHeadlessClient.runPersistedQuery(
      // Adding Date.now() to refresh the cache
      `${persistedQueryName}?${Date.now()}`,
      queryParameters
    );
    // The GraphQL data is stored on the response's data field
    data = response?.data;
  } catch (e) {
    // An error occurred, return the error messages
    error = e?.toJSON()?.message;
  }

  return { data, error };
}

export function useAllFundServices() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async function() {
      const { data, error } = await fetchPersistedQuery('POC/allFundServices');

      if (error) {
        setErrorMessage(error);
      } else {
        setData(data?.cardsList?.items);
      }
    })();
  }, []);

  return { data, errorMessage };
}

export function useBannerHeadline() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async function(){
      const { data, error } = await fetchPersistedQuery('POC/bannerHeadline');
  
      if (error) {
        setErrorMessage(error);
      } else {
        setData(data?.bannerHeadlineCardByPath?.item);
      }
    })();
  }, []);

  return { data, errorMessage };
}