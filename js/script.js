const artInfo = [
    {
        title: "Buffering Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "This is a placeholder description for the working java list.",
        pdf: "\pdf_docs\Buffering Shapefiles in QGIS.pdf"
    },
    {
        title: "Clipping Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "This is a placeholder description for the working java list.",
        pdf: "\pdf_docs\Clipping Shapefiles in QGIS.pdf"
    },
    {
        title: "Downloading OpenStreetMap data using QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "Placeholder description text. I pulled up the NYU library site then pulled up the inspector to see if i could get any inspo from their HTML but while it seemed relatively simple theyre doing flex math i sure dont think ill be understanding anytime soon. I  inspected some other places because i was curious and it seems like everything is made out of divs? I'm trying to figure out when people use different distinctions for different things but every   reddit or slackoverflow question i find has five people giving six different ways to solve the same problem so im confused. Interested, but confused. It's not like I expected this to all make sense in a day so that's fine.",
        pdf: "\pdf_docs\Downloading OpenStreetMap data using QGIS.pdf"
    },
    {
        title: "FM-1 An Introduction to Forest Management Plans",
        link: "articles.html#single",
        author: "Rural Action",
        description: "Making this list in js so please god it works.",
        pdf: "\pdf_docs\FM-1-An-Introduction-to-Forest-Management-Plans.pdf"
    },
    {
        title: "Forest Farmers Handbook 2023 Final",
        author: "Rural Action",
        link: "articles.html#single",
        description: "This is a placeholder description for the working java list.",
        pdf: "\pdf_docs\Forest-Farmers-Handbook-2023-Final-1.pdf"
    },
    {
        title: "How to Edit Attribute Tables in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "This is a placeholder description for the working java list.",
        pdf: "\pdf_docs\How to Edit Attribute Tables in QGIS.pdf"
    },
    {
        title: "Merging Shapefiles in QGIS",
        author: "NYU DataServices",
        link: "articles.html#single",
        description: "This is a placeholder description for the working java list.",
        pdf: "\pdf_docs\Merging Shapefiles in QGIS.pdf"
    }
];

const gallery = document.getElementById('art-gallery');

artInfo.forEach(createArtCard);

function createArtCard(art) {
    const artDiv = document.createElement('div');
    // This class could be used in CSS to style each tree’s card uniformly.
    artDiv.className = 'article-list';

    const artLink = document.createElement('a');
    artLink.href = art.link;
    artLink.textContent = art.title;
    artDiv.appendChild(artLink);

    const artAuth = document.createElement('h4');
    artAuth.textContent = " by " + art.author;
    artDiv.appendChild(artAuth);

    const artDesc = document.createElement('p');
    artDesc.textContent = art.description;
    artDiv.appendChild(artDesc);

    const singlePDF = document.createElement('object');
    singlePDF.data = art.pdf;
    singlePDF.type = "application/pdf";
    singlePDF.scrolling = "auto@";
    singlePDF.height = "800px";
    singlePDF.width = "100%";
    artDiv.appendChild(singlePDF);

    gallery.appendChild(artDiv);
};


// const gal = document.getElementById('single-article');
// artInfo.forEach(createArticle);
// console.log(document.URL);

// function createArticle(x) {
//     console.log("got to createArticle");
//     const singleDiv = document.createElement('div');
//     singleDiv.className = 'select-art';

//     const artTitle = document.createElement('h1');
//     artTitle.textContent = x.title;
//     singleDiv.appendChild(artTitle);
//     // artDiv.appendChild(artTitle);

//     const artAuth = document.createElement('h4');
//     artAuth.textContent = " by " + x.author;
//     singleDiv.appendChild(artAuth);

//     gal.appendChild(singleDiv);
// };