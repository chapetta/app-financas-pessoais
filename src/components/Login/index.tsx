import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";


const loginUserSchema = z.object({
    email: z.email('Preencha o e-mail corretamente '),
    password: z.string().min(6, 'Verifique se a senha tem pelo menos 6 caracteres')
})


type loginUserFormData = z.infer<typeof loginUserSchema>

export const Login = () => {

    const navigate = useNavigate()

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<loginUserFormData>({
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(loginUserSchema)
    })

    const onSubmit: SubmitHandler<loginUserFormData> = () => {

        navigate('/profile')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">

            <form className="flex flex-col white w-full max-w-[365px] p-8 gap-3 rounded-lg shadow-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-2xl font-bold mb-4">Login</h1>

                <label htmlFor="email"
                    className="flex flex-col text-sm font-medium pb-2 gap-2 mb-0.5"
                >E-mail
                    <input type="email" id="email" placeholder="exemple@exemple.com" {...register('email')} 
                    className="border"
                    />
                </label>
                {errors?.email && <p className="text-red-600 pt-0.5 ">{errors?.email?.message}</p>}
                <label htmlFor="password"
                    className="flex flex-col text-sm font-medium gap-2"
                >Password
                    <input type="password" id="password" placeholder="Digite sua senha..."  {...register('password')} />
                </label>
                {errors?.password && <p className="text-red-600">{errors?.password?.message}</p>}
                <button
                    className="mt-4 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    disabled={isSubmitting}
                >Login
                </button>

                <p>Need to create an account? <Link to={'/register'}><span className="font-bold">Sign Up</span></Link></p>
            </form>
        </div>
    );
};
