# knutsen-forestry-2025
Rowan Knutsen 2025.
Github container for my project in the 2025 introduction to web development for learning designers course. 

## This Commit
- **Modified |** script.js file. Currently uses js to create a grid of articles, authors, and descriptions. When a link is selected, the page opens another section and js selects the PDF link of the relevant article and embeds it as a PDF in the page.
- **Issues |** the way that I found to open the relevant PDF works. It also slows down the site and I imagine this is a bad way to do what I am doing, sometimes only the first article you select will open properly and then every other link will open to that same PDF. Searching for alternatives.
- **Note |** Because of the PDFs I am using and the ways I found to embed PDF without downloading extra material, it contains the bar to edit or download in browser. This defeats the purpose of some of my intended 'Your Files' function. I am sorting out how to open the articles a different way.
- **NEXT |** I plan to make the search function select articles by Keyword.

## Last Commits
- Added relevant PDF folder. Fixed some links.
- Both emails at the bottom of the page should open the email app with mailto: in their links.
- Added background image
- All links to Article, Home, and Example Article pages are working
- Cleaned up CSS Visuals
- Nav bar sticks to top of screen
- Created JS script which will create article listings from an array rather than doing each manually
- Created HTML container which will display each of these articles on the articles page of the site 
- Created extra file for articles.js and article-pdf.html to sparate pages then deleted them when I could not get the js to reference different html files in the same js file.
- Articles page is currently a grid of different article titles made with Javascript in script.js. This works. I am working on getting the PDFs to display in the page when the link is pressed.

## Pages and Navigation
### Files
**index.html** contains the home page.

**articles.html** contains all articles + example article page.

**style.css** contains all css for project.

**script.js** contians all javascript for project. articleList.js is currently not interacting with the program so the article array is housed in script.js.

### Navigation
From Home one can use the Articles selector at the top of the page OR the Articles button under the Resources section.
The Articles page lists a series of articles selected from a javascript list. All of these are examples still and connect to a selector on the same page which will open a PDF of the relevant article (also determined through js).

## To Do 
Next:
- Functional search bar
- Your Files drop down
