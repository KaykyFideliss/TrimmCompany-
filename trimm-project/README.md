# 🚀 Fivonn — Landing Page (Protótipo Atualizado)

Este documento resume as principais alterações, melhorias e expansões realizadas no protótipo da **Landing Page da Fivonn**, desenvolvido em **React + Tailwind CSS**.

---

## 🎯 Objetivo Principal

Refatorar a estrutura base do projeto,melhorar o layout e **adicionar novas páginas essenciais** (Planos, Sobre, Marketplace).  
Além disso, preparar toda a base para **futura integração com Supabase**.

---

## 📦 Estrutura de Arquivos
src/
├── components/
│ ├── Cta.jsx <-- NOVO
│ ├── FeatureTabs.jsx <-- NOVO
│ ├── FeaturesGrid.jsx <-- NOVO
│ ├── Footer.jsx <-- NOVO
│ ├── Hero.jsx <-- NOVO
│ ├── Navbar.jsx <-- NOVO
│ ├── PricingPlans.jsx <-- NOVO
│ └── UiComponents.jsx
├── pages/
│ ├── home.jsx <-- NOVO
│ ├── Marketplace.jsx <-- NOVO
│ ├── Planos.jsx <-- NOVO
│ └── Sobre.jsx <-- NOVO
└── index.css


---

## 🆕 2. Pagina Home

### **2.0**

- Criação da pagina home, apresentando o fivonn, com um estilo moderno

---

## 🆕 2. Novas Páginas e Componentes

### **2.1 Navegação Atualizada**

| Arquivo | Mudança |
|--------|---------|
| **Navbar.jsx** | Logo agora redireciona para `/`. Links atualizados para rotas diretas: `/planos`, `/sobre`, `/marketplace`. |
| **Footer.jsx** | Link “Sobre Nós” atualizado para `/sobre`. |

---

### **2.2 Página de Planos — `src/pages/Planos.jsx`**

**Propósito:** exibir os planos de assinatura disponíveis.

#### Destaques:
- Utiliza o novo componente **PricingPlans.jsx**
- Exibe:
  - **Plano Gratuito** — R$ 0,00  
  - **Plano Pro** — R$ 24,90/mês (destaque *featured*)
- Animações com **Framer Motion** (`whileHover`) para dar um efeito de “levitação” nos cards.

---

### **2.3 Página Sobre Nós — `src/pages/Sobre.jsx`**

**Propósito:** apresentar informações institucionais da Fivonn.

#### Destaques:
- Conteúdo dividido em seções claras.
- Bloco de **Missão · Visão · Valores**, com ícones e paleta temática.
- Layout alinhado visualmente ao restante do projeto.

---

### **2.4 Protótipo do Marketplace — `src/pages/Marketplace.jsx`**

**Propósito:** simular a busca e descoberta de profissionais.

#### Estrutura:
- Layout inspirado em apps mobile.
- Barra de busca + filtros ao topo.
- Uso de dados mockados em `ProfessionalCard`.

#### Preparado para futura integração:
- Dados simulados servirão de base para o Supabase (`professionals`, `services`, rating, localização).

---

## 🔮 3. Próximos Passos (Fase de Integração)

A próxima etapa natural do projeto é conectar tudo ao **Supabase**:

### **1. Configuração Inicial**
- Criar e configurar o cliente do Supabase no projeto.

### **2. Integração do Marketplace**
- Criar tabelas no Supabase:
  - `professionals`
  - `services`
- Buscar dados reais no `Marketplace.jsx`.

### **3. Gestão de Planos**
- Ligar botões da página de Planos a:
  - Fluxo de criação de conta (sign up)
  - Pagamento com Stripe ou outro provedor.

---

🔧 Instalação de Dependências
Este projeto utiliza React, estilização via Tailwind CSS e animações com Framer Motion. Para instalar todas as bibliotecas necessárias, utilize um dos comandos abaixo na raiz do projeto:

📦 Dependências Principais
# Usando NPM (Node Package Manager)
npm install react react-dom lucide-react framer-motion
