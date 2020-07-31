

function getstr(str) {
    return str.substring(str.search("html"));
}
function isValid() {
    var url = window.location.href;
    return(url.indexOf("html")!=-1);
}

function getfilename() {
    var url = window.location.href;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename == "") {
        return "index.html";
    } 

    return filename;
}

function getModuloPercentage(){
    var res=0;

    var files=getFiles();
    var url = window.location.href;
    url=url.substr(url.indexOf("html/"));
    var url_split=url.split('/');
    url_split.shift(); // aqui solo se tiene modulo1/modulo2-1.html
    var jsonTmp=files[url_split.shift()]; // se tiene el modulo como objeto
    let nombrePag = url_split[0]; // se saca el nombre de la pagina que se busca
    var totalLevel=100;

    let numPag;
    let thisPage;
    for (page in jsonTmp) { 
        thisPage = jsonTmp[page];
        if (thisPage == nombrePag) {
            numPag = parseInt(page);
        }
    }
   
    totalLevel=totalLevel/Object.keys(jsonTmp).length;

    return (totalLevel * numPag).toFixed(0);
    
}

function getTotalPercentage(){
    var res=0;

    var files=getFiles();
    var url = window.location.href;
    url=url.substr(url.indexOf("html/"));
    var url_split=url.split('/');
    url_split.shift(); // se deshace del html
    let nombreMod = url_split[0];
    let nombrePag = url_split[1];

    // calcula el numero de paginas que hay
    let numPags = 0;
    let numPagsPasadas = 0;
    let status = true;
    let thisMod;
    let thisPage;
    for (modulo in files) {
        numPags +=  Object.keys(files[modulo]).length;
        
        if (modulo == nombreMod) {
            thisMod = files[modulo];
            for (pagNum in thisMod) {
                thisPage = thisMod[pagNum];
                //console.log(pagNum);
                //console.log(thisPage);
                //console.log(nombrePag);
                if (thisPage == nombrePag) {
                    numPagsPasadas += parseInt(pagNum);
                    status = false;
                    break;
                }
            }
        }
        else if (status) {
            numPagsPasadas = numPags;
        }
    }
    //console.log("pasadas= " + numPagsPasadas);
    return ((numPagsPasadas) / numPags).toFixed(2);
}

function generatePage(name,count){
    var html="";
    if(name=="temario") {
        html += '<a class="btn btn-default" role="button" href="../temario/temario.html"';
    }
    if(name=="index.html"){name="";}
    if(count=="Atrás" || count== "Siguiente"){
        html+='<a class="btn btn-default" role="button" href="./'+name+'">';
    }else{
        html+='<a class="btn btn-default" role="button" id="'+(name==""?"index.html":name)+'" href="./'+name+'">';
    }
    html+='<span>'+count+'</span>';
    html+='</a>';
    return html;
}

function getLast(){
    var url = window.location.href;
    url=url.substr(url.indexOf("html/"));
    var url_split=url.split('/');
    url_split.pop();
    // alert(url_split.join('/'));
    // if(getSpecialLasts().hasOwnProperty(url_split.join('/')))
    //     return getSpecialLasts().url_split.join('/');
    url_split.pop();
    var res="";var flag=false;
    for(var i=url_split.length-1;i>=0;i--){
        if(url_split[i].indexOf("modulo")!=-1){
            flag=true;
            res+="../";
            break;
        }else{
            res+="../";
        }
    }
    if(!flag){
        res+="temario/";
    }

    return res;
}
function getMovementBar(){
    var res=0;

    var files=getFiles();
    var url = window.location.href;
    url=url.substr(url.indexOf("html/"));
    var url_split=url.split('/');    
    url_split.shift();    
    console.log(files, url, url_split)
    var jsonTmp=files;
    var idtmp;
    
    //Get Id
    for(var i=0;i<url_split.length;i++){
        if(!jsonTmp.hasOwnProperty(url_split[i])){
            if(i!=url_split.length-1){break;}
            if(url_split[i]==""){url_split[i]="index.html";}
            for(idtmp in jsonTmp){
                if(jsonTmp[idtmp]==url_split[i]){
                    break;
                }
            }
        }else{
            jsonTmp=jsonTmp[url_split[i]];
        }
    }
    
    
    var filescount=Object.keys(jsonTmp).length;
    
    var html="";var html_back="";
    var count=0;

    

    //before button
    if(parseInt(idtmp)>1){
        html_back+=generatePage(jsonTmp[parseInt(idtmp)-1],"Atrás");
    }else{
        html_back+=generatePage("temario","Temario");
    }
    
    // hay 4 archivos
    var rightmax=filescount-parseInt(idtmp);
    var leftmax=parseInt(idtmp) - 1; // inclusivo con la pag actual
    leftmax = leftmax>=2 ? 2 : leftmax;
    leftmax=rightmax>=2?leftmax:4-rightmax;
    

    //before overall max 5
    for(var left=parseInt(idtmp) - 1; left > 0 && count<leftmax;left--){
        html=generatePage(jsonTmp[left],left)+html;
        count++;
    }
    html=html_back+html;
    /*
    if(getLast().indexOf("temario")==-1){
        html=html+generatePage(jsonTmp[idtmp],parseInt(idtmp));count++;
    }
    */
    html=html+generatePage(jsonTmp[idtmp],parseInt(idtmp));count++;
    //after overall max 5
    for(var right=parseInt(idtmp) + 1;right<=filescount && count<5;right++){
        html=html+generatePage(jsonTmp[right],right);
        count++;
    }
    //after button
    if(parseInt(idtmp)+1<=filescount){
        html+=generatePage(jsonTmp[parseInt(idtmp)+1],"Siguiente");
    }else{
        html+=generatePage("temario","Temario");
    }

    return html;
}

function getFiles() {
    var files = {
        modulo1: {
            1: "modulo1-1.html",
            2: "modulo1-1-2.html",
            3: "modulo1-1-3.html",
            4: "modulo1-1-4.html",
            5: "modulo1-1-5.html",
            6: "modulo1-1-6.html",            
            7: "modulo1-1-7.html",
            8: "modulo1-1-8.html",
            9: "modulo1-1-9.html",
            10: "modulo1-1-10.html",
            11: "modulo1-1-11.html",
            12: "modulo1-1-12.html",
            13: "modulo1-2.html",            
            14: "modulo1-2-2.html",
            15: "modulo1-2-3.html",
            16: "modulo1-2-4.html",
            17: "modulo1-2-5.html",
            18: "modulo1-2-6.html",
            19: "modulo1-2-7.html",
            20: "modulo1-2-8.html",
            21: "modulo1-2-9.html",
            22: "modulo1-2-10.html",
            23: "modulo1-2-11.html",
            24: "modulo1-2-12.html",
            25: "modulo1-2-13.html",                                    
            26: "CARD-QUIZ.html",
            27: "cierre-modulo.html"
        },        
        modulo2: {
            1: "modulo2-1.html",
            2: "modulo2-1-1.html",
            3: "modulo2-1-2.html",
            4: "modulo2-1-3.html",
            5: "modulo2-1-4.html",
            6: "modulo2-1-5.html",
            7: "modulo2-1-6.html",
            8: "modulo2-1-7.html",
            9: "modulo2-1-8.html",
            10: "modulo2-1-9.html",
            11: "modulo2-1-10.html",
            12: "modulo2-1-11.html",
            13: "modulo2-1-12.html",
            14: "modulo2-1-13.html",
            15: "modulo2-1-14.html",
            16: "modulo2-1-15.html",
            17: "modulo2-1-16.html",
            18: "modulo2-1-17.html",
            19: "modulo2-1-18.html",
            20: "modulo2-1-19.html",
            21: "modulo2-1-20.html",
            22: "modulo2-2.html",
            23: "modulo2-2-1.html",
            24: "modulo2-2-2.html",
            25: "modulo2-2-3.html",
            26: "modulo2-2-4.html",
            27: "modulo2-2-5.html",
            28: "CARD_QUIZ_2.html",
            29: "modulo2-2-6.html"
        },
        modulo3: {
            1: "modulo3-1.html",
            2: "modulo3-1-1.html",
            3: "modulo3-1-2.html",
            4: "modulo3-1-3.html",
            5: "modulo3-1-4.html",
            6: "modulo3-1-5.html",
            7: "modulo3-1-6.html",
            8: "modulo3-1-7.html",
            9: "modulo3-1-8.html",
            10: "modulo3-1-9.html",
            11: "modulo3-1-10.html",
            12: "modulo3-1-11.html",
            13: "modulo3-1-12.html",
            14: "modulo3-1-13.html",                        
            15: "modulo3-2-1.html",
            16: "modulo3-2-2.html",
            17: "modulo3-2-3.html",
            18: "modulo3-2-4.html",
            19: "modulo3-2-5.html",        
            20: "modulo3-2-6.html",
            21: "modulo3-2-7.html",
            22: "modulo3-2-8.html",
            23: "modulo3-2-9.html",
            24: "modulo3-2-10.html",
            25: "modulo3-2-11.html",
            26: "CARD_QUIZ_3.html",
            27: "modulo3-2-12.html",            
        },        
    };
    
    return files;
}


$(document).ready(function(){
    if(isValid()){
        
        $(".btn-group").html(getMovementBar()); 
        setTimeout(function(){
            document.getElementById(getfilename()).classList.remove("btn-default");
            document.getElementById(getfilename()).classList.add("btn-actual-page");
        },250);
    
        show(getTotalPercentage()); 
        let modulePercentage = getModuloPercentage();
        document.getElementsByClassName("progress-bar")[0].innerHTML = modulePercentage + "%";
        document.getElementsByClassName("progress-bar")[0].style.maxWidth = "" + modulePercentage + "%";
        document.getElementsByClassName("progress-bar")[0].style.minWidth = "" + 5 + "%";

    }

});