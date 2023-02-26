Objetivo: Definir una API para gestionar nuestro equipo POKEMON

#Acciones:
- Identificarlos
- Añadir Pokémon a nuestro equipo
- Eliminar Pokémon de nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden de nuestros Pokémon

#REST Design:
- Añadir Pokémon: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestro pokémon: PUT /team
- Sistema de credenciales