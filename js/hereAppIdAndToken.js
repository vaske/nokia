// This file holds all the constants used in the Demos.
(function (exports, ctx) {
    exports.HereMapsConstants = {
        //	Set authentication token and appid 
        AppIdAndToken: {
            appId: "SP8wBa8eozosjRZeEATi",
            appCode: "qfiP8X7_cTnZ26vGVImTyQ",
            language: "en-US",
            serviceMode: "cit"
        },
        // Initial center and zoom level of the map
        InitialLocation: {
            longitude: 52.51,
            latitude: 13.4,
            zoomLevel: 11,
            distance: 1000
        },

        JSLibs: {
            // versioned URL to load the HERE maps API.
            // Check on:  http://developer.here.com/versions 
            // to obtain the latest version.
            HereMapsUrl: "http://js.cit.api.here.com/se/2.5.3/jsl.js?blank=true",
            // versioned URL to load jQuery
            jQueryUrl: 'http://code.jquery.com/jquery-1.10.1.min.js',
            jQueryUIUrl: 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js'
        },
		// Instagram API data
        Instagram: {
            apiUrl: 'https://api.instagram.com/v1/media/search',
            client_id: 'd01a949aeae54d1a83fe3a63ca922fee'
        },
        NS: "nokia"

    }
})(window, document);