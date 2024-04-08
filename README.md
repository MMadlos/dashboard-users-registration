# Description

Exercice to create a table with a list of users and add actions to interact with it:

- Delete row ✔️
- Reset table ✔️
- Sort options (Name, Last name, Country and Time) ✔️

  - Name ✔️
  - Last Name ✔️
  - Country ✔️
  - Time ✔️

- Pagination ➡️ [reference](https://imgs.search.brave.com/12YZCOeH0v4NLq_hLF-xebqLbJoi7GeP2hZN0xYnSeI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wdWJs/aWMtaW1hZ2VzLmlu/dGVyYWN0aW9uLWRl/c2lnbi5vcmcvdGFn/cy90ZC1wYWdpbmF0/aW9uLTAzLnBuZw)

  - Selector of number of items to show / Default 5 ✔️
  - Get number of pages depending on how much items are in total / items currently showing ✔️
  - Add page button functionality ✔️
    - Check style for pagination. Current page is not updating selected style ✔️
    - Check bug / Example: if I click on page 5 when items per page are 5, then I change items per page to 20, user list disappears. ✔️
  - Previous - Next buttons ✔️

- Add Bar chart with number of user registration by year ✔️
- Add selector to change data from the chart ✔️

- Get users from API -> https://randomuser.me/

  - Fetch data ✔️
  - Check pagination. When, for example, 50 items is requested, it overflows horizontally.
  - Check restart data -> When is clicked, mocked users are placed instead of the API

- Dark / light mode

- Animation effects

  - When expanding sort options
  - When changing pages
  - When changing items per page

- Revisar y valorar cambiar el desplegable de las opciones para ordenar por la etiqueta dialog

## Notes

-- Una forma de Hacer el sort sería con una paleta de comandos y desplegables
-- Ej: Sort -> Seleccionar parámetro -> Seleccionar tipo (asc / desc). Después del sort aparece un tag con la info con una X. Si se hace click en la X, se vuelve al default.
