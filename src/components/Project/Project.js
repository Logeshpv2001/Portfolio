import React from "react";
import "./project.css";
import { GrGithub, GrLink } from "react-icons/gr";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import CRM from "../../images/CRM.png";
import lvfood from "../../images/LVFood.png";
// import Shopping from "../../images/Shoopingcart.png";
import formik from "../../images/Formik.png";
import redux from "../../images/reactredux.png";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 16,
  },
}));

export default function Project() {
  // const github = "https://github.com/Logeshpv2001";

  return (
    <>
      <div className="project-details" id="projects">
        <h1 className="underline-box">Projects</h1>
      </div>

      <div className="pro-container portfolio_container flip-card-front">
        <div className="box">
          <img src={CRM} alt="name" />

          <div className="overlay">
            <h3>Customer Relationship Management </h3>
           
            <BootstrapTooltip title="Frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/MERN_Ecommerce.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
                {/* <a
                  href="https://crm-ecommerce-admin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a> */}
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Backend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/MERN_Ecommerce.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Live Demo">
              <button>
                {" "}
                <a
                  href="https://mern-ecommerce-frontend-kw36.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
                <a
                  href="https://mern-ecommerce-admin-b1i8.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>
            <p>
            Developed a specialized E-commerce platform for the textile industry with two distinct panels: an 
Admin panel for managing products (adding and removing items) and a user interaction panel where 
customers can register, log in, and make purchases. Implemented secure authentication for both 
registration and login processes, ensuring user data protection and a seamless shopping experience. 
            </p>
          </div>
        </div>
        <div className="box">
          <img src={lvfood} alt="name" />

          <div className="overlay">
            <h3>Food Delivery App</h3>
           
            <BootstrapTooltip title="Frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/food-del.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Live Demo">
              <button>
                {" "}
                <a
                  href="https://food-del-frontend-p1nr.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
                <a
                  href="https://food-del-admin-0drg.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>
            <p>
            Developed a food delivery application using React.js, featuring a responsive and intuitive UI for 
browsing restaurants, viewing menus, and placing orders. Implemented local state management for 
dynamic user interactions and real-time updates. Enhanced user experience with search and filter 
options, ensuring cross-platform compatibility. 
            </p>
          </div>
        </div>
        <div className="box">
          <img src={formik} alt="" />

          <div className="overlay">
            <h3>Library Management</h3>
            <p>
            The MERN admin dashboard for a library management system that allows users to manage book and author details
            </p>
            <BootstrapTooltip title="frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/React-Formik-Validation-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Live Demo">
              <button>
                {" "}
                <a
                  href="https://poetic-tanuki-f61282.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>
          </div>
        </div>
        <div className="box">
          <img src={redux} alt="" />

          <div className="overlay">
            <h3>React Redux App</h3>
            <p>
              A React Redux App made with a MERN Stack (MongoDB, Express,
              React.js, and Node.js) it will Increase or Decrease the per unit
              Quantity that will automatically updates the total Quantity and
              Amount.
            </p>
            <BootstrapTooltip title="frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/React-redux-app-2.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Live Demo">
              <button>
                {" "}
                <a
                  href="https://react-redux-3-nu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>
          </div>
        </div>
      </div>
    </>
  );
}
