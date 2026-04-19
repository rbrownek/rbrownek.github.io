let projects =[
    {

  name: "Transitioning",
  classification: "Organization Of Programming Languages | CMSC 330",
  when: "Spring 25",
  format: "Language: Ocaml",
  description: "This project focused on the concept of non-deterministic finite automata (NFA) and deterministic finite automata (DFA) which are finite state machines.",
  info: [
    "A finite state machine (FSM) is an abstract machine that can be in one of its finite states at a time. Each state represents an accept or decline. The FSM in this project represented regular expressions and could move between states based on letters Some notable functions I had to implement for this project were: accept, NFA to DFA, and Regex to NFA",
    "Accept: Took a NFA and string as input and returned true if the string was accepted by the regular expression represented by the NFA. Determined if the NFA ended up in an accept state based on the letters in the string",
    "NFA to DFA: Took a NFA as input and returned the equivalent DFA",
    "Regex to NFA: Took in a regular expression as input and returned the NFA that accepts the same language as regex",
    "Through this project, I developed a deeper understanding of how regular expressions can be translated into finite state machines. The implementation of NFA to DFA and Regex to NFA helped me better understand how the conversion algorithms work as I had to stimulate the processes by hand before being able to execute them in code"
  ],
  demo: "https://drive.google.com/embeddedfolderview?id=1kcO5xnalQC1tLBfVEhA1EI6GhGzXXJt9#grid",
  course_info:"A study of programming languages, focusing on their paradigms, features, design, and implementation. We will look at syntax, semantics, and structure in OCaml and Rust while also looking at other regular, context-free, and Turing complete languages. Explore why so many languages exist, despite the fact that really only assembly is needed.",

},
{
    name: "Small C",
    classification: "Organization Of Programming Languages | CMSC 330",
    when: "Spring 25",
    format: "Language: Ocaml",
    description:"This project was the implementation of a lexer, parser, and interpreter for a simple C program.",
    info: ["Lexing is a process at compile time that breaks down a string into tokens the compiler can understand","Parsing is the process of taking those tokens and translating them into an abstract syntax tree (AST) / paring tree, a meaningful format the computer can understand","The interpreter evaluates the statements and expressions of a program to a value, simulating program execution"

    ],
    demo: "https://drive.google.com/embeddedfolderview?id=1FpxxVwyf2f1-lpxxDFba2u7L7upwa_l_#grid",
    course_info:"A study of programming languages, focusing on their paradigms, features, design, and implementation. We will look at syntax, semantics, and structure in OCaml and Rust while also looking at other regular, context-free, and Turing complete languages. Explore why so many languages exist, despite the fact that really only assembly is needed.",

},
{
    name:"Mini Honeypot",
    classification:"Applied Cybersecurity Foundations I | Hacs 101",
    when:"Spring 25",
    format:"Language: Unix | Python",
    description:"This is a mini project focused on container lifecycles, data collection, and data processing.",
    info:["This mini honeypot allows an attacker to stay in the container as long as they would like, automatically destroy after the attacker connection is closed, and logs how many/what commands the attacker executed","The code for creating and managing container lifecycles, initiating MITM, and MITM log processing was written as a Bash script while Python handled data formatting and visualization"
],
    demo: "https://drive.google.com/embeddedfolderview?id=1bndHjr3C9LhzRXlEEe0vOojXARzKi4Jg#grid",
    course_info:"Prepares students for team research that will be conducted in HACS 200. Students gain an understanding across the breadth of cybersecurity including system monitoring, networking basics and penetration testing. An applied approach to statistics is also included to prepare students to assess the data collected for their research projects. The course is conducted with a hands-on approach applying virtual environments to practice the concepts learned in the technical lectures each week."

    


},
{
    name:"Build it Break it",
    classification:"Network Security | CMSC 414",
    when:"Fall 25",
    format:"Language: C",
    description:"Group design and implementation of a prototype ATM/Bank system, followed by an individual evaluation to identify and exploit security vulnerabilities in another team's system.",
    info:["Partner Project","Communication protocol uses both symmetric and public key encryption","Our bank/atm defends against rainbow tables, command injection, and buffer overflows it also upholds the properties of unlikability and confidentiality","Identified and exploited plaintext transmission vulnerabilities in a team's ATM/Bank system by tampering with the router to intercept and inject traffic, successfully retrieved user balances without card or PIN access, due to insecure storage of plaintext PINs and balances"],
    demo: "https://drive.google.com/embeddedfolderview?id=1qHMsLgc_MZZD7nm4kL12MIDP6Bo6SOhv#grid",
    course_info:"Introduction to computer and network security, covering software vulnerabilities, network protocols, cryptography, and human factors. The course provides a broad overview of security concepts, including buffer overflows, malware, SQL injection, and TLS/SSL. It often features hands-on projects, such as web exploitation, cryptography exercises, and malware analysis."
},
{
    name:"Curbing Far Right Extremism in Upstate New York Through Early Identification in High Schools",
    classification:"Innovations in Countering Violent Extremism | BSST 335",
    when:"Fall 25",
    format:"Essay",
    description:"Program Proposal designed to prevent far-right extremism in Upstate New York through early identification and intervention in High Schools",
    info:["Group Project", "Program informed by Significance Quest Theory (SQT) using primary, secondary, and tertiary levels of prevention, consistent with public health framework."],
    demo: "https://drive.google.com/embeddedfolderview?id=1B7Jq-n8G8OMU8Tenh71pzdoxIy7tIXAt#grid",
    course_info:"Students will explore theories of community outreach, community intervention, risk communication and offender rehabilitation, drawing on the disciplines of psychology, sociology, criminology, anthropology, communication, and political science. They will also examine teaching cases of authentic, community-based Countering Violent Extremism (CVE) initiatives. This courses teaches students how to design programs that prevent radicalization. Students create, in teams, original, actionable CVE proposals for community-based interventions, focusing on cultural competence, outreach, and designing alternatives to terrorist violence."
},
{
    name:"Honeypot Research Project",
    classification:"Applied Cybersecurity Foundations II | HACS 200",
    when:"Fall 25",
    format:"Essay / Language: Unix | Python ",
    description:"Semester long group project based on the research question: “How does attacker behavior vary based on the targeted University of Maryland department?”",
    info:["Group Project","Implemented Unix scripts to manage container lifecycles, initiate Man-in-the Middle (MITM), and MITM log processing","Implemented Python scripts for data formatting, processing, and visualization using pandas","Use of GitHub for version control"],
    demo: "https://drive.google.com/embeddedfolderview?id=1ZJVDwQGXv_PS_LqICRaFRL3oY61Yfv59#grid",
    course_info:"Apply the skills learned in HACS 100 and 101 to practice cybersecurity research through team led projects employing honeypots, carrying that project through all stages - proposal, implementation, and analysis. Weekly lectures will supplement project work by addressing trends observed in honeypot attacks and protections needed, along with data collection and analysis tools, and other foundational cybersecurity concepts."
},
{
    name:"Kitchen Kompanions",
    classification:"Intro to Human Computer Interaction | CMSC 434",
    when:"Spring 26",
    format:"Language: HTML | CSS | JavaScript",
    description:"Group design and implementation of a mobile app prototype for managing household kitchen inventory, shopping lists, and cooking.",
    info:["Group Project","My group is currently in the medium fidelity prototyping stage for our app. In this stage we have improved our design based on feedback from our low fidelity prototype.","Use of GitHub for collaboration and version control", "Implementation of the recipes feature that showcases instructions and ingredients list, allows the user to favorite/unfavorite a recipe, filter based on breakfast, lunch, and dinner, and add missing ingredients to the shopping list"],
    demo: "https://drive.google.com/embeddedfolderview?id=1ZDNScfIlCPvsvtuiDQWRf78e4kwNN_ay#grid",
    course_info:"Introduction to Human-Computer Interaction, focusing on user-centered design, usability testing, and interface design principles. Key topics include design processes (analysis, prototyping, evaluation), user experience, and cognitive psychology. It features a semester-long group project, involving prototyping and user studies"
}
];

sessionStorage.setItem("projects",JSON.stringify(projects));
const classes = projects.reduce((acc,project)=>{
    if(acc.find(c=>c.classification === project.classification) || project.classification==="Personal"){
        return acc;
    }
    acc.push({classification:project.classification, when:project.when, course_info:project.course_info});
    return acc;
},[]);

sessionStorage.setItem("courses",JSON.stringify(classes));

const bar=document.getElementById("bar");
const iframe=document.getElementById("content");
const courses=document.getElementById("courses");
const project_page=document.getElementById("projects");


function load(page) {
	  	iframe.style.transition = "opacity 0.3s ease";
    	iframe.style.opacity = "0";
        setTimeout(() => {
		if(page==="courses.html"){
			project_page.classList.remove("active");
			courses.classList.add("active");
		}else if(page==="projects.html"){
			courses.classList.remove("active");
			project_page.classList.add("active");
		}
        iframe.src = page;
		
        iframe.style.opacity = "1";}, 300);
    }
