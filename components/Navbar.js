import Image from "next/image";
import { React, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
// import { Modal, Ripple, initTE } from "tw-elements";

const Navbar = ({ addToCart, cart, removeFromCart, subTotal, clearCart , cartRef}) => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, Modal, Ripple, initTE } = await import(
        "tw-elements"
      );
      initTE({ Collapse, Dropdown, Modal, Ripple });
    };
    init();
  }, []);

  return (
    <div>
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <Link href={"/"} legacyBehavior>
              <a
                className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="#"
              >
                <Image
                  src="/logo.png"
                  style="height: 15px"
                  alt="TE Logo"
                  loading="lazy"
                  width={100}
                  height={20}
                />
              </a>
            </Link>
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link legacyBehavior href={"/tshirt"}>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    TShirts
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link legacyBehavior href={"/hoodies"}>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Hoodies
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link legacyBehavior href={"/mugs"}>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Mugs
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link legacyBehavior href={"/stickers"}>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Stickers
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link legacyBehavior href={"/caps"}>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Caps
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center">
            <a ref={cartRef}
              data-te-toggle="modal"
              data-te-target="#rightTopModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              className=""
              href="#"
            >
              <FaShoppingCart className="text-2xl mx-2" />
            </a>
            <Link legacyBehavior href={'/login'}>
              <a className="" >
                <MdAccountCircle className="text-2xl  mx-2"/>
              </a>
            </Link>
            
          </div>
        </div>
      </nav>

      {/* <!-- Button trigger modal --> */}

      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="rightTopModal"
        tabIndex="-1"
        aria-labelledby="rightTopModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none absolute right-7 h-auto w-full translate-x-[100%] opacity-0 transition-all duration-300 ease-in-out max-[576px]:right-auto min-[576px]:mx-auto min-[576px]:mt-2 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md bg-pink-600 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
              <h5
                className="text-xl font-medium leading-normal text-white"
                id="rightTopModalLabel"
              >
                Product in the cart
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none text-white hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items  */}

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {Object.keys(cart).map((key, index) => (
                    <div key={index} className="p-4 ">
                      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                          alt="team"
                          className="flex-shrink-0  w-24 h-24 object-cover object-center sm:mb-0 mb-4 rounded-full"
                          src={cart[key].img}
                        />
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">
                            {cart[key].name}
                          </h2>
                          <h3 className="text-gray-500 mb-3">
                            {cart[key].variant}
                          </h3>
                          <span>
                            <button
                              onClick={() => {
                                addToCart(...Object.values(cart[key]));
                              }}
                              className="text-white bg-pink-500 px-2 mr-2"
                            >
                              +
                            </button>{" "}
                            {cart[key].qty}{" "}
                            <button
                              onClick={() => {
                                removeFromCart(...Object.values(cart[key]));
                              }}
                              className="text-white bg-pink-500  px-2 ml-2"
                            >
                              -
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8">Sub Total : {subTotal} Rs.</p>
              </div>
            </section>

            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="mr-2 inline-block rounded bg-pink-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Checkout
              </button>
              <button
                onClick={() => {
                  clearCart();
                }}
                type="button"
                className="inline-block rounded bg-pink-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-pink-700 transition duration-150 ease-in-out hover:bg-pink-accent-100 focus:bg-pink-accent-100 focus:outline-none focus:ring-0 active:bg-pink-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
