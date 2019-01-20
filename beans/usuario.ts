class usuario{
    /**
     * Nombre  		UNIQUE	String
Correo electrónico	¿Pk?		String
Contraseña (deberá ir cifrada)	String cifrado
Imagen de perfil? Dada por nosotros rollo que sean como vasos de cerveza de distintos colores y haya varios y salga la imagen cuando comente o meta una cerveza o bar xD 	
si la guardamos que sean unas cuantas concretas yo guardaría un int
Permisos(admin, un mierda)  	String o int( si se guarda paramétricamente los tipos de usuarios)
ciudad (de residencia)		String
país	(de residencia)		String

     */

    idUsuario: String; //pk
    nombre: String ;    
    descripcion: String;
    correoElectronico:String;  //UNIQUE
    contrasenia: String;
    imgPerfil: String;
    permisos: String;//sera el tipo de usuario si es admin o usuario basico (o, no esta conteplando aun, anunciante)
    ciudad: String;
    pais: String;

    constructor(idUsuario:string, nombre:String,descripcion: String, correoElectronico:String,contrasenia: String,imgPerfil: String, permisos:String,ciudad:String,pais:String){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.idUsuario=idUsuario;
        this.correoElectronico=correoElectronico;
        this.contrasenia=contrasenia;
        this.imgPerfil=imgPerfil;
        this.permisos=permisos;
        this.ciudad=ciudad;
        this.pais=pais;

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

    get getIdUsuario():String{
        return this.idUsuario;
    }

    set setIdUsuario(idUsuario:String){
        this.idUsuario=idUsuario;
    }

    get getCorreoElectronico():String{
        return this.correoElectronico;
    }

    set setCorreoElectronico(correoE:String){
        this.correoElectronico=correoE;
    }
    get getContrasenia():String{
        return this.contrasenia;
    }

    set setContrasenia(pass:String){
        this.contrasenia=pass;
    }

    get getImgPerfil():String{
        return this.imgPerfil;
    }

    set setImgPerfil(imgPerfil:String){
        this.imgPerfil=imgPerfil;
    }
    get getPermisos():String{
        return this.permisos;
    }

    set setPermisos(permisos:String){
        this.permisos=permisos;
    }

    get getCiudad():String{
        return this.ciudad;
    }

    set setCiudad(ciudad:String){
        this.ciudad=ciudad;
    }
    get getPais():String{
        return this.pais;
    }

    set setPais(pais:String){
        this.pais=pais;
    }

  
}