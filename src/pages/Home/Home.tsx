import { FC, useEffect, useRef } from 'react';
import './style.scss';

const Home: FC = () => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const navbar = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!menuRef.current || !navbar.current) {
            return;
        }


        menuRef.current.onclick = () => {
            menuRef.current?.classList.toggle('fa-times');
            navbar.current?.classList.toggle('active');
        };

        window.onscroll = () => {
            menuRef.current?.classList.remove('fa-times');
            navbar.current?.classList.remove('active');
        };

        document.querySelectorAll<HTMLImageElement>('.image-slider img').forEach(image => {
            image.onclick = () => {
              const src = image.getAttribute('src');
              const mainImage = document.querySelector<HTMLImageElement>('.main-home-image');
          
              if (mainImage && src) {
                mainImage.src = src;
              }
            };
        });
        const Swiper = (window as any).Swiper;
        const swiper = new Swiper(".review-slider", {
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
              delay: 7500,
              disableOnInteraction: false,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            },
          });
        return () => {
        // Cleanup Swiper instance when the component is unmounted
        if (swiper) swiper.destroy(true, true);
        };
    }, [])

    return (
        <div className="home-page">
            {/* HEADER */}
            <header className="header">
                <div ref={menuRef} id="menu-btn" className="fas fa-bars"></div>
                <a href="#" className="logo">
                    filmstore19xx <i className="fas fa-film"></i>
                </a>
                <nav ref={navbar} className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#review">review</a>
                    <a href="#book">book</a>
                </nav>
                <a href="#" className="btn cart-btn">
                    <div className='cart-box'>
                        Cart <i className="fas fa-shopping-cart"></i>
                        <div className='cart-number'>1</div>
                    </div>
                </a>
            </header>

            {/* HOME */}
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Shoot Memories, Capture Life</h3>
                        <a href="#" className="btn">
                            buy one now
                        </a>
                    </div>
                    <div className="image">
                        <img src="image/IlfordHP5Plus-removebg-preview.png" className="main-home-image" alt="" />
                    </div>
                </div>
                <div className="image-slider">
                    <img src="image/Kodak+Ultramax+400.png" alt="" />
                    <img src="image/s116789775140402_p616_i15_w1500.png" alt="" />
                    <img src="image/IlfordHP5Plus-removebg-preview.png" alt="" />
                </div>
            </section>

            {/* ABOUT */}
            <section className="about" id="about">
                <h1 className="heading">
                    about us <span>why choose us</span>
                </h1>
                <div className="row">
                    <div className="image">
                        <img src="image/home-bg-2.png" alt="" />
                    </div>
                    <div className="content">
                        <h3 className="title">what's make our products special!</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum laboriosam reprehenderit ipsa id
                            repellat odio illum, voluptas, necessitatibus assumenda adipisci. Hic, maiores iste? Excepturi illo dolore
                            mollitia qui quia.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                        <div className="icons-container">
                            <div className="icons">
                                <img src="image/about-icon-1.png" alt="" />
                                <h3>high quality</h3>
                            </div>
                            <div className="icons">
                                <img src="image/about-icon-2.png" alt="" />
                                <h3>our branches</h3>
                            </div>
                            <div className="icons">
                                <img src="image/about-icon-3.png" alt="" />
                                <h3>free delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MENU */}
            <section className="menu" id="menu">
                <h1 className="heading">
                    our menu <span>popular menu</span>
                </h1>
                <div className="box-container">
                    {[...Array(6)].map((_, i) => (
                        <a href="#" className="box" key={i}>
                            <img src={`image/menu-${i + 1}.png`} alt="" />
                            <div className="content">
                                <h3>our special film</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <span>$8.99</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* REVIEW */}
            <section className="review" id="review">
                <h1 className="heading">
                    reviews <span>what people say</span>
                </h1>
                <div className="swiper review-slider">
                    <div className="swiper-wrapper">
                        {[...Array(4)].map((_, i) => (
                            <div className="swiper-slide box" key={i}>
                                <i className="fas fa-quote-left"></i>
                                <i className="fas fa-quote-right"></i>
                                <img src={`image/pic-${i + 1}.png`} alt="" />
                                <div className="stars">
                                    {[...Array(5)].map((_, j) => (
                                        <i className="fas fa-star" key={j}></i>
                                    ))}
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur
                                    illum.
                                </p>
                                <h3>john deo</h3>
                                <span>satisfied client</span>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>

            {/* BOOK */}
            <section className="book" id="book">
                <h1 className="heading">
                    booking <span>Contact us</span>
                </h1>
                <form>
                    <input type="text" placeholder="Name" className="box" />
                    <input type="email" placeholder="Email" className="box" />
                    <input type="number" placeholder="Number" className="box" />
                    <textarea placeholder="Message" className="box" cols={30} rows={10}></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>
            </section>

            {/* FOOTER */}
            <section className="footer">
                <div className="box-container">
                    {[...Array(4)].map((_, i) => (
                        <div className="box" key={i}>
                            <h3>{i === 0 ? 'our branches' : i === 1 ? 'quick links' : 'contact info'}</h3>
                            {i < 2 ? (
                                [...Array(5)].map((_, j) => (
                                    <a href="#" key={j}>
                                        <i className="fas fa-arrow-right"></i> {i === 0 ? 'location' : 'link'} {j + 1}
                                    </a>
                                ))
                            ) : (
                                <>
                                    <a href="#">
                                        <i className={i === 2 ? 'fas fa-phone' : 'fab fa-facebook-f'}></i> contact {i}
                                    </a>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="credit">
                    created by <span>Filmstore19xx designer</span> | all rights reserved
                </div>
            </section>
        </div>
    )
}

export default Home