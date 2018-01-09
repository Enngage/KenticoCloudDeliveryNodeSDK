# Kentico Cloud Delivery Node SDK

An official client library for retrieving content from [Kentico Cloud](https://kenticocloud.com/) for Node.js

This library is based on <a href="https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK">Kentico Cloud Delivery TypeScript SDK</a>. Visit this SDK for all examples & instructions on how to work with this library.

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

