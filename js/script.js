// array of article attributes
const artInfo = [
    {
        title: "Buffering Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "A written guide on buffering shapefiles in open-source GIS software GIS.",
        pdf: "\\pdf_docs\\Buffering Shapefiles in QGIS.pdf"
    },
    {
        title: "Clipping Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "A written guide on clipping shapefiles in open-source GIS software GIS.",
        pdf: "\\pdf_docs\\Clipping Shapefiles in QGIS.pdf"
    },
    {
        title: "Downloading OpenStreetMap data using QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "A written guide on how to download the OpenStreetMap basemap in open-source GIS software QGIS",
        pdf: "\\pdf_docs\\Downloading OpenStreetMap data using QGIS.pdf"
    },
    {
        title: "FM-1 An Introduction to Forest Management Plans",
        link: "articles.html#single",
        author: "Rural Action",
        description: "A short overview of what a forest management plan looks like through Rural Action Non-Profit's forestry department.",
        pdf: "\\pdf_docs\\FM-1-An-Introduction-to-Forest-Management-Plans.pdf"
    },
    {
        title: "Forest Farmers Handbook 2023.",
        author: "Rural Action",
        link: "articles.html#single",
        description: "Rural Action's complete Forest Farmer's Handbook, First Edition written in 2023.",
        pdf: "\\pdf_docs\\Forest-Farmers-Handbook-2023-Final-1.pdf"
    },
    {
        title: "How to Edit Attribute Tables in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "A written guide on how to edit an attribute file in open-source GIS software QGIS.",
        pdf: "\\pdf_docs\\How to Edit Attribute Tables in QGIS.pdf"
    },
    {
        title: "Merging Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "A written guide on how to merge shapefiles in open-source GIS software QGIS.",
        pdf: "\\pdf_docs\\Merging Shapefiles in QGIS.pdf"
    }
];

// find relevant ids in articles.html
const gallery = document.getElementById('art-gallery');
const single = document.getElementById('single-article');

// when article link is clicked read in article infor for pdf and add styling 
const current_id = "x";
addEventListener("click", function (e) {
    const result = artInfo.find(({ title }) => title === event.target.id);

    const singlePDF = document.createElement('object');
    singlePDF.data = result.pdf;
    singlePDF.type = "application/pdf";
    singlePDF.scrolling = "auto@";
    singlePDF.height = "800px";
    singlePDF.width = "100%";

    single.appendChild(singlePDF);
    // singlePDF.remove();
    // console.log(event.target.id);
});

// read array into 'art cards' to be displayed as article list
artInfo.forEach(createArtCard);
function createArtCard(art) {
    const artDiv = document.createElement('div');
    // This class could be used in CSS to style each tree’s card uniformly.
    artDiv.className = 'article-list';

    const artLink = document.createElement('a');
    artLink.id = art.title;
    artLink.href = art.link;
    artLink.textContent = art.title;
    artDiv.appendChild(artLink);

    const artAuth = document.createElement('h4');
    artAuth.textContent = " by " + art.author;
    artDiv.appendChild(artAuth);

    const artDesc = document.createElement('p');
    artDesc.textContent = art.description;
    artDiv.appendChild(artDesc);

    gallery.appendChild(artDiv);
};

// goal = make article desc appear on hover.

/*
const gal = document.getElementById('single-article');

artInfo.forEach(createArticle);
console.log(document.URL);

function createArticle(x) {
    console.log("got to createArticle");
    const singleDiv = document.createElement('div');
    singleDiv.className = 'select-art';

    const artTitle = document.createElement('h1');
    artTitle.textContent = x.title;
    singleDiv.appendChild(artTitle);
    // artDiv.appendChild(artTitle);

    const artAuth = document.createElement('h4');
    artAuth.textContent = " by " + x.author;
    singleDiv.appendChild(artAuth);

    gal.appendChild(singleDiv);
};
*/