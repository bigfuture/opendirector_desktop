const path = require('path');
const appPath = path.resolve(process.cwd(), `out/OpenDirector-darwin-x64/OpenDirector.app`);

module.exports = {
  "packagerConfig": {
    "icon": "./assets/images/logo/icon",
    "appCopyright": "Copyright © OpenDirector",
    "appCategoryType": "public.app-category.finance",
    "darwinDarkModeSupport": true
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "iconUrl": "./assets/images/logo/icon.ico",
        "setupIcon": "./assets/images/logo/icon.ico",
        "setupExe": "OpenDirector"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {
        "options": {
          "name": "open-director",
          "genericName": "OpenDirector",
          "productName": "OpenDirector",
          "maintainer": "OpenDirector",
          "homepage": "https://opendirector.com.au",
          "icon": "./assets/images/logo/icon.png"
        }
      }
    },
    {
      "name": "@electron-forge/maker-dmg",
      "config": {
        "name": "OpenDirector",
        "format": "ULFO",
        "overwrite": true,
        "background": "./assets/images/background/background.png",
        "icon": "./assets/images/logo/icon.icns",
        "contents": [
            { "x": 448, "y": 344, "type": "link", "path": "/Applications" },
            { "x": 192, "y": 344, "type": "file", "path": appPath }
          ]
      }
    }
  ],
  "publishers": [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        "repository": {
          "owner": "bigfuture",
          "name": "opendirector_desktop"
        }
      }
    }
  ]
}