# webpack-multipage-starter using webpack5
Webpack-multipage (multiple entry points) starter template for creating a multipage static html website.

## To add new pages: 
1. Create a folder in the src directory with the name `page-<name>` and its respective `<name>.js`, `<name>.css` and `<name>.html` files. Make sure that you use the same `<name>` in all those three places.
2. Go to `bundler/webpack.common.config.js` and add the `<name>` as a string to the `htmlPageNames` array.
3. Re-run the dev server using: `npm run dev`.
4. Check out that entry point using `<local Hosting Address>/<name>.html`
  
## To remove an existing page:
1. Delete the respective folder
2. Remove that `<name>` from the `htmlPagesArray`.
3. Re-run the server - `npm run dev`.
4. That entry point should no longer be accessible.


#### Inspired By - https://github.com/ivarprudnikov/webpack-static-html-pages:
#### Improvements include :
- Splitchunks for common node_modules.
- An easy function that loops through the `htmlPageNames` array to create HTMl pages easily.

