self.addEventListener('install', (e) => {
  console.log('HitMaster SW installed');
});

self.addEventListener('fetch', (e) => {
  // Prazan fetch omogućava rad u standalone modu
});
