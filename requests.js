// 
const getPuzzle = async(wordCount) =>{
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status >= 200 && response.status < 300) {
        return response.json()
    } else {
        throw new Error(`An error ocurred while fetching the data, error status code: ${response.status}`)
    }
} 


    //USING ASYNC/AWAIT

    // const getCountry = async (alpha2Code) => {
    //     const response = await fetch('http://restcountries.eu/rest/v2/all')
    //     if (response.status >= 200 && response.status <= 300) {
    //         const data = await response.json()
    //         return data.find((country) => country.alpha2Code === alpha2Code)
    //     } else {
    //         throw new Error(`An error ocurred while fetching the data, error status code: ${response.status}`)
    //     }
    // }
    
    // const getLocation = async () => {
    //     const token = '8f155b588976d1'
    //     const response = await fetch(`http://ipinfo.io/json?token=${token}`)
    //     if (response.status >= 200 && response.status < 300) {
    //         return response.json()
    //     } else {
    //         throw new Error(`An error ocurred while fetching the data, error status code: ${response.status}`)
    //     }
    // }
    
    // const getCurrentCountry = async () => {
    //     const location = await getLocation()
    //     return getCountry(location.country)
    // }
    
    

    //USING PROMISES

    // return fetch(`http://ipinfo.io/json?token=${token}`).then((response) => {
    //     if (response.status >= 200 && response.status < 300) {
    //         return response.json()
    //     } else {
    //         throw new Error(`An error ocurred while fetching the data, error status code: ${response.status}`)
    //     }
    // }).then((data) => {
    //     return data
    // })


// const getCountry = (alpha2Code) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         statusCode = response.status
//         if (response.status >= 200 && response.status <= 300) { return response.json() }
//         else {
//             throw new Error(`An error ocurred while fetching the data, error status code: ${response.status}`)
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === alpha2Code)
//     })
// }