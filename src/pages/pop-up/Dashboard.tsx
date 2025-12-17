import type { ViewEmployeeProps } from "../../../types/viewEmployee"

function ViewEmployee( {student, view, setView, setEmployee }: ViewEmployeeProps ){

    function preventChildClose(event: React.MouseEvent<HTMLDivElement>){
        event.stopPropagation();
    }

    function closeModal(){
        setEmployee("");
        setView?.(false);
    }

    return (
        <div onClick={closeModal} className={view ? 'fixed z-10 font-[Arimo] bg-[#FBFBFB] left-0 top-0 grid place-items-center w-full h-full' : 'hidden'}>
            <div onClick={preventChildClose} className="modal-content flex flex-col gap-6 p-13 border border-solid rounded-3xl! border-[rgba(0,0,0,0.10)] shadow-[0_20px_30px_-6px_rgba(0,0,0,0.10),0_8px_12px_-8px_rgba(0,0,0,0.10)] w-4xl h-100">
                <div className="profile flex flex-col gap-4">
                    <div className="name">
                        <h3 className="text-4xl font-bold text-[#0A0A0A]">{student.fullName}</h3>
                    </div>
                    <div className="duty"><h5 className=" text-3xl font-light text-[#717182]">{student.role}</h5></div>
                </div>
                <div className="info">
                    <div className="modules">
                        <div className="title">
                            <h4 className="text-2xl font-bold text-[#0A0A0A] mb-3.5">Enrolled modules</h4>
                        </div>
                        <div className="p-modules flex gap-4">
                            {student.modules?.map((eachModule, id) => <p key={id} className="bg-[#ECEEF2] py-1 px-4 rounded-md">{`${eachModule}`}</p> )}
                        </div>
                    </div>
                    <div className="availability mt-3.5">
                        <h4 className="text-2xl font-bold text-[#0A0A0A] mb-2">Availability</h4>
                        <p>Available for {35 - student.shifts.length} out of 35 time slots</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee