import { Component } from "@angular/core";

@Component({
    selector: "workers",
    template: require<any>("./workers.component.html")
})

export class WorkersComponent {

    public workers = [
        {
            name: "Olga Ukolova",
            id: "Olga Ukolova",
            post: "CEO",
            photo: "Olga-Ukolova.jpg",
            photo2x: "Olga-Ukolova@x2.jpg",
            experience: "Entrepreneur, founder of the OpenWeatherMap company, one of the world leaders in the weather data market, enthusiast of Geospatial and Big Data technologies with 10+ years expertise in B2B business development management in the IT and high-tech fields."
        },
        {
            name: "Dennis Ukolov",
            id: "DennisUkolov",
            post: "CTO",
            photo: "Dennis-Ukolov.jpg",
            photo2x: "Dennis-Ukolov@x2.jpg",
            experience: "Expert in IT architecture for enterprises, open-source software evangelist, GIS expert, and meteorological enthusiast. Having 15-years experience in IT industry I have founded OpenWeatherMap service and VANE platform to combine cutting edge Big Data technologies and environmental information to create demanded products for vertical markets like the agriculture, security, oil and gas, and others."
        },
        {
            name: "Sergey Venediktov",
            id: "SergeyVenediktov",
            post: "COO",
            photo: "Sergey-Venediktov.jpg",
            photo2x: "Sergey-Venediktov@x2.jpg",
            experience: "My main task is organization and control of key processes in the development and support of OpenWeatherMap and VANE Platform products. These processes include the development team’s management, performance evaluation, formation of all internal interactions and communications between team’s members, and implementation of strategic plans for the company."
        },
        {
            name: "Georgy Potapov",
            id: "GeorgyPotapov",
            post: "Business Developer",
            photo: "Georgy-Potapov.jpg",
            photo2x: "Georgy-Potapov@x2.jpg",
            experience: "I have a strong expertise in the area of geoinformatics and remote sensing since he used to work as a project lead in e-navigation and LBS services particular experienced in the development of web-services for disaster management and monitoring of the environment. I am responsible for the overall business development, product development of the VANE geospatial platform, starting new partnerships with satellite data providers and spreading the word about the new methods to work with satellite data."
        },
        {
            name: "Lexx Vane",
            id: "Lexx Vane",
            post: "Golang Teamlead",
            photo: "Lexx-Vane.jpg",
            photo2x: "Lexx-Vane@x2.jpg",
            experience: "As a golang teamlead I’m responsible not only for the OpenWeatherMap backend development and support for our current web services, but also in charge of supervising my team’s efficiency and coherence. My working experience in software development is more than 10 years, and I’ve mastered a lot of things in different areas of programming. Our current tech stack for OpenWeatherMap and some other services contains golang, MongoDB, RabbitMQ"
        },
        {
            name: "Sergey Bobrovskikh",
            id: "SergeyBobrovskikh",
            post: "Backend Developer",
            photo: "Sergey-Bobrovskikh.jpg",
            photo2x: "Sergey-Bobrovskikh@x2.jpg",
            experience: "I am a backend developer, programming on js, node.js, and golang. I am working in the company since September 2015. During this time I have managed to try a broad range of tasks: created tile server, experimented in the field of recognition of objects in the image, making different APIs, developed a tool for editing maps called Map Editor."
        },
        {
            name: "Daria Usova",
            id: "DariaUsova",
            post: "Backend Developer",
            photo: "Daria-Usova.jpg",
            photo2x: "Daria-Usova@x2.jpg",
            experience: "Server-side part of the VANE platform is my area of responsibility: in particular, I design and maintain data ingesting algorithms and develop various methods for on-the-fly satellite image processing. Mainly I use Scala, Akka, Spark and Hadoop as the primary tech stack."
        },
        {
            name: "Mikhail Remizov",
            id: "MikhailRemizov",
            post: "Backend Developer",
            photo: "Mikhail-Remizov.jpg",
            photo2x: "Mikhail-Remizov@x2.jpg",
            experience: "My main responsibilities as a golang developer of the OpenWeatherMap backend side include various web-services (for example, 8k+ RPS main API gate and recently launched almost-from-scratch RESTful User Weather Stations API), noSQL usage, software monitoring and logging."
        },
        {
            name: "Gabriel Pedro",
            id: "GabrielPedro",
            post: "Backend Developer",
            photo: "Pedro-Gabriel.jpg",
            photo2x: "Pedro-Gabriel@x2.jpg",
            experience: "I’m a Ruby on Rails developer at OpenWeatherMap. My main responsibilities are development and support for personal account at OpenWeatherMap and VANE websites. I've implemented integration with PayPal API and other new services for personal account webpage using BDD/TDD."
        },
        {
            name: "Denis Bykov",
            id: "DenisBykov",
            post: "Frontend Developer",
            photo: "Denis-Bykov.jpg",
            photo2x: "Denis-Bykov@x2.jpg",
            experience: "My general duties are web development, widgets, satellite web-tools and weather services design. I prefer to work on my skills by increasing problem-solving ability and self-education through reading special literature, attending professional courses and conferences. I’m experienced with high-tech frontend development and eager to grow further as a professional, so I learn the industry’s trends and best practices for better understanding this area of expertise and for more efficient application of new libraries, frameworks and web development concepts."
        },
        {
            name: "Alla Vladimirova",
            id: "AllaVladimirova",
            post: "Key Account Manager",
            photo: "Alla-Vladimirova.jpg",
            photo2x: "Alla-Vladimirova@x2.jpg",
            experience: "I'm a Key account manager at OpenWeatherMap. My main duties are: developing trust relationships between our company and the portfolio of major clients, understanding of key customer needs and requirements, expanding the relationships with existing customers by continuously proposing solutions that meet their objectives, generating new sales that will turn into long-lasting relationships. Work experience with clients is more than 5 years."
        },
        {
            name: "Maxim Guschcho",
            id: "MaximGuschcho",
            post: "Technical Support Engineer",
            photo: "Maxim-Guschcho.jpg",
            photo2x: "Maxim-Guschcho@x2.jpg",
            experience: "I am a Technical Support Engineer at OpenWeatherMap. My general duties include analysis of requests from end users, answering their questions, prioritizing cases and resolving bugs, escalation issues (bugs and feature requests) to the developer's team. Also, I moderate content of the website (documentation of provided services) with web developers and business leads. As a part of my job, I also involved in the testing of new features and services."
        },
        {
            name: "Maxim Samokhin",
            id: "Maxim Samokhin",
            post: "Technical Writer",
            photo: "Maxim-Samokhin.jpg",
            photo2x: "Maxim-Samokhin@x2.jpg",
            experience: "I am engaged in writing internal and external documentation for the OpenWeatherMap company. I have an engineering education and background in information technologies, and this experience helps me with my current work. My main advantage is an ability to convey the full, structured and clear information to the user or new employee of the company."
        },
        {
            name: "Olga Makarova",
            id: "OlgaMakarova",
            post: "Public Relations Manager",
            photo: "Olga-Makarova.jpg",
            photo2x: "Olga-Makarova@x2.jpg",
            experience: "I am in charge of spreading the word about the company's activities: I write and distribute publications, reviews and industry news in social networks like facebook, google +, twitter and professional web societies. I am managing weather service blog and VANE platform blog by writing articles according to media plan of product development and promotion."
        },
        {
            name: "Ekaterina Rubatskaya",
            id: "EkaterinaRubatskaya",
            post: "Accounting Manager",
            photo: "Ekaterina-Rubatskaya.jpg",
            photo2x: "Ekaterina-Rubatskaya@x2.jpg",
            experience: "I am providing full accounting support including operations with invoices, preparation of accounting reports, monitoring of cash flow, debt management and control of payment for subscriptions from our customers."
        }
    ];

};