class report{
/*
    Id					int
    Descripción 				String
    Aprobada				int(-1,0,1)(rechazada/a la espera/aprobada)
    Cerveza relacionada			String id cerveza
    Bar relacionada
    comentario relacionado
    autor del report  	idusuario fk	String
    autor de la cerveza/bar/comentario.
*/
    idRepor: String;
    descripcion:String;
    estado:Number; //-1= rechazada , 0=a la espera, 1 aprobada y por tanto a la puta la cerveza o se modifica como querais
    tipoReporte:Number; //-1comentario, 0 cerveza, 1 bar
    idComentario:String;
    idBar:String;
    idCerveza:String;
    idAutorReport:String;//el que poner el report
    idAutor:String;//el que inserto en su dia la cerveza bar o report

    constructor(idRepor:String, descripcion:String,estado:Number,tipoReporte:Number,idComentario:String,idcerveza:String,idBar:String,idAutorReport:String,idAutor:String){
        this.idRepor=idRepor;
        this.descripcion=descripcion;
        this.estado=estado;
        this.tipoReporte=tipoReporte;
        this.idComentario=idComentario;
        this.idCerveza=idcerveza;
        this.idAutor=idAutor;
        this.idBar=idBar;
        this.idAutorReport=idAutorReport;


    }

    get getIdRepor():String{
        return this.idRepor;
    }

    set setIdRepor(idRepor:String){
        this.idRepor=idRepor;
    }

    get getDescripcion():String{
        return this.descripcion;
    }

    set setDescripcion(descripcion:String){
        this.descripcion=descripcion;
    }

    get getEstado():Number{
        return this.estado;
    }

    set setEstado(estado:Number){
        this.estado=estado;
    }

    get getTipoReporte():Number{
        return this.tipoReporte;
    }

    set setTipoReporte(tipoReporte:Number){
        this.tipoReporte=tipoReporte;
    }

    get getIdComentario():String{
        return this.idComentario;
    }

    set setIdComentario(idComentario:String){
        this.idComentario=idComentario;
    }

    get getIdCerveza():String{
        return this.idCerveza;
    }

    set setIdCerveza(idCerveza:String){
        this.idCerveza=idCerveza;
    }

    get getIdAutor():String{
        return this.idAutor;
    }

    set setIdAutor(idAutor:String){
        this.idAutor=idAutor;
    }

    get getIdBar():String{
        return this.idBar;
    }

    set setIdBar(idBar:String){
        this.idBar=idBar;
    }

    get getIdAutorReport():String{
        return this.idAutorReport;
    }

    set setIdAutorReport(idAutorReport:String){
        this.idAutorReport=idAutorReport;
    }

  
}