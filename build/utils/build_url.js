// Generated by CoffeeScript 1.10.0
(function() {
  var err, error, qs, roots;

  try {
    qs = require('querystring');
  } catch (error) {
    err = error;
    qs = require('./querystring_lite');
  }

  roots = {
    wikidata: 'https://www.wikidata.org/w/api.php',
    commons: 'http://commons.wikimedia.org'
  };

  module.exports = function(domain, queryObj) {
    return roots[domain] + '?' + qs.stringify(queryObj);
  };

}).call(this);
