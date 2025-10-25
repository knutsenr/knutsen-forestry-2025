const artInfo = [
    {
        title: "Example Title",
        author: "Rowan Knutsen",
        link: "articles.html#ex-article",
        description: "This is a placeholder description for the working java list."
    },
    {
        title: "Example Article Title",
        author: "By Rowan Knutsen",
        link: "articles.html#ex-article",
        description: "Placeholder description text. I pulled up the NYU library site then pulled up the inspector to see if i could get any inspo from their HTML but while it seemed relatively simple theyre doing flex math i sure dont think ill be understanding anytime soon. I  inspected some other places because i was curious and it seems like everything is made out of divs? I'm trying to figure out when people use different distinctions for different things but every   reddit or slackoverflow question i find has five people giving six different ways to solve the same problem so im confused. Interested, but confused. It's not like I expected this to all make sense in a day so that's fine."
    },
    {
        title: "article name ii",
        link: "articles.html#ex-article",
        author: "author name ii",
        description: "temp description ii"
    },
    {
        title: "Uh Oh the Articles are Multiplying",
        link: "articles.html#ex-article",
        author: "Rowan Knutsen",
        description: "Making this list in js so please god it works."
    }
];

artInfo.forEach(function (art) { console.log(art); });
