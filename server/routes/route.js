// handles all routes

module.exports = function(app) {
    
    // get all controllers
    var system = require("./controllers/system.controller");
    var organizationContract = require("./controllers/organizationContract.controller");

    // ../system
    app.get("/system/admin", system.findSystemAdmin);

    // ../contracts/organization
    app.get("/contracts/organization/:contractAddr", organizationContract.findContract);
    app.post("/contracts/organization", organizationContract.createContract);

}