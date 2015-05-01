var rev = require('acetate-asset-revisions');

module.exports = function (acetate) {
  acetate.use(rev({
    manifest: 'asset-manifest.json'
  }));
};