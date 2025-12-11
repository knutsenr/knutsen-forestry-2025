# knutsen-forestry-2025
Rowan Knutsen 2025.
Github container for my project in the 2025 introduction to web development for learning designers course. 

## This Commit
- **Added |** Added search function
  - Titles will fill in as autocorrect based on user input
  - Searching by title will limit only applicable articles
  - Added Photography and Maps pages and relevant images + code
  - Photography and Maps now display their images in grid produced through js 
  - Partially constructed advanced search
- **Modified |** 
  - Changed the new article select code from addEventListener to an onclick in the <a> attr. This is cleaner, stops it from running and throwing error each time one clicks anywhere and not just on the link. 
  - articles.html no longer uses section:target hide/block since there are now 3 sections. Instead, what is shown is controlled by switchPage() in script.js
- **Issues |** When one hovers over the article list, it opens the description for the article below not the one being hovered. I still have not fixed this. 
- **Note |** The Forest Management Plan PDF is too large to load properly but all of the rest open in time.
- **NEXT |** Make search function work. 

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
- Description appears on hover, improved link hover animation.
- Added animations - updated link hovers. Articles in article list now only show description on hover. 
- Fixed the loading pdf issue! Now clears all children of getElementById before adding a new one.

## Pages and Navigation
### Files
**index.html** contains the home page.

**articles.html** contains all articles + single article pages.

**style.css** contains all css for project.

**articles.js** contains variable declarations and data arrays.
**script.js** contians all functions. 

### Navigation
From Home one can use the Articles selector at the top of the page OR the Articles button under the Resources section.
The Articles page lists a series of articles selected from a javascript list. All of these are examples still and connect to a selector on the same page which will open a PDF of the relevant article (also determined through js).

## To Do 
Next:
- Your Files drop down
- 
