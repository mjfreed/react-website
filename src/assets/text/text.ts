export const dummyText: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi lacus, pellentesque nec nunc at, tempor tristique nulla. Duis ornare eget nunc id euismod. Nullam efficitur tellus eu mi porttitor, a bibendum nibh elementum. Donec varius ut ligula eget laoreet. Quisque justo mauris, pellentesque eget sagittis sed, posuere sed lectus. Nunc congue urna vel sapien sagittis, vel tincidunt massa interdum. Aliquam lacinia nisl id erat feugiat egestas. Maecenas porta egestas libero, sed vehicula libero placerat nec. 
`;

export const workplaceBlurb: string = `
    I have been in the industry since August of 2018, the summer after my graduation. I got my start as a Full Stack Software Engineer using React and TypeScript
    in the web client and express.js with TypeScript in the web server. My first job was a 6 month contract with a start up located in Bellevue, Washington creating
    a logistics web app from the ground up. It was extremely fast-paced and I learned a lot during my tenure, not only about software development but also about
    business requirements and what it means to present a product in front of prospective customers. At my current company I spent my first year and a half still
    working as a Full Stack Software Engineer with React, express.js and TypeScript but transferred to a different team due to my curiosity about the different avenues
    of software engineering. For the past couple of years now my work has mainly focused on the back-end/infrastructure side of things, mostly revolving around AWS as
    well as some dev tooling that abstracts deployments of services to AWS to enhance developer productivity. Another component of my work has revolved around evolving
    our CI/CD pipeline with Jenkins to ensure each project is built and deployed to the specification of the teams who own and develop them. Recently, I have earned my
    AWS Certified Developer - Associate certification to elevate myself professionally, make more informed decisions when performing tasks at work and show my superiors
    and potential employers that I am dedicated to my craft and am serious about meeting personal and professional goals.
`;
export const outsideWorkplaceBlurb: string = `
    When it comes to life outside the workplace I'm a person of many hobbies and interests. My main hobby is gaming (surprise!). I'm an avid gamer of all kinds - video games,
    tabletop games, card games and physical games like golf and disc golf. I play video games on all platforms including PC, Nintendo and PlayStation. My favorite kinds of
    games are usually single player narrative games (Zelda, The Last of Us, and God of War 4 just to name a few) but I do enjoy queueing competitive multiplayer games with my friends
    from time to time (Counter-Strike is a favorite of mine). Some of my favorite board games include King of Tokyo, One Night Werewolf, Scythe and Bohnanza (or "Beans" as I like to call it),
    again, just to name a few. When I'm not gaming you can usually find me out at restaraunts trying new foods, golfing/disc golfing with my friends or watching the latest shows/movies on Netflix
    or whatever streaming platform has the thing I want to watch. Another hobby of mine is learning about cooking/how to cook. I enjoy learning about cooking and how it works from a 
    scientific perspective. Some of the people I follow are J. Kenji Lopez-Alt and Dan Souza. If you haven't seen them and enjoy cooking, check them out! Lastly, but certainly most
    dear to me, is that I'm something of a cat dad. My girlfriend introduced me to her cat (now our cat) years ago and now it's nearly impossible to separate us. I always thought people
    who were obsessed with cats was just something you saw in movies, but lo and behold here I am.
`;

export const aboutWebsitePreface: string = `
    I know this seems like overkill for something that is supposed to serve as another form of a resume, but I wanted to take a different approach to this. Apart from this project, my
    personal GitHub contains old projects from college that are not necessarily a good representation of my skills as a developer. I want this project to not only be another resume but
    also a showcase of the skills I've learned during my time in the industry. Incorporating a bit of CI/CD, testing suites and a small bit of cloud infrastructure was important for me
    to include not only to showcase what I've learned, but to also demonstrate my ability and understanding of what is required to deliver a product from the development stage all the way
    through to a production environment or "customer facing solution", so to speak. So without futher ado, this website is...
`;

export const reactAndTypeScriptBlurb: string = `
    My career began with React.js and TypeScript which is why I chose to utilize these tools for this website. I don't claim to be a frontend guru by any means so I chose to keep the design
    of this website simple and "to the point". My main focus while using React was to create reusable components to limit duplicate code, keep source files to a minimum and make each component
    easy to test. 
`;

export const testingBlurb: string = `
    Testing! Everyone's favorite part of development. In all seriousness, no product would be successful without good tests. Tests are crucial to any customer facing product to ensure functionality,
    making sure the product meets SLA's and necessary for any CI/CD pipeline. For unit tests I chose testing-library because it's a framework I'm familiar with and it seems to have some overlapping
    concepts with cypress, the end-to-end testing framework used in this project as well.
`;

export const dockerAndCircleCIBlurb: string = `
    That's right folks, this website has it's own CI/CD pipeline! Unlike the previous two sections I chose CircleCI because I had never worked with it before and wanted to do some exploring.
    Honestly, I'm not sure if I'm adhering to best practices when it comes to the pipeline but hey, it works. I also took this opportunity to do a little work with Docker. Like other build platforms
    CircleCI uses Docker containers to build projects and I wanted one with my specific version of node and the aws cli already installed on it. Click on the "Source" button and check 'em out!
`;

export const s3AndCloudfrontBlurb: string = `
    For website hosting and a little cloud infrastructure, I had to go with AWS; I'm certified by them after all. The Source button will show you a CloudFormation script that is used in conjuction
    with the AWS SDK to create resources and deploy this website to the cloud. The reason for including CloudFront is just to add a little bit of optimization (however small it may be) to the delivery
    of this website to whomever it may concern.
`;
