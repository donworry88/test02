<!DOCTYPE html>
<html>
<body>

<input id='tx3' type='text' size="45" value='abcdefghijklmnopqrstuvwxyz'><BR>
<input id='tx2' type='text' value='7118pt Calibri'>
<input id='tx1' type='text' size="45" value='34dfsadfasdfsasdfasdfsadfasdfsadfasdfadfsad118'><BR>

<input type='button' value='ok'>

<canvas id="myCanvas" width="900" height="500" style="border:1px solid #d3d3d3; position:absolute;left:10px; top:60px;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script >

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
	  document.getElementById('tx1').value=" rcnt="+rcnt+" rfs="+rfs;
	document.getElementById('tx2').value="r "+rstr;	  

}

</script>

<script>
var m_txtNemo=new txtNemo();
//measureTest context.measureText('alphabetic').width;
//get 'txt' ratio
//sx:sy  tx:ty 
//tx*(1/n) / (ty*n)  = sx / sy
//tx/ty*( (1/n) / n )  = sx / sy
// tx/ty *(1/(n*n))= sx / sy
//(tx/ty)*(1/n^2  )=sx/sy
//sx/sy/(tx/ty)=1/n^2
//+- root(sx/sy/(tx/ty))=1/n
//1 /+- root(sx/sy/(tx/ty))=n

//1/( sx/sy/(tx/ty) )=n^2
//+-  root(1 /(  sx/sy/(tx/ty)) =n
//ty=sy/n;


// 9/10 n = 6/ 10
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');



ctx.font = '120pt Calibri';
ctx.textAlign = 'center';
ctx.textBaseline ='middle';

        ctx.fillStyle = 'green';
        ctx.fillText("GOOD!!", canvas.width/2, canvas.height/2);

ctx.font = '100pt Calibri';
        ctx.fillStyle = 'red';
        ctx.fillText("GOOD!!",  canvas.width/2, canvas.height/2);
ctx.font = '80pt Calibri';
        ctx.fillStyle = 'blue';
        ctx.fillText("GOOD!!",  canvas.width/2, canvas.height/2);


var m_stackNemo=[];
var m_status=0;
document.getElementById('tx1').value='asdfasdf44';		
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
	  
canvas.addEventListener('mousemove', function(evt) {
        var mp = getMousePos(canvas, evt);
		var px,py;
		
		
		if(m_stackNemo.length>0 && m_status==1){
			px=m_stackNemo[m_stackNemo.length-1][0];
			py=m_stackNemo[m_stackNemo.length-1][1];
			m_stackNemo[m_stackNemo.length-1][2]=mp.x-px;
			m_stackNemo[m_stackNemo.length-1][3]=mp.y-py;
			drawNemos();
		}
		
      }, false);
document.getElementById('tx1').value='asdfasdf44 a';	
canvas.addEventListener('mousedown', function(evt) {
        var mp = getMousePos(canvas, evt);
		var cr = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';
	    var cr2 = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';
		m_status=1;
		m_stackNemo.push([mp.x,mp.y,0,0,cr,cr2]);
		drawNemos();
		
      }, false);
canvas.addEventListener('mouseup', function(evt) {
        var mp = getMousePos(canvas, evt); 
		m_status=0;
      }, false);
// 문자별로 x,y사이즈를 구한다.
// 사각형 맞춤을 통해 비례차를 각구해 제일 맞는 것을 찾는다.
// 제일 맞는것을 찍는다....(이때 사각형비례때맞춤과 결과는 같음)

//사각형맞춤, 특정 문자갯수로 x,y사이즈 구하는것
//특정 문자갯수로 x,y사각형에 맞게 찍는것........
//cr1=fill cr2=line cr3=txtcolor
var drawTxtNemo=m_txtNemo.drawTxtNemo();

function drawNemos()
{
	var str="";
	var txt="";
	str=m_stackNemo.length+ " ";
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.closePath();
	txt=document.getElementById('tx3').value;
	for(var i=0;i<m_stackNemo.length;i++){
	  str+=m_stackNemo[i][0]+" ";
	  m_txtNemo.drawTxtNemo(ctx,txt,m_stackNemo[i][0], m_stackNemo[i][1], m_stackNemo[i][2], m_stackNemo[i][3],m_stackNemo[i][4],m_stackNemo[i][5],m_stackNemo[i][5]);
	  /*
	  ctx.beginPath();
      ctx.rect(m_stackNemo[i][0], m_stackNemo[i][1], m_stackNemo[i][2], m_stackNemo[i][3]);
      ctx.fillStyle = m_stackNemo[i][4];
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = m_stackNemo[i][5];
	  ctx.stroke();
	  ctx.closePath();
	  */
	}
      
}		
</script>
</body>
</html>