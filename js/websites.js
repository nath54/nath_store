









/*
FONCTION D'AFFICHAGE DES APPLICATIONS
*/

function aff_apps(){
    //on recherche celles qui peuvent être affichées : 
    var w_utilities=[];
    var w_games=[];

    for(i=0; i<applications.length; i++){
        var a = applications[i];
        if(a.type=="website"){
            if(a.category=="utilities"){
                w_utilities.push(i);
            }
            else if(a.category=="games"){
                w_games.push(i);
            }
        }
    }
    //tri de celles qui seront affichés
    for(i=0; i<w_utilities.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=w_utilities[i];
                w_utilities[i]=w_utilities[j]
                w_utilities[j]=temp;
            }
        }
    }
    for(i=0; i<w_games.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=w_games[i];
                w_games[i]=w_games[j]
                w_games[j]=temp;
            }
        }
    }
    //affichage de celles qu'il faut afficher
    for(appid of w_utilities){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_utilities").appendChild(dive);
    }
    for(appid of w_games){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_games").appendChild(dive);
    }

}












