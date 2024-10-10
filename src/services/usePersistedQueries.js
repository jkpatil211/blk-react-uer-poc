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

export function useAllFundServices() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    (async function() {
      const response = {
        "data": {
          "cardsList": {
            "items": [
              {
                "_path": "/content/dam/blackrock/cf/fifth-card",
                "headline": "Indexing",
                "subHeadline": "Investing that works for everyone",
                "description": "Fifty years of indexing have proven investing doesn’t need to be expensive, or complex. There’s quite literally an index fund for every market exposure and investment strategy you could possibly need, which means more opportunities for more investors.",
                "urlLabel": "Learn more about indexing"
              },
              {
                "_path": "/content/dam/blackrock/cf/first-card",
                "headline": "Equities",
                "subHeadline": "Buying shares for the long term",
                "description": "When you invest in an equity, you buy a share in a company and become a shareholder. Equities are typically best for long-term investing – for those who are able to ride out the highs and lows of the market in search of higher rewards.",
                "urlLabel": "Learn more about equities"
              },
              {
                "_path": "/content/dam/blackrock/cf/forth-card",
                "headline": "Cash",
                "subHeadline": "Bank accounts aren’t the only option",
                "description": "If you're looking for better rates of return on deposits than you’d get in an ordinary bank account, cash funds may be a great option. They often invest in very short-term bonds known as ‘money market instruments’, which are essentially banks lending money to each other.",
                "urlLabel": "See all cash funds"
              },
              {
                "_path": "/content/dam/blackrock/cf/second-card",
                "headline": "Fixed Income",
                "subHeadline": "Seeking stable, lower risk returns",
                "description": "Fixed income securities, or bonds, are issued by companies and governments as a way of raising money. They’re basically an ‘I.O.U’ – designed to provide a regular stream of income (which is normally a fixed amount) over a specified period of time.",
                "urlLabel": "Learn more about Income funds"
              },
              {
                "_path": "/content/dam/blackrock/cf/sixth-card",
                "headline": "Multi-Asset",
                "subHeadline": "Diversifying your portfolio",
                "description": "A multi-asset strategy combines different types of assets – stocks, bonds, real estate, or cash for example – to create a more nimble and broadly diversified portfolio. Fund managers will balance asset classes to achieve particular investment objectives.",
                "urlLabel": "Learn more about Multi-Asset"
              },
              {
                "_path": "/content/dam/blackrock/cf/third-card",
                "headline": "Alternatives",
                "subHeadline": "Driven by diverse sources of returns",
                "description": "While traditional assets like stocks and bonds are traded on the public markets, alternative investment strategies such as real estate, infrastructure, and private credit are less sensitive to the movements of global markets.",
                "urlLabel": "Learn more about alternatives"
              }
            ]
          }
        }
      };

      setData(response?.data?.cardsList?.items);
    })();
  }, []);

  return { data, errors };
}

export function useBannerHeadline() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);


  useEffect(() => {
    (async function(){
      const response = await fetchPersistedQuery('POC/bannerHeadline');
      console.log('response-->', response);

      // const response = {
      //   "data": {
      //     "bannerHeadlineCardByPath": {
      //       "item": {
      //         "_path": "/content/dam/blackrock/cf/banner-headline",
      //         "headline": "Funds at Blackrock Updated new !!!!!",
      //         "title": "Funds that match up with investing goals and preferences new one !!!",
      //         "_metadata": {
      //           "stringMetadata": [
      //             {
      //               "name": "title",
      //               "value": "banner-headline"
      //             },
      //             {
      //               "name": "description",
      //               "value": ""
      //             },
      //             {
      //               "name": "cq:lastReplicationAction",
      //               "value": "Activate"
      //             },
      //             {
      //               "name": "cq:lastReplicationAction",
      //               "value": "Activate"
      //             },
      //             {
      //               "name": "cq:lastReplicatedBy",
      //               "value": "satishkumar.jadhav@mphasis.com"
      //             },
      //             {
      //               "name": "cq:lastReplicationAction_publish",
      //               "value": "Activate"
      //             },
      //             {
      //               "name": "cq:lastReplicatedBy_publish",
      //               "value": "satishkumar.jadhav@mphasis.com"
      //             }
      //           ]
      //         },
      //         "description": {
      //           "html": "<p>Each <strong>investor</strong> has a different <em>story</em>, and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one <strong>way</strong> we're helping more investors build solid <u>financial</u> futures.</p>",
      //           "json": [
      //             {
      //               "nodeType": "paragraph",
      //               "content": [
      //                 {
      //                   "nodeType": "text",
      //                   "value": "Each "
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": "investor",
      //                   "format": {
      //                     "variants": [
      //                       "strong"
      //                     ]
      //                   }
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": " has a different "
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": "story",
      //                   "format": {
      //                     "variants": [
      //                       "emphasis"
      //                     ]
      //                   }
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": ", and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one "
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": "way",
      //                   "format": {
      //                     "variants": [
      //                       "strong"
      //                     ]
      //                   }
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": " we're helping more investors build solid "
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": "financial",
      //                   "format": {
      //                     "variants": [
      //                       "underline"
      //                     ]
      //                   }
      //                 },
      //                 {
      //                   "nodeType": "text",
      //                   "value": " futures."
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       }
      //     }
      //   }
      // };
  
      setData(response.data?.bannerHeadlineCardByPath?.item);
    })();

  }, []);

  return { data, errors };
}