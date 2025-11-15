# knutsen-forestry-2025
Rowan Knutsen 2025.
Github container for my project in the 2025 introduction to web development for learning designers course. 

## This Commit
- **Modified |** Added animations - updated link hovers. Articles in article list now only show description on hover. 
- **Issues |** Still having PDF issues. The ways that it occurs to me to use remove() have not been doing exactly what I wanted so the current state is reverted to what it was before. For some reason hovering over an article reveals the description for the listing below it, not the one hovered. 
- **Note |** Sorry I submitted this week's work without realizing I either forgot to push or the push had not gone through! My bad.
- **NEXT |** Find way to remove() articles. Make search function work. 

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
- Speed up PDFs 
- make listenerevent only go off for links
