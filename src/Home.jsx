import './styles/Home.css'
import Logo from './assets/mainLogo.png'
import Food from './assets/food-icon.jpg'
import Attractions from './assets/attractions.jpg'
import Hotels from './assets/hotels.jpg'
import React, {useState, useEffect, useRef} from 'react'

const Home = () => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [interactiveTitle, setInteractiveTitle] = useState("the-vizcaya")
    const ref = useRef(null)
    const [imageSrc, setImageSrc] = useState('');
    const [infoText, setInfoText] = useState('');

    // Changes image and text of the interactive tool
    useEffect(() => {
        const loadImage = async () => {
            try {
                const image = await import(`./assets/${interactiveTitle}.jpg`);
                setImageSrc(image.default);

                switch(interactiveTitle) {
                    case "the-vizcaya":
                        setInfoText("Nestled in the heart of Miami's lush Coconut Grove, the Vizcaya Museum and Gardens offers a stunning glimpse into a bygone era of opulent \
                        American architecture, art, and landscape design. This breathtaking estate, originally the winter retreat of industrialist James Deering, now stands as \
                        a serene oasis amidst the city's modern hustle. As you wander through its lavish Italian Renaissance-style villa, you're transported back to the early \
                        20th century, surrounded by an exquisite collection of European art and furnishings. The experience is further enriched as you step outside into the \
                        enchanting gardens, a harmonious blend of cultural art.");
                        break;
                    case "the-walls":
                        setInfoText("Immerse yourself in the vibrant heart of Miami's art scene at Wynwood Walls, a dazzling outdoor museum showcasing large-scale works by some \
                        of the world’s greatest street artists. This ever-evolving canvas, nestled in the trendy Wynwood neighborhood, transforms the area's warehouse walls \
                        into a kaleidoscope of stunning murals and intricate graffiti. As you stroll through this creative oasis, you'll be surrounded by a dynamic array of \
                        colorful and thought-provoking art pieces, each telling a unique story and adding to the rich tapestry of this cultural hotspot. Wynwood Walls isn't \
                        just about viewing art.");
                        break;
                    case "the-calle":
                        setInfoText("Step into the vibrant heart of Miami's Cuban heritage on Calle Ocho, a lively stretch in Little Havana pulsating with rich cultural flavors,\
                         colorful street art, and the rhythmic beats of Latin music. This iconic street is a jubilant celebration of Cuban-American culture, offering an eclectic \
                         mix of traditional restaurants serving authentic Cuban cuisine, lively music venues, and quaint coffee shops where the air is fragrant with the aroma of \
                         freshly brewed Cuban coffee. As you wander through Calle Ocho, be captivated by the spirited domino players at Maximo Gomez Park, the vivid murals that \
                         adorn the walls, and the charming cigar shops.");
                         break;
                    case "the-deco":
                        setInfoText("Step back in time and immerse yourself in the glamorous Miami Art Deco District, an architectural treasure trove nestled in the heart of Miami\
                         Beach. This historically rich neighborhood boasts over 800 preserved buildings, radiating the charm and elegance of the 1920s to 1940s. As you stroll along\
                         Ocean Drive, be dazzled by the iconic pastel-hued buildings with their classic neon signs, symmetrical geometries, and nautical motifs, all basking under\
                         the warm Florida sun. By day, the district is a visual feast of style and color, offering countless photo opportunities against the backdrop of palm-lined\
                          streets and the sparkling Atlantic Ocean.");
                        break;
                    case "the-zoo":
                        setInfoText("Zoo Miami, a lush, tropical oasis in the heart of Miami-Dade County, offers an exhilarating journey through the natural habitats of the world's\
                        most fascinating wildlife. As the only tropical zoo in the continental United States, it spans over 750 acres and is home to over 3,000 animals representing\
                        more than 500 different species. Here, you can embark on a global safari, wandering through exhibits that replicate the animals' native habitats, from the\
                        African savannahs to the Amazon rainforests. With immersive experiences like feeding giraffes, riding camels, or enjoying close encounters in the Amazon\
                        and Beyond exhibit.");  
                    default:

                }
            } catch (err) {
                console.error("Failed to load image", err);
            }
        };
        
        loadImage();
    }, [interactiveTitle]);

    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                    setIsIntersecting(true);
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            <div className='home-intro'>
                <nav>
                    <img src={Logo} width="140px"></img>

                    <ul>
                        <li><a href='https://saulespinoza7.github.io/personal-website/' target='_blank'>Personal Site</a></li>
                        <li><a href='https://github.com/SaulEspinoza7' target='_blank'>Github</a></li>
                        <li><a href='https://www.linkedin.com/in/saul-espinoza-nalvarte-fiu/' target='_blank'>LinkedIn</a></li>
                    </ul>
                </nav>

                <div className='welcome-text'>
                    <h1>Welcome To Miami</h1>
                    <h2>From beautiful landmarks to iconic local restaurants.<br></br>
                    This guide brings the best of what you want to your<br></br>
                    fingertips. Pick one of the three options to start!<br></br>
                    Made by Saul E</h2>
                </div>
            </div>


            <div className='rest-div'>
                <div class="choices-div">
                    <h1 id='choices-h1'>Find what you are looking for here</h1>
                </div>

                <div className='choices'>
                    <a href='/restaurants'>
                        <div ref={ref} class={`card text-bg-dark col-md-3 ${isIntersecting ? 'show' : 'hidden'}`}>
                            <img src={Food} class="card-img"></img>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Food</h5>
                                <p class="card-text">Whether you're craving fresh seafood, authentic Cuban cuisine or trendy 
                                fusion dishes, we will recommend the best restaurants in Miami to suit your tastebuds.</p>
                            </div>
                        </div>
                    </a> 

                    <a href='/attractions'>
                        <div class={`card text-bg-dark col-md-3 ${isIntersecting ? 'show' : 'hidden'}`} id='b1'>
                            <img src={Attractions} class="card-img"></img>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Attractions</h5>
                                <p class="card-text">We can also be your guide to uncovering the most exciting attractions in Miami.
                                From the beaches of South Beach to the colorful art deco districts, we can reccommend the top sights and hidden gems.<br></br>
                                &#40;This one feature is still in progress&#41;</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='attractions-title'>
                <h1 id='third-title'>Most Notorious Attractions</h1>
            </div>

            <p id='attractions-text'>Choose here for a very quick view of the amazing sights</p>

            <div className='little-demo'>
                <div className='my-buttons'>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => setInteractiveTitle("the-vizcaya")}>Vizcaya Museum</button>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => setInteractiveTitle("the-walls")}>WynWood Walls</button>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => setInteractiveTitle("the-calle")}>Calle Ocho</button>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => setInteractiveTitle("the-deco")}>Art Deco District</button>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => setInteractiveTitle("the-zoo")}>Zoo Miami</button>
                </div>

                <img src={imageSrc} width="400px"></img>

                <p className='interactive-text'>
                    {infoText}
                </p>
            </div>
        </>
    );
} 

export default Home