// Replace this URL with the URL of your SoundCloud playlist
const playlistUrl = 'https://soundcloud.com/user-146516006/sets/ai-songs-that-should-be';

// Function to create an iframe for the SoundCloud widget
function createSoundCloudWidget(url) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '300');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', 'no');
    iframe.setAttribute('allow', 'autoplay');
    iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=true`;

    return iframe;
}

// Add the SoundCloud widget to the container
const container = document.getElementById('soundcloud-container');
container.appendChild(createSoundCloudWidget(playlistUrl));
