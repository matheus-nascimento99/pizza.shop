# Pizza Shop

*Pizza Shop* é um dashboard para lojistas de restaurantes em aplicativos de delivery, como o iFood. Permite monitorar métricas do restaurante, gerenciar pedidos e atualizar informações da loja.

## Funcionalidades

- *Login Sem Senha*: Acesse o dashboard usando Magic Link.
- *Visão Geral do Dashboard*: Acompanhe métricas de pedidos e produtos populares.
- *Gerenciamento de Pedidos*:
  - Aprovação e entrega de pedidos.
  - Cancelamento de pedidos não entregues.
  - Filtros por estado, nome e ID do cliente.
- *Atualização de Perfil*: Modifique as informações da loja diretamente.
- *Interface de Usuário*: Inclui carregamento, estados vazios e paginação.
- *Temas*: Alterna entre tema claro e escuro.

## Tecnologias

- *React*: Biblioteca para construção da interface.
- *Tailwind CSS*: Framework de estilização.
- *React Query*: Gerenciamento de cache e requisições HTTP.
- *Shadcn/ui*: Biblioteca de componentes de interface.

## Como Rodar o Projeto

1. *Clone o repositório*:
    bash
    git clone https://github.com/SEU_USUARIO/pizza.shop.git
    cd pizza.shop
    

2. *Inicie o container Docker*:
    bash
    docker-compose up -d
    

3. *Execute as migrações*:
    bash
    bun migrate
    

4. *Preencha o banco de dados com dados fictícios*:
    bash
    bun seed
    

5. *Instale as dependências do front-end*:
    bash
    npm install
    

6. *Inicie o servidor de desenvolvimento*:
    bash
    npm run dev
    

7. *Acesse o dashboard*:
    Abra o navegador e vá para http://localhost:3000.

## Contribuição

Quer ajudar? Faça um fork do repositório e envie suas alterações através de pull requests. Sua contribuição é bem-vinda!

## Licença

Este projeto está sob a [Licença MIT](LICENSE).

## Contato

Dúvidas ou suporte? Envie um e-mail para [seuemail@dominio.com](mailto:seuemail@dominio.com).

---

Aproveite o desenvolvimento e divirta-se com o projeto!