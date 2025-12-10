/* JS FILE FOR VARIABLES */
// console.log("articles.js");

// ARRAY of article attributes
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
    },
    {
        title: "Development, Land Use, and Collective Trauma: The Marcellus Shale Gas Boom in Rural Pennsylvania",
        author: "Simona L. Perry",
        description: "An ethnographic analysis of rural live and thought in Bradfod County, Pennsylvania. Who these people are, and how they were affected by corporate mining interest in the 2010s.",
        pdf: "\\pdf_docs\\Perry_CAFE34.1.pdf"
    }
];

// FIND relevant ids in articles.html
const gallery = document.getElementById('art-gallery');
const single = document.getElementById('single-article');
const results = document.getElementById('searched-gallery');
// const banner = document.getElementByID('minor-header');

