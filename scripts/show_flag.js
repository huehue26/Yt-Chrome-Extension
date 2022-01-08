
var apiKey = "AIzaSyB0rBKSzFziVKcMkjqcsrNdRLEjohwLnRM"

var site_link = window.location.href

if (site_link.length === 24) {
    // selecting video from the page
    var links = document.querySelectorAll('div#meta')
    for (let i = 0; i < links.length; i++) {
        var videoTitle = links[i].querySelector('h3')
        var videoLink = videoTitle.querySelector('a')
        var x = String(videoLink)
        var videoId = x.slice(32, 43)

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
            var image = new Image(23, 12)
            image.src = `https://countryflagsapi.com/svg/${countryCode}`
            channelTitle.appendChild(image);
        }
    }
} else if (site_link.length === 43) {
    var links = document.querySelectorAll('div#dismissible')
    for (let i = 0; i < links.length; i++) {
        var videoTitle = links[i].querySelector('div.metadata')

        if (videoTitle) {
            var videoLink = videoTitle.querySelector('a')
            var x = String(videoLink)
            var videoId = x.slice(32, 43)

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
                var image = new Image(23, 12)
                image.src = `https://countryflagsapi.com/svg/${countryCode}`
                channelTitle.appendChild(image);
            }
        }
    }

}