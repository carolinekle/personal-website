let oldBottom = document.querySelector('.bottom'); 
let oldExerpt = document.querySelector('#exerpt')
if(oldExerpt){
    oldExerpt.remove()
} 
const projects = document.getElementById('projects');

const textMapping = {
    reason: 
        `<strong><a href="https://www.youtube.com/watch?v=w6vnyJuHbi8">Does psychedelic therapy live up to the hype?  |  Dec8 Productions</a></strong>
        <p>
        Although the Van Tuinens have no official training or licensing, 
        they are part of a broader movement. 
        Therapists and researchers increasingly see psychedelics as an effective 
        way of treating addiction and related issues, and the Food and Drug 
        Administration is nearing approval of MDMA, psilocybin, and other 
        substances in therapeutic settings.
        </p>
        <small>Associate Producer</small>`,
    essex: 
        `<strong><i><a href="https://www.thecoffeehousedc.com/">Fierceness Served!</i>  |  Dec8 Productions</a></strong>
        <p>
        The Fierceness Served! The ENIKAlley Coffeehouse documentary focuses on 
        the local history of a Black LGBT performance venue, rehearsal space, 
        and meeting place for artists and political organizations in Washington, DC 
        from the 1980s to the mid-90s. It was the epicenter of a cultural renaissance 
        that paralleled The Harlem Renaissance.
        </p>
        <small>Production Assistant Intern</small>`,
    amnh: 
        `<strong><a href="http://user.astro.columbia.edu/~esandford/keplerAtlas/home.html">Kepler Atlas | American Museum of Natural History</a></strong>
        <p>
        Interning at the American Museum of Natural History, 
        I contributed to the development of an interactive Kepler Exoplanet Atlas. 
        This digital platform showcases over 2,300 confirmed exoplanets discovered 
        by NASA's Kepler Space Telescope. The atlas explores these distant 
        worlds using data primarily gathered through the transit method, 
        which detects planets as they pass in front of their stars, 
        causing a temporary dimming of light. Users can explore each
        exoplanet's characteristics such as size, temperature, and proximity 
        to its host star, providing a glimpse into the diversity and potential 
        habitability of planetary systems beyond our solar system.
        </p>
        <small>Astrophysics Intern</small>`,
    strong: 
        `<strong> <i><a href=""https://sbpress.com/2021/03/coming-back-safe-and-strong/">"Coming Back Safe and Strong"</i> | Stony Brook Press</a></strong>
        <p>
        I reported and wrote an article on Stony Brook University's Member Action Coalition SBU (MAC), 
        a caucus within the United University Professions (UUP) union, challenging the administration's 
        directive for professional staff to return to campus. Despite a statewide telecommuting agreement set to expire, 
        MAC argues the return order poses COVID-19 risks and could disproportionately impact caregivers, women, and people of color. 
        Over 100 individuals signed a petition opposing the return mandate, reflecting widespread concerns within the university 
        community. My reporting for the Stony Brook Press, where I advanced from writer to editor, earned me the Best Student 
        COVID Reporting award from the Long Island Press Club.  
        </p>
        <small>Writer and Editor</small>
        `,
    mega: 
        `<strong><a href="https://www.usnews.com/topics/series/megatrends">ASCII gifs  |  U.S. News</a></strong>
        <p>
        As part of U.S. News & World Report's investing series on megatrends, 
        I contributed by creating ASCII GIFs to bring these concepts to life. 
        These GIFs were designed to add a dynamic and visually compelling element, 
        making trends like AI and the space race more captivating and interactive for readers. 
        Each GIF provided a unique visual perspective, enhancing reader engagement with 
        the future of investing in these transformative areas.
        </p>
        <small>Digital Producer</small>
        `,
    network: 
        `<strong><a href="">Network</a></strong>
        <p>
        I developed a clone of Twitter using Django, a powerful web framework in Python. 
        This project involved creating a platform that mimics key functionalities of Twitter, 
        such as user authentication, posting tweets, following users, and real-time updates. 
        By leveraging Django's robust features like ORM for database management and Django Rest 
        Framework for API development, I ensured the clone was scalable and efficient. 
        The project aimed to provide a hands-on learning experience in web development while 
        exploring the architecture and design principles behind a popular social media platform 
        like Twitter.
        </p>
        <small>Software Developer</small>
        `,
    circa: 
        `<strong><a href="">Circa</a></strong>
        <p>
        A custom news site was developed using an API integration and a tailored CMS. 
        This project aimed to streamline content aggregation and publication processes by leveraging 
        API data feeds from reliable sources. The custom CMS enabled efficient content management, 
        including article creation, editing, and scheduling. By combining the API's dynamic content 
        with a user-friendly CMS interface, the news site provided curated and timely information to 
        its audience while optimizing editorial workflows behind the scenes.
        </p>
        <small>Software Developer</small>
        `/* ,
    game:
        `
        <strong>Game</strong>
        <p>

        </p>
        ` */
};

function generator(key) {
    return textMapping[key] || "Something has gone wrong.";
} 

const sample = {
    reason: { path: "../images/reason.jpg", text: generator("reason") },
    essex: { path: "../images/Essex_Hemphill.jpg", text: generator("essex") },
    amnh: { path: "../images/amnh.gif", text: generator("amnh") },
    strong: { path: "../images/SafeStrong.jpg", text: generator("strong") }, 
    mega:{ path:"../images/spaceman2.gif", text:generator("mega") }, 
    network:{ path:"../images/heart.gif", text:generator("network") },
    circa:{ path:"../images/circa.gif", text:generator("circa") },
    /* game:{ path:"", text:generator("game")} */
};


Object.keys(sample).forEach(key => {
    const image = sample[key];
    const element = document.querySelector(`.${key}`);
    console.log(Object.keys(sample))
        element.addEventListener("mouseover", () => {
            const img = document.createElement("img");
            img.src = image.path;
            img.style.height = '200px';
            img.style.width = '200px';
            img.style.objectFit = 'cover';
            element.imageElement = img;
            projects.appendChild(img);
        });

        element.addEventListener("click", () => {
            let existingSample = document.querySelector('.sample');
            let oldBottom = document.querySelector('.bottom');
            let oldExerpt = document.querySelector('#exerpt');
            let oldArrow =document.querySelector('.arrow')
            let web = document.querySelector('.web')

            if(oldExerpt){
                oldExerpt.remove()
            }
            if(oldArrow){
                oldArrow.remove()
            }

            if(oldBottom){
                oldBottom.remove()
            }

            if (existingSample) {
                existingSample.remove();
            }

            const bottom = document.createElement("div")
            const exerpt = document.createElement("div")
            const snippet = document.createElement("div")
            const arrow = document.createElement("div")

            bottom.classList.add("bottom")
            exerpt.id = "exerpt"
            arrow.innerHTML="↓"
            arrow.classList.add("arrow", "bouncing")
            web.after(arrow)
            document.body.appendChild(exerpt)
            exerpt.appendChild(bottom)
            snippet.classList.add("sample");
            snippet.innerHTML=(`${sample[key].text}`)


            bottom.appendChild(snippet);
        });

        element.addEventListener("mouseout", () => {
            if (element.imageElement) {
                element.imageElement.remove();
            }
        });
    }
);