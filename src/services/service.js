export async function getCharacter(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const json = await response.json()
    return json
}

