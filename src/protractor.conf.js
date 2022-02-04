exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    directConnect:'true',
    framework: 'jasmine',
    
    capabilities: {
     
      browserName: 'chrome',
      chromeOptions: {
        args: ["--incognito"]
    }
      //browserName: 'firefox'
    },
    
   /* multiCapabilities: [{
      browserName: 'chrome',
      chromeOptions: {
        args: ["--incognito"]
      }
      }, 
      {
      browserName : 'firefox',
      }],
    maxSessions: 1, //To run in sequential mode so first Firefox then chrome 
    //without max session it will open two windows at the same time for both browsers*/
       
    // Spec patterns are relative to this directory.
    specs: [
        ".././src/specs/homeSpec.js"
    ],

    
}