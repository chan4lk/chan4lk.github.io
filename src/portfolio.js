/* Change this file to get your personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all 👋 I'm Chandima",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
  resumeLink: "https://drive.google.com/open?id=1W6MK7QykwUhSwVTjR0XsmyTvXBO3B442"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/chan4lk",
  linkedin: "https://www.linkedin.com/in/rcsmanoj/",
  gmail: "chan4lk@gmail.com",
  gitlab: "https://gitlab.com/chan4lk"
};

const skillsSection = {
  /* Your Skills Section  */
  title: "What i do",
  subTitle: "I'M A TECHNICAL GEEK WHO SEEK OPTIMUM SOLUTIONS.",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS / Office365"
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon */
  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */
  githubUserName: "chan4lk"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://allvectorlogo.com/img/2016/10/virtusa-logo.png",
      link: "https://www.virtusa.com/",
      title: 'Virtusa'
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rFj1LA7lWNfrFfWJd5TQtzD0d_eH2tjmr_mwOxBOrKDJMdzp6Q&s",
      link: "https://www.innovative-e.com/",
      title: 'Innovative-e'
    },
    {
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUQDxMSEhUQEhUVEhESFRUQFxAWFhUWFhcVFRYZHCogGBwlGxYWITEhJSkrLi4uGR8zODMtNygtLisBCgoKDg0OGRAQGjEmICYrLS0vKyswLS0tLS0uNy0tLS0rLS0rLS0tLS0tLS0tLS0tKy0tLS0tKy0tLS0rLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEgQAAICAAIFBwUMCAUFAAAAAAABAgMEEQUGEiExBxNBUWFxgRQic5GSFiMyMzRCVKGxssHDFUNSU3KCwtFEY5Oz4TVidKLi/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQMGAv/EAC0RAQACAQIDBwMEAwAAAAAAAAABAgMEERIzUQUTITEyQYEVUpFCYXHhIiOh/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGzxxOMrqWdk4wTeSc5KKb6ln3HsyE8qXyer0/5czZipx3irTnyd3SbdEo/TOG/f0/6kf7j9M4b9/T/AKkf7lH5DIsvpsfcqvq1vt/7/S8P0zhv39P+pH+574bGV2puuUZpbm4yUsvUURkWPyW/E3elX3UaNRo4xU4t0jTa+2bJFJhI79YsJXNwnfVGUXlKLkk0+pnx7qMD9Ip9tFWa0fLb/Sy/A5htpoK2rE7tGTtO9bTG0Lm91GB+kU+2h7qMD9Ip9tFMg9/Tq9ZePquTpC5vdRgfpFPto+oayYKW5Yin24opcGPp1ep9VydIXvRioWLOEoyXXFqX2HtmUHVNwe1BuL64txa8USDReuWLoyUpc9H9mze/CfH15mm/Z949M7pGPtSs+uNluZmSO6B1sw+Lyjm67P3c+n+F8H9pIFIg2ras7WWVMlbxvWX0ADy9gAAAAAAAAAAAAAAAMMhXKj8nq9P+XMmrIVyo/J6vT/lzN+l5tUXW8mytjJgydFLlwsbkt+Ju9KvuIrksbku+Ju9KvuIg6/kp/Z3Pj5QzWj5bf6WRzDqa0fLb/SyOWScPoj+EXNzLfyAwDY1MgAMgADAia6q66OGVOLe1HhG573DqU+tdvr6yFA1ZcNcsbWbsOe+G29V91zTSaeae9NdJ9lZ6jazOqUcNfL3uTyrk/wBW381vqb4dTLLiyhzYbYrcMul0+euanFDIANTeAAAAAAAAAAAAAMMhXKj8nq9P+XMmrIVypfJ6vT/lzN+m5tUXW8mytjIB0Llwsbkt+Ju9Kvuorksfkt+Iu9KvuIh67lSn9nc+PlI7tX8JZJznRVKUnnKTim230s+Pc1gvo9PsI64KXjt1X/dU6Q5HuawX0en2EPc1gvo9PsI64M95frJ3OP7Ycj3NYL6PT7CPG/V/CRWccJVLujFP6zugxx36ydzTpCG2wwEHlLBQTXQ4xR4yt0cv8HD2YkuxuChdHZms+p9K7mQzTGjJ4eW/fF/Bl19j6mab5ctfHdHyY+HxiI/D6eJ0cv8ABw9UDzeO0cv8FD2YHKsNew0Tqsv3Is5NvaPw7EtJ6OX+Bj6oEt1f0zXioN1px2Hk4Pit2592X2FY2G5q5pPybExm/gyezPub4+DyfrFdRebf5SYtTNb7T5SthGT5g8z6Ja2gAAAAAAAAAAAAAYZCuVH5PV6f8uZNWQrlS+T1en/Lmb9Nzaout5NlbGQDoXLhY/Jd8Rd6VfcRXBY/Jd8Rb6VfdRD1/KT+zufHym4AKN0YAAAAAGvjcLG2DhJZqS9Xau02AJjdiY3VjpDDSpslXLjF8etdD9Ro2Ev12wvwLV2wfbu2l9jIhYV+WvDbZVZq8NphrWGpabVhrWmpCutbVLHc/hK5t5yS2ZPti9l/Zn4nZITyZYjOu6v9mcZe1HL+kmpZUnesSvNNfjxVlkAHtvAAAAAAAAAABhkK5Uvk9Xp/y5k2IdynVZ4SEl8y+Lfc4Tj+KN+m5tUXWRvhsrIGDJ0Llwsnkw+T2+m/oiVsTzkuxOTvq69ia+uL/pIeujfDKd2fO2ePlYSBhGSjdIAAAAAAAA4WuEc8M+yUX9eX4kAsJ1rpflQo9M5r1JN/bkQWwhaj1K3V+prTNWw2rDVtI6tyeSWcmL98vXXGt+pz/uWEiA8mFW/ES6Pe4r/3b+1E+RZYo2pC40PIhkAHtMAAAAAAAAAAAOJrlg+ewVsVxUdtd8Gpfg14nbPmxZrJ78zNbcMxLxevFWYUGDf07o94XEWUvhGXm9sHvj9W7wZoHS0txVi3Vyd6zW01kOvqppHybF1zbyjJ7E/4ZdPg8n4HIMC9YtWaz7lLzS0Wj2X8nuMkS1E0+sRUqbJe+UxS3/rILcpd64P/AJJYmc5kpNLTWXV4ssZKxaGQAeGwAAAxmMzhaxaYVaddb89re18xf3PNrREby82tFY3lwNasarbtlb415xXa/nP6kvA4FhsWGvYV953ndVZbcUzLWsNW02rDVdUrZxpr3yskorxfSe8GGct4rCFk6LF5OcJsYTbf66yUl3LzV91vxJUa2jsLGmqFUeFcYxXgsjZLC07z4L/DTgpFQAGG0AAAAAAAAAAAxIyAIVyiaFdtXlNae1SvPS+dX/8AL392ZWxflkc011lT65auPCWc5WvebHu/y5P5r7Or1FnodRt/rt8KXtLSzv3tflGwAWqne2CxU6bI21vZlB5p/g+tPqLV1c1mhiodU4/Dr6Y9seuPaVIemHvnXJTrk4yjvUluaIup0tc0ful6XVWwT+y9K8RF8Gu57me2ZWuitcIzShiVsy4c4l5sv4l8192a7iRQxClHarlnF8HF5p+KKPLjvina0L7HqqZI3qk+ZrYnHV1/CnFdnF+pEbttk+Lb72zTsI85f2erZukOlpLT8pJxq81ftPj4dRHLH1mxYa8yPa0z5ouS0282tYa9h7XzUVm2kut7jk4vSK4V+0/wRsw6XJmnasIeXJFfNnF3qO7p6iTcnOhnKTxlieSzjVn0vhKf4esj2reg5467LeoRedtnUupPpb/5LgwdEaoKEFsxikopdCS3ItLY6aand19U+ctmiwzlt3lo8I8nrEyARVyAAAAAAAAAAAAAAAAM18XhoWwlXZFSjJNOL4NGwMgxMRPhKpdaNVLMI3ZXnOnr4uvsl2dvrI2X5KCe5pbyF6f1ErszswrVUnvdb+BLu/Z8N3YWmn136cn5U+q7Onxtj/CtwbmktF34aWzfXKG/c+MX3SW5mmWVbRaN4VFqzWdpgPXDYmdTzrlKDfFxeWff1nkDMxExtJEzHk7NOs2Ij8LYn/Esn61ke/uok+NS8JtfgR8EW2iwW86tsanLH6nbs1ik+FaXfJv8DTu0xbLhlHuX9zQPfBYK2+WxTCVj6orPLvfBeJiNHp6ePDDPfZb+G7ysslJ5ybb7XmdfVzV27Gy83za0/Ota3d0et/USXQWoOWU8Y0/8mL3fzS6e5E8opjCKjCKjGKyUUkkl1JEfNra1jgxf0nabs61p4srW0Xo6vDVRqqWzGPrb6W30tm4jOQKyZmZ3ldxERG0AAMMgAAAAAAAAAAAAACM6Z1seHxawdeGtxFjqVq5uUF5rcl859Gz9Z66D1phibpYayq3D3wjtuq1Lzo5pbUWnv4oCQgj2jNa6rq8TbKLqhgrJwslJqWexxksvsNLB66TsdcvIcWqbpRjXeoqWe08lJxTzjHtAlxjIienNcrMG7JWYLEOuuWzz+cFCW/JSWfQ20bOjtZrbVOU8FfTCFMrVZY47M9lJqKy6Wm34ASC2mM1syipJ8U1mn3ojukdScFa24wdTfTW9ley84/UaWB14uvrVtOjsVZCWezOLg08m08vFNeB1NNa0VYOuuVsJuy5Lm8NBbdkpNLOOXZnln1nqt7U9M7Nd8VL+qN0bxPJzL9Vf4Th+Kf4GjPk+xa4Tpf8ANJf0kp0brZZZdCm/BYrDu34uU47cXuz85pebu9RIsTdGuLnNqMYpylJ7lFJZtvsJFdbmj3RbdnYJ9lZx5PsY+MqV/NJ/0m5h+Tmz9ZfFdkIN/W2vsOnDXmVucsJgcXiKotrnox2VLJ5PYXGRu4rW+uvAPH81bsxkouqS5uabmoNPPdubMzrc0+5HZ2CPZ5YDUTB15Oana1+3LJeqOSfiSXDYWuqOzXCMEuiKUV9RnD27cIzW7aipJdWazIzjddYq6VGEw92MnXusdK8yt9Tm+kj3yWv6pSceGlPTGyVZGSP6A1qqxk5UuFlF9aznh7o7E0utda3r1rrNKeuVjvuoowV97w09icoSgl2PJvp3nhtS0HF1c1irx0ZuEZ1yqnsW1WLZnXLfue/sfqZp4zXKmrHxwDjJyk4RlamtmE7E3GD6c3kva7AJMDk60abjgMNLEyhKxQcU4xaTe1JR4vvOlh7duEZ8NqKll1ZrMD0AAAAAAAAAAAAAV3pxYh6ej5I6VZ5CsnepShs7c890WnmeuhOdq0w1j1GWIuw75myltVKtPNx2GtpS3N5ts7OmtUfKcUsXDE30WKpVp0uK81Nvi1nvz+o9dB6qV4W54mdt2IulHZ52+e24xzzyju3AR3UvARxNOk6JtqNuMui2uKz6V3cT5eL0loWNavlVisLGcKlJJwtrT4buxLhv4ZZriSHCan0wqxNLnZKONtlZZv2HFt55Rcejd0559JrUakrbreIxWJxMKZKVdN004qS4OWSzll2gfPKo89FXfxU/7sDsXf8AT3/4j/2j61k0JHH4aWGnKUIzcW5QyzWzJS3ZrLoNmeBTo5jN5Orm9rpy2dnPvAgXJ6tJ+RUcw8GsPtz3WK125c9LnN6eznntZeBvYjZWsUOd+ie8bX7XnZ7Pbltnvg9Q50QVVOkMbXCOeUISjFLNtvcl1tvxOtpvVanGV1wulPbpS5vERezbFpLOW1lvzaz7wO3mRjlOU/0ZdzefzNrL9nnI7XhkZ0fqdsXV3X4vFYl0y2q422PZhLhtZLi8m+L39JJMRSpxcJJSjJNSjLepJ7mmukDi6OvcNH1TwVUbsqauaq21UpJqKfntPLJZvwInrRp2WP0JiLZVKlwvhW4KfOb42wzeeyul9R3I6jKrOOExmLw1cm3zNc84xz3vZz3x7z3nqTR5DLARnYoWTU52NqU5SUoybeay37K6AOzVteSLY+F5OtnLr5vd9ZGOSdw/Ry2ctvnbOd69vPdtfy7J0NG6q20WQn5fjLI1te9TktiSSy2WkuB54/UquV0r8Nffg52b7OYllGx8c3HrzbfiBzdYsv03gOay5zZs53L93k8trw5z6jn6GjjXpHSPkUsNH39c55RGyXTLZ2dhrt4kt0BqrTg5StUrLrrFlO+6XOTa6s+hcO/I0L9SW77b6sZiqHiJ7U41OMU+OS4b8s36wOdqbjIYaWPWKWWIom7cVYpKUJpqUo83lFbK/wC3LPet/Qol5fh7sBiJ2zmsXiMR5RDKub2HB+9wU0suG1vz3bXYWA9RqfJrcPG21PEyjK/EOSnbbsvPJtrLL/nrJNhMPGquNcVlGEVGK6lFJJfUBA9ctKLGaBeIXGxU7S/ZmrIqS8JJk60d8TX6OH3URr3DVeSW4JW2Kq65Wpea3VlJPZhu+D5q4nvo3VW2iyE/L8ZZGtr3qck4TSWWy0lwAkwMIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z",
      link: "https://www.innovative-e.com/",
      title: 'Innovative-e'
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Exam 347: Enabling Office 365 Services",
      description: "Passing Exam 347: Enabling Office 365 Services validates the skills and knowledge to evaluate, plan, deploy, and operate Office 365 services, including its dependencies, requirements, and supporting technologies. Candidates demonstrate the ability to plan for and configure Exchange Online and Skype for Business online, provision SharePoint Online site collections, and manage clients and end-user devices",
      image:
        "https://images.youracclaim.com/size/680x680/images/3c0854c4-466c-4e77-92a3-50cc667634fb/Enabling%2BOffice%2B365%2BServices-01.png",
      footerLink: [
        { name: "Certification", url: "https://www.microsoft.com/en-us/learning/exam-70-347.aspx" },
        { name: "Award Letter", url: "https://www.youracclaim.com/badges/afe47c0c-dcf8-4372-9b11-f064429bfbb7" },
      ]
    },
    {
      title: "Exam 488: Developing Microsoft SharePoint Server 2013 Core Solutions",
      description: "Passing Exam 488: Developing Microsoft SharePoint Server 2013 Core Solutions validates the skills and knowledge necessary to design custom code for projects that are deployed to or interact with SharePoint environments. Candidates demonstrate the ability to plan, design and implement SharePoint sites as well as manage data, create business processes, and design Office apps.",
      image: "https://images.youracclaim.com/size/680x680/images/fe56b89f-bbf8-4bc0-b469-6991e01eb6d0/Exam%2B488-01.png",
      footerLink: [
        { name: "Certification", url: "https://www.microsoft.com/en-us/learning/exam-70-488.aspx" },
        { name: "Award Letter", url: "https://www.youracclaim.com/badges/315a849f-0f09-4d76-9c23-35b43aec3c8a/linked_in" },
      ]
    },

    {
      title: "Best and Fastest Coder: Virtusa Tech Month 2018",
      description: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://www.readme.lk/wp-content/uploads/2018/03/Awards-Collage.jpg",
      footerLink: [
        { name: "News Letter", url: "https://www.readme.lk/virtusa-tech-day-2018/" }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://chan4lk.github.io/blog/#/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      title: "Chandima's Blog",
      description: "Full Stack Developer Blog"
    },
    {
      url: "https://sharepointcmd.wordpress.com/2016/09/21/delete-webpart-by-title/",
      image: "data:image/png;base64,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",
      title: "Delete WebPart By Title",
      description: "SharePoint Power Commands."
    },
    {
      url: "https://medium.com/@chan4lk/why-tdd-e0371fca8a73",
      image: "https://insights-images.thoughtworks.com/TDDInsightspost_32b977819d8d859b10904f332c436718.png",
      title: "Why TDD Matter",
      description: "If developer follow the 3 laws of TDD and write tests then the expected QA bugs will be zero."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Angular, Office365 apis and typescript",
      subtitle: "SharePoint practice k-talks",
      slides_url: "https://github.com/chan4lk/k-talk/raw/master/Deck/typescript_ktalk.pptx",
      event_url: "https://github.com/chan4lk/k-talk",
      image:
        "https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+94-714411600",
  email_address: "chan4lk@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo };
