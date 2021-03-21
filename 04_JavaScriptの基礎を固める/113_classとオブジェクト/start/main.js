const obj  = {
    firstname : 'keisuke',
    lastname : 'Igarashi',

    fullname : function(){
        console.log(this.firstname);
    }
}

obj.fullname();

class myObj{
    constructor() {
        this.firstname = 'Keisuke';
        this.lastname = 'Igarashi';
    }

    fullname(){
        console.log(this.firstname + " " + this.lastname);
    }
}

const obj2 = new myObj();
obj2.fullname();