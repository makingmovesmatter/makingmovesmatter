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

    const openMenuBtn = document.querySelector('.three-bar');
    const mobileNav = document.querySelector('.mobile-nav');
    const mainMobileNav = document.querySelector('.main-mobile-nav');
    const closeMenuBtn = document.querySelector('.cencle-icon');

    openMenuBtn?.addEventListener('click', () => {
      mobileNav?.classList.add('show');
      document.body.style.overflow = 'hidden';
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
    script.src = "https://cdn.trustindex.io/loader.js?7c52c0a5112594899b265ba3b08";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <nav>
        <div class="top-nav">

        </div>
        <div class="middle-nav-items container">
            <div class="logo">
                <a href="/"><img src="https://mesamovingexperts.com/wp-content/uploads/2021/11/Logo-1.png.webp" alt="" loading="eager" width={150} /></a>
            </div>

            <div class="call-now-text">
                <Link href="tel:480-999-9999">
                  <h1>Call Now</h1>
                  <p>(480) 378-8888</p>
                </Link>
            </div>

        <div className='call-now-btn'>
            <div class="call-now-text1">
                <Link href="tel:480-999-9999">
                  <h1>Call Now</h1>
                  <p>(480) 378-8888</p>
                </Link>
            </div>
            <div class="right-items">
                <button class='btn'>
                   Get A Free Quote
                </button>
            </div>
        </div>


        
            <div class='google-revuew'>
               <div
                    ref={widgetRef}
                    className="ti-widget"
                    data-widget-id="e9f2a3251009946031864fb8cdb"
                ></div>
            </div>
            



            <div class="right-items n">
                <button class='btn'>
                   Get A Free Quote
                </button>
            </div>

            <div class="three-bar">
                <i class="fa-regular fa-bars"></i>
            </div>
        </div>

 

        <div class="bottom-nav-items">
            <ul>
                <li><a href=''>Moving Services <i class="fa-regular fa-angle-down"></i></a>
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
                                <li><a href="/packing-and-unpacking-services">Packing And Unpacking Servicesy</a></li>
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
                                <li><a href="/gendale-az">Gilbert, AZ</a></li>
                            </ul>

                            <ul>
                                <li><a href="/phoenix-az">Phoenix, AZ</a></li>
                            </ul>

                         </div>
                   </div>
                  </div>
                </li>

                 <li><a href="/mesa-az">About Us <i class="fa-regular fa-angle-down"></i></a>
                <div class="hover-backgroud">
                    <div class="hover-items-container">
                         <div class="items-one">
                            <ul>
                                <li><a href="/about-us">About Us</a></li>
                            </ul>

                            <ul>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>

                            <ul>
                                <li><a href="/blog">Blog</a></li>
                            </ul>


                            <ul>
                                <li><a href="/tempe-az">Gallery</a></li>
                            </ul>

                            <ul>
                                <li><a href="/phoenix-az">Privacy Policy</a></li>
                            </ul>

                         </div>
                   </div>
                  </div>
                </li>

            </ul>
       </div>


        <div class="mobile-nav">
            <div class="main-mobile-nav">
                <div class="mobile-top-item">
                    <div class="logo">
                        <img src="https://mesamovingexperts.com/wp-content/uploads/2021/11/Logo-1.png.webp" alt="" loading="eager" width={100} />
                    </div>
                    <div class="cencle-icon">
                        <i class="fa-regular fa-xmark"></i>
                    </div>
                </div>

                <div class="mobile-middle-item">
                    <ul>
                                <li class="mobile-manue-items">
                                    <a href="#">Shave <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <a href="#">Harry's Plus <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Plus Handles</a></li>
                                                <li><a href="#">Plus Sets</a></li>
                                                <li><a href="#">Plus Blades</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Harry's Original <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Original Blades</a></li>
                                                <li><a href="#">Original Handles</a></li>
                                                <li><a href="#">Original Chrome Handles</a></li>
                                                <li><a href="#">Original Shave Sets</a></li>
                                                <li><a href="#">Original Value Packs</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Pre & Post Shave <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Shave Gel</a></li>
                                                <li><a href="#">Shave Cream</a></li>
                                                <li><a href="#">Post-Shave Balm</a></li>
                                                <li><a href="#">Post-Shave Mist</a></li>
                                                <li><a href="#">Exfoliating Facial Cleanser</a></li>
                                                <li><a href="#">Daily Facial Lotion</a></li>
                                                <li><a href="#">Hydrating Night Lotion</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Accessories <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Toiletry Bag</a></li>
                                                <li><a href="#">Plus Razor Stand</a></li>
                                                <li><a href="#">Orignal Razor Stand</a></li>
                                                <li><a href="#">Plus Travel Blade Cover</a></li>
                                                <li><a href="#">Original Travel Blade Cover</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Bundles <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Original Blades & Shave Gel</a></li>
                                                <li><a href="#">Original 24 Blades & Shave Gel</a></li>
                                                <li><a href="#">Original Shave Travel Kits</a></li>
                                                <li><a href="#">Plus Blades & Shave Gel</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="mobile-manue-items">
                                    <a href="#">Face Care <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <a href="#">Face Care Essentials <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="">Exfoliating Facial Cleanser</a></li>
                                                <li><a href="">Daily Facial Lotion</a></li>
                                                <li><a href="">Brightening Eye Cream</a></li>
                                                <li><a href="">Spot Correcting Gel</a></li>
                                                <li><a href="">Balancing Facial Toner</a></li>
                                                <li><a href="">Hydrating Night Lotion</a></li>
                                                <li><a href="">Anti-Shine Stick</a></li>
                                                <li><a href="">Black Lip Balm</a></li>
                                                <li><a href="">Cooling Eye Kit</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Pre & Post Shave <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="">Shave Gel</a></li>
                                                <li><a href="">Shave Cream</a></li>
                                                <li><a href="">Post-Shave Balm</a></li>
                                                <li><a href="">Post-Shave Mist</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Beard Care <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Beard & Face Wash</a></li>
                                                <li><a href="#">Beard Conditioning Spray</a></li>
                                                <li><a href="#">Beard Care Bundle</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Face Care Bundles <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Clear Skin Essentials</a></li>
                                                <li><a href="#">AM/PM Lotion Bundle</a></li>
                                                <li><a href="#">6-Step Skin Care Set</a></li>
                                                <li><a href="#">Eye Refresh Bundle</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li class="mobile-manue-items">
                                    <a href="#">Shave <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <a href="#">Body Wash <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Body Wash</a></li>
                                                <li><a href="#">Travel Body Wash</a></li>
                                                <li><a href="#">Body Wash Pumps</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Body Care <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Extra-Strength Antiperspirant</a></li>
                                                <li><a href="#">Deodorant</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Bar Soap <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Bar Soap</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Body Bundles <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Hair & Body Cleansers</a></li>
                                                <li><a href="#">Head to Toe Cleansers</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>



                                <li class="mobile-manue-items">
                                    <a href="#">Hair Care <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <a href="#">Hair Care <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">2-in-1 Shampoo & Conditioner</a></li>
                                                <li><a href="#">Extra Strength 2-in-1 Shampoo & Conditioner</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Hair Styling <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Sculpting Gel</a></li>
                                                <li><a href="#">Taming Cream</a></li>
                                                <li><a href="#">Texturizing Putty</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Hair Bundles <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Cleanse & Style</a></li>
                                                <li><a href="#">Hair & Body Cleansers</a></li>
                                                <li><a href="#">Head to Toe Cleansers</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li class="mobile-manue-items">
                                    <a href="#">Other <i class="fa-regular fa-angle-down"></i></a>

                                    <ul class="mobile-submanue-items">
                                        <li class="mobile-manue-items">
                                            <a href="#">Other <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Toiletry Bag</a></li>
                                                <li><a href="#">Plus Razor Stand</a></li>
                                                <li><a href="#">Orignal Razor Stand</a></li>
                                                <li><a href="#">Plus Travel Blade Cover</a></li>
                                                <li><a href="#">Original Travel Blade Cover</a></li>
                                                <li><a href="#">Nail Clipper</a></li>
                                                <li><a href="#">Inverness</a></li>
                                                <li><a href="#">Cooling Eye Stick Refill</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Bundles <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Original Shave Travel Kits</a></li>
                                                <li><a href="#">Cleanse & Style</a></li>
                                                <li><a href="#">Hair & Body Cleansers</a></li>
                                                <li><a href="#">Head to Toe Cleansers</a></li>
                                                <li><a href="#">Full Body Fresh</a></li>
                                                <li><a href="#">Clear Skin Essentials</a></li>
                                                <li><a href="#">AM/PM Lotion Bundle</a></li>
                                                <li><a href="#">6-Step Skin Care Set</a></li>
                                                <li><a href="#">Eye Refresh Bundle</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Subscribe & Save <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Subscribe & Save</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-manue-items">
                                            <a href="#">Surplus Store <i class="fa-regular fa-angle-down"></i></a>
                                            <ul class="mobile-submanue-items">
                                                <li><a href="#">Surplus Store</a></li>
                                                <li><a href="#">Shop All</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li><a href="#">New</a></li>
                                <li><a href="#">Shop all</a></li>
                                <button type="submit" class="sign-button btn">Get A Quote</button>
                            </ul>
                </div>  
            </div>
        </div>
</nav>
  );
};

export default Navbar;
