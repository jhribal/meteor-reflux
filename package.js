Package.describe({
  name: 'jhribal:reflux',
  summary: 'RefluxJS for Meteor framework',
  version: '0.1.0',
  git: 'https://github.com/jaromirhribal/meteor-reflux.git'
});

var refluxVersion = '0.2.1';

Npm.depends({
  "reflux": refluxVersion
});

Package.onUse(function(api) {
  api.add_files("src/reflux.min.js", "client");
  api.add_files("src/require-reflux.js", "server");
  api.export("Reflux", "server");
});

