import self from "../img/Snapchat-195588722.jpg"
import mock1 from "../img/Untitled_design25-removebg-preview.png"
import mock2 from "../img/secuirtyportfolio-removebg-preview.png"
import mock3 from "../img/weather_app-removebg-preview.png"
import mock4 from "../img/employemanagement-removebg-preview.png"
import mock5 from "../img/car_parking_management-removebg-preview.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "yash",
    lastName: "mehra",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '☕',
        //     text: 'fueled by coffee'
        // },
        {
            emoji: '🌎',
            text: 'CISF Campus 8th Kunda,Amer'
        },
        {
            emoji: "📱",
            text: "+91-6378324998"
        },
        {
            emoji: "📧",
            text: "myash7535@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/yash.punjabi.16121",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/_redwolf25_/?next=%2F",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/25yash-mehra",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yash-mehra-3188ab323/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/myash7535",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "My name is Yash, and I am currently in my 3rd year of pursuing a Bachelor of Business Administration (BBA). Alongside my academic studies, I have gained practical experience by completing a 6-month internship in MERN stack development. This experience has enhanced my technical skills and deepened my understanding of full-stack development.!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css3', 'SCSS', 'SASS'],
            exposedTo: ['nodejs', 'expressjs','mongoDB']
        }
    ,
    hobbies: [
        {
            label: 'reading mangas',
            emoji: '📖'
        },
        {
            label: 'watching anime',
            emoji: '🎭'
        },
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Hentai keys",
            live: "https://25yash-mehra.github.io/Hentai-keys-main/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/25yash-mehra/Hentai-keys-main", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Service Portfolio",
            live: "https://25yash-mehra.github.io/My-Portfolio/",
            source: "https://github.com/25yash-mehra/My-Portfolio",
            image: mock2
        },
        {
            title: "Weather App",
            live: "https://25yash-mehra.github.io/WEATHER-API/",
            source: "https://github.com/25yash-mehra/WEATHER-API",
            image: mock3
        },
        {
            title: "Employment Management System",
            live: "https://github.com/25yash-mehra/Employe-Management-System",
            source: "https://github.com/25yash-mehra/Employe-Management-System",
            image: mock4
        },
        {
            title: "Parking Management ",
            live: "https://25yash-mehra.github.io/JavascriptParkingManagement/",
            source: "https://github.com/25yash-mehra/JavascriptParkingManagement",
            image: mock5
        }
    ]
}