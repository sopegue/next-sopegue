import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Base from "../components/base/base";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Index({ children }) {
  return (
    <>
      <Base>
        <div className="">
          <div className="mybackground">
            <div className="w-full h-full py-8 md:py-0">
              <div className="flex md:flex-row flex-col space-x-0 md:space-x-5 w-full md:w-full">
                <div className="w-fit lg:w-1/4 md:w-1/3 me-div relative back-yellow">
                  <img className="is-4by5 me-img" src="/mee.png" />
                </div>
                <div className="wordbreaking w-full lg:w-2/4 md:w-2/4 md:px-0 sm:px-5 px-2 md:pt-8 pt-0 relative mt-5">
                  <p className="wordbreaking flex pb-6">
                    <span className="size-36 -mt-8">&ldquo;</span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.{" "}
                    </span>
                    <span className="size-36 self-end relative top-8">
                      &#8221;
                    </span>
                  </p>
                  <div className="put-div m-0-auto w-full lg:w-4/5 md:w-full sm:w-4/5 relative">
                    <span className="font-semibold color-363636f size-14">Spread the love, not the hate</span>
                    <div className="flex align-center -space-x-1">
                      <input
                        type="text"
                        placeholder="Say something positive..."
                        className="outline-none w-full px-3 border h-10"
                      />
                      <button className="flex outline-none no-outlines align-center text-white border-col-yellow back-yellow space-x-1 px-0 button h-10 ">
                        <svg
                          className="h-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="font-semibold size-14 hidden sm:block">
                          Spread
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myhobbies"></div>
          <div className="currentwork"></div>
          <div className="myprojects"></div>
          <div className="otherportfolio"></div>
        </div>
      </Base>
    </>
  );
}
