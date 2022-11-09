
//IntersectionObserver

class AutoPause {
    //para arreglar los errores si cambiamos de .js a .ts 
    //los errores se deben a que no están declarados los tipos que llevan
    //corrección del error de threshould

    //private threshould: number;

    //corrección del error del player

    //player: MediaPlayer;



    constructor() {
        this.threshold = 0.6;//% con el que quiero que se pare el video
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    };
    
    run(player) {
        this.player = player;
    
        const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold, //esto es el umbral, el % que tiene que tener el video fuera de la pantalla para que se pare
        });
    
        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilityChange) //lo añadimos para mejorar el UX y ahorrar batería en cualquier dispositivo
    };
  
    handleIntersection(entries) {
        const entry = entries[0];
    
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
        this.player.play();
        } else {
        this.player.pause();
        }
    };

    handleVisibilityChange() { //definimos el método
        const isVisible = document.visibilityState === 'visible'
        if (isVisible){
            this.player.play();
        } else {
            this.player.pause();
        }
    }
};

export default AutoPause;
// //esto lo creamos para cuando hagamos scroll hacia abajo, el video se detenga 