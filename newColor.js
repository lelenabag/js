'use strict';

function getColRGB(str){
	let beg = str.indexOf('(')+1;
	let end = str.indexOf(')');
	return str.substring(beg,end).split(',');
}

function toHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function colAvr(color1, color2){
	let colorAvr = 'rgb(';
	  	for(let i=0; i<3; i++){
	  		let avr =( parseInt(getColRGB(color1)[i]) + parseInt(getColRGB(color2)[i]) ) / 2;
	  		if(i<=1){colorAvr = colorAvr + Math.floor(avr) +',';}
	  		else {colorAvr = colorAvr + Math.floor(avr) + ')';}
	  	}
	  	return colorAvr;
}

class NewColor{
  
   fromRGBtoHEX(colRGB){
  		return "#" + toHex(parseInt(getColRGB(colRGB)[0])) + toHex(parseInt(getColRGB(colRGB)[1])) + toHex(parseInt(getColRGB(colRGB)[2]));
  }
  
    fromHEXtoRGB(colHEX){
   		var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colHEX);
    	return res ? 'rgb('+parseInt(res[1], 16)+','+parseInt(res[2], 16)+','+parseInt(res[3], 16)+')' : null;
  }
  
   static fromRGBtoHEXSt(colRGB){
  		return "#" + toHex(parseInt(getColRGB(colRGB)[0])) + toHex(parseInt(getColRGB(colRGB)[1])) + toHex(parseInt(getColRGB(colRGB)[2]));
  }
  
  static fromHEXtoRGBSt(colHEX){
    	var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colHEX);
    	return res ? 'rgb('+parseInt(res[1], 16)+','+parseInt(res[2], 16)+','+parseInt(res[3], 16)+')' : null;
  }
  
  avrColor(color1, color2) {
  		if(color1[0]=='#' && color2[0]=='#'){
  			color1 = NewColor.fromHEXtoRGBSt(color1);
  			color2 = NewColor.fromHEXtoRGBSt(color2);
  			return NewColor.fromRGBtoHEXSt(colAvr(color1, color2));
  		}
		if(color1[0]=='#' && color2[0]=='r'){
			color1 = NewColor.fromHEXtoRGBSt(color1);
			return NewColor.fromRGBtoHEXSt(colAvr(color1, color2));
		}
		if(color1[0]=='r' && color2[0]=='#'){
			color2 = NewColor.fromHEXtoRGBSt(color2);
			return colAvr(color1, color2);
		}
		if(color1[0]=='r' && color2[0]=='r')
		{
		  	return colAvr(color1, color2);
		}
   }
  
}