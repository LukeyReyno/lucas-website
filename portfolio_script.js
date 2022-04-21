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
        "html": '<a href="courses.html" style="display: block; margin-right: auto; margin-left: auto; width: 40%;">\
                <div id="coursesBlock" style="box-shadow: 0 0 15px black;">\
                    <h2>University Course Information</h2>\
                    <p style="font-family: sans-serif;">A list of taken ENGINEERING and SCIENCE courses</p>\
                    <img style="border-radius: 5px; height: 300px;"src="pictures/EducationImage.png"/>\
                </div></a>',
        "index": 0,
        "expanded": false
    },
    "moonrift":
    {
        "html": '<div class="portR" id="port2" style="margin-top: 100px; text-align: center;">\
                    <h2>MoonRift Entertainment Internship</h2>\
                    <br>\
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
    }
}
