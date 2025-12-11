import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Key, User, ArrowRight, Briefcase, Building, Zap } from 'lucide-react';
import { FaGoogle, FaApple, FaGithub } from 'react-icons/fa';
import { Button, Logo } from './UiComponents';

// Componente para campos de input customizados
const InputField = ({ icon: Icon, placeholder, type = 'text', ...props }) => (
    <div className="relative">
        <Icon className=" text-red-900 absolute left-4 top-1/2  w-5 h-5 " />
        <input
            type={type}
            placeholder={placeholder}
            className="w-full pl-6 pr-4 py-3 border border-dust-200 rounded-lg text-dust-900 placeholder-dust-500 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors bg-white backdrop-blur-sm font-display"
            {...props}
        />
    </div>
);

// NOVO Componente: Selector de Tipo de Usuário (Empresa, Cliente, Profissional)
const UserTypeSelector = ({ selectedType, setSelectedType }) => {
    const types = [
        // Usamos Briefcase para Profissional (autônomo)
        { key: 'profissional', label: 'Profissional', icon: Briefcase },
        // Usamos User para Cliente
        { key: 'cliente', label: 'Cliente', icon: User },
        // Usamos Building para Empresa (Salão/Barbearia)
        { key: 'empresa', label: 'Empresa', icon: Building },
    ];

    return (
        <div className="grid grid-cols-3 gap-3 mb-6">
            {types.map((type) => {
                const isSelected = selectedType === type.key;
                return (
                    <motion.button
                        key={type.key}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedType(type.key)}
                        className={`
                            flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-300
                            ${isSelected
                                ? 'bg-ocean-50  border-ocean-500 shadow-md text-homem-1000'
                                : 'bg-dust-50 border-dust-200 text-dust-500 hover:bg-dust-100'
                            }
                        `}
                    >
                        <type.icon className="w-5 h-5 mb-1 " />
                        <span className="text-xs font-medium">{type.label}</span>
                    </motion.button>
                );
            })}
        </div>
    );
};

// Componente principal do card de Autenticação
export default function AuthCard() {
    const [isLogin, setIsLogin] = useState(true);
    // Estado para o tipo de usuário, padrão 'profissional'
    const [userType, setUserType] = useState('profissional'); 

    const title = isLogin ? "Bem-vindo de volta" : "Crie sua conta Fivonn";
    const subtitle = isLogin ? "Acesse sua plataforma all-in-one." : "Escolha seu perfil e comece a escalar seu negócio.";
    const buttonText = isLogin ? "Acessar Plataforma" : "Cadastrar";
    const EsqueciSenha = isLogin ? "Esqueceu sua senha?" : "Ao criar uma conta, você concorda com os Termos de Uso.";

    const AuthSwitch = () => (
        //SELECTOR DE LOGIN / CRIAR CONTA
        <div className="flex bg-homem-1000 dark:bg-white p-1 rounded-xl mb-8">
            <button 
                onClick={() => setIsLogin(true)} 
                className={`flex-1 py-2 text-sm font-medium transition-all duration-300 ${isLogin ? 'bg-white font-display dark:bg-homem-1000 shadow-md text-homem-1000 dark:text-dust-100 rounded-lg' : 'text-dust-500 hover:text-dust-100 dark:hover:text-homem-1000 '}`}
            >
                Login
            </button>
            <button 
                onClick={() => setIsLogin(false)} 
                className={`flex-1 py-2 text-sm font-medium transition-all duration-300 ${!isLogin ? 'bg-white shadow-md dark:bg-homem-1000 text-dust-900  dark:text-dust-100  rounded-lg' : 'text-dust-500 hover:text-dust-100 dark:hover:text-homem-1000'}`}
            >
                Cadastrar-se 
            </button>
        </div>
    );

    const FormFields = (
        <AnimatePresence mode='wait'>
            <motion.div
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className=" space-y-4"
            >
                {!isLogin && (
                    <>
                        {/* LOGIN - INPUTS  */}
                        <UserTypeSelector 
                            selectedType={userType} 
                            setSelectedType={setUserType} 
                        />
                        <InputField 
                            icon={User} 
                            placeholder={userType === 'empresa' ? "Nome da Empresa / Salão" : "Nome Completo"} 
                        />
                        {/* Campo CNPJ opcional para Empresas */}
                        {userType === 'empresa' && (
                             <InputField 
                                icon={Zap} 
                                placeholder="CNPJ (opcional)" 
                            />
                        )}
                    </>
                )}
                <InputField 
                    icon={Mail} 
                    placeholder="E-mail" 
                    type="email" 
                />
                <InputField 
                    icon={Key} 
                    placeholder="Senha" 
                    type="password" 
                />
                
                <Button 
                    variant="primary" 
                    className="w-full text-lg py-3 mt-6"
                >
                    {buttonText} <ArrowRight className=" text-center flex justify-center ml-1 w-5 h-5" />
                </Button>
                <a href="/" className="text-sm text-homem-400 hover:text-homem-400 font-medium justify-end flex block font-display">
                {EsqueciSenha}
                </a>
            </motion.div>
        </AnimatePresence>
    );

    const SocialLogin = (
        <div className="mt-6 space-y-3">
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-homem-1000 px-2 text-dust-400 dark:text-dust-400/50 z-10">ou continue com</span>
                <div className="absolute inset-x-0 top-1/2 h-px bg-dust-200 dark:bg-dust-600" />
            </div>
            <div className="items-center justify-center  w-full grid grid-cols-2 gap-3 pt-3">
                <Button variant="outline" className="text-dust-700 hover:bg-dust-100/50 dark:text-gray-300 dark:hover:bg-gray-700/50">
                    <FaGoogle className="w-4 h-4 mr-2" /> Google
                </Button>
                <Button variant="outline" className="text-dust-700 hover:bg-dust-100/50 dark:text-gray-300 dark:hover:bg-gray-700/50">
                    <FaApple className="w-4 h-4 mr-2" /> Apple
                </Button>
                
            </div>
        </div>
    );

    return (
 <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
 className="w-full max-w-4xl mx-auto mt-20 px-4"

>


            <div className="text-center mb-6">
                <h2 className="mb-4 font-display text-3xl dark:text-white">fivonn</h2>
                <h1 className="text-4xl  font-display font-bold text-dust-900 dark:text-white">{title}</h1>
                <p className="text-dust-500 text-sm font-display dark:text-white/30">{subtitle}</p>
            </div>
            
            <AuthSwitch />
            
            {FormFields}

            {SocialLogin}

            <p className="text-center text-xs text-dust-500 mt-8">
                {isLogin ? "Esqueceu sua senha?" : "Ao criar uma conta, você concorda com os "} 
                <a href="#" className="text-ocean-500 hover:text-ocean-600 font-medium">Termos de Uso.</a>
            </p>
        </motion.div>
    );
}