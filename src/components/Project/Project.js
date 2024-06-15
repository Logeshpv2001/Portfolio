import React from "react";
import "./project.css";
import { GrGithub, GrLink } from "react-icons/gr";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import CRM from "../../images/CRM.png";
import shoopingcart from "../../images/Shooping cart.png";
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
            <p>
              The MERN CRM Website Created using React.js (for front-end)
              Node.js (for back-end) and it connected and stored datas in
              Mongodb Atlas.
            </p>
            <BootstrapTooltip title="Frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/CRM-Frontend.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
                <a
                  href="https://crm-ecommerce-admin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub className="project-icons" />
                </a>
              </button>
            </BootstrapTooltip>

            <BootstrapTooltip title="Backend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/CRM-Backend.git"
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
                  href="https://crm-ecommerce-frontend-new.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLink className="project-icons" />
                </a>
                <a
                  href="https://crm-ecommerce-admin-h6s0tq8f6-logeshpv08s-projects.vercel.app/"
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
          <img src={shoopingcart} alt="name" />

          <div className="overlay">
            <h3>Shopping Cart</h3>
            <p>
              The MERN Shopping Cart users to add and remove items from the
              cart.
            </p>
            <BootstrapTooltip title="Frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/Shopping-cart-task.git"
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
                  href="https://neon-cannoli-491729.netlify.app/"
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
          <img src={formik} alt="" />

          <div className="overlay">
            <h3>Formik Validation</h3>
            <p>
              an admin dashboard for a library management system that allows
              users to manage book and author details
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
