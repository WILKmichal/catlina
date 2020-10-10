import React from "react";
import TstFormBody from '../Components/TstFormBody'
import TstFormHeader from '../Components/TstFormHeader'
import Loader from '../Components/Loader'
import { useAxiosPost } from '../Hooks/PostRequest'

function RecruitementTeam(props) {

    const url = `http://localhost:3001/maxiconcours/searchAdmin`

    let user = useAxiosPost(url)


    let content = null
    let loader = null

    if (user.error) {
        content = <p>erreur pas d'employé</p>
    }

    if (user.loading) {
        loader = <Loader></Loader>
    }

    if (user.data) {
        content =
            user.data.map((ID_ROLE, key) =>
                <div key={key}>
                    <TstFormBody user={ID_ROLE} showP={props.showPro} setShowP={props.setShowPro} />
                </div>
            )
    }
    return (
        <div>
            <div className="italic border-b p-3">
                <h1>vous etes sur la page /RecruitementTeam</h1>
            </div>
            <div className="container mx-auto px-4 pt-20 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Recruitement Team</h2>
                    </div>

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                            <TstFormHeader />
                            {loader}
                            {content}



                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">

                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Prec
                                      </button>
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Suiv
                                      </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecruitementTeam