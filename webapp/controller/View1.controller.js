sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("reuseuidms.controller.View1", {
            onInit: function () {
                // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
                this.getView().byId("_IDGenComponentContainer1").setSettings({
                    "repositoryId": "d036914a-aaf3-498f-9f99-f533fb72a179",
                    "objectId": "9647577000166540ad626b36",
                    "forceLoad": false
            });
            },
            // registered event handler for 'componentCreated' event of Component Container
            onComponentCreated: function(oEvent) {
                this._oDocumentTable = oEvent.getParameter("component");
                // OPTIONAL: set a folder as home folder
                this._oDocumentTable.setHomeFolder("9647577000166540ad626b36");
                // OPTIONAL: request a navigation to a repository & folder during runtime
                this._oDocumentTable.requestNavigationAndOpen("d036914a-aaf3-498f-9f99-f533fb72a179",
                        "9647577000166540ad626b36");
            }
        });
    });
