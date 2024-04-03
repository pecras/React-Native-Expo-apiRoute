export function GET(request: Request) {
    // Obter parâmetros de consulta da solicitação
    const params = new URLSearchParams(request.url.split('?')[1]);
  
    // Verificar se há um parâmetro de filtro de ID na consulta
    const idParam = params.get('id');
    // Obter parâmetros de filtro adicionais
    const nomeParam = params.get('nome');
    const emailParam = params.get('email');
    const displayParam = params.get('displayName');
    
    // Array de userss
    const users = [
        {
            id: 1,
            nome: "João Silva",
            email: "joao@example.com",
            displayName: "joaosilva",
            senha: "senha123",
            imagem: ""
          },
          {
            id: 2,
            nome: "Maria Santos",
            email: "maria@example.com",
            displayName: "mariasantos",
            senha: "senha456",
            imagem: ""
          },
          {
            id: 3,
            nome: "Pedro Oliveira",
            email: "pedro@example.com",
            displayName: "pedrooliveira",
            senha: "senha789",
            imagem: ""
          },
          {
            id: 4,
            nome: "Ana Costa",
            email: "ana@example.com",
            displayName: "anacosta",
            senha: "senhaabc",
            imagem: ""
          },
          {
            id: 5,
            nome: "Juliano Pereira",
            email: "lucas@example.com",
            displayName: "lucaspereira",
            senha: "senhaxyz",
            imagem: ""
          },
          {
            id: 6,
            nome: "Carla Souza",
            email: "carla@example.com",
            displayName: "carlasouza",
            senha: "senhajkl",
            imagem: ""
          },
          {
            id: 7,
            nome: "Paulo Lima",
            email: "paulo@example.com",
            displayName: "paulolima",
            senha: "senhamno",
            imagem: ""
          },
          {
            id: 8,
            nome: "Fernanda Almeida",
            email: "fernanda@example.com",
            displayName: "fernandaalmeida",
            senha: "senhabcd",
            imagem: ""
          },
          {
            id: 9,
            nome: "Márcio Santos",
            email: "marcio@example.com",
            displayName: "marciosantos",
            senha: "senhaxyz",
            imagem: ""
          },
          {
            id: 10,
            nome: "Juliana Oliveira",
            email: "juliana@example.com",
            displayName: "julianaoliveira",
            senha: "senha1234",
            imagem: ""
          }
        ];
  
    // Função para buscar uma imagem aleatória
    function getRandomImage() {
      const apiUrl = 'https://source.unsplash.com/random/';
      const size = '300x300';
      return `${apiUrl}${size}`;
    }
  
    // Adicionar uma imagem aleatória para cada users
    users.forEach(user => {
      user.imagem = getRandomImage();
    });
  
    // Filtrar userss com base nos parâmetros de consulta
    let filteredUsers = users;
  
    if (nomeParam) {
      filteredUsers = filteredUsers.filter(users => users.nome.toLowerCase().includes(nomeParam.toLowerCase()));
    }
  
    if (displayParam) {
      filteredUsers = filteredUsers.filter(users => users.displayName.toLowerCase().includes(displayParam.toLowerCase()));
    }
  
    if (emailParam) {
      filteredUsers = filteredUsers.filter(users => users.email.toLowerCase().includes(emailParam.toLowerCase()));
    }
  
    // Se houver um parâmetro de filtro de ID, filtrar o users correspondente
    if (idParam) {
      const filteredUser = users.find(users => users.id === parseInt(idParam, 10));
      if (filteredUser) {
        return Response.json({ user: [filteredUser] });
      } else {
        return Response.json({ message: "users não encontrado" }, { status: 404 });
      }
    }
  
    // Se não houver parâmetros de filtro, retornar todos os userss filtrados
    return Response.json({ user: filteredUsers });
  }
  