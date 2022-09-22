function expand(object, index) {
    let thisId = portfolioEntry[index].id;
    let expandedSection = document.getElementById(thisId);
    let arrow = document.getElementsByClassName("file-arrow")[index];

    if (portfolioEntry[index].expanded) {
        expandedSection.innerHTML = "";
        arrow.innerHTML = '&#10224;';
        portfolioEntry[index].expanded = false;
    }
    else {
        let html = getPortfolioInfoHTML(index);
        arrow.innerHTML = '&#10225;';
        expandedSection.insertAdjacentHTML("afterbegin", html);
        portfolioEntry[index].expanded = true;
    }
}

function getPortfolioInfoHTML(index) {
    return portfolioEntry[index].html;
}

var portfolioEntry =
[
    {
        "id": 'course-info',
        "html": '<div class="portfolio-object">\
                    <a href="courses.html">\
                        <p style="font-family: sans-serif;">Click here for my list of completed college courses</p>\
                        <img style="border-radius: 5px; height: 300px;"src="pictures/EducationImage.png"/>\
                    </a>\
                </div>',
        "expanded": false
    },
    {
        "id": 'niantic',
        "html": '<div class="portfolio-object">\
                    <a href="https://nianticlabs.com/">\
                    <img style="border-radius: 5px; height: 200px;"src="pictures/niantic-logo.png"/><br></a>\
                    <h2>12 Week Internship as part of the AR Engineering Team<br> June 2022 - September 2022</h2>\
                    <p> Hybrid work in a professional environment </p>\
                    <p> Incredible opportunity where I got to learn about and implement AR in software. <br></p>\
                    <p> I learned how to utilize several <a>https://lightship.dev/</a> features on the Unity Level. <br></p>\
                    <p> My time at Niantic expressed how important feedback is when considering how to evolve Software and APIs.<br></p>\
                    <p> Being able to experiment with new technologies like VPS ("Visual Positioning System") was definitely a highlight.<br></p>\
                    <p> Mostly worked with C# and Unity, but occasionaly worked with Python, C++, Shell Script. <br></p> \
                    <img style="border-radius: 5px; height: 300px;"src="pictures/ar-meshing.jpg"/><br>\
                </div>',
        "expanded": false
    },
    {
        "id": 'networks',
        "html": '<div class="portfolio-object">\
                    <a href="https://catalog.calpoly.edu/search/?P=CPE%20464">\
                    <img style="border-radius: 5px; height: 150px;"src="pictures/network-diagram.jpg"/><br></a>\
                    <h2>3 Programming Projects for Networks Class</h2>\
                    <p> My Introduction to Networks course at Cal Poly gave us the task to create Unix programs that utilize network features. </p>\
                    <div style="text-align: left; margin: 0 auto; display: block; width: max-content;">\
                        <h3> Project List (code must be kept private):</h3>\
                            <ul> Network Packet Parser\
                                <li> Given a file of packets ".pcap", the program should be able to parse, then detail the addresses and info of that packet.</li>\
                            </ul>\
                            <ul> Multiclient Chat Server\
                                <li> Server using TCP to communicate messages between different clients. </li>\
                                <li> The client can specify whether or not to broadcast messages. </li>\
                                <li> Clients can also request other information from server. </li>\
                            </ul>\
                            <ul> File Transfer from Server using Sliding Window\
                                <li> Error rates can be set to artificially cause packet transmissions in UDP to fail. </li>\
                                <li> The server and client have to communicate in order to ensure that the data is being sent successfully and efficiently. </li>\
                            </ul>\
                    </div>\
                    <p> This was definitely a tough class, but I believe that I got a lot out of the projects and assessments. <br></p>\
                </div>',
        "expanded": false
    },
    {
        "id": 'gitfit',
        "html": '<div class="portfolio-object">\
                    <a href="https://www.gitfit.me/">\
                    <img style="border-radius: 5px; height: 150px;"src="pictures/GitFitLogo.svg"/><br></a>\
                    <br><h2><a href="https://github.com/LukeSandsor/GitFit-App">GitHub Repo</a></h2>\
                    <h2>6 Week Web Application Project for CSC 307 - Introduction to Software Engineering</h2>\
                    <p> Dynamic Website utilizing the MERN Techstack </p>\
                    <div style="text-align: left; margin: 0 auto; display: block; width: max-content;">\
                        <ul> Feature Summary: \
                            <li> Allows for encrypted account creation for users to store fitness and nutrition information on a daily basis </li>\
                            <li> Daily calendar implemented with moods and daily information for an easy way to view user history </li>\
                            <li> Other interactive chart and calculator sections for users </li>\
                            <li> Some account settings, such as delete user data </li>\
                        </ul>\
                    </div>\
                    <p> Communicating within a group of four to create a live, usable, and maintainable website <br></p>\
                    <p> Worked with professional software engineering standards, project organizations, and documentation <br></p>\
                    <p> Everyone in the group worked across the tech stack to implement different pages of the application <br></p>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/SystemsPlus-Scrum-Image.jpg"/><br>\
                </div>',
        "expanded": false
    },
    {
        "id": 'moonrift',
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
        "expanded": false
    },
    {
        "id": 'discord',
        "html": '<div class="portfolio-object">\
                    <p>Self-hosted bot created by me in Python using the Discord.py library</p>\
                    <a href="https://discord.com/oauth2/authorize?client_id=223959196238872577&scope=bot%20applications.commands&permissions=2147609664">Direct Link to Bot Invite</br>(Must be logged into Discord)</a>\
                    <p>Multi-purpose text command and game bot. </br>This bot can also search for images using the reddit commands.</p>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/WaluigiBotHelp.png"/> </br>\
                    <p>Officially verified by Discord as of March 24, 2021</p>\
                    <a href="https://discord.bots.gg/bots/223959196238872577">Publicly Verified through discord.bots.gg</a> </br></br>\
                    <a href="https://top.gg/bot/223959196238872577">Publicly Verified through top.gg/bots</a>\
                </div>',
        "expanded": false
    },
    {
        "id": 'website',
        "html": '<div class="portfolio-object">\
                    A collection of static websites used to host various information</p>\
                    <a href="https://lukeyreyno.github.io/lucas-website/index.html">This Website</a> <br>\
                    <a href="https://lukeyreyno.github.io/lukeyreyno-website/">Support Site for my Discord Bot</a><br>\
                    <a href="https://shabbybrocante.com/">Website for my family\'s online shops</a> <br><br>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/Portfolio_Website.png"/> <br>\
                </div>',
        "expanded": false
    },
    {
        "id": 'robotics',
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
        "expanded": false
    },
    {
        "id": 'unity',
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
        "expanded": false
    }
]
