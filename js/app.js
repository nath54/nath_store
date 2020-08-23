
/*
    Variables globales
*/
var app_id=null; //l'application selectionée

/*
    Traitement des parametres
*/
var parameters = location.search.substring(1).split("&"); //on récupère les parametres
for(p of parameters){ //on parcours les paramètres
    var pp = p.split("="); //on coupe le texte aux espaces
    if(pp.length==2){ //s'il y a bien deux parties
        if(pp[0]=="appid"){ //si la première partie vaut "appid"
            app_id=parseInt(pp[1]); //on définit l'identifiant de l'application
        }
    }
}

/*
    Traitement des erreurs
*/
if(app_id==null || applications==undefined || app_id>=Object.keys(applications).length ){ //si il n'y a pas d'applications selectionées
    alert("error"); //on affiche une erreur
    window.location="index.html"; //et on revient à la page principale
}

/*
    Fonction d'affichage des informations relatives à l'application
*/
function aff(){
    var app=applications[app_id];
    //le nom de l'application : 
    document.getElementById("appname_text").innerHTML=app.name;
    //la courte description de l'application
    document.getElementById("appshortdescription_text").innerHTML=app.short_description;
    //les tailles de l'application
    var text_sizes = "";
    for(k of Object.keys(app.sizes)){
        text_sizes+=k+" ( "+app.sizes[k]+" )"
        if(Object.keys(app.sizes).indexOf(k)<Object.keys(app.sizes).length-1){
            text_sizes+=",\n "
        }
    }
    document.getElementById("sizes_text").innerText=text_sizes;
    //Made with
    document.getElementById("madewith_text").innerText=app.made_with;
    //Platforms
    var text_platforms = "";
    for(p of app.platforms){
        text_platforms+=p;
        if(app.platforms.indexOf(p)<app.platforms.length-1){
            text_platforms+=",\n ";
        }
    }
    document.getElementById("platforms_text").innerText=text_platforms;
    //description
    document.getElementById("description_text").innerText=app.description;
    //autres infos
    document.getElementById("other_information_text").innerText=app.other_informations;
    //Downloads
    var kd=Object.keys(app.downloads)
    // linux
    var bl=document.getElementById("download_linux");
    if(kd.includes("linux")){
        bl.style.display="initial";
        bl.href=app.downloads.linux;
    }
    else{
        bl.style.display="none";
    }
    // windows
    var bl=document.getElementById("download_windows");
    if(kd.includes("windows")){
        bl.style.display="initial";
        bl.href=app.downloads.windows;
    }
    else{
        bl.style.display="none";
    }
    // macos
    var bl=document.getElementById("download_macos");
    if(kd.includes("macos")){
        bl.style.display="initial";
        bl.href=app.downloads.macos;
    }
    else{
        bl.style.display="none";
    }
    // android
    var bl=document.getElementById("download_android");
    if(kd.includes("android")){
        bl.style.display="initial";
        bl.href=app.downloads.android;
    }
    else{
        bl.style.display="none";
    }
    // python
    var bl=document.getElementById("download_python");
    if(kd.includes("python")){
        bl.style.display="initial";
        bl.href=app.downloads.python;
    }
    else{
        bl.style.display="none";
    }
    // web
    var bl=document.getElementById("web_link");
    if(kd.includes("web")){
        bl.style.display="initial";
        bl.href=app.downloads.web;
    }
    else{
        bl.style.display="none";
    }
    document.getElementById("appname_text").innerHTML=app.name;
    //image
    //document.getElementById("app_image").setAttribute("src",app.image);
    //screenshots    
    var sdiv=document.getElementById("screenshotsdiv");
    for(s of app.screenshots){
        //<div class="item"><img src="img/smartphone-2.png" alt=""></div>
        var dd=document.createElement("div");
        dd.setAttribute("class","item");
        var ii=document.createElement("img");
        ii.setAttribute("src",s);
        dd.appendChild(ii);
        sdiv.appendChild(dd);
    }
    //Title
    document.getElementById("title").innerHTML=app.name+" - Nath54 Store";
    //States
    var wa=document.getElementById("warning_abandoned");
    var wi=document.getElementById("warning_indev");
    var wp=document.getElementById("warning_playable");
    wa.style.display="none";
    wi.style.display="none";
    wp.style.display="none";
    if(app.state=="abandoned"){ wa.style.display="initial"; }
    if(app.state=="indev"){ wi.style.display="initial"; }
    if(app.state=="playable"){ wp.style.display="initial"; }

    

}
