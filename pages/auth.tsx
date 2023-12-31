import axios from 'axios';
import { useCallback, useState  } from "react";
import Input from "@/components/input";
import { signIn } from 'next-auth/react';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/'
            });

        } catch (error) {
            console.log(error);
        }
    }, [email, password]);
    
    const register = useCallback(async () => {
        try{
            await axios.post('/api/register', {
                email,
                name,
                password,
            });
            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);
    
    return (
        <div className="relative h-full w-full bg-slate-900 bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <span className="h-4 lg:h-7 text-amber-700 font-extrabold text-lg">EnjoyLand</span>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant == 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' &&(
                                <Input
                                    label="Username"
                                    onChange={(ev:any)  => setName(ev.target.value)}
                                    type='Username'
                                    id="name"
                                    value={name}                         
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev:any)  => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}                         
                            />
                            <Input
                                label="Password"
                                onChange={(ev:any)  => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}                         
                            />
                        </div>
                        <button onClick={variant ===  'login' ?  login : register} className="bg-amber-700 text-white w-full py-3 rounded-md mt-10 hover:bg-amber-900 transition">
                            {variant == 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant == 'login' ?  'First on using  EnjoyLand?' : 'Already had an account?'}
                            <span onClick={toggleVariant} className=" text-white ml-1 hover:underline cursor-pointer">
                               {variant == 'login' ? 'Create an account' : 'Login'} 
                            </span>
                        </p>
                    </div> 
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2615067240084342"
     crossOrigin="anonymous"></script>
                </div>
            </div>
        </div>
    );
}
export default Auth;