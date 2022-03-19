'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "939ce79798cb16febdc4a360391f7b6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "381b12cfc15edf5fddd49c3e205773fd",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"icons/Icon-maskable-192.png": "9491aa100fc9ff9bba20b9fe2cb43ead",
"icons/Icon-192.png": "9491aa100fc9ff9bba20b9fe2cb43ead",
"icons/Icon-512.png": "3d3338ba597c510a6f56c9ee8c916138",
"icons/Icon-maskable-512.png": "3d3338ba597c510a6f56c9ee8c916138",
"version.json": "980547175e325fe622a3362b84d55b6a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"main.dart.js": "cfd41214c6e012633552438b3aa41fb7",
"favicon.png": "8d2c1337b4a236134ec9bafd0c92a546",
".git/logs/HEAD": "c06297751105d5beca449318f19b8ce5",
".git/logs/refs/heads/master": "c06297751105d5beca449318f19b8ce5",
".git/logs/refs/remotes/origin/master": "1590446c6612c80f7a5c11dc297f67e1",
".git/FETCH_HEAD": "2dbdd95cfa1c3aced493d2ac993546f4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "eeb8547806557b49cb367d9382e2d490",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ecc8ccff3ab926bb35bb51c19cbf37abd4e3c5": "d4c9ecf73f08c12d040fb962d4cf4651",
".git/objects/56/cf11a2f97ecd7c29c80ad7fcd6c626ae12d003": "4971105af084c92b89efb4d89c048c23",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e3/01455faae78d16044be7ec940da22e0e320014": "5cf46d1e8777f73cc3fb2dad08d34bef",
".git/objects/6c/c5005cf65a59cddbd668fab302775a996c5ece": "c85f09501b5ecf9b6be056c56400d278",
".git/objects/2f/66a01aef238221ab3a9c8c38f954319bdeb920": "856f563abfc738b85a0077b3f2ff08bf",
".git/objects/95/fd1cc403109560379c5564a1a655df226f70cd": "bf19c8e0c23f8699a39fb373b87e278b",
".git/objects/8f/f89020bd3ed65d32afc5a0f6455209aacb837e": "cee5e565824ff6169762272bc97e0da7",
".git/objects/2e/738b15c985b3b231d45b93ef55a2c7ba56d75c": "8609fdf50fc4ff6904980ed6243b4da5",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/c0/a71b2188905322b3b6e68094020ad9def57e89": "1ba440cdbb6b29daf13695ebfd3cd934",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/d1/2ce34b89c345d929e49a66d73e7015ed8f88f7": "134bb0a4943a3a4f8b391dcd8a86b387",
".git/objects/4b/f427d9a1cf343cc4d416a4fc54e63a92c75d0d": "45b3f54e74c1629dde4a39978f3d06d6",
".git/objects/ef/036ed4e27a0747c7120d4c557c8ebcefce3146": "deb8d288767e8b8e214ce20448b5d617",
".git/objects/72/0cc374d0aba4915553c61fc98286fbfb6e6331": "482a01949d345f44d78a7d8f3cd674ff",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/e7/ab0ec795e0c7bb4c6962c9838c92bb9dcccd7b": "c61247f2f552e6a8b7f398d7a992bd30",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/18/7d2a892fc6b508ff95b6bb26366d16c9f88cd0": "b8a7eff8cee64aa9e5cd450e84187281",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/40/5e5350822be559c6992583fb1ba38077f94648": "872b0704eb178458e584c11ecea012a1",
".git/objects/40/024204d6bec7ec85be45a30d506f316ec5d8b0": "991e5caf7265006d31b997cd515a9589",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e1/8a10862097f9b5160bf85eae2b9cdb11e51c54": "4cb439bd696ade904dc85c2ee32d6a82",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cf/dbfeef05146e7e1da0d0a0845c6e19e43ea90c": "3fdad4c5b41b1df23c8566bdbaa8eb47",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/cb/30356ac2d76ff1880195135b2a912209a4fed6": "f4e0822cf107375c80a56d57c2d02499",
".git/objects/15/422a0bb3185175707f8626a49f91a83b687593": "f1995626107db6f73b106579ff7cc175",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/a9/b883f02943857be773c2545f101c5d9338f909": "4c20991478e95d30ec92958bbd210592",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/index": "da4c885f87973816cd55915dc12dc589",
".git/COMMIT_EDITMSG": "73441e47c655ff106a86ad76ef234d81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "cd6cf044ef22c051d2f5c6026894a293",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "eeb8547806557b49cb367d9382e2d490",
".git/refs/remotes/origin/master": "eeb8547806557b49cb367d9382e2d490",
"index.html": "52af2c981c25804ffc1c20461670204f",
"/": "52af2c981c25804ffc1c20461670204f",
"CNAME": "783e3476eed82159f1abacf285b92129",
"img/logo.png": "1787098b3ff721e8c3b4da4afe468697",
"styles.css": "8a0fb047fbcaffe0b2a36b9fe6b0ec07"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
