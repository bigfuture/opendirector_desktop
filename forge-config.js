const path = require('path');
const process = require('process');
const appPath = path.resolve(process.cwd(), `out/OpenDirector-darwin-x64/OpenDirector.app`);

module.exports = {
  "packagerConfig": {
    "icon": "./assets/images/logo/icon",
    "appCopyright": "Copyright © OpenDirector",
    "appCategoryType": "public.app-category.finance",
    "darwinDarkModeSupport": true,
    "osxSign": {
      "identity": "Developer ID Application: Sushil Dahal (Z4924KU438)",
      "hardened-runtime": true,
      "entitlements": "./assets/mac-build/entitlements.plist",
      "entitlements-inherit": "./assets/mac-build/entitlements.plist",
      "signature-flags": "library"
    },
    "osxNotarize": {
      "appleId": process.env['APPLE_ID'],
      "appleIdPassword": process.env['APPLE_ID_PASSWORD'],
    }
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel"
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