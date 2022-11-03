
function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
    if (!player.muted) {
        player.muetd = true;
    }
    player.play();
};

export default AutoPlay;