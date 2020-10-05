import React from "react";
import {useHistory} from "react-router-dom";

function GestionCandidatButton() {

    const history = useHistory();

    const gestCandidat = () => history.push("/gestioncandidat")

    return (
        <div>
            <button className="h-10 text-center w-24 content-center h-55 w-20 text-xs mx-2 bg-white text-teal-500 font-medium border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl"
            onClick = {gestCandidat}>Candidats</button>
        </div>
    )
}

export default GestionCandidatButton