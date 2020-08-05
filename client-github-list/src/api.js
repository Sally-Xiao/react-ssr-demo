import fetch from 'isomorphic-fetch'

export const queryInitData = () => {
    const encodedURI = encodeURI(`/api/data.json`)
    return fetch(encodedURI)
    .then((response) => {
        return response.json()
    })
    .catch((e) => {
        console.log('Error', e)
    })
}