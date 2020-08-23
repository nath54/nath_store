



function create_bt_to_app(appid){
    var app=applications[appid];
    var dap=document.createElement("div");
    dap.setAttribute("class","item");
    var aa=document.createElement("a");
    aa.setAttribute("href","app.html?appid="+appid);
    var ic=document.createElement("img");
    ic.src=app.image;
    var hh=document.createElement("h2");
    hh.innerHTML=app.name;
    aa.appendChild(ic);
    aa.appendChild(hh);
    dap.appendChild(aa);
    return dap;
}















