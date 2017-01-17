import { Component } from "@angular/core";

@Component({
    selector: "workers",
    template: require<any>("./workers.component.html")
})

export class WorkersComponent {

    public workers = [
        {
            name: "Olga Ukolova",
            post: "CEO",
            photo: "Olga-Ukolova.jpg",
            experience: "Entrepreneur, founder of the OpenWeatherMap company, one of the world leaders in the weather data market, enthusiast of Geospatial and Big Data technologies with 10+ years expertise in B2B business development management in the IT and high-tech fields."
        },
        {
            name: "Dennis Ukolov",
            post: "CTO",
            photo: "Dennis-Ukolov.jpg",
            experience: "Expert in IT architecture for enterprises, open-source software evangelist, GIS expert, and meteorological enthusiast. Having 15-years experience in IT industry I have founded OpenWeatherMap service and VANE platform to combine cutting edge Big Data technologies and environmental information to create demanded products for vertical markets like the agriculture, security, oil and gas, and others."
        },
        {
            name: "Sergey Venediktov",
            post: "COO, team leader",
            photo: "Sergey-Venediktov.jpg",
            experience: "My main task is organization and control of key processes in the development and support of OpenWeatherMap and VANE Platform products. These include the management of the development team, the construction of the internal processes of interaction of participants of the whole team involved in the development and implementation of strategic plans for the company, performance evaluation."
        },
        {
            name: "Sergey Bobrovskikh",
            post: "Backend developer",
            photo: "Sergey-Bobrovskikh.jpg",
            experience: "I am a backend developer, programming on js, node.js, and golang. I am working in the company since September 2015. During this time I have managed to touch a broad range of tasks: creating tile server, experimented in the field of recognition of objects in the image, making different APIs, developed a tool for editing cards."
        },
        {
            name: "Daria Usova",
            post: "Backend developer",
            photo: "Daria-Usova.jpg",
            experience: "Server-side part of the VANE platform is my area of responsibility: in particular, I design and maintain data ingesting algorithms and develop various methods for on-the-fly satellite image processing. Mainly I use Scala, Akka, Spark and Hadoop as the primary tech stack."
        },
        {
            name: "Mikhail Remizov",
            post: "Backend developer",
            photo: "Mikhail-Remizov.jpg",
            experience: "I am a backend golang developer, and my main tasks include various web-services (for example, 8k+ RPS main API gate and recently launched almost-from-scratch RESTful User Weather Stations API), noSQL, software monitoring, and logging."
        },
        {
            name: "Pedro Gabriel",
            post: "Backend developer",
            photo: "Pedro-Gabriel.jpg",
            experience: "I’m a Ruby on Rails developer at OpenWeatherMap. My main responsibilities are development and support personal account for \"openweathermap.org\", implementing integration PayPal API and other new services to personal account with using BDD/TDD."
        },
        {
            name: "Denis Bykov",
            post: "Frontend developer",
            photo: "Denis-Bykov.jpg",
            experience: "My general duties are Web Development, development of widgets, satellite webtools, and weather services. Experience: Professional growth by performing of problem-solving skills and self-education through reading special literature, attending professional courses and conferences. Skills: Professional stack usage of high-tech frontend development. Learning the industry's trends for better understanding the field of expertise and efficient application development tools."
        },
        {
            name: "Georgy Potapov",
            post: "Business Development manager",
            photo: "Georgy-Potapov.jpg",
            experience: "I have a strong expertise in the area of geoinformatics and remote sensing since he used to work as a project lead in e-navigation and LBS services particular experienced in the development of web-services for disaster management and monitoring of the environment. I am responsible for the overall business development, product development of the VANE geospatial platform, starting new partnerships with satellite data providers and spreading the word about the new methods to work with satellite data."
        },
        {
            name: "Alla Vladimirova",
            post: "Key account manager",
            photo: "Alla-Vladimirova.jpg",
            experience: "I'm a Key account manager at OpenWeatherMap. My main responsibilities: Developing trust relationships with a portfolio of major clients, understanding of key customer needs and requirements, expanding the relationships with existing customers by continuously proposing solutions that meet their objectives, generating new sales that will turn into long-lasting relationships. Work experience with clients is more than 5 years."
        },
        {
            name: "Maxim Guschcho",
            post: "Technical Support Engineer",
            photo: "Maxim-Guschcho.jpg",
            experience: "I am a Technical Support Engineer at OpenWeatherMap. My general duties include analysis of requests from end users, answering their questions, prioritizing cases and resolving bugs, escalation issues (bugs and feature requests) to the developer's team. Also, I moderate content of the website (documentation of provided services) with web developers and business leads. As a part of my job, I also involved in the testing of new features and services."
        },
        {
            name: "Maxim Samokhin",
            post: "Technical writer",
            photo: "Maxim-Samokhin.jpg",
            experience: "I am engaged in writing internal and external documentation for the OpenWeatherMap company. I have an engineering education and background in information technologies, and this experience helps me with my current work. My main advantage is an ability to convey the full, structured and clear information to the user or new employee of the company."
        },
        {
            name: "Olga Makarova",
            post: "PR manager",
            photo: "Olga-Makarova.jpg",
            experience: "I am in charge of informing about the company's activities, writing and distributing of publications and reviews, industry news accommodation in social networks like facebook, google +, twitter and professional web societies. I am managing weather service blog and VANE platform blog writing articles according to media plan of product development and promotion."
        },
        {
            name: "Ekaterina Rubatskaya",
            post: "Accounting manager",
            photo: "Ekaterina-Rubatskaya.jpg",
            experience: "I am providing full accounting support including operations with invoices, preparation of accounting reports, monitoring of cash flow, debt management and control of payment for subscriptions from our customers."
        },
        {
            name: "Dmitriy Kharitonov",
            post: "System Administrator",
            photo: "Dmitriy-Kharitonov.jpg",
            experience: "I am responsible for devops management of distributed IT system of OpenWeatherMap and VANE Platform that consists of hundreds of servers, it is a big data highloaded system that operates with billion of transactions a day."
        },
    ];

};