import CustomButton from '../components/CustomButton/CustomButton';

const Login = () => {
    return (
        <div className="hero h-full bg-login bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 
        before:absolute before:top-0 before:z-10 min-h-screen mt-20 xl:mt-0">
            <div className="hero-content flex flex-col relative z-20">
                <div className="text-center lg:text-left">
                    <h1 className="h1 text-5xl font-bold text-white mb-6">Sign In now!</h1>
                </div>
                <form className="card border border-accent-100 hover:bg-primary-300/80
                     transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto rounded-none">
                    <div className="card-body">
                        <fieldset className="fieldset gap-4 text-lg font-roboto font-medium">
                            <div>
                                <label className="fieldset-label mb-2 text-white">Email</label>
                                <input type="email" className="input focus:outline-accent-100" placeholder="Email" />
                            </div>
                            <div>
                                <label className="fieldset-label mb-2 text-white">Password</label>
                                <input type="password" className="input focus:outline-accent-100" placeholder="Password" />
                            </div>
                            <div><a className="link link-hover text-white">Forgot password?</a></div>
                            <CustomButton containerStyles="w-full h-[55px]" text="Sign in"></CustomButton>
                        </fieldset>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login;