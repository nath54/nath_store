

/*
TYPES : 
    - game 
    - website

PLATFORMS :
    - linux
    - windows
    - android
    - macos

STATES : 
    - finished : Le jeu ou le site est finit, pret a l'emploi
    - playable : Le jeu ou le site n'est pas forcément finit, mais il est prêt à l'emplois
    - indev : Le jeu ou le site est toujours en cours de developement
    - abandoned : Le developement du jeu ou du site a été abandoné

PRIORITIES : bigger is better

*/





//la liste de toutes les applications
var applications=[

    {
        name:"Example",
        type:"example",
        state:"indev",
        short_description:"Example of short description",
        description:"Example of description",
        other_informations:"Example of other informations",
        platforms:["linux","windows","android"],
        sizes:{"linux":"47.5 Mb", "windows":"42.4 Mb","android":"50.3 Mb"},
        downloads:{"linux":"#", "windows":"#", "android":"#"},
        made_with:"Made with Example",
        screenshots:[],
        image:"",
        priority:0, 
        posted_date:[23,8,2020],
        category:"",
    },

/*
    GAMES : 
*/

    {
        name:"The Purple Order",
        type:"game",
        state:"indev",
        short_description:"A little 2d RPG game",
        description:"A little 2d RPG Game",
        other_informations:"Actually in development \n source code : 'https://github.com/nath54/The_Purple_Order' \n author : nath54",
        platforms:["linux","windows","android","macos"],
        sizes:{"linux":"128.9 MB", "windows":"112.2 MB","android":"150.2 MB","macos":"114.8 MB"},
        downloads:{"linux":"https://github.com/nath54/The_Purple_Order/releases/download/0.1/tpo_linux.zip", "windows":"https://github.com/nath54/The_Purple_Order/releases/download/0.1/tpo_windows.zip", "android":"https://github.com/nath54/The_Purple_Order/releases/download/0.1/tpo_android.apk","macos":"https://github.com/nath54/The_Purple_Order/releases/download/0.1/tpo_mac.zip"},
        made_with:"Made with godot",
        screenshots:["https://raw.githubusercontent.com/nath54/The_Purple_Order/master/Screenshot_0.png","https://raw.githubusercontent.com/nath54/The_Purple_Order/master/Screenshot_1.png","https://raw.githubusercontent.com/nath54/The_Purple_Order/master/Screenshot_2.png"],
        image:"https://raw.githubusercontent.com/nath54/The_Purple_Order/master/icon.png",
        priority:0,
        posted_date:[23,8,2020],
        category:"godot",
    },

    {
        name:"Cube3",
        type:"game",
        state:"indev",
        short_description:"A little 3d Platformer Game",
        description:"A little 3d platformer Game",
        other_informations:"Actually in development \n source code : 'https://github.com/nath54/Cube3' \n author : nath54",
        platforms:["linux","windows","android","macos"],
        sizes:{"linux":"43.0 MB", "windows":"26.2 MB","android":"37.9 MB","macos":"28.7 MB"},
        downloads:{"linux":"https://github.com/nath54/Cube3/releases/download/v0.1-indev/cube3_linux.zip", "windows":"https://github.com/nath54/Cube3/releases/download/v0.1-indev/cube3_windows.zip", "android":"https://github.com/nath54/Cube3/releases/download/v0.1-indev/cube3_android.apk","macos":"https://github.com/nath54/Cube3/releases/download/v0.1-indev/cube3_macos.zip"},
        made_with:"Made with godot",
        screenshots:[],
        image:"https://raw.githubusercontent.com/nath54/Cube3/master/icon.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"godot",
    },
    {
        name:"Cube2",
        type:"game",
        state:"playable",
        short_description:"A little 2d game",
        description:"A little 2d game",
        other_informations:"source code : 'https://github.com/nath54/cube2' \n author : nath54",
        platforms:["windows","python"],
        sizes:{"windows":"32.9 MB","python":"1.0 MB"},
        downloads:{"windows":"https://github.com/nath54/cube2/releases/download/2.2/main.zip","python":"https://github.com/nath54/cube2/archive/master.zip"},
        made_with:"Made with python and pygame",
        screenshots:["img/apps/cube2/sc1.png","img/apps/cube2/sc2.png","img/apps/cube2/sc3.png"],
        image:"img/apps/cube2/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"python",
    },


/*
    WEBSITES :
*/

    {
        name:"JS QUIZS",
        type:"website",
        state:"playable",
        short_description:"A little quiz website",
        description:"JS Quiz is a place",
        other_informations:"The website is in french",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/Js_quizs/index.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/js_quiz/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"utilities",
    },
    {
        name:"The Infinite Book",
        type:"website",
        state:"playable",
        short_description:"An infinite book",
        description:"this is a representation of the infinite book, the legends says that we can find any character sequence in it if we look long enough :)",
        other_informations:"The website is in french \n author : nath54",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/The_infinite_book/main.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/infinite_book/logo.jpg",
        priority:0, 
        posted_date:[23,8,2020],
        category:"utilities",
    },
    {
        name:"Flopping Bird",
        type:"website",
        state:"playable",
        short_description:"A little flappy bird clone",
        description:"A little flappy bird clone",
        other_informations:"author : nath54",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/flopping_bird/main.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/flopping_bird/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"games",
    },
    {
        name:"Jsket",
        type:"website",
        state:"playable",
        short_description:"A basketball shooting game",
        description:"A basketball shooting game",
        other_informations:"author : nath54",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/jsketv2/main.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/jsket/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"games",
    },
    {
        name:"Pendu",
        type:"website",
        state:"playable",
        short_description:"A little hangman's game",
        description:"A little hangman's game",
        other_informations:"author : nath54",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/pendu_html/index.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/pendu/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"games",
    },
    {
        name:"Jlines",
        type:"website",
        state:"playable",
        short_description:"A little javascript game",
        description:"A little game where the player must play a white square that can go to left or to right, the goal is to avoid the red squares and pick the green circles.",
        other_informations:"author : nath54",
        platforms:["web"],
        sizes:{"web":"online"},
        downloads:{"web":"https://nath54.github.io/jgame/main.html"},
        made_with:"Hosted with github pages",
        screenshots:[],
        image:"img/apps/jlines/logo.png",
        priority:0, 
        posted_date:[23,8,2020],
        category:"games",
    },
];

