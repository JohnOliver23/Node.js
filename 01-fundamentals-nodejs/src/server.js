import http from 'node:http'

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários no banc-end
// POST /users => Criar um usuário no back-end

//Stateful => Sempre vai ter alguma informação guardada em memória
//Stateless => Não depende de dadddos salvos em memória

//Cabeçalhos (Requisição/resposta) => Metadados (informações de como o dado pode ser interpretado pelo front end)

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id:1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })
    return res.end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)