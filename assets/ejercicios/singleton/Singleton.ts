
class Singleton { //son tres las propiedades o métodos que singleton tiene:
    private static instance: Singleton;

    private constructor() {
        //init
    }

    static getInstance() {
        if (Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance;
    }
}

export default Singleton;