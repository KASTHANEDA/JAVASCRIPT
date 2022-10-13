class  usuario {
    constructor(username,pwd,age,email){
        this.username=username;
        this.pwd=pwd;
        this.age=age;
        this.email=email;
    };
    saludar() {
        console.log('welcome')
    };
};

 const laura = new usuario ('lau67','6545643','44','@gghh'); 
 const daniel = new usuario ('daniel55','545jhvg','45','@dyudhed');
 const andres = new usuario ('andres2','211kjgbhj','55','@ydgbd');
 const bilma = new usuario ('bilam5','251225','221','@hdjdjd');
 


/*  LIST USUARIO  */
const personas= [
    andres ,
    daniel ,
    bilma     
];
 
/* document.write('USUARIO: '+andres.username);
document.write('USUARIO: '+bilma.email); */

for (var i=0; i<personas.length; i++ )
{
    document.write('USUARIO: '+i+' es '+personas[i].username+'<br>')
}

/* laura.saludar(); */