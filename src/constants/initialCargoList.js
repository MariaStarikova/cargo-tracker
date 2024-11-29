// Начальные данные
export const initialCargoList = [
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24"
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26"
    }
  ];

  // Список городов
export const cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"];

// Статусы грузов
export const statuses = ["Ожидает отправки", "В пути", "Доставлен"];