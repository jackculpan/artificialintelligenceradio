var turntable = $('.player');
var tooltip = $('.tooltip');
var playBtn = $('button.play');

// Get hooked up
SC.initialize({
  client_id: 'c92343835f607734d719d94afcb679d7'
});

// Get SoundCloud playlist
SC.get('/playlists/1605105415').then(function(playlist) {

  // Setup array of tracks
  var tracks = [];
  // Loop through playlist for track IDs and add to array
  playlist.tracks.forEach(function(track) {
    tracks.push(track.id);
  });

  // Randomly set a song to play on page load
  var track_id = tracks[Math.floor(Math.random()*tracks.length)];

  // Stream randomly selected song
  SC.stream('/tracks/' + track_id).then(function(player) {

    playBtn.on('click', function() {
      // Bye bye tooltip, we get it
      tooltip.remove();
      // Check classes and update
      // Play or pause track
      if(!turntable.hasClass('is-playing')) {
        turntable
          .removeClass('is-stopped')
          .addClass('is-playing');
        setTimeout(function() {
          player.play();
        }, 500);
      } else {
        turntable
          .removeClass('is-playing')
          .addClass('is-stopped');
        player.pause();
      }
      
    });

  });

});

// For flexible label text
$("h2, h3").fitText();