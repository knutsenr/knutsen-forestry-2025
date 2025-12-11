window.onload = (event) => {
    // console.log("loaded ");
}

photoData.forEach((element) => createVisCard(element, photoGrid, "photo"));
mapData.forEach((element) => createVisCard(element, mapGrid, "map"));

function selectVis(e) {
    console.log("kill me");
    if (e.href == "visualContent.html#show-map-grid") {
        displayBlock('show-photo-grid');
        displayNone('show-map-grid');
    } else {
        displayBlock('show-map-grid');
        displayNone('show-photo-grid');
    }
}

function createVisCard(entry, output, type) {
    const mapDiv = document.createElement('div');
    // This class could be used in CSS to style each tree’s card uniformly.
    mapDiv.className = type + '-list';

    const mapLink = document.createElement('img');
    mapLink.src = entry.link;
    if (type == "map") { mapLink.width = "200"; mapLink.height = "250"; }
    if (type == "photo") { mapLink.width = "250"; mapLink.height = "200"; }
    mapDiv.appendChild(mapLink);

    const mapLoc = document.createElement('p');
    mapLoc.className = "map-description";
    mapLoc.textContent = "Location: " + entry.location;
    mapDiv.appendChild(mapLoc);

    const mapYr = document.createElement('p');
    mapYr.class = "map-description";
    mapYr.textContent = "Year: " + entry.year;
    mapDiv.appendChild(mapYr);

    output.appendChild(mapDiv);
};