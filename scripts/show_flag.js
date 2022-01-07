
var apiKey="AIzaSyB0rBKSzFziVKcMkjqcsrNdRLEjohwLnRM"

// selecting video from the page
var links = document.querySelectorAll('div#meta')
for (let i = 0; i < links.length; i++) {
    var videoTitle = links[i].querySelector('h3')
    var videoLink = videoTitle.querySelector('a')
    var x = String(videoLink)
    var videoId = x.slice(32,43)

    // getting channel id from video
    const getChannelId = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
        const data = await response.json();
        getChannelCountry(data.items[0].snippet.channelId)
    }
    getChannelId()

    // getting country from channel id
    const getChannelCountry = async (channelId) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`)
        const data = await response.json();
        displayChannelsCountryFlag(data.items[0].snippet.country)
    }

    const displayChannelsCountryFlag = async (countryCode) => {
        var channelTitle = links[i].querySelector('#byline-container')
        console.log(channelTitle)
        var img = new Image(23,12) 
        img.src = `https://countryflagsapi.com/png/${countryCode}`
        channelTitle.appendChild(img);
    }
}