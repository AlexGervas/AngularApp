// Для работы с данными лучше создавать интерфейсы, особенно если это данные получаемые от API,
// Если данные получем от API, то интерфейсы лучше всего держать в папке core/models
// Если нет, то в папке с компонентом в отдельном файле
// Модель через class создаем только в том случае если нам надо какие-то данные полученные от API привести к какой-нибудь

export interface News2Item {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
