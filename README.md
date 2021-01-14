This repo is to test react live refresh with [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)
webpack plugin.

## Testing the code
```
git clone https://github.com/franz-ka/react-refresh-test.git
cd react-refresh-test
npm i
npm run test
```
Then go to [localhost:8080](http://localhost:8080/) and modify `src/test-component.js`

When i do this on Firefox 84.0.1 (64-bit) i get the following msg in the console:
```
[WDS] App updated. Recompiling...
[WDS] App hot update...
[HMR] Checking for updates on the server...
[HMR] Updated modules:
[HMR]  - ./src/test-component.js
[HMR] App is up to date.
```
But the app doesn't update its content

## Related issues
- [Webpack 5 does not re render #252](https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/252)
- [Webpack 5 with browserslist config breaks react-refresh plugin #235](https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/235)
