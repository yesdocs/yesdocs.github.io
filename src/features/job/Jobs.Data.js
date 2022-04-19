const MonthToEnglish = (num) => {
    switch(num) {
        default:
        case 1: return 'January';
        case 2: return 'Feburary';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';
    }
}

const createJob = (id, title, empName, empCityState, empIcon, fromYyyy, fromMm, toYyyy, toMm, summary, respb, techUsed = '' ) => {

    const tags = !(techUsed) ? [] : techUsed.replace(", ", ",").split(',').map(l => l.trim());
    return {
        id,
        title,
        tags: tags.sort(),
        summary,
        icon: empIcon,
        responsibilities: respb,
        employer:  {
            name: empName,
            cityState: empCityState,
            start: (!fromYyyy) ? '' : `${MonthToEnglish(fromMm)}, ${fromYyyy}`,
            end: (!toYyyy) ? 'Present' : `${MonthToEnglish(toMm)}, ${toYyyy}`,
        },

    } 
}

const createHighlight = ( forjobId, desc) => {
    return {
        forJobId: forjobId,
        description: desc,
    }
}

const jobHighlights = [
    createHighlight(
        "sbd", "Developed a critical path 'theory of constraints' dashboard identifing bottlenecks in production lines used by all production facilities." 
    ),
    createHighlight(
        "match", "Redesigned a major subscription service payment page that was attributed to a 4% increase in total sales." 
    ),
    createHighlight(
        "blackline", "Archtected and delivered a data importing feature that dramtically reduced customer onboarding delays for a financial company that helped the company grow dramtically in the Fortune 500 space." 
    ),
    createHighlight(
        "volusion", "Guided a PCI compliance audit and personally provided the documentation and evidence required to pass an audit that was threatening the continued operation of the company." 
    ),
    createHighlight(
        "realtor", "Built an Enterprise Architecture Department from it's conception to a team of 22 members complete with integration processes for a large internet company."
    ),
]

const jobs = [
    createJob( "summary","Summary",
        "",
        "",
        "",
        0, 0,
        0, 0,
        "Full Stack Software Developer with a solid architectural grounding in software development methodologies and a proven track record for delivering innovative products.",
        [
            "Focuses critical attention on team collaboration, process methodology, quality and automation.",
            "Exhibits characteristics such as good planning, detail-orientation, and the ability to organize and implement large multi-million-dollar development efforts.",
            "Action and results-oriented individual who has an emphasis on the expansion and application of technical knowledge.",
            "Excellent communication skills and effectively presents information to executive management peers as well a engineering staff."
        ],
        "",
    ),
    createJob( "sbd", "Senior Software Developer (IC)",
        "Stanley Black and Decker",
        "(Remote) Brea, CA",
        "/logo192.png",
        2022, 1,
        0, 1,
        "I work directly with management staff to determine the needs for new or existing strategic software tools to aid the company intiatives.",
        [
            "Designed and built various ASP.NET sites for use by operations in C# as well as deployed those services to Azure cloud for use by the company for various reporting needs.",
            "Evaluated and improved ASP.NET / SQL Server performance issues in key applications such as their pricing tool which drives their pricing online in the web storefronts as well as for use by the Sales staff.",
            "Created Docker enviornments for use in development and testing.",
            "Instrumental in diagnosing Azure intermittent issues in production across the enterprise.",
            "Performed testing and debugging on various platforms incluing iOS, Android, Windows 10, Mac OS"
        ],
        "SQL Server, .NET, C#, Docker, React, Javascript, Bootstrap, Sharepoint, iOS, Android, ASP.NET, AST.NET Core, OAUTH, Azure, Windows 10, Mac OS, JD Edwards",
    ),
    createJob( "healthsherpa","Senior Software Developer",
        "Geozoning, Inc",
        "Remote, US",
        "/logo192.png",
        2019, 8,
        2021, 12,
        "I joined a team of 3 developers and helped to build the team to 14 developers. My focus was on process, scalability, compliance and various company intiatives.",
        [
            "Authored new react components as needed for cross platform functionality across all of their white labeled products and services.",
            "I helped to grow the team by conducting interviews and contributing to the company's evaluation of candidates.",
            "Diagnosed problematic performance issues in design and execution across various parts of the platform.",
            "Created Postgres performance indices with InnoDB for insight into historical and current database conditions.",
            "Introduced processes, and hosted meetings to link the buisiness with the development efforts of the team."
        ],
        "Ruby, Rails, React, Redux, Postgres, SQL Server, InfluxDB, Heroku, Docker, Bootstrap",
    ),
    createJob( "cam", "Senior Web Developer (IC)",
        "Consolidated Aerospace Manufacturing",
        "(Remote) Brea, CA",
        "/logo192.png",
        2019, 3,
        2019, 7,
        "I worked with internal team members to architect solutions for use arcoss the enterprise.",
        [
            "Performed various ASP.NET / SharePoint optimizations with the development of their pricing tool.",
            "Evaluated and improved ASP.NET / SQL Server performance issues with JD Edwards integrations.",
            "Diagnosed Javascript problems on various platforms including iOS, Android, as well as Internet Explorer and Edge.",
            "Worked to fix vsrious Python reporting scripts and tools",
        ],
        "SQL Server, C#, Docker, React, Javascript, Bootstrap, .NET, Sharepoint, iOS, Android, JD Edwards, Python",
    ),
    createJob( "amp", "Senior Web Developer (IC)",
        "AMP Inc.",
        "(Remote) Los Angeles, CA",
        "/logo192.png",
        2018, 10,
        2019, 3,
        "I worked with internal team members performing duties as needed to produce an internal marketing tool for reporting on advertising efforts.",
        [
            "Evaluated and improved Postgres SQL queries that were failing or were inefficient in production as well as local Docker environments.",
            "Authored React components and Redux elements as needed for the internal project needs.",
            "Researched issues and diagnosed Javascript problems on various platforms including iOS, Android, as well as common web browsers.",
            "Introduced the use of Storybook to catalog UI components."
        ],
        "Postgres, Python, Docker, React, Redux, MobX, Javascript, Bootstrap, iOS, Android, Mac OS",
    ),
    createJob( "pnnl", "Senior Software Developer (IC)",
        "Pacific Northwestern National Laboratories",
        "Remote, US",
        "/logo192.png",
        2017, 4,
        2018, 9,
        "I worked with internal team members performing duties as needed to augment staff obligations on a team of 6 developers.",
        [
            "Implemented ASP.NET / WebAPI endpoints to meet the needs of various applications.",
            "Diagnosed SQL statements that were failing or were inefficient across SQL Server and Oracle databases.",
            "Authored React components and Redux elements as needed for various projects.",
            "Recomended solutions such as Storybook and Redux Saga for various Javascript concerns."
        ],
        "SQL Server, Oracle, MySQL, .NET, Azure, React, Redux, Redux Saga, Storybook, Javascript, Bootstrap, C#",
    ),
    createJob( "match","Web Developer, Mobile (IC)",
        "Match.com",
        "(Remote) Dallas, TX",
        "/logo192.png",
        2015, 4,
        2016, 12,
        "I augmented the mobile web team staff as a web developer to assist the staff in achieving company objectives and improving the scalability of their web products.",
        [
            "My duties included diagnosing performance issues in various parts of the application.",
            "Lead the team in delivering the product from a Continous Integration pipeline.",
            "I lead internal teams in the diagnosis and resolution of issues encountered in production, as well as the implementation of new features and products on Match.com’s family of web properties.",
        ],
        "React, Redux, Javascript, JQuery, Bootstrap, .NET, iOS, Android, ASP.NET, .NET Core, SQL Server, ASP.NET MVC, ASP.NET API, Javascript, Jenkins, C#",
    ),
    createJob( "contentblvd","Chief Technology Officer",
        "ContentBLVD",
        "(Remote) LA, CA",
        "/logo192.png",
        2014, 8,
        2015, 2,
        "I joined a startup as their CTO to help solve the problem of ad placement in the entertainment industry. I was responsible for budgeting, development, and coding on all technology services as well as talent acquisition and all other IT duties.",
        [
            "I participated in venture funding meetings and technology evaluations.",
            "I successfully helped the company acquire Series A funding.",
            "Personally authored entire website, data layers and data models.",
        ],
        "JQuery, Javascript, .NET, ASP.NET API, Bootstrap, iOS, Android, ASP.NET, .NET Core, SQL Server, ASP.NET MVC, ASP.NET API, Node.js, C#",
    ),
    createJob( "blackline","Software Architect",
        "Blackline, Inc.",
        "Woodland Hills, CA",
        "/logo192.png",
        2010, 10,
        2014, 8,
        "I joined a team of 3 developers to assist their growth and adoption of their product in the financial industry.",
        [
            "I worked directly with the CEO to architect solutions needed by their clients to help fuel company growth.",
            "I successfully helped the company grow and eventually go public.",
            "I was responsible for their Security implementations, Web authentication, Caching Layer, JavaScript Architecture, File and Data Importing, as well as other key product areas.",
            "As an instrumental team member, I authored most architecture documents, defined documentation and coding standards, and resolved general platform mysteries as issues arose.",
            "I was responsible for reviewing and evaluating candidates and growing the team to a size of 25 engineers.",
            "Personally rewrote their authentication mechanisms to ensure a secure and scalable environment.",
            "Introduced new technologies such as templating with handlebars leveraging Bootstrap and data access with Backbone.js.",
            "Architected the entire backend caching mechanism used to cache objects and keep the services performing to client expectations.",
            "Introduced Aspect Oriented Programming techniques to remove code complexity with boilerplate statements for error reporting, caching, authentication as well as instrumentation.",
            "Introduced Octodeploy to create a Continuous Deployment environment as well as new scaling technologies as the landscape changed (e.g. REDIS for ASP.NET caching)",
            "Managed a team of 5-7 engineers consisting of Architects, Software Engineers, and Operations personnel implementing back office tools.",
        ],
        "JQuery, Javascript, Powershell, Bootstrap, ASP.NET, .NET, SQL Server, ASP.NET MVC, ASP.NET API, Node.js, OAUTH, ADFS, C#, Octodeploy",
    ),
    createJob( "solutionset","Senior Software Developer",
        "SolutionSet",
        "Palo Alto, CA",
        "/logo192.png",
        2009, 7,
        2010, 10,
        "I was a consultant for soultionset subcontracted out to various organizations, for a variety of roles.",
        [
            "As a remote consultant with TXU(Texas Utilities), I was contrated to help rewrite their consumer utilities application from java/SAP to .NET/SAP.",
            "I documented TXU's existing functionality and designed software to meet standards of the existing software and validate existing business rules and their appropriate timelines for implementation.",
            "As a remote consultant for Chevron, Inc. I lead the implementation of a Content Mamagemet System across their Human Resources department which fed their internal HR websites and PDF manuals.",
            "Facilitated discovery meetings with Chevron, Inc. and their department executives and documented the requirements for the development efforts.",
            "Lead a team of 3 engineers in the design (UX), development, and deployment of the Content Managenet System across their enterprise.",
        ],
        "SAP, Java, J2EE, .NET, C#, Bootstrap, ASP.NET, ASP.NET MVC, ASP.NET API, OAUTH, C#, Sitecore, CMS",
    ),
    createJob( "volusion","Director of Engineering",
        "Volusion",
        "Simi Valley, CA",
        "/logo192.png",
        2008, 8,
        2009, 7,
        "I joined as a key part of the management team to transform the company by instituting PCI compliant processes and increase site reliability.",
        [
            "Drove the team to create professional-caliber documentation (Site Diagrams, Statement of Work, Marketing Plans, Use Cases, Activity Diagrams, Business and Data Work Flow Diagrams, Application Models, & Project Plans.) to help communicate project visions and plans of the development department.",
            "Implemented opportunities to provide additional value to the projects and to clients at both the enterprise and entry stage levels.",
            "Provided leadership, mentorship and maintained a positive *can-do* attitude with all team members as an example to bring integrity to the department staff.",
            "Planned and guided the team in the migration of key components to the .NET 3.5 Framework from other technologies such as ASP, Ruby on Rails, and Java.",
            "Lead a department of 8 engineers and provided the documentation and processes across every aspect of the software development department.",
            "Developed job families and job criteria definitions for the software development department in conjunction with Human Resources and the CEO.",
        ],
        "ASP, ASP.NET, .NET, C#, SQL Server, My SQL, Java, J2EE, Ruby, Rails, Bootstrap, ASP.NET MVC, ASP.NET API, JQuery, Javascript",
    ),
    createJob( "realtor", "Director, Enterprise Architecture",
        "Realtor.com",
        "Thousand Oaks, CA",
        "/logo192.png",
        2001, 5,
        2007, 12,
        "I joined Move.com (parent coompany of Realtor.com) as a Manager of Software Engineering to help establish and manage engineering best practices within the Realtor.com development team. My role expanded to encapsulate all interactions and development activities within Engineering of the Move.com family of products.",
        [
            "I built a team of 22 Architects and Engineers and was responsible for an entire department of 55 engineers including budget forecasting and department growth.",
            "I managed all projects that affected the enterprise and engineered solutions specifically for the enterprise. I was involved in all consumer product platforms.",
            "I lead projects that help the consolidation of many custom ERP applications to a consolidated ERP platform leveraging Microsoft BizTalk and PeopleSoft.",
            "I drove the development efforts including personally implementing key areas of a custom search engine that replaced SQL Server queries that ran REALTOR.com Home Searches and WelcomeWagon.com Business Searches with over 14 million requests/day.",
            "Participated in close interaction with executive members to support the definition and clarification of new products and architectures on a wide variety of platforms.",
            "Helped author Move Inc.’s modeling and design approach including mentoring team members in the process as well as actively fostering the adoption of the Software Development Lifecycle within the company.",
            "Actively involved in improving, redefining and authoring engineering processes and practices in efforts to reduce costs and increase product quality and time to market concerns.",
            "Evaluated and administered various tools used by the software department.",
            "Planned and executed the migration of maintenance functions for code bases to offshore teams and maintained the divisions of labor for these development efforts.",            
        ],
        "COM, J2EE, .NET, Win32, Weblogic, ATG/Dynamo, ASP, ASP.NET, C#, SQL Server, My SQL, Java, J2EE, Ruby, Rails, Bootstrap, ASP.NET MVC, ASP.NET API, JQuery, Javascript",
    ),
    createJob( "ebuilt", "Engineering Manager",
        "ebuilt.com",
        "North Hollywood, CA",
        "/logo192.png",
        2000, 4,
        2001, 5,
        "I joined eBuilt as an Engagement Manager and after managing several large contracts, my role expanded to General Manager directly responsible for all the staff within the North Hollywood Office.",
        [
            "My accomplishments included managing a successful, fixed bid, fixed price, $1 million contract with eBuilt’s largest client, The Capitol Group. The project was delivered on time and met the requirements of the client with minimal defects.",
            "I was instrumental in the capturing of additional contracts away from competing consultant companies by delivering on time with the utmost professionalism.",
            "I was solely responsible for all aspects of my projects including overall customer satisfaction, full product development lifecycle activities, as well as line management of direct reports.",
            "Worked closely with the executive management to set technical and process directions, review and recommend improvements to business processes, as well establishing localized goals for remote offices.",
            "Participated in the developing, writing, estimation, and architecture of proposals, many of which led to the capture of large contracts.",
            "Helped position ebuilt as a premiere implementor of the OpenMarket CMS system by performing their first implementation as a very successful deployhment (americanfunds.com).", 
        ],
        "J2EE, eXtreme Programming, TDD, Weblogic, Oracle, JQuery, Javascript, UML, .NET",
    ),
    createJob( "deloitte", "Senior Manager",
        "Deloitte & Touche",
        "Woodland Hills, CA",
        "/logo192.png",
        1996, 6,
        2000, 4,
        "I was brought in to report directly to managing partner and was responsible for product management, technological innovations and visions, team management and administration, and all other aspects of the development lifecycle within the CORPTax product family.",
        [
            "I waas responsible for company's main product, CORPTax, which reached top be the market leader in the industry during my tenure.",
            "I designed and participated in the development coding of all key product area's as well as functioning as the project manager.",
            "I performed the Architect role by designing and implementing all data access routines for the product.",
            "Lead the development and implementation of the company's Quality Assurance policies and procedures in the development department.",
        ],
        "Windows API, C++, MFC, Win32, COM, SQL Server, Oracle, ISAM, Agile",
    ),
    createJob( "hp", "Project Lead Engineer",
        "Hewlett Packard",
        "Sunnyvale, CA",
        "/logo192.png",
        1994, 9,
        1996, 6,
        "Brought on to lead the development of the Visual Diagnostic Editor, a product that enabled automobile manufactures to visually author automobile diagnostic scripts for use in the service bay at local automotive dealers.",
        [
            "I lead a team of 7 developers which included training and mentoring staff with the use of MFC.",
            "I learned the 'HP-Way' of managing and developing people which helped form the basis of my management approach including honesty, ethics, and anti–egoism.",
            "I implemented the 'fusion' object-oriented methodology across the codebase to simplify a very complex system.",
        ],
        "Windows API, C++, MFC, Win32",
    ),
    createJob( "fdsi", "Project Lead Engineer",
        "Financial Decisions Systems, Inc.",
        "Agoura Hills, CA",
        "/logo192.png",
        1994, 1,
        1994, 9,
        "Sr. Developer and chief architect of the company’s Corporate Tax Software package.",
        [
            "I revolutionized the product offering and raised the standard in ease of use and wysiwyg data imports.",
            "I reported directly to the President in management and product decisions.",
            "My product was used to spawn a new product offering and revenue stream for the company.",
        ],
        "Windows API, C++, MFC, Win32",
    ),
    createJob( "modacad", "Windows Developer",
        "ModaCAD, Inc.",
        "Santa Monica, CA",
        "/logo192.png",
        1992, 8,
        1994, 1,
        "Managed and coded the conversion of all company Macintosh products to the Windows platform while reporting directly to the VP of Engineering.",
        [
            "I ported company's graphics rendering engine (Macintosh based) to the Intel platform on Windows for use in the Windows based products.",
            "I designed and implemented the company's graphic editor, and POS visualization products on the Windows platform and the product was used as part of the cult classic movie 'Single White Female'.",
        ],
        "Windows API, C++, MFC, Win32",
    ),

];
    
const jobData = {
    allJobs: jobs,
    allJobHighlights: jobHighlights,
    createJob
}

export default jobData;
