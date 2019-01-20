class comentario{

    /*
    Comentario				String
    Autor	id		FK usuario	String 
    tipo de comentario			String		(cerveza o bar)
    idCerveza	Fk			String con id de cerveza  fk
    idBar		Fk			String con id de bar      fk 
    Id 	PK				int
    */
    

    idComentario:String;//comentario de bar id: comentarioBar1  // comentario cerveza id: comentarioCerveza1??
    comentario: String ;
    autorId: String;    //fk usuario que ha escrito el comentario.
    tipoComentario:String; //1 si es bar y 0 si cerveza
    idCerveza:String;  //fk cerveza
    idBar:String;       //fk bar


    constructor(idComentario:String, comentario:String,autorId:String,tipoComentario:String,idCerveza:String,idBar:String){
        this.idComentario=idComentario;
        this.comentario=comentario;
        this.autorId=autorId;
        this.tipoComentario=tipoComentario;
        this.idCerveza=idCerveza;
        this.idBar=idBar;

    }

    constructorVacio(){
       
    }

    get getIdComentario():String{
        return this.idComentario;
    }

    set setIdComentario(idComentario:String){
        this.idComentario=idComentario;
    }

    get getComentario():String{
        return this.comentario;
    }

    set setComentario(comentario:String){
        this.comentario=comentario;
    }


    get getAutorId():String{
        return this.autorId;
    }

    set setAutorId(autorId:String){
        this.autorId=autorId;
    }

    get getTipoComentario():String{
        return this.comentario;
    }

    set setTipoComentario(tipocomentario:String){
        this.tipoComentario=tipocomentario;
    }
    get getIdCerveza():String{
        return this.idCerveza;
    }

    set setIdCerveza(idCerveza:String){
        this.idCerveza=idCerveza;
    }

    get getIdBar():String{
        return this.idBar;
    }

    set setIdBar(idBar:String){
        this.idBar=idBar;
    }

}