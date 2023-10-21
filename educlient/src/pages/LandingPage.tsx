/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import logo from "../assets/edupluss.png";
import admin from "../assets/AdminPre.jpg";
import activ from "../assets/ActivitiesPre.jpg";
import work1 from "../assets/work1.jpg";
import eval1 from "../assets/eval1.jpg";
import planning1 from "../assets/planning1.png";

import { Link } from "react-router-dom";

import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Divider } from "primereact/divider";
import { NodeRef, Page } from "../utils/types/types";
import { classNames } from "primereact/utils";

const LandingPage: Page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };

  const videoRef: any = useRef(null);

  const handleVideoClick = () => {
    const video: any = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="landing-wrapper overflow-hidden">
        <header
          id="navbar"
          className="py-2 cursor-auto px-4 mx-0 bg-[#ffffffa1] hover:bg-[#ffffff] z-10 lg:px-8 w-12 flex align-items-center justify-content-between fixed lg:fixed transition-transform duration-700 ease-in-out translate-y-[-90px] hover:-translate-y-0 over:-translate-y-0 hover:shadow-xl hover:transition-shadow-duration-700-ease-in-out"
        >
          <img src={logo} alt="Sakai Logo" className="mr-0 lg:mr-2 h-[80px]" />
          <StyleClass
            nodeRef={menuRef as NodeRef}
            selector="@next"
            enterClassName="hidden"
            leaveToClassName="hidden"
            hideOnOutsideClick
          >
            <i
              ref={menuRef}
              className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2 bg-[#ffffff]",
              { hidden: isHidden }
            )}
            style={{ top: "100%" }}
          >
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
              <li>
                <a
                  href="#home"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Inicio</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Características</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Precios</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              <Link to={"/login"}>
                <Button
                  label="Ingresar"
                  rounded
                  className="border-none ml-5 font-light line-height-2 bg-blue-500 hover:bg-blue-700  text-white"
                ></Button>
              </Link>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "0px",
              height: "105px",
              width: "100%",
              background: "transparent",
            }}
          ></div>
        </header>
        <section
          id="hero"
          className="flex flex-column pt-4 mt-7 lg:mt-32 xs:pt-1 px-4 lg:px-8 overflow-hidden relative "
        >
          <div
            className="absolute top-0 left-0 w-full h-full md:block hidden"
            style={{
              background: "linear-gradient(20deg, #5f9ae8 0%, #665fe8 20%)",
              clipPath: "ellipse(36.5% 85% at 100% 50%)",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 md:block hidden"
            style={{
              transform: "translate(52%, 40px)", // Centra la imagen
            }}
          >
            <img
              src={admin}
              alt="Admin Image"
              className="w-3 md:w-5 shadow-2xl"
            />
          </div>
          <div
            className="absolute right-0 top-0 md:block hidden"
            style={{
              transform: "translate(58%, 150px)", // Centra la imagen
            }}
          >
            <img
              src={activ}
              alt="Admin Image"
              className="w-1 md:w-5 shadow-2xl"
            />
          </div>
          <div className="mx-2 md:mx-2 mt-0 md:mt-4 relative">
            <div className="xl:max-w-xl lg:max-w-md md:max-w-sm">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 line-height-2">
                <span className="font-light block">
                  Mejora el desempeño laboral de tus colaboradores con una
                </span>
                <span className="text-blue-500 xs:text-2xl">
                  capacitación efectiva
                </span>
              </h1>
              <p className="font-normal lg:text-2xl line-height-3 mt-5 md:mt-3 text-gray-700">
                Capacita a tu equipo de trabajo creando rutas de aprendizaje
                para cada uno de ellos, llevando el control de su progreso y
                evaluando sus conocimientos.
              </p>
              <div className="flex max-w-md justify-content-between">
                <Button
                  type="button"
                  label="Quiero una demo"
                  rounded
                  className="text-xl border-none mt-3 p-0 lg:p-2 border-blue-500  border-3 font-normal line-height-3 px-1 bg-blue-500 hover:bg-blue-700 hover:shadow-2xl text-white"
                />
                <Button
                  type="button"
                  label="Contáctanos"
                  rounded
                  className="text-xl border-none mt-3 border-blue-500 border-3 font-normal line-height-3 px-3 text-blue-500 hover:bg-blue-700 hover:shadow-2xl hover:text-white"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="presentation"
          className="flex flex-column pt-4 mt-10 lg:mt-48 xs:pt-1 px-4 lg:px-4 overflow-hidden relative "
        >
          <div className="grid justify-content-center">
            <div className="flex flex-column-reverse lg:flex-row col-12 text-center mt-8 mb-28 lg:max-w-7xl max-w-xl ">
              <div
                className="flex bg-black border-2 border-blue-100 rounded-lg overflow-hidden shadow-2xl transform scale-100 xl:hover:scale-125 lg:hover:scale-110 transition-transform duration-500 ease-in-out"
                onClick={handleVideoClick}
              >
                <video
                  ref={videoRef}
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  autoPlay
                  controls
                ></video>
              </div>

              <div className="mx-5 px-5 py-12 lg:py-0">
                <h2 className="text-900 font-semibold mb-2">
                  Desarrolla las habilidades y aptitudes de tus empleados
                </h2>
                <span className="text-600 text-2xl">
                  Capacita a tu equipo de trabajo creando rutas de aprendizaje
                  para cada uno de ellos, llevando el control de su progreso y
                  evaluando sus conocimientos
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="planCards"
          className="flex flex-column pt-4 mt-10 lg:mt-12 xs:pt-1 px-4 lg:px-4 overflow-hidden relative"
        >
          <div className="grid justify-content-center lg:mx-8 ">
            <div className="flex flex-column lg:flex-row col-12 text-center mt-8 mb-28 lg:max-w-7xl max-w-md ">
              <div className="shadow-2xl m-4 flex card-container ">
                <div className="card p-5 flex flex-column justify-between transform transition-transform scale-100 md:hover:scale-105 cursor-pointer">
                  <h2 className="font-semibold flex ">
                    <img
                      src={planning1}
                      alt="Admin Image"
                      className="w-120 md:w-120"
                    />
                  </h2>
                  <span className="text-xl flex-column">
                    <h3 className="font-bold">1. Planea</h3>
                    Capacita a tu equipo de trabajo creando rutas de aprendizaje
                    para cada uno de ellos, llevando el control de su progreso y
                    evaluando sus conocimientos
                  </span>
                </div>
              </div>
              <div className="shadow-2xl m-4 flex card-container">
                <div className="card p-5 flex flex-column justify-between transform transition-transform scale-100 md:hover:scale-105 cursor-pointer">
                  <h2 className=" font-semibold flex ">
                    <img
                      src={work1}
                      alt="Admin Image"
                      className="w-120 md:w-120"
                    />
                  </h2>
                  <span className="text-xl flex-column">
                    <h3 className="font-bold">2. Ejecuta</h3>
                    Capacita a tu equipo de trabajo creando rutas de aprendizaje
                    para cada uno de ellos, llevando el control de su progreso y
                    evaluando sus conocimientos
                  </span>
                </div>
              </div>
              <div className="shadow-2xl m-4 flex card-container">
                <div className="card p-5 flex flex-column justify-between transform transition-transform scale-100 md:hover:scale-105 cursor-pointer">
                  <h2 className=" font-semibold flex">
                    <img
                      src={eval1}
                      alt="Admin Image"
                      className="w-120 md:w-120"
                    />
                  </h2>
                  <span className="text-xl flex-column">
                    <h3 className="font-bold">3. Evalúa</h3>
                    Capacita a tu equipo de trabajo creando rutas de aprendizaje
                    para cada uno de ellos, llevando el control de su progreso y
                    evaluando sus conocimientos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
          <div className="grid justify-content-center">
            <div className="col-12 text-center mt-8 mb-4">
              <h2 className="text-900 font-normal mb-2">
                Características principales
              </h2>
              <span className="text-600 text-2xl">
                Tus empleados más eficientes que nunca...
              </span>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-flag text-2xl text-yellow-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Enfoque Específico</h5>
                  <span className="text-600">
                    Diseñado para la capacitación de personal
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-list text-2xl text-cyan-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Procesos</h5>
                  <span className="text-600">
                    Personaliza los procesos de tu empresa
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-indigo-200"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-users text-2xl text-indigo-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Cargos</h5>
                  <span className="text-600">
                    Establece los cargos específicos de tu empresa
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Gestión de usuarios</h5>
                  <span className="text-600">
                    Ten control sobre tus empleados en la plataforma
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-orange-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Interfaz Intuitiva</h5>
                  <span className="text-600">
                    Será muy sencillo hacer uso de Edupluss
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-pink-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Dark Mode</h5>
                  <span className="text-600">
                    Podrás hacer uso del modo oscuro
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-teal-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-youtube text-2xl text-teal-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Youtube</h5>
                  <span className="text-600">
                    Incluye videos de Youtube o sube los tuyos
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-blue-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-book text-2xl text-blue-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Metodología</h5>
                  <span className="text-600">
                    Tus empleados tendrán claras sus funciones
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-purple-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-lock text-2xl text-purple-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Privacidad</h5>
                  <span className="text-600">
                    Tu información será solo para tí
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          <div className="text-center">
            <h2 className="text-900 font-normal mb-2">Planes y Precios</h2>
            <span className="text-600 text-2xl">Invierte en tu negocio...</span>
          </div>

          <div className="grid justify-content-between mt-8 md:mt-0">
            <div className="col-12 lg:col-4 p-0 md:p-3">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Emprendedores</h3>

                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">
                    $150.000
                  </span>
                  <span className="text-600">mensual</span>
                  <Button
                    label="Empezar Ahora"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">2 Usuarios</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Acceso a Dashboard
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Soporte Limitado
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Normal</h3>
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">
                    $500.000
                  </span>
                  <span className="text-600">mensual</span>
                  <Button
                    label="Lo quiero!"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">10 Usuarios</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Dashboard</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Soporte Ilimitado
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Empresarial</h3>
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">
                    $1.000.000
                  </span>
                  <span className="text-600">mensual</span>
                  <Button
                    label="Comprar Ahora!"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Usuarios Ilimitados
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Dashboard Completo
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Soporte Ilimitado
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 px-4 mx-0 bg-slate-100 w-[100%]">
          <div className="grid justify-content-between">
            <div className="col-12 md:col-2 m-1">
              <img
                src={logo}
                alt="footer sections"
                width="50"
                height="50"
                className="mr-2"
              />
              <span className="font-medium text-3xl text-900">Edupluss</span>
            </div>

            <div className="col-12 md:col-10 lg:col-7">
              <div className="flex text-center items-center justify-center md:text-left">
                <div className="col-12 md:col-3">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Inicio
                  </h4>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Características
                  </h4>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Precios
                  </h4>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Ingresar
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
