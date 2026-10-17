const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Folders that are not part of the app bundle (Remotion video project with its
// own node_modules, Maestro flows and docs/recordings). Ignoring them keeps
// Metro from watching them and from reloading the app when they change.
const NON_APP_FOLDERS = ["video", ".maestro", "docs"];

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

config.resolver.blockList = [
  ...[].concat(config.resolver.blockList ?? []),
  ...NON_APP_FOLDERS.map(
    (folder) =>
      new RegExp(`^${escapeRegExp(path.resolve(__dirname, folder))}[\\\\/].*$`),
  ),
];

module.exports = config;
