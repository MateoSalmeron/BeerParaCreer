class cervezaBar{

    idcerveza:String;//FK cerveza
    idBar:String;//Fk bar


    constructor(idcerveza:String, idBar:String){
        this.idcerveza=idcerveza;
        this.idBar=idBar;


    }

    get getIdcerveza():String{
        return this.idcerveza;
    }

    set setIdcerveza(idcerveza:String){
        this.idcerveza=idcerveza;
    }

    get getIdBar():String{
        return this.idBar;
    }

    set setIdBar(idBar:String){
        this.idBar=idBar;
    }

}