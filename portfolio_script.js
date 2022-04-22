function expand(object, id) {
    if (portfolioEntry[id].expanded) {
        expandedSection = document.getElementById(id);
        expandedSection.innerHTML = "";
        let index = portfolioEntry[id].index;
        let arrow = document.getElementsByClassName("file-arrow")[index];
        arrow.innerHTML = '&#10224;';
        portfolioEntry[id].expanded = false;
    }
    else {
        expandedSection = document.getElementById(id);
        let html = getPortfolioInfoHTML(id);
        let index = portfolioEntry[id].index;
        let arrow = document.getElementsByClassName("file-arrow")[index];
        arrow.innerHTML = '&#10225;';
        expandedSection.insertAdjacentHTML("afterbegin", html);
        portfolioEntry[id].expanded = true;
    }
}

function getPortfolioInfoHTML(id) {
    return portfolioEntry[id].html;
}

var portfolioEntry =
{
    "course-info":
    {
        "html": '<div class="portfolio-object">\
                    <a href="courses.html">\
                        <p style="font-family: sans-serif;">Click here for my list of completed college courses</p>\
                        <img style="border-radius: 5px; height: 300px;"src="pictures/EducationImage.png"/>\
                    </a>\
                </div>',
        "index": 0,
        "expanded": false
    },
    "moonrift":
    {
        "html": '<div class="portfolio-object">\
                    <a href="https://moonriftentertainment.com/">\
                    <img style="border-radius: 5px; height: 200px;"src="pictures/moon-rift-logo.jpg"/><br></a>\
                    <h2>6 Week Project <br> September 2021 - October 2021</h2>\
                    <p> Opportunity to work remotely with a group of interns on a project for MoonRift</p>\
                    <p> Working with the Unity Editor and integrating C# code<br></p>\
                    <p> Specifically worked on a game titled "To Hell and Back"<br></p>\
                    <p> This game is most similar to an infinite runner with some other unique elements<br></p>\
                    <p> Implemented game mechanics and optimization to create a fluid user experience<br></p> \
                    <ul>My main take aways from working on a MoonRift Project: <br>\
                        <li>Concepts of using object pooling and recycling objects</li> \
                        <li>Using the Unity Profiler to analyze the load on renderer and garbage collector</li> \
                        <li>Heavy and clear communication between people that I have never met before</li>\
                        <li>Ability to give presentations on the status of said project</li>\
                    </ul>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/to-hell-and-back-capture.png"/><br>\
                    <a href="https://moonrift.itch.io/moonjam-class-4">Link to the game that I worked on</a>\
                </div>',
        "index": 1,
        "expanded": false
    },
    "discord":
    {
        "html": '<div class="portfolio-object">\
                    <p>Self-hosted bot created by me in Python using the Discord.py library</p>\
                    <a href="https://discord.com/oauth2/authorize?client_id=223959196238872577&scope=bot%20applications.commands&permissions=2147609664">Direct Link to Bot Invite</br>(Must be logged into Discord)</a>\
                    <p>Multi-purpose text command and game bot. </br>This bot can also search for images using the reddit commands.</p>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/WaluigiBotHelp.png"/> </br>\
                    <p>Officially verified by Discord as of March 24, 2021</p>\
                    <a href="https://discord.bots.gg/bots/223959196238872577">Pubically Verified through discord.bots.gg</a> </br></br>\
                    <a href="https://top.gg/bot/223959196238872577">Pubically Verified through top.gg/bots</a>\
                </div>',
        "index": 2,
        "expanded": false
    },
    "website":
    {
        "html": '<div class="portfolio-object">\
                    <p>I have begun to take an interest in Web Development<br>\
                    The websites that I created so far are fairly basic, but I hope to learn more</p>\
                    <a href="https://lukeyreyno.github.io/lucas-website/index.html">This Website</a> <br>\
                    <a href="https://lukeyreyno.github.io/lukeyreyno-website/">Support Site for my Discord Bot</a><br>\
                    <a href="https://shabbybrocante.com/">Website for my family\'s online shops</a> <br><br>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/Portfolio_Website.png"/> <br>\
                </div>',
        "index": 3,
        "expanded": false
    },
    "robotics":
    {
        "html": '<div class="portfolio-object">\
                    <a href="https://www.team5458.com/">Team 5458 Website</a>\
                    <br><br><br>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/digital-minds.svg"/> </br>\
                    <p>I was part of my local FIRST robotics team for most of High School</p>\
                    <p> Heavily involved with the team for two full years, as the Design Lead.</br></p>\
                    <ul>My main take aways from being on the team: </br>\
                        <li>Learning how to use a CNC router with some G-code scripts</li>\
                        <li>Implementing different CAD designs </li>\
                        <li>Working on a project with a diverse group of peers</li>\
                        <li>Being able to commit to a deadline, and make descisions according to said deadline</li>\
                        <li>Development of professional communication skills</li>\
                        <li>First REAL exposure to the world of engineering</li>\
                    </ul>\
                    <p>During college, I aided with the CAD mentorship in prepartion for the 2021 Build Season.</p>\
                </div>',
        "index": 4,
        "expanded": false
    },
    "unity":
    {
        "html": '<div class="portfolio-object">\
                    <a href="https://play.unity.com/u/lucas-reyna">Link to my Unity Projects</a>\
                    </br></br></br>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/DemicDash.png"/></br>\
                    <p>I took a Video Game Design course at Cal Poly for a quarter,\
                        <br>we used the Unity engine to build different games.\
                        <br>The major project of the term was to create a full game in a group.\
                        <br>Our final subsmission, "Demic Dash" demonstrates many different features\
                        <br>and design philosophies learned throughout the quarter.\
                        <br>This group project was another great experience to get hands on learning with teams.</p><br>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/CubePioneer.png"/><br>\
                    <p><br>My other sizeable game is called "Cube Pioneer". \
                        <br>It is a 3D puzzle came where you must push cubes to their rightful destination.\
                        <br>I hope to learn more about Unity and possibly design more games in my free time.</p>\
                </div>',
        "index": 5,
        "expanded": false
    }
}