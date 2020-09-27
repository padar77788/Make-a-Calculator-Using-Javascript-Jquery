
    var addbtn=document.getElementById('addbtn');
    addbtn.onclick=function(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    var result=parseInt(num1)+parseInt(num2);
    document.getElementById('result').value=result;

}


    var addbtn=document.getElementById('subbtn');
    addbtn.onclick=function(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    var result=parseInt(num1)-parseInt(num2);
    document.getElementById('result').value=result;

}


    var addbtn=document.getElementById('mulbtn');
    addbtn.onclick=function(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    var result=parseInt(num1)*parseInt(num2);
    document.getElementById('result').value=result;

}


    var addbtn=document.getElementById('divbtn');
    addbtn.onclick=function(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    var result=parseInt(num1)/parseInt(num2);
    document.getElementById('result').value=result;

}
