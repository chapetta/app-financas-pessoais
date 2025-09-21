import { Link } from "react-router-dom";


export const Register = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">

            <form className="flex flex-col white w-full max-w-[365px] p-8 gap-3 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

                <label htmlFor="name"
                    className="flex flex-col text-sm font-medium pb-2 gap-2 mb-0.5"
                >Name
                    <input type="text" id="name"
                    className="border"
                    />
                    
                </label>
                 <label htmlFor="email"
                    className="flex flex-col text-sm font-medium pb-2 gap-2 mb-0.5"
                >E-mail
                    <input type="email" id="email"
                    className="border"
                    />
                    
                </label>
                <label htmlFor="password"
                    className="flex flex-col text-sm font-medium gap-2"
                >Password
                    <input type="password" id="password" placeholder="Digite sua senha..."  />
                </label>
                <button
                    className="mt-4 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >Create Account 
                </button>

                <p>Already Have an account? <Link to="/"><span className="font-bold">Login</span></Link></p>
            </form>
        </div>
    );
};