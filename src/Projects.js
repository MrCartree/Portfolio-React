import StreamingGuide from "./assets/images/StreamingGuide.PNG";
import Amalganation from "./assets/images/Amalganation.PNG";
import DailyPlanner from "./assets/images/WorkDayPlanner.PNG";
import EmployeeDirectory from "./assets/images/EmployeeDirectory.PNG";
import BudgetTracker from "./assets/images/BudgetTracker.PNG";
import KeepWriting from "./assets/images/KeepWritting.PNG";

export const Projects = [
    {
        "id": "0",
        "project": "Keep Writing",
        "about": "Keep Writing is a website designed to help people get in the good habit of writing. This is a Ruby on Rails back end with a react front end. I was in charge and helped in the creation of the admin portion which allows admins to see basic user information and check if they are up to date with their payments.",
        "deployed": "https://www.keepwriting.io/",
        "img": KeepWriting,
    },
    {
        "id": "1",
        "project": "Streaming Guide",
        "about": "Streaming Guide is an application run through the browser that allows the user to search for different shows and movies and find out information about them as well as find where they are streaming.",
        "gitHub": "https://github.com/MrCartree/Ultimate-Streaming-Guide",
        "deployed": "https://imbingz.github.io/Ultimate-Streaming-Guide/",
        "img": StreamingGuide,
    },
    {
        "id": "2",
        "project": "AmalgaNation",
        "about": "AmalgaNation is a site where you can go to play online games with your friends as well as try out our chat. You can play games, chat with friends, or even look up travel locations for where you might want to go. You will be required to log in and sign up.",
        "gitHub": "https://github.com/SydneyGoodwill/amalganation",
        "deployed": "https://fast-woodland-71053.herokuapp.com/login",
        "img": Amalganation
    },
    {
        "id": "3",
        "project": "Daily Planner",
        "about": "Daily Planner is a relatively simple Work Planner that runs day by day hour by hour from 9 to 5. You can type in a list of things you want to get done or needs to get done and save it so no matter how many times you refresh the page, your information will stick.",
        "gitHub": "https://github.com/MrCartree/daily-planner",
        "deployed": "https://mrcartree.github.io/daily-planner/",
        "img": DailyPlanner
    },
    {
        "id": "4",
        "project": "Employee Directory",
        "about": "The Employee Directory is made entirely in React, it is showcasing the use of filtering and sorting different types of information. The table data was pulled from another site and is completely dummy data.",
        "gitHub": "https://github.com/MrCartree/Employee-Directory",
        "deployed": "https://mrcartree.github.io/Employee-Directory/",
        "img": EmployeeDirectory
    },
    {
        "id": "5",
        "project": "Budget Tracker",
        "about": "Budget Tracker is a PWA (progressive web application) that you can download to your desktop and even use it when it is offline! it will show you a nice graph of your transactions and can help you save money.",
        "gitHub": "https://github.com/MrCartree/budget-tracker",
        "deployed": "https://still-journey-37573.herokuapp.com/",
        "img": BudgetTracker
    }
]