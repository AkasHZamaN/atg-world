import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  DotsHorizontalIcon,
  EyeIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  PencilAltIcon,
  PencilIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import articlePhoto from "../../images/article1.png";
import educationPhoto from "../../images/environment.png";
import redCarPhoto from "../../images/redCar.png";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <div className="w-100 mx-auto grid justify-between grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-100 mx-auto">
          <div class="card card-compact w-96 mb-4 bg-base-100 shadow-xl">
            <figure>
              <img src={articlePhoto} alt="" />
            </figure>
            <div class="card-body">
              <div className="flex items-center">
                <PencilAltIcon className="w-4 h-4 mr-2"></PencilAltIcon>
                <h2 class="card-title">Article</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  What is famous brands had regular fonts? Meet RegulaBrands!
                </p>

                <div class="dropdown dropdown-left">
                  <label tabindex="0" class=" m-1">
                    <DotsHorizontalIcon className="w-6 h-6 rounded-lg bg-slate-200 px-1 font-bold cursor-pointer"></DotsHorizontalIcon>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to={'#'}>Item 1</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Item 2</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <small>
                I've worked n Ux for the better part of a decade. From now on, I
                plan to rei...
              </small>

              <div class="card-actions justify-between items-center ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Sarthak Kamla</h1>
                </div>

                <div className="flex justify-center items-center">
                  <EyeIcon className="w-4 h-4 cursor-pointer"></EyeIcon>
                  <p className="px-2">1.4K views</p>
                  <ShareIcon className="w-6 h-6 bg-slate-200 rounded-lg p-1 cursor-pointer"></ShareIcon>
                </div>
              </div>
            </div>
          </div>
          {/* first article ended  */}

          {/* second article start  */}

          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={educationPhoto} alt="" />
            </figure>
            <div class="card-body">
              <div className="flex items-center">
                <AcademicCapIcon className="w-4 h-4 mr-2"></AcademicCapIcon>
                <h2 class="card-title">Education</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </p>
                
                <div class="dropdown dropdown-left">
                  <label tabindex="0" class=" m-1">
                    <DotsHorizontalIcon className="w-6 h-6 rounded-lg bg-slate-200 px-1 font-bold cursor-pointer"></DotsHorizontalIcon>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to={'#'}>Item 1</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Item 2</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <small>
                I've worked n Ux for the better part of a decade. From now on, I
                plan to rei...
              </small>

              <div class="card-actions justify-between items-center ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Sara West</h1>
                </div>

                <div className="flex justify-center items-center">
                  <EyeIcon className="w-4 h-4 cursor-pointer"></EyeIcon>
                  <p className="px-2">1.4K views</p>
                  <ShareIcon className="w-6 h-6 bg-slate-200 rounded-lg p-1 cursor-pointer"></ShareIcon>
                </div>
              </div>
            </div>
          </div>
          {/* second article ended  */}

          {/* third article start  */}

          <div class="card card-compact w-96 mt-4 bg-base-100 shadow-xl">
            <figure>
              <img src={redCarPhoto} alt="" />
            </figure>
            <div class="card-body">
              <div className="flex items-center">
                <AcademicCapIcon className="w-4 h-4 mr-2"></AcademicCapIcon>
                <h2 class="card-title">Meetup</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  Finance and Investment Elite Social Mixer@Lujiazui
                </p>
                
                <div class="dropdown dropdown-left">
                  <label tabindex="0" class=" m-1">
                    <DotsHorizontalIcon className="w-6 h-6 rounded-lg bg-slate-200 px-1 font-bold cursor-pointer"></DotsHorizontalIcon>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to={'#'}>Item 1</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Item 2</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <CalendarIcon className="w-4 h-4 mr-2"></CalendarIcon>
                  <p>
                    <small>Fri, 12 Oct, 2018</small>
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <LocationMarkerIcon className="w-4 h-4 mr-2"></LocationMarkerIcon>
                  <p>
                    <small>Ahmedabad, India</small>
                  </p>
                </div>
              </div>
              <div className="text-center border-2 rounded-lg ">
                <button className="p-1 font-bold">Visit Websites</button>
              </div>

              <div class="card-actions justify-between items-center ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Ronal Jones</h1>
                </div>

                <div className="flex justify-center items-center">
                  <EyeIcon className="w-4 h-4 cursor-pointer"></EyeIcon>
                  <p className="px-2">1.4K views</p>
                  <ShareIcon className="w-6 h-6 bg-slate-200 rounded-lg p-1 cursor-pointer"></ShareIcon>
                </div>
              </div>
            </div>
          </div>
          {/* third article ended  */}

          {/* fouth article start  */}

          <div class="card card-compact w-96 mt-4 bg-base-100 shadow-xl">
            <div class="card-body">
              <div className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-2"></BriefcaseIcon>
                <h2 class="card-title">Job</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Software Engineer</p>
                
                <div class="dropdown dropdown-left">
                  <label tabindex="0" class=" m-1">
                    <DotsHorizontalIcon className="w-6 h-6 rounded-lg bg-slate-200 px-1 font-bold cursor-pointer"></DotsHorizontalIcon>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to={'#'}>Item 1</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Item 2</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <BriefcaseIcon className="w-4 h-4 mr-2"></BriefcaseIcon>
                  <p>
                    <small>Innovaccar Analytics Private Ltd.</small>
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <LocationMarkerIcon className="w-4 h-4 mr-2"></LocationMarkerIcon>
                  <p>
                    <small>Noida, India</small>
                  </p>
                </div>
              </div>
              <div className="text-center border-2 rounded-lg ">
                <button className="p-1 font-bold">Apply on TimesJob</button>
              </div>

              <div class="card-actions justify-between items-center ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Josep Gray</h1>
                </div>

                <div className="flex justify-center items-center">
                  <EyeIcon className="w-4 h-4 cursor-pointer"></EyeIcon>
                  <p className="px-2">1.4K views</p>
                  <ShareIcon className="w-6 h-6 bg-slate-200 rounded-lg p-1 cursor-pointer"></ShareIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center w-1/2 mx-auto items-center">
            <div className="flex justify-center items-center">
            <LocationMarkerIcon className="w-6 h-6 mr-2"></LocationMarkerIcon>
            <p><input type="text" placeholder="Type here" class="input w-full max-w-xs" /></p>
            </div>
            <div>
                <PencilIcon className="w-4 h-4"></PencilIcon>
            </div>
          </div>
          <hr className="w-52 mt-1 border-gray-500 mx-auto" />

          <div className="flex justify-center items-center w-52 mx-auto">
            <InformationCircleIcon className="w-8 h-12 mr-2 opacity-25"></InformationCircleIcon>
            <p><small className="opacity-25">Your locatin wil help us serve better and extend a personlised experience.</small></p>
        </div>

        <div className="flex justify-center w-1/2 mx-auto mt-12">
            <ThumbUpIcon className="w-6 h-6 mr-2"></ThumbUpIcon>
            <h1 className="font-bold">RECOMENDED GROUPS</h1>
        </div>


        <div class="card-actions justify-between items-center w-3/4 mx-auto mt-6 ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Leisure</h1>
                </div>

                <div>
                <button class="btn btn-sm">Followed</button>
                </div>
        </div>

        <div class="card-actions justify-between items-center w-3/4 mx-auto mt-6 ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Activism</h1>
                </div>

                <div>
                <button class="btn btn-sm bg-gray-300 text-black border-none">Follow</button>
                </div>
        </div>

        <div class="card-actions justify-between items-center w-3/4 mx-auto mt-6 ">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <h1 className="ml-2 font-bold">Philosophy</h1>
                </div>

                <div>
                <button class="btn btn-sm bg-gray-300 text-black border-none">Follow</button>
                </div>
        </div>

        </div>


      </div>
    </div>
  );
};

export default Article;
