let url = 'https://www.buzzfeed.com/nifty.xml';

const textarea = document.querySelector('#feed-textarea');

const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();

feednami.load(url)
.then(feed => {
    console.log(feed)
    textarea.value = ''
    for(let bob of feed.entries){
        //create a list element
        let li = document.createElement('li');
        //add HTML content to list items
        li.innerHTML = `<h4><img src=${bob.image.url}><a href="${bob.link}">${bob.title}</a></h4>`;
        //append HTML content to list 
        textarea.appendChild(li);
    }
});

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Feeds from BBC News
//https://www.bbc.com/news/10628494#userss
