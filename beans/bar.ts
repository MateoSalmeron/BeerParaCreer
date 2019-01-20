class bar{


   
   
    idBar:String;
    nombre: String ;
    descripcion: String;
    direccion: String;//si puede ser url para mostrarla en maps
    sumNotas: Number;
    numeroNotas: Number;
    autorId: String; //fk id usuario :)
    ciudad: String;

    constructorCompleto(idBar:String,nombre:String, descripcion:String,direccion:String,sumNotas:Number,numeroNotas: Number, autorId:String,ciudad:String){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.idBar=idBar;
        this.ciudad=ciudad;
        this.direccion=direccion;
        this.sumNotas=sumNotas;
        this.numeroNotas=numeroNotas;
        this.autorId=autorId;
    
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
    get getIdBar():String{
        return this.idBar;
    }

    set setIdBar(idBar:String){
        this.idBar=idBar;
    }

    get getCiudad():String{
        return this.ciudad;
    }

    set setCiudad(ciudad:String){
        this.ciudad=ciudad;
    }
    get getDireccion():String{
        return this.direccion;
    }

    set setDireccion(dir:String){
        this.direccion=dir;
    }

    get getSumNotas():Number{
        return this.sumNotas;
    }

    set setSumNotas(sumNotas:Number){
        this.sumNotas=sumNotas;
    }
    get getNumeroNotas():Number{
        return this.numeroNotas;
    }

    set setNumeroNotas(numN:Number){
        this.numeroNotas=numN;
    }

    get getAutorId():String{
        return this.autorId;
    }

    set setAtorId(autorId:String){
        this.autorId=autorId;
    }

}