import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './UiComponents';
import { Check, Clock, Users, DollarSign, X } from 'lucide-react';

// Componente para o Card de Preço (com animação de hover)
const PricingCard = ({ plan, features, price, isFeatured }) => {
    // Função para definir o ícone baseado na feature (mantendo a consistência visual)
    const Icon = (key) => {
        if (key.includes("Agenda")) return <Clock size={16} className="text-ocean-500" />;
        if (key.includes("Equipe")) return <Users size={16} className="text-ocean-500" />;
        if (key.includes("Financeira")) return <DollarSign size={16} className="text-ocean-500" />;
        return <Check size={16} className="text-ocean-500" />;
    };

    return (
        <motion.div
            whileHover={{ y: -5 }} // Animação de hover
            className={`p-10 rounded-2xl border transition-all duration-300 shadow-lg ${
                isFeatured 
                ? 'bg-dust-50 border-ocean-500 ring-2 ring-ocean-200 shadow-ocean-500/20' 
                : 'bg-white border-dust-200 shadow-dust-300/10'
            }`}
        >
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-dust-900 font-display">{plan}</h3>
                {isFeatured && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-ocean-500 text-white rounded-full">
                        Popular
                    </span>
                )}
            </div>

            <p className="text-4xl font-extrabold text-dust-900 mb-2">
                {price === 0 ? "Grátis" : (
                    <>
                        <span className="text-xl align-top">R$</span>{price.toFixed(2).replace('.', ',')}
                    </>
                )}
            </p>
            <p className="text-sm text-dust-500 mb-8">
                {price === 0 ? "Para sempre, para 1 profissional." : "por mês, cobrado anualmente."}
            </p>

            <Button
                variant={isFeatured ? 'primary' : 'outline'}
                className="w-full mb-10 h-11"
            >
                {isFeatured ? 'Começar com Pro' : 'Quero Ser Grátis'}
            </Button>

            <ul className="space-y-4 text-dust-700 text-sm">
                <p className="font-semibold text-dust-900 mb-4 uppercase text-xs tracking-wider">Funcionalidades Incluídas:</p>
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {feature.includes('(Não Incluído)') ? (
                            <X size={16} className="text-dust-400" />
                        ) : (
                            Icon(feature)
                        )}
                        <span className={feature.includes('(Não Incluído)') ? 'text-dust-400 line-through' : 'text-dust-700'}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function PricingPlans() {
    const plans = [
        {
            plan: "Gratuito",
            price: 0.00,
            isFeatured: false,
            features: [
                "Agenda para 1 Profissional",
                "Perfil Público no Marketplace",
                "Gestão de Clientes",
                "Notificações de Agendamento (Email)",
                "Relatórios Básicos de Vendas",
                "Suporte por Email (3 dias)",
                "Gestão de Equipe (Não Incluído)",
                "IA Financeira Avançada (Não Incluído)",
            ],
        },
        {
            plan: "Pro",
            price: 24.90,
            isFeatured: true,
            features: [
                "Agenda Ilimitada (Múltiplos Profissionais)",
                "Gestão de Equipe e Comissões",
                "IA Financeira Avançada",
                "Notificações de Agendamento (SMS e WhatsApp)",
                "Relatórios Avançados e Previsões",
                "Marketplace Dropshipping",
                "Suporte Prioritário (Chat)",
                "Domínio Personalizado (Ex: meunome.fivonn.com)",
            ],
        },
    ];

    return (
        // Usando o estilo de seção do tema claro
        <section id="planos" className="py-32 bg-dust-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-display font-bold text-dust-900 mb-4">Escolha o plano perfeito.</h2>
                    <p className="text-xl text-dust-500 max-w-2xl mx-auto">
                        Comece grátis, aumente seu negócio e migre para o Pro quando precisar de mais automação e equipe.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard 
                            key={plan.plan}
                            plan={plan.plan}
                            features={plan.features}
                            price={plan.price}
                            isFeatured={plan.isFeatured}
                        />
                    ))}
                </div>
                
                <div className="mt-16 text-center text-dust-500 text-sm">
                    <p>Precisa de algo customizado para grandes redes? <a href="#" className="text-ocean-500 font-medium hover:underline">Fale com nossa equipe de Vendas.</a></p>
                </div>
            </div>
        </section>
    );
}