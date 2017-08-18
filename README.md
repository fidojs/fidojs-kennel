# FidoJS Kennel

[Remix](https://glitch.com/edit/#!/remix/fidojs-kennel) this project, then try editing `kennel/docs/example.md` and adding files to `kennel/docs`.

## Running Locally

Run `npm install && npm start`.

Then visit: <http://localhost:3000/>

## Troubleshooting

### Not seeing changes

After making certain types of changes, it might be necessary to hard-refresh your browser for an already-visited page.

If you're not seeing changes after adding a new FidoJS plugin to the `package.json`, try `npm run cache-bust`.

### Page refresh navigates back to site root

If Glitch keeps navigating you away from the live page you are viewing, uncheck __Refresh App on Changes__:

![image](https://user-images.githubusercontent.com/990216/28885818-cc53141c-777c-11e7-942f-83bb4b893ada.png)

### Documentation is generated for `.md` but not `.js`

If creating or editing `.js` files restarts the web server instead of building the documentation, it's because of this issue:

<https://support.glitch.com/t/1842>

To fix this, simply make any kind of edit to `watch.json` by hand through the Glitch editor web interface. For instace, change the `throttle` property from a value of `100` to `200`. This will tell Glitch to properly load the watch config.

## About FidoJS

[![FidoJS](https://avatars2.githubusercontent.com/u/27871389)](https://github.com/fidojs)

