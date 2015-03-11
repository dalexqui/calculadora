function operar()
{
var n =  document.getElementById("lcd");
var s = String(n.value);
var valor = 0;
var num1 = "";
var num2 = 0;
var resul = 0;
resul = eval(n.value);
n.value = resul;
/*for (i=0; i<n.value.length; i++)
{
	valor = s.substring(i,i+1);
	if(valor == '+')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul = (parseInt(resul) + parseInt(num2));
	   
	   }
	else if(valor == '-')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul -= parseInt(num2);
	   }
	   
	  else if(valor == '*')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul = (parseInt(resul) * parseInt(num2));
	   }
	   
	 else if(valor == '/')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul = (parseInt(resul) / parseInt(num2));
	   }	      
	   
	   else{
		   num1 += valor;
		   resul = num1;
	   }
}
  n.value = resul;*/
}

var enc = false;
function cambiar( v ) 
{
var valor =  document.getElementById("lcd");
if(v != '+' && v != '-' && v != '*' && v != '/' && v != 'Sen (' ){
valor.value += v;
enc = false;
}
else if(!enc){
valor.value += v;
enc = true;
}
}

function ce()
{
var valor =  document.getElementById("lcd");
valor.value = "";
}

function c()
{
var valor =  document.getElementById("lcd");
var s = String(valor.value);
valor.value = s.substring(0,s.length-1);
}

function funciones( v )
{	
	//el valor 0 representa la funcion sen
    //el valor 1 representa la funcion cos
	//el valor 2 representa la funcion tan
	if(v=="0")
      document.getElementById("lcd").value = Math.sin(parseInt(document.getElementById("lcd").value));
	else if(v=="1")
	   document.getElementById("lcd").value = Math.cos(parseInt(document.getElementById("lcd").value));
    else if(v=="2")
	   document.getElementById("lcd").value = Math.tan(parseInt(document.getElementById("lcd").value));
    else if(v=="3")
	   document.getElementById("lcd").value = Math.sqrt(parseInt(document.getElementById("lcd").value));
}

function graficar( e )
{
  var c = document.getElementById("holaCanvas");
  var dibujar = c.getContext("2d");
  
  c.width=c.width;
  
  //cxt.moveTo(215,430);
  //cxt.lineTo(215,0);
  dibujar.moveTo(400, 0);
  dibujar.lineTo(400, 800);
  dibujar.lineTo(400, 200);
  
  dibujar.lineTo(0, 200);
  dibujar.lineTo(800, 200);
 
 for(i = 0; i<600; i+=30){
  //cordenadas negativos X
   dibujar.moveTo(400-i, 205);
   dibujar.lineTo(400-i, 195);
   
   //cordenadas positivos X
   dibujar.moveTo(400+i, 205);
   dibujar.lineTo(400+i, 195);
   
   //cordenadas negativos Y
   dibujar.moveTo(405, 200+i);
   dibujar.lineTo(395, 200+i);
   
   //cordenadas positivos Y
   dibujar.moveTo(405, 200-i);
   dibujar.lineTo(395, 200-i);
   
   if(i > 0){	
	dibujar.fillText('-'+i,400-(i+8), 215);
	dibujar.fillText(i,400+(i-8), 215);
	
	dibujar.fillText('-'+i,410, 200+i+2);
	dibujar.fillText(i,410, 200-i+2);
   }
   
  }
  dibujar.font = "bold 14px sans-serif";
 dibujar.fillText("GRAFICA DE LA FUNCION",25,50);
 
 dibujar.moveTo(400, 200);
 mxd = 400;
 myd = 200;
 
 mxi = 400;
 myi = 200;
 
 mxai = 400;
 myai = 200;
 
 mxad = 400;
 myad = 200;

 for (x = 0; x<400; x++){
	y = Math.pow(x,e);
	p=x;
	//Grafico lado derecho
	mxd += p;
	myd -= y;

    dibujar.moveTo(mxd, myd);
	dibujar.lineTo(mxd-p, myd+y);
	
    //Grafico lado Izquierdo
	mxi -= p;
	myi -= y;

    dibujar.moveTo(mxi, myi);
	dibujar.lineTo(mxi+p, myi+y);
	
	//Grafico de abajo lado izquierdo
	mxai -= p;
	myai += y;

    dibujar.moveTo(mxai, myai);
	dibujar.lineTo(mxai+p, myai-y);
	
	//Grafico de abajo lado derecho
	mxad += p;
	myad += y;

    dibujar.moveTo(mxad, myad);
	dibujar.lineTo(mxad-p, myad-y);
    
 }
 
  dibujar.stroke();
  
}
