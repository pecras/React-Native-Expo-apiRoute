export function GET(request: Request) {
  // Obter parâmetros de consulta da solicitação
  const params = new URLSearchParams(request.url.split('?')[1]);

  // Verificar se há um parâmetro de filtro de ID na consulta
  const idParam = params.get('id');
  // Obter parâmetros de filtro adicionais
  const nomeParam = params.get('nome');
  const precoParam = params.get('preco');
  const marcaParam = params.get('marca');
  
  // Array de produtos
  const produtos = [
    {"id": 1, "nome": "Teclado mecânico", "preco": 150.99, "marca": "MechTech","imagem":""},
    {"id": 2, "nome": "Mouse sem fio", "preco": 29.99, "marca": "WirelessTech","imagem":""},
    {"id": 3, "nome": "Monitor LED 24 polegadas", "preco": 299.99, "marca": "ViewTech","imagem":""},
    {"id": 4, "nome": "SSD 500GB", "preco": 99.99, "marca": "SpeedyDrive","imagem":""},
    {"id": 5, "nome": "Webcam HD", "preco": 49.99, "marca": "ClearCam","imagem":""},
    {"id": 6, "nome": "Roteador Wi-Fi AC1200", "preco": 79.99, "marca": "NetLink","imagem":""},
    {"id": 7, "nome": "Headset Gamer", "preco": 69.99, "marca": "EpicSound","imagem":""},
    {"id": 8, "nome": "Placa de vídeo 4GB DDR5", "preco": 299.99, "marca": "Graphix","imagem":""},
    {"id": 9, "nome": "Impressora Multifuncional", "preco": 129.99, "marca": "PrintGenius","imagem":""},
    {"id": 10, "nome": "Hub USB 3.0", "preco": 19.99, "marca": "ConnectIt","imagem":""}
  ];

  // Função para buscar uma imagem aleatória
  function getRandomImage() {
    const apiUrl = 'https://source.unsplash.com/random/';
    const size = '300x300';
    return `${apiUrl}${size}`;
  }

  // Adicionar uma imagem aleatória para cada produto
  produtos.forEach(produto => {
    produto.imagem = getRandomImage();
  });

  // Filtrar produtos com base nos parâmetros de consulta
  let filteredProducts = produtos;

  if (nomeParam) {
    filteredProducts = filteredProducts.filter(produto => produto.nome.toLowerCase().includes(nomeParam.toLowerCase()));
  }

  if (precoParam) {
    filteredProducts = filteredProducts.filter(produto => produto.preco === parseFloat(precoParam));
  }

  if (marcaParam) {
    filteredProducts = filteredProducts.filter(produto => produto.marca.toLowerCase().includes(marcaParam.toLowerCase()));
  }

  // Se houver um parâmetro de filtro de ID, filtrar o produto correspondente
  if (idParam) {
    const filteredProduct = produtos.find(produto => produto.id === parseInt(idParam, 10));
    if (filteredProduct) {
      return Response.json({ produtos: [filteredProduct] });
    } else {
      return Response.json({ message: "Produto não encontrado" }, { status: 404 });
    }
  }

  // Se não houver parâmetros de filtro, retornar todos os produtos filtrados
  return Response.json({ produtos: filteredProducts });
}
