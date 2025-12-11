/* JS FILE FOR VARIABLES */
// console.log("articles.js");

// ARTICLES PAGE ARRAY
const articleData = [
    {
        title: "Buffering Shapefiles in QGIS",
        author: "NYU DataServices",
        description: "A written guide on buffering shapefiles in open-source GIS software GIS.",
        pdf: "\\pdf_docs\\Buffering Shapefiles in QGIS.pdf"
    },
    {
        title: "Clipping Shapefiles in QGIS",
        author: "NYU DataServices",
        description: "A written guide on clipping shapefiles in open-source GIS software GIS.",
        pdf: "\\pdf_docs\\Clipping Shapefiles in QGIS.pdf"
    },
    {
        title: "Development, Land Use, and Collective Trauma: The Marcellus Shale Gas Boom in Rural Pennsylvania",
        author: "Simona L. Perry",
        description: "An ethnographic analysis of rural live and thought in Bradfod County, Pennsylvania. Who these people are, and how they were affected by corporate mining interest in the 2010s.",
        pdf: "\\pdf_docs\\Perry_CAFE34.1.pdf"
    },
    {
        title: "Downloading OpenStreetMap data using QGIS",
        author: "NYU DataServices",
        description: "A written guide on how to download the OpenStreetMap basemap in open-source GIS software QGIS",
        pdf: "\\pdf_docs\\Downloading OpenStreetMap data using QGIS.pdf"
    },
    {
        title: "FM-1 An Introduction to Forest Management Plans",
        author: "Rural Action",
        description: "A short overview of what a forest management plan looks like through Rural Action Non-Profit's forestry department.",
        pdf: "\\pdf_docs\\FM-1-An-Introduction-to-Forest-Management-Plans.pdf"
    },
    {
        title: "Forest Farmers Handbook 2023.",
        author: "Rural Action",
        description: "Rural Action's complete Forest Farmer's Handbook, First Edition written in 2023.",
        pdf: "\\pdf_docs\\Forest-Farmers-Handbook-2023-Final-1.pdf"
    },
    {
        title: "How to Edit Attribute Tables in QGIS",
        author: "NYU DataServices",
        description: "A written guide on how to edit an attribute file in open-source GIS software QGIS.",
        pdf: "\\pdf_docs\\How to Edit Attribute Tables in QGIS.pdf"
    },
    {
        title: "Merging Shapefiles in QGIS",
        author: "NYU DataServices",
        description: "A written guide on how to merge shapefiles in open-source GIS software QGIS.",
        pdf: "\\pdf_docs\\Merging Shapefiles in QGIS.pdf"
    }
];
// VISUALCONTENT ARRAYS
const mapData = [
    {
        location: "Amesville, Ohio",
        year: "1960",
        style: "Geological.",
        link: "../images/maps/amesville_1960.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1875",
        style: "Road.",
        link: "../images/maps/athens_1875.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1905",
        style: "Geological.",
        link: "../images/maps/athens_1905.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1905",
        style: "Topographical.",
        link: "../images/maps/athens_geological_1905.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1875",
        style: "Political.",
        link: "../images/maps/athensColor_1875.jpg"
    },
    {
        location: "Athens, Ohio; Meigs, Ohio",
        year: "Unknown",
        style: "Road.",
        link: "../images/maps/athensMeigs_unknown.jpg"
    },
    {
        location: "Chesterhill, Ohio",
        year: "1904",
        style: "Topographical.",
        link: "../images/maps/chesterhill_1904.jpg"
    },
    {
        location: "Chesterhill, Ohio",
        year: "1961",
        style: "Geographical.",
        link: "../images/maps/chesterhill_1961.jpg"
    },
    {
        location: "Chesterhill, Ohio",
        year: "2002",
        style: "Topographical.",
        link: "../images/maps/chesterhill_2002.jpg"
    },
    {
        location: "New Straitsville, Ohio",
        year: "1960",
        style: "Geological.",
        link: "../images/maps/newStraitsville_1960.jpg"
    },
    {
        location: "New Straitsville, Ohio",
        year: "2002",
        style: "Political.",
        link: "../images/maps/newStraitsville_2002.jpg"
    },
    {
        location: "Parkersberg, Ohio",
        year: "1902",
        style: "Geological.",
        link: "../images/maps/parkersberg_1902.jpg"
    },
    {
        location: "Strongville, Ohio",
        year: "1876",
        style: "Road.",
        link: "../images/maps/strongville_1876.jpg"
    },
    {
        location: "Ohio State",
        year: "1804",
        style: "Cadaster.",
        link: "../images/maps/ohioState_1804.jpg"
    },

];
const photoData = [
    {
        location: "Unknown, Ohio",
        year: "2010",
        style: "Arial",
        link: "../images/photographs/arialPhoto_2010.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "2006",
        style: "Arial",
        link: "../images/photographs/athensArial_2006.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1875",
        style: "Various",
        link: "../images/photographs/athensAtlas_1875.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1974",
        style: "Landscape",
        link: "../images/photographs/coalMining_athens_1974.jpg"
    },
    {
        location: "Glouster, Ohio",
        year: "Unknown",
        style: "Landscape",
        link: "../images/photographs/moundvilleGlouster_unknown.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1913",
        style: "Postcard",
        link: "../images/photographs/theRidges_1913.jpg"
    },
    {
        location: "Athens, Ohio",
        year: "1981",
        style: "Landscape",
        link: "../images/photographs/theRidges_1981.jpg"
    },
    {
        location: "Youngstown, Ohio",
        year: "Unknown",
        style: "Arial",
        link: "../images/photographs/youngstownArchaeology_unknown.jpg"
    }
];

// ARTICLES PAGE VARIABLES
const gallery = document.getElementById('art-gallery');
const single = document.getElementById('single-article');
const results = document.getElementById('searched-gallery');
// const banner = document.getElementByID('minor-header');

// VISUALCONTENT PAGE VARIABLES
const mapGrid = document.getElementById('map-grid');
const photoGrid = document.getElementById('photo-grid');

// // VISUALCONTENT PAGE VARIABLES
// const mapGrid = document.getElementById('map-grid');
// const photoGrid = document.getElementById('photo-grid');

// GENERAL USE FUNCTIONS
function switchPage(shown, hidden, third) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(third).style.display = 'none';
    return false;
}

function displayBlock(page) {
    console.log("block");
    if (document.getElementById(page).style.display == "none") document.getElementById(page).style.display = 'block';
}

function displayNone(page) {
    if (document.getElementById(page).style.display == "block") { document.getElementById(page).style.display = 'none'; }
}
