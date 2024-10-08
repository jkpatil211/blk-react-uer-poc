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
  let err;

  try {
    // AEM GraphQL queries are asynchronous, either await their return or use Promise-based .then(..) { ... } syntax
    const response = await aemHeadlessClient.runPersistedQuery(
      persistedQueryName,
      queryParameters
    );
    // The GraphQL data is stored on the response's data field
    data = response?.data;
  } catch (e) {
    // An error occurred, return the error messages
    // err = e
    //   .toJSON()
    //   ?.map((error) => error.message)
    //   ?.join(", ");
    console.error(e.toJSON());
  }

  return { data, err };
}

function usePersistedQueries(path) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    (async function(){
      const result = await fetchPersistedQuery(path);
      console.log('result-->', result);
    })()
    // const result = await fetchPersistedQuery(path);
  }, [path]);

  return { data, errors };
}

export function useBannerHeadline() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);


  useEffect(() => {
    (async function(){
      // const response = await usePersistedQueries('POC/bannerHeadline');

      const response = {
        "data": {
          "bannerHeadlineCardByPath": {
            "item": {
              "_path": "/content/dam/blackrock/cf/banner-headline",
              "headline": "Funds at Blackrock Updated!!!!!",
              "title": "Funds that match up with investing goals and preferences new one !!",
              "description": {
                "html": "<p>Each <strong>investor</strong> has a different <em>story</em>, and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one way we're helping more investors build solid <u>financial</u> futures.</p>",
                "json": [
                  {
                    "nodeType": "paragraph",
                    "content": [
                      {
                        "nodeType": "text",
                        "value": "Each "
                      },
                      {
                        "nodeType": "text",
                        "value": "investor",
                        "format": {
                          "variants": [
                            "strong"
                          ]
                        }
                      },
                      {
                        "nodeType": "text",
                        "value": " has a different "
                      },
                      {
                        "nodeType": "text",
                        "value": "story",
                        "format": {
                          "variants": [
                            "emphasis"
                          ]
                        }
                      },
                      {
                        "nodeType": "text",
                        "value": ", and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one way we're helping more investors build solid "
                      },
                      {
                        "nodeType": "text",
                        "value": "financial",
                        "format": {
                          "variants": [
                            "underline"
                          ]
                        }
                      },
                      {
                        "nodeType": "text",
                        "value": " futures."
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      };
  
      setData(response.data?.bannerHeadlineCardByPath?.item);
    })();

  }, []);

  return { data, errors };
}