let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';

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
        li.innerHTML = `<h4><a href="${bob.link}">${bob.title}</a><p> ${bob.description}</p></h4>`;
        //append HTML content to list 
        textarea.appendChild(li);
    }
});