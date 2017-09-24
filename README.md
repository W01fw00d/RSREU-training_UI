# UI для лабораторных работ в РГРТУ
## App
Все методы взаимодействия с сервером должны быть описаны в файле`App.jsx`.    

### Состояния компонента
* `books` - массив книг, отображаемых в данный момент;
* `history` - массив "истории действий", отображаемый в левой части сайта;
* `filters` - массив фильтров, отображаемых в верхней части, слева от строки поиска;
* `search` - текущая поисковая фраза;
* `popup` - отображение окна добавления книги.

### Структуры объектов
#### Книга
Объект: `{ id, title, author, img, stars }`.    
* `id` - уникальный идентификатор книги;
* `title` - название книги;
* `author` - автор книги;
* `img` - наименование изображения для обложки, обратиться к которому можно на `/books/${img}`;
* `stars` - выставленный книге рейтинг (количество звёзд).

#### Сообщение "истории действий"
Объект: `{ id, move, book, author, text, time }`.
* `id` - уникальный идентификатор действия;
* `move` - совершенное действие (например, `'added'`);
* `book` - наименование книги;
* `author` - автор книги;
* `text` - дополнительный текст сообщения (например, `'to your Must Read Titles'`);
* `time` - сколько времения назад было совершено действие (например, `'2 years'`).

#### Фильтры
Объект: `{ id, title, active }`.
* `id`- уникальный идентификтор фильтра;
* `title` - название фильтра;
* `active` - состояние фильтра.

### Методы взаимодействия с сервером
* `getBookData` - запрашивает информацию о книгах, передавая в параметрах поисковую фразу и идентификатор выбранного фильтра, результат записывает в состояние `books`.

* `getHistoryData` - запрашивает информацию об "истории действий", результат записывает в состояние `history`;

* `getFiltersData` - запрашивает информацию о фильтрах, записывает в состояние `filters`.

* `updateBook` - получает идентификатор изменяемой книги и **измененные поля**, отправляет эти параметры на сервер, в ответ ожидает объект с полями `history` (в котором будет обновленная "история действий") и `books` (в котором будет обновленный массив книг).

* `search` - получает поисковую строку, отправляет этот параметр на сервер, в ответ ожидает массив книг, удовлетворяющих запросу, записывает запрос и новый массив книг в состояния компонента.

* `setFilter` - получает идентификатор фильтра, отправляет его на сервер, в ответ ожидает массив книг удовлетворяющих фильтру, записывает новые массивы фильтров и книг в состояния.

* `addBook` - получает поля новой книги, передает их на сервер, в ответ ожидает объект с полями `history` (в котором будет обновленная "история действий") и `books` (в котором будет обновленный массив книг).

### Flow
Внутри `componentDidMount` с сервера запрашиваются:
* Фильтры (больше не запрашиваются с сервера, до обновления страницы);
* Книги (всегда запрашиваются с учетом параметров: поисковая фраза и активный фильтр);
* "История действий" (обновляется при изменении и добавлении книг).
