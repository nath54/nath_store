









/*
FONCTION D'AFFICHAGE DES APPLICATIONS
*/

function aff_apps(){
    //on recherche celles qui peuvent être affichées : 
    var w_godot=[];
    var w_python=[];
    var w_other=[];

    for(i=0; i<applications.length; i++){
        var a = applications[i];
        if(a.type=="game"){
            if(a.category=="godot"){
                w_godot.push(i);
            }
            else if(a.category=="python"){
                w_python.push(i);
            }
            else if(a.category=="other"){
                w_other.push(i);
            }
        }
    }
    //tri de celles qui seront affichés
    for(i=0; i<w_godot.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=w_godot[i];
                w_godot[i]=w_godot[j]
                w_godot[j]=temp;
            }
        }
    }
    for(i=0; i<w_python.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=w_python[i];
                w_python[i]=w_python[j]
                w_python[j]=temp;
            }
        }
    }
    for(i=0; i<w_other.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=w_other[i];
                w_other[i]=w_other[j]
                w_other[j]=temp;
            }
        }
    }
    //affichage de celles qu'il faut afficher
    for(appid of w_godot){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_godot").appendChild(dive);
    }
    for(appid of w_python){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_python").appendChild(dive);
    }
    /*
    for(appid of w_other){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_other").appendChild(dive);
    }
    */

}












