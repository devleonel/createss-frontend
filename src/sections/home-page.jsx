"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import { Inter } from "next/font/google";
import MoreDropDown from "@/components/dropdown/more-dropdown";
import FilterBy from "@/components/dropdown/filterby";
import PriceDropDown from "@/components/dropdown/startingprice-dropdown";
import FollowingDropDown from "@/components/dropdown/following-dropdown";
import TypesDropDown from "@/components/dropdown/promotypes-dropdown";
import TagsDropDown from "@/components/dropdown/tags-dropdown";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-7">
        {/* Mobile Logo Createss */}
        <img
          className="absolute xl:hidden lg:w-40 sm:w-40 max-[400px]:w-28 min-[400px]:left-5 top-5 left-2"
          src="/createss-white.webp"
          alt="Createss Logo"
        />

        {/* Col 1 */}
        <section className="col-span-1 max-xl:hidden p-6 ">
          {/* Logo Createss Desktop */}
          <img src="/createss-black.webp" alt="Createss Logo" />

          {/* Explore Button */}
          <a
            href="#"
            className="group flex max-w-[fit-content]  mt-12 pt-2 pb-2 pr-3 pl-3 rounded-3xl text-black1 hover:bg-blue2 hover:text-white1"
          >
            <div className="w-6 mr-2 transition-transform duration-300 ease-in-out transform">
              <img
                src="/side-1/explore.webp"
                alt="Explore Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-100 group-hover:opacity-0"
              />

              <img
                src="/side-1/explore-act.webp"
                alt="Explore Icon Active Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
              />
            </div>
            Explore
          </a>

          {/* Login Button */}
          <a
            href="/login"
            className="group flex max-w-[fit-content] mt-6 mb-6 pt-2 pb-2 pr-3 pl-3 rounded-3xl text-black1 hover:bg-blue2 hover:text-white1"
          >
            <div className="w-6 mr-4 transition-transform duration-300 ease-in-out transform">
              <img
                src="/side-1/login.webp"
                alt="Login Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-100 group-hover:opacity-0"
              />

              <img
                src="/side-1/login-act.webp"
                alt="Login Active Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
              />
            </div>
            Login
          </a>

          <hr />

          {/* Need Help Button */}
          <a
            href="/needhelp"
            className="group flex max-w-[fit-content] mt-6 mb-6 pt-2 pb-2 pr-3 pl-3 rounded-3xl text-black1 hover:bg-blue2 hover:text-white1"
          >
            <div className="w-6 mr-2 transition-transform duration-300 ease-in-out transform">
              <img
                src="/side-1/need-help.webp"
                alt="Need Help Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-100 group-hover:opacity-0"
              />

              <img
                src="/side-1/need-help-act.webp"
                alt="Need Help Active Icon"
                className="w-6 h-6 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
              />
            </div>
            Need Help?
          </a>

          <hr />

          {/* Terms of Service Button */}
          <a href="/terms" className="flex mt-6 text-black1">
            Terms of Service
          </a>

          {/* Privacy Button */}
          <a href="/privacy" className="flex mt-2 text-black1">
            Privacy
          </a>

          {/* Social Networks */}
          <div className="mt-2 flex">
            <a href="#">
              <img
                src="/side-1/instagram-side.webp"
                className="w-6 h-6 mr-2"
                alt="Instagram Logo"
              />
            </a>
            <a href="#">
              <img
                src="/side-1/twitter-side.webp"
                className="w-6 h-6 mr-2"
                alt="Twitter Logo"
              />
            </a>
            <a href="#">
              <img
                src="/side-1/tiktok-side.webp"
                className="w-6 h-6 mr-2"
                alt="Tiktok Logo"
              />
            </a>
            <a href="#">
              <img
                src="/side-1/youtube-side.webp"
                className="w-6 h-6 mr-2"
                alt="Youtube Logo"
              />
            </a>
            <a href="#">
              <img
                src="/side-1/reddit-side.webp"
                className="w-6 h-6"
                alt="Reddit Logo"
              />
            </a>
          </div>
        </section>

        {/* Col 2 */}
        <section className="col-span-7 xl:col-span-5">
          <div className="bg-cyan-950">
            <div className="flex flex-col">
              <div className="flex justify-end mt-3 mr-3">
                <span className="text-white mt-2 mr-2 text-md">
                  What's Createss
                </span>
                <a href="/landing">
                  <button
                    className="select-none text-sm rounded-2xl bg-transparent border border-sky-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Sign Up
                  </button>
                </a>
              </div>
              <div className="flex justify-center mt-24 mb-24">
                <article className="text-white text-4xl font-bold">
                  <h1>
                    Promote
                    <span className="text-sky-600">yourself</span>
                  </h1>
                  <h1>
                    whit the perfect{" "}
                    <span className="text-sky-600">creator</span>.
                  </h1>
                  <input
                    type="text"
                    className="bg-transparent border border-sky-600 rounded-2xl text-xs font-normal p-2 mt-3 pr-14 placeholder:pl-1"
                    placeholder="Search for creators"
                  />
                </article>
              </div>
            </div>
          </div>

          <div className="bg-slate-200">
            <article>
              <div className="flex justify-between text-center font-normal max-xl:hidden max-xl:mt-10">
                <span className="m-4">Filter by platform</span>
                <span className="m-4">Get more specific...</span>
              </div>
              <div className="font-semibold text-sm inline p-1 xl:flex 2xl:justify-between max-lg:hidden xl:justify-center max-[1280px]:hidden">
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-0.5 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ONLYFANS
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  INSTAGRAM
                </button>
                <MoreDropDown />
                <PriceDropDown />
                <FollowingDropDown />
                <TypesDropDown />
                <TagsDropDown />
              </div>
            </article>
            <div className="bg-slate-200">
              <h1 className="font-bold pl-6 py-4 max-xl:hidden">
                Featured Sellers
              </h1>
              <FilterBy />
              <div className="px-4 mb-3 grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-1.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          krazykylie
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★1 (1)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        24.5k FANS 574 following Top 1.6%
                      </p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-2.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          thecharliez
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★5 (11)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        AMAZING PIN DEALS AVAILABLE IMMEDIATELY 57k ——-hundreds
                        of POSITIVE REVIEWS AVAILABLE——0.9% ONLY PINS AND DMS
                        AVAILABLE IN 2023
                      </p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-3.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          catjira
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (3)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        OG cosplay camgirl! Playboy, 11x industry award winner
                        as seen on showtime, vice, naked news, hustler. My
                        audience and fans love natural, pop culture, gamers,
                        horror fans, cosplayers, and nerds!
                      </p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-4.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Jenniferann
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★5 (14)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        Fans: 8.1k -- Following: 42.2k -- TOP 2.1% OF ALL
                        CREATORS!
                      </p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-5.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          badbellaxo
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★5 (29)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black"></p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-6.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          missbuscemi
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4 (5)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black"></p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-7.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          caylinlive
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★3.5 (5)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black"></p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 text-xs border border-slate-600 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/profiles/profile-8.jpg"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          laurenrad
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★5 (16)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black"></p>
                      <div className="pt-4">
                        <div className="flex items-center">
                          <img
                            className="mr-2"
                            src="/side-1/instagram-side.webp"
                            alt="Instagram Logo"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src="/content/onlyfans.webp"
                            alt="Onlyfans Logo"
                            style={{ width: "18px", height: "14px" }}
                          />
                        </div>
                        <div className="pt-2">
                          <button className="block border border-slate-600 px-4 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-4">
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    ←
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    1
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    2
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    3
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    4
                  </button>
                  <button className="bg-cyan-950 mt-2  px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    5
                  </button>
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950 h-14 xl:hidden">
              <div className="flex justify-between mt-2 px-2">
                <button>
                  <img className="mt-4" src="/compass.svg" alt="Compass Icon" />
                </button>
                <button>
                  <img
                    className="mt-4"
                    src="/campaign.svg"
                    alt="Campaign Icon"
                  />
                </button>
                <button>
                  <img className="mt-4" src="/chat-icon.svg" alt="Chat Icon" />
                </button>
                <button>
                  <img
                    className="mt-4"
                    src="/eyelashes.svg"
                    alt="Eyelash Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Col 3 */}
        <section className="col-span-1 flex items-start justify-center max-xl:hidden p-6">
          <img
            className="w-6 h-6 mr-2"
            src="/side-2/message.webp"
            alt="Message Icon"
          />
          <h1 className="text-center">Send us a message</h1>
        </section>
      </div>
    </div>
  );
}
