/**
 * fetch data
 * @param {url} url 
 * @returns {promise} data or error
 */

export async function fetchData (url) {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch {
        console.log('Erreur appel api')
    }
}
