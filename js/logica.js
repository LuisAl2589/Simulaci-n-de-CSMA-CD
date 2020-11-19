

var lienzo = document.querySelector("canvas")
var context= lienzo.getContext('2d');


function pc2(){
    var pos=60
   
    var t= setInterval(move,10)
 
    function move(){
        if(pos >=340){
            clearInterval(t);
            setTimeout(limpiar,3000)
        }else{
            
            context.clearRect(0,0,1050,2050)
            context.fillStyle= "red";
            context.fillRect(pos,20,50,50)
            pos+=1;
        }
    }
    function limpiar (){
        var context2= lienzo.getContext('2d');
        var pos2=340
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=650){
                clearInterval(t2);
                setTimeout(datos,3000)
            }else{
                
                context2.clearRect(0,100,1050,2050)
                context2.fillStyle= "green";
                context2.fillRect(pos2,100,50,50)
                pos2+=1;
            }
        }
    }

    function datos (){
        var context2= lienzo.getContext('2d');
        var pos2=60
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=340){
                clearInterval(t2);
                setTimeout(ack,3000)
            }else{
                
                context2.clearRect(0,170,1050,2050)
                context2.fillStyle= "blue";
                context2.fillRect(pos2,170,50,50)
                pos2+=1;
            }
        }

    }

    function ack (){
        var context2= lienzo.getContext('2d');
        var pos2=340
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=650){
                clearInterval(t2);
                setTimeout(reppc2,3000)
            }else{
                
                context2.clearRect(0,240,1050,2050)
                context2.fillStyle= "yellow";
                context2.fillRect(pos2,240,50,50)
                pos2+=1;
            }
        }
    }

    
    
}

function reppc2(){
    var pos3=650

var t3= setInterval(move,10)

function move(){
    if(pos3 <=340){
        clearInterval(t3);
        setTimeout(limpiar,3000)
    }else{
        
        context.clearRect(0,310,1050,2050)
        context.fillStyle= "red";
        context.fillRect(pos3,310,50,50)
        pos3-=1;
    }
}
function limpiar (){
    var context2= lienzo.getContext('2d');
    var pos2=340

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=60){
            clearInterval(t2);
            setTimeout(datos,3000)
        }else{
            
            context2.clearRect(0,380,1050,2050)
            context2.fillStyle= "green";
            context2.fillRect(pos2,380,50,50)
            pos2-=1;
        }
    }
}

function datos (){
    var context2= lienzo.getContext('2d');
    var pos2=650

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=340){
            clearInterval(t2);
            setTimeout(ack,3000)
        }else{
            
            context2.clearRect(0,450,1050,2050)
            context2.fillStyle= "blue";
            context2.fillRect(pos2,450,50,50)
            pos2-=1;
        }
    }

}

function ack (){
    var context2= lienzo.getContext('2d');
    var pos2=340

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=60){
            clearInterval(t2);
            setTimeout(fin,3000)
        }else{
            
            context2.clearRect(0,520,1050,2050)
            context2.fillStyle= "yellow";
            context2.fillRect(pos2,520,50,50)
            pos2-=1;
        }
    }
}
}


function reppc1(){
    var pos3=650

var t3= setInterval(move,10)

function move(){
    if(pos3 <=340){
        clearInterval(t3);
        setTimeout(limpiar,3000)
    }else{
        
        context.clearRect(0,0,1050,2050)
        context.fillStyle= "red";
        context.fillRect(pos3,0,50,50)
        pos3-=1;
    }
}
function limpiar (){
    var context2= lienzo.getContext('2d');
    var pos2=340

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=60){
            clearInterval(t2);
            setTimeout(datos,3000)
        }else{
            
            context2.clearRect(0,70,1050,2050)
            context2.fillStyle= "green";
            context2.fillRect(pos2,70,50,50)
            pos2-=1;
        }
    }
}

function datos (){
    var context2= lienzo.getContext('2d');
    var pos2=650

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=340){
            clearInterval(t2);
            setTimeout(ack,3000)
        }else{
            
            context2.clearRect(0,140,1050,2050)
            context2.fillStyle= "blue";
            context2.fillRect(pos2,140,50,50)
            pos2-=1;
        }
    }

}

function ack (){
    var context2= lienzo.getContext('2d');
    var pos2=340

    var t2= setInterval(move2,10)

    function move2(){
        if(pos2 <=60){
            clearInterval(t2);
            setTimeout(pc1,3000)
        }else{
            
            context2.clearRect(0,210,1050,2050)
            context2.fillStyle= "yellow";
            context2.fillRect(pos2,210,50,50)
            pos2-=1;
        }
    }
}
}

function colision(){
    var pos=60
    var pos2=650
   
    var t= setInterval(move,10)
 
    function move(){
        if(pos >=340){
            clearInterval(t);
            setTimeout(inicio,3000)
            
        }else{
            
            context.clearRect(0,0,340,2050)
            context.fillStyle= "red";
            context.fillRect(pos,0,50,50)
            pos+=1;

            context.clearRect(400,0,1050,2050)
            context.fillStyle= "red";
            context.fillRect(pos2,0,50,50)
            pos2-=1;

        }      
        
    }
}


function pc1(){
    var pos=60
   
    var t= setInterval(move,10)
 
    function move(){
        if(pos >=340){
            clearInterval(t);
            setTimeout(limpiar,3000)
        }else{
            
            context.clearRect(0,280,1050,2050)
            context.fillStyle= "red";
            context.fillRect(pos,280,50,50)
            pos+=1;
        }
    }
    function limpiar (){
        var context2= lienzo.getContext('2d');
        var pos2=340
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=650){
                clearInterval(t2);
                setTimeout(datos,3000)
            }else{
                
                context2.clearRect(0,350,1050,2050)
                context2.fillStyle= "green";
                context2.fillRect(pos2,350,50,50)
                pos2+=1;
            }
        }
    }

    function datos (){
        var context2= lienzo.getContext('2d');
        var pos2=60
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=340){
                clearInterval(t2);
                setTimeout(ack,3000)
            }else{
                
                context2.clearRect(0,420,1050,2050)
                context2.fillStyle= "blue";
                context2.fillRect(pos2,420,50,50)
                pos2+=1;
            }
        }

    }

    function ack (){
        var context2= lienzo.getContext('2d');
        var pos2=340
    
        var t2= setInterval(move2,10)

        function move2(){
            if(pos2 >=650){
                clearInterval(t2);
                setTimeout(fin,3000)
            }else{
                
                context2.clearRect(0,490,1050,2050)
                context2.fillStyle= "yellow";
                context2.fillRect(pos2,490,50,50)
                pos2+=1;
            }
        }
    }

}
function fin() {
    alert("La simulacion ha terminado")
}

function inicio(){
    var lugarpc1 = Math.round(Math.random() + (2-1));
	console.log("el valor de la pc 2 es:"+lugarpc1);

	var lugarpc2 = Math.round(Math.random() + (2-1));
    console.log("el valor de la pc 3 es:"+lugarpc2);
    
    if(lugarpc1==lugarpc2){
        colision()
    }else if(lugarpc1>lugarpc2){
        pc2()
    }else{
        reppc1()
    }
}