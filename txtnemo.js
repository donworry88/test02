
var txtNemo=function(){
    this.self=this;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext('2d');
}

txtNemo.prototype.drawTxtNemo=function (ctx,txt,x,y,xs,ys,cr1,cr2,cr3)
{
    var ctx=this.ctx;
	var wx,wy,wn;
	  ctx.beginPath();
      ctx.rect(x, y, xs, ys);
      ctx.fillStyle =cr1;
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = cr2;
	  ctx.stroke();
	  
	  
	  ctx.font = ys+'pt Calibri';
	  ctx.textAlign = 'center';
	  ctx.textBaseline ='middle';

      ctx.fillStyle = cr3;
	  
	  wx=ctx.measureText(txt).width;
      wy=ys;
	  wn=1/Math.sqrt((xs/ys/(wx/wy)));
	  if(wn>0.0){
		wy=ys/Math.floor(wn);
	  } else wy=ys;
	  ctx.font = wy+'pt Calibri';
	  wx=ctx.measureText(txt).width;
	  //for(var i=1;i<Math.floor(wn)*2;i+=2)
		//ctx.fillText(txt, x+xs/2, y+ys/(Math.floor(wn)*2)*i);
	  wy=ys;
	// x y xs ys txt fs
	var rcnt;
	var rstr="";
	var rfs;
	if(xs>10 && ys>10)
	{
		var chk=0;
		var fs=wy;
		var is=0,cnt=0;
		var chk2=0,chk3=0,chk4=0;
		var str="";
		while(chk==0 && fs>1){
			ctx.font = fs+'pt Calibri';
			chk3=0;
			cnt=0;
			is=0;
			chk4=0;
			while(chk3==0 && fs>1){
			chk2=0;
			
				for(var i=1;chk2==0 && i<200;i++){
					if(is+i>txt.length){chk3=1;chk2=1; cnt++;break;}
					if(chk3==0 && chk2==0){if(ctx.measureText(txt.substr(is,i)).width>=xs)
					{
						if(i==1){chk3=1;chk4=1;}
						chk2=1;is=is+i-1;cnt++;
						
					}}
					
				}
			}
			str+=" "+cnt;
			//if(cnt==1)chk=1;
			
			if(cnt*fs+fs*1.4<ys  && chk4==0)chk=1;
			fs=fs-1;
		}
			rcnt=cnt;
			fs+=1;
			rfs=fs;
			ctx.font = fs+'pt Calibri';
			is=0;cnt=1;chk2=0;chk3=0;
			var ssy=y+(ys-ys/(rcnt*2)*(rcnt*2-1)+(fs/2))/2;
			ssy=y;
			while(chk3==0){
			chk2=0;
			
				for(var i=1;chk2==0 && i<200;i++){
					ctx.font = fs+'pt Calibri';
					if(is+i>txt.length){
						ctx.font = (fs*0.93)+'pt Calibri';
						ctx.fillText(txt.substr(is,i-1), x+xs/2, ssy+ys/(rcnt*2)*cnt);
						chk3=1;chk2=1;break;
					}
					if(chk3==0 && chk2==0){if(ctx.measureText(txt.substr(is,i)).width>=xs)
					{
						ctx.font = (fs*0.93)+'pt Calibri';
						
						ctx.fillText(txt.substr(is,i-1), x+xs/2, ssy+ys/(rcnt*2)*cnt);
						if(i==1)chk3=1;
						chk2=1;is=is+i-1;cnt+=2;
					}}
				}
				
			}
			rstr=str;
	}
	  ctx.closePath();
	  
	  // root( sx/sy/(tx/ty)) =n
	//  document.getElementById('tx1').value=" rcnt="+rcnt+" rfs="+rfs;
	//document.getElementById('tx2').value="r "+rstr;	  

}
