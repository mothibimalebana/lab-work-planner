import back from "../assets/svg/Bacj.svg"



const LoginPage: React.FC = () => {

    return(
        <div className="login-container bg-[background: linear-gradient(135deg,#F8FAFC_0%,#FFF_50%,#F0FDFA_100%),#FFF] w-full h-full flex justify-center items-center">
            <div className="login h-full flex flex-col justify-center w-md font-[Arimo] text-[#0A0A0A]">
                <div className="exit flex gap-0.5"><img src={back} alt="" /> <p>Back</p></div>
                <form className="flex p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)] mt-5 flex-col" action="#" method="post">
                    <h5 className="text-[#0A0A0A]">Login</h5>
                    <p className="text-[#717182]">Sign in to your account</p>
                    <fieldset className="flex gap pt-6 flex-col">
                        <label htmlFor="studentNumber">Student Number</label>
                        <input className="h-9 p-[0.25rem_0.75rem] rounded-sm bg-[#F3F3F5] text-[#717182]" name="studentNumber" type="text" placeholder="202103987"/>

                        <label className="pt-4" htmlFor="password">Password</label>
                        <input className="h-9 p-[0.25rem_0.75rem] rounded-md bg-[#F3F3F5] text-[#717182]" type="password" name="password" placeholder="MyPassword@123" id="" />
                    </fieldset>
                    <button className="text-white bg-[#021E35] mt-6 rounded-sm" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage