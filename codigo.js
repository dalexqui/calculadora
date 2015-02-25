function operar()
{
var n =  document.getElementById("lcd");
var s = String(n.value);
var valor = 0;
var num1 = "";
var num2 = 0;
var resul = 0;

for (i=0; i<n.value.length; i++)
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
  n.value = resul;
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
}
