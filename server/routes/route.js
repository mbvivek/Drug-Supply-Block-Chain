// handles all routes

module.exports = function(app) {
    
    // get all controllers
    var system = require("./controllers/system.controller");
    var organization = require("./controllers/organization.controller");

    // ../system
    app.get("/system/admin", system.findSystemAdmin);

    // ../contracts/organization
    app.get("/contracts/organization/:contractAddr", organization.findContract);
    app.post("/contracts/organization", organization.createContract);

}