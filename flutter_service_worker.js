'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/Images/Property%25201=refresh-cw.png": "9b847f523bf6809cd4def2e9c5ec8d61",
"assets/assets/Images/Property%25201=close.png": "8d86744462fc309c1efa76425379762f",
"assets/assets/Images/Property%25201=Resident.png": "c56af05aff71da3242826607087294ec",
"assets/assets/Images/Property%25201=calendar.png": "20e13af8c2644e9299bea4df359beb0e",
"assets/assets/Images/Upload.svg": "2c2245b9d787e0b63c621b40b793e84f",
"assets/assets/Images/Property%25202=file.png": "3bc414c8b0b0fb72edc18eb04c2a66c1",
"assets/assets/Images/Property%25201=alert-circle.png": "64538bc3aeb873f7aaec45d54512f5f6",
"assets/assets/Images/Property%25201=delete.png": "d5e462ba9cb823eef1848f194de366f8",
"assets/assets/Images/Property%25201=Variant34.png": "b4f6572f4eab5206393434b1beefb2b6",
"assets/assets/Images/Property%25201=Variant22.png": "73117c955d6a30045dddec14f36485f8",
"assets/assets/Images/Property%25201=check.png": "9d85d9732dbdfb32b8f1ea46f72f0d64",
"assets/assets/Images/Property%25201=grid.png": "f6902d6b8191f4a4d487688bcb19788d",
"assets/assets/Images/Property%25201=lock.png": "8ddb71981906ea3d77e8b8d87499d18e",
"assets/assets/Images/logo.png": "96a65dac33b08490d991797441d40b9d",
"assets/assets/Images/Property%25201=check-square.png": "32e7f9e98d22725ccdcddbc16dbbf56b",
"assets/assets/Images/Property%25201=home.png": "25812b50aa6d899b98fb45c18546a292",
"assets/assets/Images/Property%25201=chevron-left.png": "e2e3ca353baf9c9326b589b342882046",
"assets/assets/Images/Property%25201=alert-triangle.png": "ee6b7bdb183361bc97b930ff2de426d1",
"assets/assets/Images/Property%25201=file.png": "4dccd2c78f674472790ca91a039bc477",
"assets/assets/Images/Property%25201=menu.png": "33e98de7425e320ee29d7f26d8d6412c",
"assets/assets/Images/Property%25201=bell.png": "374f867eabbcacf252eb762654558fa8",
"assets/assets/Images/Property%25201=slash.png": "911352cc33cb09b63fd0772bdc389536",
"assets/assets/Images/Property%25201=Download.png": "1c5c9e3e6be3e5cfa6edd9e5bc032537",
"assets/assets/Images/Property%25201=mail.png": "4702ba3fd323d0d92066c54bfb5dda7c",
"assets/assets/Images/Property%25201=chevron-up.png": "7bd548654a9507c615bc48c9413fd9df",
"assets/assets/Images/Property%25201=chevron-right.png": "14a5ad9c20b931b8eac3ae24464fbe9c",
"assets/assets/Images/Property%25201=user.png": "d098da96e527beec2596e319591b31a7",
"assets/assets/Images/Property%25201=edit-2.png": "dea9c5ed89ea3b0e529b99f4b96fed62",
"assets/assets/Images/garu.png": "92247835a0ba0b0993c777ed1d664620",
"assets/assets/Images/Property%25201=Log-out.png": "0a7c3e81506004cf154d74d29b84b719",
"assets/assets/Images/Property%25201=chevron-down.png": "4836f51def5cc3820570a7c3672ec5e8",
"assets/assets/Images/Property%25201=plus.png": "148e3a2645c1833184e289cd19789207",
"assets/assets/Images/Property%25201=eye.png": "4b34a7716da45efa417f40b9c06d41e9",
"assets/assets/Images/Property%25201=message-square.png": "0dc9b22c2e7648d95969d69d6434f7de",
"assets/assets/Images/Property%25201=upload%2520image.png": "7134996ae3528b66130c320662b5e057",
"assets/assets/Images/Property%25201=users.png": "18b0da9b3a0578455a22185ed070f1f8",
"assets/assets/Images/Property%25201=search.png": "f75387fc9c0e9e1db5d4097c266a6d8f",
"assets/assets/Images/Property%25201=Variant33.png": "927bb229504860a9989ff3b511884291",
"assets/assets/Images/Property%25201=Acces%2520history.png": "dafeedb415767e13dfe9e052f0d9d887",
"assets/assets/Images/Property%25201=eye-off.png": "ffe1b2d0bc42ab3bc01760f93c915a2f",
"assets/assets/I18n/estados-cidades.json": "1b17f55c86c78460907712cd18cfa838",
"assets/assets/I18n/estados.json": "fe31ccdc5396b086c92f78d4492c116a",
"assets/assets/I18n/parentesco.json": "03cc3a5d35292b6d7d5fd1981423ee30",
"assets/assets/I18n/residencias.json": "3490733c056fbe2ca0a2b33dd3585222",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "68bd9534fcf94bc96b8b997bfc0b2a53",
"assets/AssetManifest.smcbin": "f0fb694fa8ee612b31854c1a8cd77c3c",
"assets/NOTICES": "072b1724413ff1a92b5a238ebf79e605",
"assets/fonts/MaterialIcons-Regular.otf": "39c56a085b65bf341fdf2e294915c110",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "16215c82730539811b351542f8d73932",
"canvaskit/skwasm.wasm": "56fd6db0340bad09b1d9f2b8da327289",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/skwasm.js": "8f8767b45dcf2923c973308baaea118e",
"canvaskit/canvaskit.wasm": "5a1fad4bc0d67d0e1b08e78eb8db4515",
"main.dart.js": "d4592a12997112d44bfc4c1c9c78a3f1",
"version.json": "440faefdaa1d8e3d07bd90ff31caebc5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "1be859cbb60479df511beee68f99ec74",
"/": "1be859cbb60479df511beee68f99ec74",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "4c0d6e3a747711b32cc299d0a2a75b74"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
