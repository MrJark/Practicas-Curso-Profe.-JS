
// function MediaPlayer(config) {
//     this.media = config.el; //lo que hace this. es guardar un valor en la estancia de medeiPlayer en este caso par que podamos llamrlo desde cualquier método que haga referencia a esa misma funcions
//     this.plugins = config.plugins || []; 

//     this._initPlugins();
// };

// MediaPlayer.prototype._initPlugins = function() {//esta función se corresponde al plugin AutoPlay
//     const player = {
//         play: () => this.play(),
//         pause: () => this.pause(),
//         media: this.media,
//         get muted() { //get y set me proporciona valores virtuale de los elementos, en este caso el muted 
//             return this.media.muted;
//         },

//         set muted(value) {
//             this.media.muted = value;
//         }
//     };


//     this.plugins.forEach(plugins => {
//         plugins.run(player);
//     });
// };

// MediaPlayer.prototype.play = function() {
//     this.media.play();
// };
  
// MediaPlayer.prototype.pause = function() {
//     this.media.pause();
// };

// MediaPlayer.prototype.togglePlay = function() {
//     if (this.media.paused) {
//         this.play();
//     } else {
//         this.pause();
//     }
// };//con esta estructura podemos hacer que el video se pause y se inicie dando al boton de play. Tiene sentido ya que es una configuración if. La lógica sería: si el video está pausado, al dar play se inicia, sino, es que está en reproducción y al darle play, en este caso pause, se pausa

// MediaPlayer.prototype.mute = function() { //esto me permite hacer la función mute para mandarla al index y que pueda existir en mi entorno, al ser buleanos y no propiedades, se le tienen que pasar el true/false 
//     this.media.muted = true;//muted es el buleano y no mute
// };    
// MediaPlayer.prototype.unmute = function() { //
//     this.media.muted = false;
// };

// export default MediaPlayer;

function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
  
    this._initPlugins();
  }
  
  MediaPlayer.prototype._initPlugins = function() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
  
    this.plugins.forEach(plugin => {
      plugin.run(player);
    });
  };
  
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };
  
  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };
  
  MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
  };
  
  MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
  };
  
  export default MediaPlayer;