(function (exports, ctx) {
    exports.Instagram = {
        loadPositions: function () {
            var url = HereMapsConstants.Instagram.apiUrl + '?lat=' + HereMapsConstants.InitialLocation.longitude + '&lng=' + HereMapsConstants.InitialLocation.latitude + '&client_id=' + HereMapsConstants.Instagram.client_id;
            $.ajax({
                type: "GET",
                url: url,
                dataType: "jsonp",
                success: function (response) {
                    var length = response.data != 'undefined' ? response.data.length : 0;
                    container = new nokia.maps.map.Container(),
                    infoBubbles = new nokia.maps.map.component.InfoBubbles();
                    for (var i = 0; i < length; i++) {
                        var lat = response.data[i].location.latitude,
                            lng = response.data[i].location.longitude,
                            markerCoords = new nokia.maps.geo.Coordinate(parseFloat(lat), parseFloat(lng)),
                            index = i + 1,
                            text = response.data[i].caption ? response.data[i].caption.text : 'N/A';
                        username = response.data[i].caption ? response.data[i].caption.from.username : 'N/A';
                        infoBubbleHTML = '<div>' + '<h2>' + text + '<\/h2>' + '<img width=150 height=150 src="' + response.data[i].images.thumbnail.url + '" alt="" /><br/><b>by: ' + username + '<\/b>' + '<\/div>';
                        Instagram.addMarkerToContainer(container, markerCoords, infoBubbleHTML, index);
                    }
                    map.components.add(infoBubbles);
                    container.addListener("click", function (evt) {
                        infoBubbles.openBubble(evt.target.html, evt.target.coordinate);
                    }, false);
                    map.objects.add(container);
                    map.zoomTo(container.getBoundingBox(), false);
                },
                error: Instagram.onXMLLoadFailed
            });

        },
        addMarkerToContainer: function (container, coordinate, html, text) {
            var marker = new nokia.maps.map.StandardMarker(
                coordinate, {
                    html: html,
                    text: text
                });
            container.objects.add(marker);
        },
        notes: function () {
            var noteContainer = new NoteContainer({
                id: "infoBubbleStandardMarkerUi",
                parent: document.getElementById("uiContainer"),
                title: "Instagram sample",
                content: '<p>This example shows interaction between instagram api and here.com api.</p>' + '<p>Click or touch the marker to open its infoBubble.</p>' + '<p>by Milan Vasic</p>'
            });
            return noteContainer;
        },	
        onXMLLoadFailed: function () {
            alert("An Error has occurred.");
        }

    }
})(window, document);