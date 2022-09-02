export async function fetchData (url) {

    console.log(url)
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.data)
        return data
    } catch {
        console.log('Erreur appel api')
    }
}
