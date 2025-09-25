'use client';
import React, {useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
  }, [isMobileOpen]);

  useEffect(() => {
    const navItems = document.querySelectorAll('.bottom-nav-items > ul > li');

    navItems.forEach((item) => {
      const link = item.querySelector('a');
      const arrowIcon = item.querySelector('i');

      link?.addEventListener('click', (e) => {
        e.preventDefault();

        navItems.forEach((li) => {
          if (li !== item) {
            li.classList.remove('active');
            const icon = li.querySelector('i');
            if (icon) icon.classList.replace('fa-angle-up', 'fa-angle-down');
          }
        });

        const isActive = item.classList.contains('active');
        item.classList.toggle('active');

        if (arrowIcon) {
          if (isActive) {
            arrowIcon.classList.replace('fa-angle-up', 'fa-angle-down');
          } else {
            arrowIcon.classList.replace('fa-angle-down', 'fa-angle-up');
          }
        }
      });

       item.addEventListener('mouseenter', () => {
      item.classList.add('active');
      if (arrowIcon) arrowIcon.classList.replace('fa-angle-down', 'fa-angle-up');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('active');
      if (arrowIcon) arrowIcon.classList.replace('fa-angle-up', 'fa-angle-down');
    });

    
    });


    

    const menuItems = document.querySelectorAll('.mobile-manue-items > a');

    menuItems.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        const submenu = this.nextElementSibling;
        const siblings = parentLi.parentElement.children;
        Array.from(siblings).forEach((sibling) => {
          if (
            sibling !== parentLi &&
            sibling.classList.contains('mobile-manue-items')
          ) {
            sibling.classList.remove('active');
            const sub = sibling.querySelector('.mobile-submanue-items');
            sub?.classList.remove('active');
          }
        });
        parentLi.classList.toggle('active');
        submenu?.classList.toggle('active');
      });
    });

    // Fix: Select all three-bar elements
    const openMenuBtns = document.querySelectorAll('.three-bar');
    const mobileNav = document.querySelector('.mobile-nav');
    const mainMobileNav = document.querySelector('.main-mobile-nav');
    const closeMenuBtn = document.querySelector('.cencle-icon');

    // Add event listeners to all three-bar buttons
    openMenuBtns?.forEach(btn => {
      btn.addEventListener('click', () => {
        mobileNav?.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    });

    closeMenuBtn?.addEventListener('click', () => {
      if (!mainMobileNav || !mobileNav) return;
      mainMobileNav.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        mobileNav.classList.remove('show');
        document.body.style.overflow = '';
        mainMobileNav.style.transform = '';
      }, 300);
    });
  }, []);


  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?531ef9e546331099ea260e9fd6d";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <nav>
        <div class="top-nav">

        </div>
        <div class="middle-nav-items container">
            <div class="logo">
                <a href="/"><img src="/images/logo.png" alt="" loading="eager" width={150} /></a>
            </div>

            <div class="call-now-text">
                <Link href="tel:4809348218">
                  <h1>Call Now</h1>
                  <p>(480) 934-8218</p>
                </Link>
            </div>

        <div className='call-now-btn'>
            <div class="call-now-text1">
                <Link href="tel:4809348218">
                  <h1>Call Now</h1>
                  <p>(480) 934-8218</p>
                </Link>
            </div>
            <div class="right-items">
               <Link href={"/contact-us"}>
                <button class='btn'>
                   Get A Free Quote
                </button>
                </Link>
            </div>
        </div>


        
            <div class='google-revuew'>
               <div
                    ref={widgetRef}
                    className="ti-widget"
                    data-widget-id="53db27253696356919765542f95"
                ></div>
            </div>
            



            <div class="right-items n">
                <Link href={"/contact-us"}>
                <button class='btn'>
                   Get A Free Quote
                </button>
                </Link>
            </div>

            <div class="three-bar">
                <i class="fa-regular fa-bars"></i>
            </div>
        </div>



        <div className="mobile-top-nav py-3 md:px-1 px-3">
            <div className="item-top flex justify-between items-center">
                <div className="logo">
                    <Link href="/">
                        <img src="/images/logo.png" alt="" loading="eager" width={100} />
                    </Link>
                </div>



{/* 
            <div className="coll-text-btn text-center">
                <Link href="tel:4809348218">
                    <div className="call-now-texts font-semibold text-[var(--accent-color)]">
                        Call Now-24/7
                    </div>
                    <div className="call-now-btn">
                            <button className='num-text font-bold text-[var(--accent-color)]'>
                                (480) 934-8218
                            </button>
                    </div>
                </Link>
            </div> */}


          <div className="flex ">
             <div className="call-now-icon none600">
                <Link href="mailto:makingmovesmatter07@gmail.com">
                    <i class="fa-regular fa-envelope"></i>
                    <div>
                        <span>Email now</span>
                        <p>24/7 support</p>
                    </div>
                </Link>
            </div>




            <div className="call-now-icon">
                <Link href="tel:4809348218">
                    <i className="fa-regular fa-phone"></i>
                    <div>
                        <span>call now</span>
                        <p>24/7 support</p>
                    </div>
                </Link>
            </div>

          </div>


        </div>





        <div className="item-bottom flex justify-between items-center my-4">
            <div className="book-now-btn w-3/4 btn mx-3">
                <Link href={"/contact-us"}>
                    <button className=''>
                        Get A Free Quote
                    </button>
                </Link>
            </div>

            <div class="three-bar w-1/4 text-right me-3">
                    <i class="fa-regular fa-bars"></i>
            </div>
        </div>

    </div>








        <div class="bottom-nav-items">
            <ul>
                <Link href={'/'} className="addtional-link">Home</Link>

                <li><a href='/'>Moving Services <i class="fa-regular fa-angle-down"></i></a>
                <div class="hover-backgroud">
                    <div class="hover-items-container">
                         <div class="items-one">
                            <ul>
                                <li><a href="/commercial-services">Commercial Services</a></li>
                                <li><a href="/long-distance-moving">Long Distance Moving</a></li>
                            </ul>

                            <ul>
                                <li><a href="/furniture-assembly">Furniture Assembly</a></li>
                                <li><a href="/local-moving">Local Moving</a></li>
                            </ul>


                            <ul>
                                <li><a href="/furniture-moving">Furniture Moving</a></li>
                                <li><a href="/packing-and-unpacking-services">Packing And Unpacking Services</a></li>
                            </ul>

                             <ul>
                                <li><a href="/large-and-heavy-item-moving">Large and Heavy Item Moving</a></li>
                                <li><a href="/storage">Storage</a></li>
                            </ul>

                            <ul>
                                <li><a href="/hot-tub-relocation">Hot Tub Relocation</a></li>
                            </ul>

                        </div>
                      </div>
                   </div>
                </li>
                <li><a href="/mesa-az">Service Area <i class="fa-regular fa-angle-down"></i></a>
                <div class="hover-backgroud">
                    <div class="hover-items-container">
                         <div class="items-one">
                            <ul>
                                <li><a href="/mesa-az">Mesa, AZ</a></li>
                            </ul>

                            <ul>
                                <li><a href="/chandler-az">Chandler, AZ</a></li>
                            </ul>

                            <ul>
                                <li><a href="/scottsdale-az">Scottsdale, AZ</a></li>
                            </ul>


                            <ul>
                                <li><a href="/tempe-az">Tempe, AZ</a></li>
                            </ul>


                            <ul>
                                <li><a href="/gilbert-az">Gilbert, AZ</a></li>
                            </ul>

                            <ul>
                                <li><a href="/phoenix-az">Phoenix, AZ</a></li>
                            </ul>

                         </div>
                   </div>
                  </div>
                </li>

                <Link href={'/about-us'} className="addtional-link">About Us</Link>
                <Link href={'/contact-us'} className="addtional-link">Contact Us</Link>
            </ul>
       </div>


        <div class="mobile-nav">
            <div class="main-mobile-nav">
                <div class="mobile-top-item">
                    <div class="logo">
                        <img src="/images/logo.png" alt="" loading="eager" width={100} />
                    </div>
                    <div class="cencle-icon">
                        <i class="fa-regular fa-xmark"></i>
                    </div>
                </div>

                <div class="mobile-middle-item">
                    <ul>
                                <li class="mobile-manue-items">
                                    <a href="#">Moving Services <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <ul>
                                                <li><a href="/commercial-services">Commercial Services</a></li>
                                                <li><a href="/long-distance-moving">Long Distance Moving</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/furniture-assembly">Furniture Assembly</a></li>
                                                <li><a href="/local-moving">Local Moving</a></li>
                                            </ul>


                                            <ul>
                                                <li><a href="/furniture-moving">Furniture Moving</a></li>
                                                <li><a href="/packing-and-unpacking-services">Packing And Unpacking Services</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/large-and-heavy-item-moving">Large and Heavy Item Moving</a></li>
                                                <li><a href="/storage">Storage</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/hot-tub-relocation">Hot Tub Relocation</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="mobile-manue-items">
                                    <a href="#">Service Area <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                           <ul>
                                                <li><a href="/mesa-az">Mesa, AZ</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/chandler-az">Chandler, AZ</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/scottsdale-az">Scottsdale, AZ</a></li>
                                            </ul>


                                            <ul>
                                                <li><a href="/tempe-az">Tempe, AZ</a></li>
                                            </ul>


                                            <ul>
                                                <li><a href="/gilbert-az">Gilbert, AZ</a></li>
                                            </ul>

                                            <ul>
                                                <li><a href="/phoenix-az">Phoenix, AZ</a></li>
                                            </ul>

                                        </li>
                                    </ul>
                                </li>


                                <div className="mobile-additional">
                                    <Link href={'about-us'} className="m-add" onClick={() => isMobileOpen(false)}>About Us</Link>
                                    <Link href={'contact-us'} className="m-add" onClick={() => isMobileOpen(false)}>Contact Us</Link>
                                </div>

                                <div class="right-items mt-7">
                                <Link href={"/contact-us"}>
                                    <button class='btn !text-xl'>
                                    Get A Free Quote
                                    </button>
                                    </Link>
                                </div>
                            </ul>
                </div>  
            </div>
        </div>
</nav>
  );
};

export default Navbar;
