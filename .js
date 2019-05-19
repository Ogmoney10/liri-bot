var axios = require("axios");
var fs = require("fs");


var keys = require("./keys.js");

var request = require('request')
var Spotify = require('node-spotify-api');
var fs = require('fs');
var input = process.argv;
var action = input[2];
var inputs = input[3];