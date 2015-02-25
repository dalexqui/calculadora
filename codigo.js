function operar()
{
var n =  document.getElementById("lcd");
var s = String(n.value);
var num1 = 0;
var num2 = 0;
var resul = 0;
for (i=0; i<n.value.length; i++)
{
	num1 = s.substring(i,i+1);
	if(num1 == '+')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul = (num1 + num2 );
	   
	   }
	else if(num1 == '-')
	   {
	   i++;
	   num2 = s.substring(i,i+1);
       resul -= parseInt(num2);
	   }
	   else{
		   num1 += num1;
	   }
}
  alert(resul);
}

var enc = false;
function cambiar( v ) 
{
var valor =  document.getElementById("lcd");
if(v != '+' && v != '-' && v != '*' && v != '/'){
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


