async function getRSS(){
    let stuff;
    const mydata = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds2.feedburner.com%2Fziffdavis%2Fextremetech', {method: 'GET'})
    stuff = await mydata.json();
    for(let i = 0; i < stuff["items"].length; i++){
        //console.log(stuff['items'][i]["title"])
        let title = stuff['items'][i]["title"]
        document.getElementById("rss-feed-items-parent").innerHTML += '<div class="rss-feed-items-child"> <div> <h3><b>' + stuff['items'][i]["title"] + '</b></h3></div></div>'
    }
}
getRSS()