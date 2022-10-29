const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
    this.media = config.el; //lo que hace this. es guardar un valor en la estancia de medeiPlayer en este caso par que podamos llamrlo desde cualquier método que haga referencia a esa misma funcions
}

MediaPlayer.prototype.play = function() {
    if (this.media.paused){
        this.media.play();
    } else {
        this.media.pause();
    }
};//con esta estructura podemos hacer que el video se pause y se inicie dando al boton de play. Tiene sentido ya que es una configuración if. La lógica sería: si el video está pausado, al dar play se inicia, sino, es que está en reproducción y al darle play, en este caso pause, se pausa

const player = new MediaPlayer( {el: video} );
button.onclick = () => player.play();