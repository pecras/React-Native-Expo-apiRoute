export function GET(request: Request) {
    return Response.json({ produtos: [
      {"id": 1, "nome": "Teclado mecânico", "preco": 150.99, "marca": "MechTech"},
      {"id": 2, "nome": "Mouse sem fio", "preco": 29.99, "marca": "WirelessTech"},
      {"id": 3, "nome": "Monitor LED 24 polegadas", "preco": 299.99, "marca": "ViewTech"},
      {"id": 4, "nome": "SSD 500GB", "preco": 99.99, "marca": "SpeedyDrive"},
      {"id": 5, "nome": "Webcam HD", "preco": 49.99, "marca": "ClearCam"},
      {"id": 6, "nome": "Roteador Wi-Fi AC1200", "preco": 79.99, "marca": "NetLink"},
      {"id": 7, "nome": "Headset Gamer", "preco": 69.99, "marca": "EpicSound"},
      {"id": 8, "nome": "Placa de vídeo 4GB DDR5", "preco": 299.99, "marca": "Graphix"},
      {"id": 9, "nome": "Impressora Multifuncional", "preco": 129.99, "marca": "PrintGenius"},
      {"id": 10, "nome": "Hub USB 3.0", "preco": 19.99, "marca": "ConnectIt"}
  ] });
  }
  