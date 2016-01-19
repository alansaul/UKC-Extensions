//Import the page-mod API

var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    //include: "*.ukclimbing.com*",
    include: "*.ukclimbing.com",
    contentScriptFile: [self.data.url("./jquery-2.0.3.min.js"), self.data.url("./ukc.js")]
});

//var self = require('sdk/self');

//// a dummy function, to show how tests work.
//// to see how to test this function, look at test/test-index.js
//function dummy(text, callback) {
  //callback(text);
//}

//exports.dummy = dummy;
