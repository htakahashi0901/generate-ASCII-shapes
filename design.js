//Write a star
//[output] a star to id("demo")
//[arguments] h:height, nx:Num of X,
//            edgeStr:character for edge of a star
//            internalStr:character for inner part of a star
function Star(h,nx,edgeStr,internalStr){

    buf=new Array(h);
    var halfh,n_space,i,star="";

    buf=[h];
    halfh=(h-1)/2;
    n_X=nx;    
    n_space=(halfh-2)*2+3;

    if(n_X==3){
        buf[0]="\xa0".repeat(n_space-1)+edgeStr+"<br>";

        buf[1]="\xa0".repeat(n_space-1)+internalStr+"<br>";
    }else{
        buf[0]="\xa0".repeat(n_space)+edgeStr+"<br>";
        buf[1]="\xa0".repeat(n_space)+internalStr+"<br>";
    }

    buf[h-1]=buf[0];
    buf[h-2]=buf[1];
    n_space-=2;

    for(i=2;i<halfh;i++){
        buf[i]="\xa0".repeat(n_space) + internalStr.repeat(n_X)+"<br>";
        buf[h-1-i]=buf[i];
        n_X=n_X+4;
        n_space-=2;
    }

    buf[halfh]=edgeStr+internalStr.repeat(n_X)+edgeStr+"<br>";
    for(i=0;i<h;i++){
        star+=buf[i];
    }
    console.log(star.replace(/<br>/g,"\n"));
    document.getElementById("demo").innerHTML="<span style=\"color:green;font-size: 1em; font-family:'Courier New', Courier, mono;\">"+star+"<\/span>";
};

//Write a tree
//[output] a tree to id("demo")
//[arguments] h:height, nx:Num of X,
//            edgeStr:character for edge of a tree
//            internalStr:character for inner part of a tree
function Tree(h,edgeStr,internalStr){

    buf=new Array(h);
    var n_X,n_space,i,tree="";
    buf=[h];
    n_X=1;    
    n_space=h-2;
    buf[0]="\xa0".repeat(n_space)+edgeStr+"<br>";
    for(i=1;i<h;i++){
        buf[i]="\xa0".repeat(n_space) + internalStr.repeat(n_X)+"<br>";
        n_X=n_X+2;
        n_space-=1;
    }
    for(i=0;i<h;i++){
        tree+=buf[i];
    }
    console.log(tree.replace(/<br>/g,"\n"));
    document.getElementById("demo").innerHTML="<span style=\"color:green;font-size: 1em; font-family:'Courier New', Courier, mono;\">"+tree+"<\/span>";
};

//call a function to display a design
//[arguments] design:design of a shape string:Num of height and X,
//            edgeStr:character for edge of a star
//            internalStr:character for inner part of a star
function write_shape(design,string,edgeStr,internalStr){
    var h,nx,buf;
    if(string==""||string==undefined){
        h=2**(1+Math.floor(Math.random()*100)%3)+3;
        nx=(Math.floor(Math.random()*100)%2)*2+3;
    }else{
        buf=string.split(",");
        h=Number(buf[0]);
        nx=Number(buf[1]);
    }
    if(design=="Star"||design=="star"){
        Star(h,nx,edgeStr,internalStr);
    }else{
        Tree(h,edgeStr,internalStr);
    }
}

