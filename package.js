Package.describe({
  summary: "Node module hacks encapsulated"
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
  if (typeof api.export !== 'undefined') {
    api.export('NodeModules', 'server');
  }
});
