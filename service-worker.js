/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","3b43d2b8b3fdc36e9dc9102c45bd89ae"],["bootstrap/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["bootstrap/css/bootstrap-theme.css.map","d6cc0a3c7532b74efe92da8992bd7542"],["bootstrap/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["bootstrap/css/bootstrap-theme.min.css.map","5f587b800215ee268efd2676ac010b25"],["bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["bootstrap/css/bootstrap.css.map","c7ffd8c7a285780039b2366034f3bca2"],["bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["bootstrap/css/bootstrap.min.css.map","35b79ebe0b7805c1c84524ad920faa33"],["bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["carte.html","fbad757b4f60916711e198d9a87ec35b"],["contact.html","b6e2da1fde0dca2a43456fd84102fb6a"],["css/index.css","b8cffbf0e37246d37406d39afb77a62a"],["galerie.html","77a5c0bce98acf011955c361be388490"],["galerie2.html","23e0d402dcc779b2fb965f1c6de7fa45"],["galerie3.html","2d5273f12ebf6422c5b82e5be86a274c"],["galerie4.html","69f1b9dedf76dcf8078c588b9952ed32"],["img/azulejos.jpg","41164e34eb7b4fced8a0f79a7867158f"],["img/azulejos.png","59dbd4ff67cb07caa7a6014b32e59409"],["img/background.jpg","f36d6a86a75d68642e48beee90050034"],["img/burrito.jpg","56450dbd4619ae4030c79da7f6f1d1d6"],["img/chili_burrito.jpg","9f1385a8030b2f5c7a5694edd8942002"],["img/chiliconcarne.jpeg","6d753ad6dd80ebc89c209cbf335b71bd"],["img/chimichanga.jpeg","5c9cbe359d69c8c42c98f80d3427c2c9"],["img/cubalibre.jpeg","de41b79949475a1481c4d2caed3f701c"],["img/ensaladas.jpg","cc4df99af1dbe9797f4f0518a395439b"],["img/fajitas.jpg","6582e5f98d9d908b8cddccdfebca3b5a"],["img/frida-icone-512.png","a24b7c62b80a42e789edeb15bea1270d"],["img/frida.jpg","15a11872e9954a787088a0982d1933a0"],["img/jarritos.jpg","e4177c8e9f00cd8ad6b35de011410423"],["img/logo1.jpg","1d17ead730f8a51eb61c12144c3c50b1"],["img/logo3.jpg","da225a94c376a257c7dbb931bcc9eae7"],["img/margarita.jpg","9392dc6fcdaf8bb97af4ab3c9881c8ba"],["img/nacho-cheese-tortilla-chips-with-chili-salsa-sour-cream-and-guacamole-FWRDM5.jpg","08d32a8d8da3aa7e24680fb41cce0da9"],["img/nachos.jpg","d3ebc6b6550ac6275a2fd494c33f8afc"],["img/onion.jpg","d005d92615feaedf5f95a6b6fd2a5ac0"],["img/quesadillas.jpg","7e173304f8f067471c0244e21a68a399"],["img/restaurant.jpg","cb67c4eee97c50575d39800ede555e00"],["img/restaurant.png","55652e6f40d6fd60be2a433889375cf8"],["img/resto2.jpg","2915e4f2b4da25f8931defcda8a379c5"],["img/tacas_192.png","bb8f0b74d2189b1d7265e2813e7cc7da"],["img/tacos.jpeg","22ad78438824868134e43a3846654bb5"],["img/tequila.jpg","e8d1bca63ad2ba3022b7442d578533ed"],["index.html","17f7529ce436b01a03188d560a2e336e"],["manifest.json","6709083bfc7733149efed8dba24f3730"],["restaurant.html","c618dab8b0e411890eda862cb6ee4d5c"],["script.js","9d1b077678035102193edff777417ae0"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







