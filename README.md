# 🛡️ Auth Service

## 📌 Visão Geral
Microsserviço responsável pela autenticação de usuários via JWT. Implementado seguindo os princípios da Clean Architecture.

---

## 🧱 Estrutura da Arquitetura (Clean Architecture)

- **main/**: ponto de entrada da aplicação (configuração do servidor e injeções)
- **usecases/**: regras de negócio e casos de uso (ex: LoginUseCase)
- **interface/**: controladores e gateways (ex: AuthController)
- **infra/**: implementação de repositórios, provedor JWT e conexões com banco de dados

---

## 🔐 Autenticação

Este serviço utiliza **JWT** para autenticação e proteção de rotas nos demais serviços.

### 📮 Rota Disponível

#### **POST** `/auth/login`

##### ✅ Descrição:
Autentica o usuário e retorna um token JWT se as credenciais estiverem corretas.

##### 🧾 Corpo da requisição (JSON):

```json
{
  "email": "usuario@exemplo.com",
  "password": "suaSenhaSegura"
}
