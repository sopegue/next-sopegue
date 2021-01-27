import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./base.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Base({ children }) {
  return (
    <div>
      <Header>
        <div className="w-fit">
          <Link href="/">
            <a className="flex w-fit align-center space-x-1">
              <img className="rounded-full is-36x36" src="/3.png" />

              <span className="italic size-16 font-semibold color-363636f">
                Sopegue
              </span>
            </a>
          </Link>
        </div>
        <div className="hidden relative left-4 burgerking">
          <button className="button is-lights">
            <svg
              className="w-6 h-6 color-363636f"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex notburger align-center space-x-8">
          <a className="clickable flex align-center space-x-1 hover-whites">
            <span className="size-14 oeoe color-363636f font-semibold">
              My portfolios
            </span>
            <svg
              className="w-4 h-4 color-363636 whites self-center mt-1"
              fill="currentColor"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/1800/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <Link href="/">
            <a className="size-14 hover-whites font-semibold color-363636f">
              Projects
            </a>
          </Link>
          <a
            href="https://github.com/sopegue"
            target="_blank"
            className="flex align-center space-x-2"
          >
            {" "}
            <svg
              className="color-white"
              enableBackground="new 0 0 24 24"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/1800/svg"
            >
              <path
                d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.185 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.718.084-.718 1.185.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.184-.135-.298-.54-1.497.105-3.121 0 0 1.005-.318 3.3 1.189.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.189 3.285-1.189.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.184 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                fill="#3b3b3b"
              />
            </svg>
          </a>
          <a
            href="https://stackoverflow.com/users/9660648/sopoude"
            target="_blank"
          >
            <svg
              enableBackground="new 0 0 24 24"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/1800/svg"
            >
              <g fill="#ff9800">
                <path d="m6.444 14.839 10.338 2.196.433-2.089-10.338-2.212z" />
                <path d="m6.215 17.571h10.566v2.127h-10.566z" />
                <path d="m7.8 9.831 9.572 4.526.887-1.944-9.577-4.538z" />
                <path d="m17.373 14.358-.001-.001-.001.001z" />
              </g>
              <path
                d="m2 15.429v8.571h18.992v-8.571h-2.113v6.428h-14.766v-6.428z"
                fill="#757575"
              />
              <path
                d="m10.453 5.063 8.109 6.873 1.346-1.65-8.109-6.873z"
                fill="#ff9800"
              />
              <path
                d="m22 8.587-6.302-8.587-1.691 1.286 6.302 8.587z"
                fill="#ff9800"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sopoude" target="_blank">
            <svg
              enableBackground="new 0 0 112.196 112.196"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 112.196 112.196"
            >
              <g>
                <circle fill="#007AB9" cx="56.098" cy="56.097" r="56.098" />
                <g>
                  <path
                    fill="#F1F2F2"
                    d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
          <a href="https://twitter.com/SYSopegue" target="_blank">
            <svg
              height="20"
              width="20"
              xmlns="http://www.w3.org/1800/svg"
              viewBox="0 0 112.197 112.197"
              enableBackground="new 0 0 112.197 112.197"
            >
              <g>
                <circle fill="#1DA1F2" cx="56.099" cy="56.098" r="56.098" />
                <g>
                  <path
                    fill="#F1F2F2"
                    d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
			c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
			c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
			c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
			c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
			c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
			c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
			C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      </Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
