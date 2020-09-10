import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";
import ProfilButton from "./ProfilButton";
import ArchiveButton from "./role0/ArchiveButton";
import SaveButton from "./role0/SaveButton";
import GestionThemeButton from "./role1/GestionThemeButton";
import GestionConcoursButton from "./role1/GestionConcoursButton";
import GestionCandidatButton from "./role2/GestionCandidatButton";
import GestionEqRecrutButton from "./role3/GestionEqRecrutButton";
import GestionEqGestConcoursButton from "./role3/GestionEqGestConcoursButton";



function NavigationMenu(props) {


  let affBouton
  function setRole1() {
    props.setRole("1")
  }

  function setRole0() {
    props.setRole("0")
  }

  function setRole2() {
    props.setRole("2")
  }

  function setRole3() {
    props.setRole("3")
  }

  if (props.role === null) {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 md:pt-4">
        <LoginSliderRight />
        <RegisterSliderRight />
      </div>
  }

  if (props.role === "0") {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <ArchiveButton />
        <SaveButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "1") {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <GestionThemeButton />
        <GestionConcoursButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "2") {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <GestionCandidatButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "3") {
    affBouton =
      <div className="flex justify-center col-start-8 col-end-12 right-align md:pt-4">
        <GestionEqRecrutButton />
        <GestionEqGestConcoursButton />
        <ProfilButton />
      </div>
  }
  return (

    <div className="w-full fixed z-50 bg-teal-100 text-white p-1 md:items-center md:grid grid-cols-12">
      <div>
        <span className="flex justify-center "><Link to="/"><img className="m-3 h-16 md:h-auto md:w-auto"src={logo2} alt="Maxiconcours"></img></Link></span>
      </div>
      <div className="flex justify-center col-start-4 col-end-7 md:pt-4">
        <span className="my-4 text-teal-500  lg:w-full"><SearchBar /></span>
      </div>
      {affBouton}
      <div className="absolute">
        <button onClick={setRole0} className="bg-gray-500 rounded mx-2">candidat</button>
        <button onClick={setRole1} className="bg-gray-500 rounded mx-2">concours</button>
        <button onClick={setRole2} className="bg-gray-500 rounded mx-2">recrut</button>
        <button onClick={setRole3} className="bg-gray-500 rounded mx-2">admin</button>
      </div>
    </div>
  );
}

export default NavigationMenu;
