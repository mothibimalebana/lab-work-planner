import type { schoolDataPopUp } from "../../../types/student";

function ViewEmployee({fullName, modules, availability, view, title}: schoolDataPopUp ){
    return (
        <div className={view ? 'fixed z-10 left-0 top-0 w-full h-full' : 'hidden'}>
            <div className="modal-content">
                <div className="profile">
                    <div className="name">
                        <h3>{fullName}</h3>
                    </div>
                    <div className="duty"><h5>{title}</h5></div>
                </div>
                <div className="info">e
                    <div className="modules">
                        <div className="title"><h4>{modules}</h4></div>
                    </div>
                    <div className="availability">{availability}</div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee