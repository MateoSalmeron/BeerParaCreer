class cerveza{

    nombre: String ;
    descripcion: String;
    sumNotas: Number;
    numeroNotas: Number;
    idCerveza: String;//pk
    tipo: String;
    marca: String;
    origen: String;
    urlImagen: String;
    autorId: String;//fk del usuario que lo ha introducido
    fecha: String;//esto no estoy nada seguro... tampoco se si va a hacer falta usarlo.



    constructorCompleto( idCerveza:String,nombre:String, descripcion:String, sumNotas:number, numeroNotas:number, tipo: String,marca: String,
        origen: String,urlImagen: String,autorId: String,fecha: String ){

        this.nombre=nombre;
        this.descripcion=descripcion;
        this.idCerveza=idCerveza;
        this.sumNotas=sumNotas;
        this.numeroNotas=numeroNotas;
        this.tipo=tipo;
        this.marca=marca;
        this.origen=origen;
        this.urlImagen=urlImagen;
        this.autorId=autorId;
        this.fecha=fecha;    

    }

    constructorVacio(){

    }



    get getNombre():String{
        return this.nombre;
    }

    set setNombre(nombre:String){
        this.nombre=nombre;
    }

    get getDescripcion():String{
        return this.descripcion;
    }

    set setDescripcion(descripcion:String){
        this.descripcion=descripcion;
    }

    get getIdCerveza():String{
        return this.idCerveza;
    }

    set setIdCerveza(idCerveza:String){
        this.idCerveza=idCerveza;
    }

    get getSumNotas():Number{
        return this.sumNotas;
    }

    set setSumNotas(sumNotas:Number){
        this.sumNotas=sumNotas;
    }
    get getNumNotas():Number{
        return this.numeroNotas;
    }

    set setNumNotas(numNotas:Number){
        this.numeroNotas=numNotas;
    }
    get getTipo():String{
        return this.tipo;
    }

    set setTipo(tipo:String){
        this.tipo=tipo;
    }
    get getOrigen():String{
        return this.origen;
    }

    set setOrigen(origen:String){
        this.origen=origen;
    }
    get getidAutor():String{
        return this.autorId;
    }

    set setidAutor(idAutor:String){
        this.autorId=idAutor;
    }
    get getMarca():String{
        return this.marca;
    }

    set setMarca(marca:String){
        this.marca=marca;
    }
    get getUrlImagen():String{
        return this.urlImagen;
    }

    set setUrlImagen(urlImagen:String){
        this.urlImagen=urlImagen;
    }

}