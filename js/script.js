switchPage('page-show-all', 'page-show-searched', 'page-show-single');
// REPLACE CSS section block\hide if needed

// CREATE ARTICLE LIST
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

// SEARCH CODES
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

// Advanced Search
function searchTitle() {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
        // console.log("here");
    }

    var input = document.getElementById('searchTitle').value.toLowerCase();
    articleData.forEach((element) => {
        if (element.title.toLowerCase().indexOf(input)) {
            console.log("match");
            createArtCard(element, results);
        }
    });

    switchPage('page-show-searched', 'page-show-all', 'page-show-single');
};

function searchAuthor() {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
        // console.log("here");
    }

    var input = document.getElementById('searchAuthor').value.toLowerCase();
    articleData.forEach((element) => {
        if (element.author.toLowerCase().indexOf(input)) {
            console.log("match");
            createArtCard(element, results);
        }
    });

    switchPage('page-show-searched', 'page-show-all', 'page-show-single');
}

function searchAll() {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
        // console.log("here");
    }

    var input = document.getElementById('searchAll').value.toLowerCase();
    articleData.forEach((element) => {
        if ((element.author.toLowerCase().indexOf(input) > -1) || (element.title.toLowerCase().indexOf(input) > -1) || (element.description.toLowerCase().indexOf(input) > -1)) {
            console.log("match");
            createArtCard(element, results);
        }
    });

    switchPage('page-show-searched', 'page-show-all', 'page-show-single');
}







// dump code [old pieces of thigns] below please ignore
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



    // for (i = 0; i < articleData.length; i++) {
    //     console.log("here");
    //     a = temp[i].getElementsByTagName('a')[0];
    //     txt = a.textContent;
    //     if (txt.toUpperCase().indexOf(filter) <= -1) {
    //         temp[i].removeChild();
    //     }
    // }
*/