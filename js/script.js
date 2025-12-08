// array of article attributes
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
    }
];

// FIND relevant ids in articles.html
const gallery = document.getElementById('art-gallery');
const single = document.getElementById('single-article');
const results = document.getElementById('searched-gallery');
switchPage('page-show-all', 'page-show-searched', 'page-show-single');

// WHEN ON ALL ARTICLE LIST PAGE read array into 'art cards' to be displayed as article list
articleData.forEach((element) => createArtCard(element, gallery));
function createArtCard(entry, output) {
    const artDiv = document.createElement('div');
    // This class could be used in CSS to style each tree’s card uniformly.
    artDiv.className = 'article-list';

    const artLink = document.createElement('a');
    artLink.id = entry.title;
    artLink.setAttribute("onclick", "articleSelected(this)");
    artLink.href = "articles.html#page-show-all";
    artLink.textContent = entry.title;
    artDiv.appendChild(artLink);

    const artAuth = document.createElement('h4');
    artAuth.textContent = " by " + entry.author;
    artDiv.appendChild(artAuth);

    const artDesc = document.createElement('p');
    artDesc.textContent = entry.description;
    artDiv.appendChild(artDesc);

    output.appendChild(artDiv);
};

// WHEN ARTICLE IS SELECTED check for currently stored article, purge, create new article
function articleSelected() {
    while (single.firstChild) {
        single.removeChild(single.firstChild);
        console.log("here");
    }
    const result = articleData.find(({ title }) => title === event.target.id);

    // CREATE the page for selected PDF [formerly createPage(result)]
    const singlePDF = document.createElement('object');
    singlePDF.data = result.pdf;
    singlePDF.type = "application/pdf";
    singlePDF.scrolling = "auto@";
    singlePDF.height = "800px";
    singlePDF.width = "100%";

    single.appendChild(singlePDF);
    switchPage('page-show-single', 'page-show-all', 'page-show-searched');
}

// SEARCH FUNCTION CODE
function searchTitle() {
    var input = document.getElementById('searchTitle');
    filter = input.value.toUpperCase();

    const temp = document.createElement("div");
    articleData.forEach((element) => {
        console.log("here?");
        if (element.title.toUpperCase().indexOf(filter) > -1) {
            console.log("match");
            createArtCard(element, results);
        }
    });

    // for (i = 0; i < articleData.length; i++) {
    //     console.log("here");
    //     a = temp[i].getElementsByTagName('a')[0];
    //     txt = a.textContent;
    //     if (txt.toUpperCase().indexOf(filter) <= -1) {
    //         temp[i].removeChild();
    //     }
    // }
    console.log(input.value);
    switchPage('page-show-searched', 'page-show-all', 'page-show-single');
};

// REPLACE CSS section block\hide if needed
function switchPage(shown, hidden, third) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(third).style.display = 'none';
    return false;
}

// goal = make article desc appear on hover. half pts to knut wtf is this problem.

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
    
// when article link is clicked read in article info for pdf and add styling 
// addEventListener("click", function (e) {
//     while (single.firstChild) {
//         single.removeChild(single.firstChild);
//         // console.log("here");
//     }
//     const result = articleData.find(({ title }) => title === event.target.id);
//     createPage(result);
// });
*/