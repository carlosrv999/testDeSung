function darPuntaje(respuestas,pesos){
	var puntaje=0;
	for(i=1;i<respuestas.length;i++){
		switch (respuestas[i]){
			case "a": puntaje=puntaje+pesos[i][1];break;
			case "b": puntaje=puntaje+pesos[i][2];break;
			case "c": puntaje=puntaje+pesos[i][3];break;
			case "d": puntaje=puntaje+pesos[i][4];break;
			default: console.log("There's an error");
		}
	}
	return puntaje;
}

d_1=new Array("n",1,2,3,4);
d_4=new Array("n",4,3,2,1);

var pesosAns=new Array(new Array("n"),d_1,d_1,d_1,d_1,d_4,
					   d_1,d_1,d_1,d_4,d_1,
					   d_1,d_1,d_4,d_1,d_1,
					   d_1,d_4,d_1,d_4,d_1);

var pesosDep=new Array(new Array("n"),d_1,d_4,d_1,d_1,d_4,
					   d_4,d_1,d_1,d_1,d_1,
					   d_4,d_4,d_1,d_4,d_1,
					   d_4,d_4,d_4,d_1,d_4);

var ra1="a";
var ra2="d";
var ra3="a";
var ra4="c";
var ra5="b";
var ra6="a";
var ra7="d";
var ra8="a";
var ra9="b";
var ra10="a";
var ra11="a";
var ra12="d";
var ra13="a";
var ra14="c";
var ra15="a";
var ra16="b";
var ra17="a";
var ra18="c";
var ra19="a";
var ra20="a";

var rd1="b";
var rd2="a";
var rd3="b";
var rd4="a";
var rd5="b";
var rd6="c";
var rd7="d";
var rd8="d";
var rd9="c";
var rd10="c";
var rd11="d";
var rd12="b";
var rd13="a";
var rd14="a";
var rd15="b";
var rd16="c";
var rd17="b";
var rd18="b";
var rd19="d";
var rd20="d";

var rptasAns=new Array("n",ra1,ra2,ra3,ra4,ra5,ra6,ra7,ra8,ra9,ra10,
			      ra11,ra12,ra13,ra14,ra15,ra16,ra17,ra18,ra19,ra20);

var rptasDep=new Array("n",rd1,rd2,rd3,rd4,rd5,rd6,rd7,rd8,rd9,rd10,
			      rd11,rd12,rd13,rd14,rd15,rd16,rd17,rd18,rd19,rd20);


var puntAns=darPuntaje(rptasAns,pesosAns);
var puntDep=darPuntaje(rptasDep,pesosDep);
	
console.log("Puntaje de Ansiedad ",puntAns,"\nPuntaje de Depresion ",puntDep);


