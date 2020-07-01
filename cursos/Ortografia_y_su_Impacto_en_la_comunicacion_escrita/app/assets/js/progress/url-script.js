

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
                console.log(pagNum);
                console.log(thisPage);
                console.log(nombrePag);
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
    console.log("pasadas= " + numPagsPasadas);
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
        html_back+=generatePage("temario","Atrás");
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
        html+=generatePage("temario","Siguiente");
    }

    return html;
}

function getFiles() {
    var files = {
        modulo1: {
            1: "introduccion.html",
            2: "Intro_Tema1.html",
            3: "Tema1_Reglab1.html",
            4: "Tema1_Reglab2.html",
            5: "Tema1_Reglab3.html",
            6: "Tema1_Reglab4.html",
            7: "Tema1_Reglab5.html",
            8: "Tema1_Reglab6.html",
            9: "Tema1_Practicab1.html",
            10: "Tema1_Practicab2.html",
            11: "Tema1_Practicab3.html",
            12: "Tema1_Justificab1.html",
            13: "Tema1_Reglav1.html",
            14: "Tema1_Reglav2.html",
            15: "Tema1_Reglav3.html",
            16: "Tema1_Reglav4.html",
            17: "Tema1_Reglav5.html",
            18: "Tema1_Reglav6.html",
            19: "Tema1_Reglav7.html",
            20: "Tema1_Reglav8.html",
            21: "Tema1_Reglav9.html",
            22: "Tema1_Practicav1.html",
            23: "Tema1_Practicav2.html",
            24: "Tema1_Practicav3.html",
            25: "Tema1_Practicav4.html",
            26: "Intro_Tema2.html",
            27: "Tema2_Reglac1.html",
            28: "Tema2_Reglac2.html",
            29: "Tema2_Reglac3.html",
            30: "Tema2_Reglac4.html",
            31: "Tema2_Reglac5.html",
            32: "Tema2_Reglac6.html",
            33: "Tema2_Reglac7.html",
            34: "Tema2_Reglac8.html",
            35: "Tema2_Practicac1.html",
            36: "Tema2_Practicac2.html",
            37: "Tema2_Practicac3.html",
            38: "Tema2_Practicac4.html",
            39: "Tema2_Practicac5.html",
            40: "Tema2_Practicac6.html",
            41: "Tema2_Reglas1.html",
            42: "Tema2_Reglas2.html",
            43: "Tema2_Reglas3.html",
            44: "Tema2_Reglas4.html",
            45: "Tema2_Reglas5.html",
            46: "Tema2_Reglas6.html",
            47: "Tema2_Reglas7.html",
            48: "Tema2_Reglas8.html",
            49: "Tema2_Practicas1.html",
            50: "Tema2_Reglaz1.html",
            51: "Tema2_Reglaz2.html",
            52: "Tema2_Reglaz3.html",
            53: "Tema2_Reglaz4.html",
            54: "Tema2_Reglaz5.html",
            55: "Tema2_Reglaz6.html",
            56: "Tema2_Reglax1.html",
            57: "Tema2_Reglax2.html",
            58: "Tema2_Reglax3.html",
            59: "Tema2_Reglax4.html",
            60: "Tema2_Practicaz1.html",
            61: "Tema2_Practicaz2.html",
            62: "Tema2_Practicaz3.html",
            63: "Tema2_Practicax1.html",
            64: "Tema2_Practicax2.html",
            65: "Intro_Tema3.html",
            66: "Tema3_Reglah1.html",
            67: "Tema3_Reglah2.html",
            68: "Tema3_Reglah3.html",
            69: "Tema3_Reglah4.html",
            70: "Tema3_Reglah5.html",
            71: "Tema3_Practicah1.html",
            72: "Tema3_Reglar1.html",
            73: "Tema3_Reglar2.html",
            74: "Tema3_Reglar3.html",
            75: "Tema3_Reglar4.html",
            76: "Tema3_Practicar1.html",
            77: "Tema3_Practicar2.html",
            78: "Intro_Tema4.html",
            79: "Tema4_Reglag1.html",
            80: "Tema4_Reglag2.html",
            81: "Tema4_Reglag3.html",
            82: "Tema4_Reglag4.html",
            83: "Tema4_Reglag5.html",
            84: "Tema4_Practicag1.html",
            85: "Tema4_Practicag2.html",
            86: "Tema4_Practicag3.html",
            87: "Tema4_Reglaj1.html",
            88: "Tema4_Reglaj2.html",
            89: "Tema4_Reglaj3.html",
            90: "Tema4_Practicaj1.html",
            91: "Tema4_Practicaj2.html",
            92: "Tema4_Reglall1.html",
            93: "Tema4_Reglall2.html",
            94: "Tema4_Practicall1.html",
            95: "Tema4_Reglay1.html",
            96: "Tema4_Reglay2.html",
            97: "Tema4_Reglay3.html",
        },
        modulo2: {
            1: "introduccion.html",
            2:"Intro_Tema1.html",
            3: "Tema1_ReglaNC1.html",
            4: "Tema1_ReglaNC2.html",
            5: "Tema1_ReglaNC3.html",
            6: "Tema1_ReglaNC4.html",
            7: "Tema1_ReglaNC5.html",
            8: "Tema1_PracticaNC1.html",
            9: "Tema1_ReglaNO1.html",
            10: "Tema1_ReglaNO2.html",
            11: "Tema1_ReglaNO3.html",
            12:"Intro_Tema2.html",
            13: "Tema2_ReglaNP1.html",
            14: "Tema2_ReglaNP2.html",
            15: "Tema2_PracticaNP1.html",
            15: "Tema2_ReglaNCol1.html"
        },
        modulo3: {
            1: "introduccion.html",
            2: "Intro_Tema1.html",
            3: "Tema1_ReglaSil1.html",
            4: "Tema1_ReglaDip1.html",
            5: "Tema1_PracticaDip1.html",
            6: "Tema1_PracticaDip2.html",
            7: "Tema1_ReglaTrip1.html",
            8: "Intro_Tema2.html",
            9: "Tema2_ReglaAgu1.html",
            10: "Tema2_PracticaAgu1.html",
            11: "Tema2_JustificacionAgu1.html",
            12: "Tema2_ReglaGra1.html",
            13: "Tema2_ReglaGra2.html",
            14: "Tema2_ReglaGra3.html",
            15: "Tema2_PracticaGra1.html",
            16: "Tema2_ReglaEsd1.html",
            17: "Tema2_ReglaEsd2.html",
            18: "Tema2_PracticaEsd1.html",
            19: "Tema2_JustificacionEsd.html",
            20: "Intro_Tema3.html",
            21: "Tema3_Mono.html",
            22: "Tema3_PracticaMono1.html",
            23: "Tema3_PracticaMono2.html",
            24: "Tema3_Demo.html",
            25: "Tema3_JustificacionDemo.html",
            26: "Tema3_PracticaDemo1.html",
            27: "Tema3_Aun.html",
            28: "Tema3_PracticaAun1.html",
            29: "Tema3_PracticaAun2.html",
            30: "Tema3_PracticaAun3.html",
            31: "Tema3_Interro.html",
            32: "Tema3_Porque.html",
            33: "Tema3_PracticaPorque1.html",
            34: "Tema3_Adv.html",
            35: "Tema3_PracticaAdv1.html",
            36: "Tema3_PracticaAdv2.html",
            37: "Tema3_PracticaDobA1.html",
            38: "Tema3_Comp.html",
            39: "Tema3_PracticaComp1.html",
            40: "Tema3_Ext.html",
            41: "Tema3_PracticaExt1.html",
            42: "Tema3_Verb.html",
            43: "Tema3_PracticaPro.html",
            
        },
        modulo4: {
            1: "modulo4-1.html",
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