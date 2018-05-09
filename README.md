# Kentico Cloud Delivery Node SDK

[![npm version](https://badge.fury.io/js/kentico-cloud-delivery-node-sdk.svg)](https://www.npmjs.com/package/kentico-cloud-delivery-node-sdk)
[![Build Status](https://api.travis-ci.org/Enngage/KenticoCloudDeliveryNodeSDK.svg?branch=master)](https://travis-ci.org/Enngage/KenticoCloudDeliveryNodeSDK)
[![npm](https://img.shields.io/npm/dt/kentico-cloud-delivery-node-sdk.svg)](https://www.npmjs.com/package/kentico-cloud-delivery-node-sdk)
[![Forums](https://img.shields.io/badge/chat-on%20forums-orange.svg)](https://forums.kenticocloud.com)
[![Coverage Status](https://coveralls.io/repos/github/Enngage/KenticoCloudDeliveryTypeScriptSDK/badge.svg?branch=master)](https://coveralls.io/github/Enngage/KenticoCloudDeliveryTypeScriptSDK?branch=master)

An official client library for retrieving content from [Kentico Cloud](https://kenticocloud.com/) for Node.js

This library is based on <a href="https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK">Kentico Cloud Delivery TypeScript SDK</a>. Visit this SDK for all examples & instructions on how to work with this library.

## Install package

- Use `npm i kentico-cloud-delivery-node-sdk` to install via npm.

## Scripts

- Use `npm test` to run all tests.
- Use `npm run build` to generate definitions & dist from the contents of `lib` folder.
- Use `update-sdk-info` to run update SDK information by looking into package.json & writing it to a specialized file. This is picked up by delivery clients and used for identifying current SDK & version in request headers.

## Publishing

In order to publish SDK first run one of following tasks to increase version & update sdk info file:

- `npm run new-patch`
- `npm run new-minor`
- `npm run new-major`

And then run (note that tests and necessary scripts are automatically executed using the `prepublishOnly` script):

- `npm run publish`

## Feedback & Contribution

Feedback & Contributions are welcomed. Feel free to take/start an issue & submit PR.

