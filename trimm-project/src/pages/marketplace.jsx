// src/pages/Marketplace.jsx
import React from 'react';
import { MapPin, Search, SlidersHorizontal, Star } from 'lucide-react';
import Rodape from '../components/Footer'; 

// Dados de exemplo para simular profissionais (como viriam do Supabase)
const professionals = [
    { id: 1, name: "Lucas Barber", specialty: "Barba Clássica & Fade", rating: 4.9, distance: "2.1km", img: "https://images.unsplash.com/photo-1621607512214-5f532a6be8b6?q=80&w=300&auto=format&fit=crop" },
    { id: 2, name: "Studio Curls & Cuts", specialty: "Cortes Femininos & Cor", rating: 4.7, distance: "0.8km", img: "https://images.unsplash.com/photo-1627993188583-057b545465e6?q=80&w=300&auto=format&fit=crop" },
    { id: 3, name: "Barbearia Vintage", specialty: "Estilo Retrô & Hot Towel", rating: 4.5, distance: "3.5km", img: "https://images.unsplash.com/photo-1549419194-e5657849e794?q=80&w=300&auto=format&fit=crop" },
    { id: 4, name: "Salão Elegance", specialty: "Maquiagem & Penteados", rating: 5.0, distance: "1.2km", img: "https://images.unsplash.com/photo-1608678667634-b20f925b4121?q=80&w=300&auto=format&fit=crop" },
];

// Card de Profissional (para a lista de resultados)
const ProfessionalCard = ({ pro }) => (
    <div className="bg-white p-4 rounded-xl shadow-md border border-dust-200 flex items-center gap-4 transition-transform hover:shadow-lg hover:scale-[1.01]">
        <img 
            src={pro.img} 
            alt={pro.name} 
            className="w-20 h-20 rounded-full object-cover shrink-0"
        />
        <div className="flex-grow">
            <h3 className="text-lg font-bold text-dust-900">{pro.name}</h3>
            <p className="text-sm text-dust-600 mb-1">{pro.specialty}</p>
            <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center text-yellow-500">
                    <Star size={14} className="mr-1" fill="currentColor" /> {pro.rating}
                </span>
                <span className="flex items-center text-dust-500">
                    <MapPin size={14} className="mr-1" /> {pro.distance}
                </span>
            </div>
        </div>
        <button className="bg-ocean-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-ocean-600 transition-colors shrink-0">
            Agendar
        </button>
    </div>
);


export default function Marketplace() {
    // 💡 Simulação de um filtro de backend/supabase
    // const [filters, setFilters] = useState({});
    // const { data: professionals } = useSupabaseQuery('professionals', filters); 

    return (
        <div className="min-h-screen font-sans text-dust-900 transition-colors duration-300"> 
        
           
           <main className="pt-24 bg-dust-50 min-h-[calc(100vh-100px)]">
              <div className="max-w-7xl mx-auto px-6 py-12">
                  <div className="text-center mb-10">
                      <h1 className="text-4xl font-display font-bold text-dust-900">
                          Seu Próximo Corte <span className="text-ocean-500">Começa Aqui.</span>
                      </h1>
                      <p className="text-lg text-dust-500">Descubra os melhores profissionais na sua região. Agende e pague em segundos.</p>
                  </div>

                  {/* Barra de Busca e Filtros */}
                  <div className="max-w-3xl mx-auto mb-12 flex gap-4 p-4 bg-white rounded-xl shadow-lg border border-dust-200">
                      
                      <div className="flex items-center flex-grow p-3 bg-dust-100 rounded-lg">
                          <Search size={20} className="text-dust-400 mr-3" />
                          <input 
                              type="text" 
                              placeholder="Buscar barbeiro, salão ou serviço..." 
                              className="w-full bg-transparent focus:outline-none text-dust-900 placeholder:text-dust-400"
                          />
                      </div>

                      <button className="flex items-center justify-center p-3 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors shrink-0">
                          <SlidersHorizontal size={20} />
                          <span className="hidden sm:inline ml-2">Filtros</span>
                      </button>
                  </div>

                  {/* Resultados do Marketplace */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-3">
                          <h2 className="text-xl font-bold mb-4 text-dust-900 border-b border-dust-200 pb-2">
                             Profissionais Próximos (4 resultados)
                          </h2>
                      </div>
                      
                      {professionals.map(pro => (
                          <ProfessionalCard key={pro.id} pro={pro} />
                      ))}
                      
                      {/* Placeholder para a visualização de Vagas */}
                      <div className="md:col-span-2 lg:col-span-3 bg-dust-100 p-6 rounded-xl border border-dust-200 text-center">
                          <p className="text-lg font-medium text-dust-600">
                             💡 **Ideia de Backend:** Esta lista seria populada por dados de uma tabela `professionals` no Supabase, filtrados por localização e tipo de serviço.
                          </p>
                      </div>

                  </div>
              </div>
           </main>
           <Rodape />
        </div>
    );
}