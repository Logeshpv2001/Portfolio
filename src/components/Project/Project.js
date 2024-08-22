import React from "react";
import "./project.css";
import { GrGithub, GrLink } from "react-icons/gr";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import CRM from "../../images/CRM.png";
import lvfood from "../../images/LVFood.png";
// import Shopping from "../../images/Shoopingcart.png";
import quizapp from "../../images/Quiz-App.png";
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
            Developed a specialized E-commerce platform for the textile industry with two distinct panels: an 
Admin panel for managing products (adding and removing items) and a user interaction panel where 
customers can register, log in, and make purchases. Implemented secure authentication for both 
registration and login processes, ensuring user data protection and a seamless shopping experience. 
            </p>
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
           
          </div>
        </div>
        <div className="box">
          <img src={lvfood} alt="name" />

          <div className="overlay">
            <h3>Food Delivery App</h3>
            <p>
            Developed a dynamic food delivery platform with React and Vite for the frontend, 
            and Node.js, Express.js, and MongoDB for the backend. 
            The platform features two distinct panels: a User panel for customers to register,
             log in, browse food items (such as sandwiches, desserts, noodles), place orders,
              and complete transactions through an integrated payment gateway; and an Admin panel 
              where the admin can manage the menu by adding or removing products, track orders,
               and update the delivery status. All order details are securely stored in MongoDB,
                ensuring efficient order management and customer satisfaction. 
            </p>
           
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
            
          </div>
        </div>
        <div className="box">
          <img src={quizapp} alt="" />

          <div className="overlay">
            <h3>Quiz Web Application</h3>
            <p>
            Developed a responsive and user-friendly Quiz web application using React.js. The app allows users to customize their quiz experience by selecting criteria from a list of options. Users can then take the quiz, with their performance tracked and displayed on a real-time scoreboard. The application is designed with an intuitive interface to enhance user engagement and provide a seamless experience across various devices.
            </p>
            <BootstrapTooltip title="frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/Quiz-App-master.git"
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
                  href="https://quiz-app-lqzn.onrender.com/"
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
            <h3>To-Do List Application</h3>
            <p>
            Developed a simple and intuitive To-Do List application using React.js. The application allows users to manage their tasks efficiently by adding new to-do items, marking items as complete, and deleting tasks. Users can easily input tasks through a text box, with added tasks displayed in a list format. Each task can be marked as complete with a checkbox or removed using a delete button, providing a seamless and organized task management experience.
            </p>
            <BootstrapTooltip title="frontend source code">
              <button>
                {" "}
                <a
                  href="https://github.com/Logeshpv2001/Todo-List-Main.git"
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
                  href="https://todo-list-main-mfy9.onrender.com/"
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
