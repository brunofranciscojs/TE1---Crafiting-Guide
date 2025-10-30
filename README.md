🧰 The Escapists 1 — Crafting Guide

Um projeto em React + TailwindCSS que recria o visual original do jogo The Escapists 1, apresentando uma interface interativa com as receitas de Weapons e Tools.

O objetivo é oferecer uma experiência nostálgica e funcional para consultar rapidamente os itens e seus requisitos de craft — mantendo a estética e atmosfera do jogo original.

🚧 Status do Projeto

🧱 Work in Progress
Atualmente o projeto inclui:

📜 Listagem de Weapons e Tools

📄 Paginação para navegar entre as listas

🎵 Reprodução da OST original do jogo

🖼️ Backgrounds aleatórios a cada carregamento

💅 Interface inspirada fielmente na UI clássica de The Escapists

Próximos passos planejados:

🔨 Adicionar categorias restantes (Outfits, Utilities, Keys, etc.)

🔍 Sistema de busca e filtros

📱 Melhorar responsividade mobile

💾 Modo offline (PWA)

⚙️ Tecnologias Utilizadas

React
 — Estrutura base da aplicação

TailwindCSS
 — Estilização rápida e modular

Vite
 — Build tool leve e moderna

JSON local — Armazena os dados dos itens (Weapons e Tools)

Áudio HTML5 — Controle da trilha sonora

## Estrutura Básica
src/
├─ assets/              # Imagens dos itens (Sock_Mace.png, etc.)
├─ components/
│  ├─ Item.jsx          # Card de exibição de cada item
├─ data/
│  ├─ items.json        # Lista com Weapons e Tools
├─ App.jsx              # Componente principal
├─ index.css            # Estilos globais (Tailwind)

## Funcionalidades

Alterna entre páginas com botões numerados

Reproduz/pausa a música com controle de volume

Renderiza até 3 itens por página

Atualiza o background aleatoriamente a cada reload

## Créditos

🎮 The Escapists é propriedade da Mouldy Toof Studios / Team17

Trilha sonora e ícones pertencem aos criadores originais

Projeto sem fins lucrativos, criado para fins educacionais e nostálgicos

## Autor

Bruno F. Cardoso

Front-end Developer & Web Designer
Projeto pessoal inspirado em The Escapists (2015)
