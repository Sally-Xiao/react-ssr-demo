import fetch from 'isomorphic-fetch'

export const queryTopRepos = (lang = 'all') => {
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`)
    return fetch(encodedURI)
    .then((response) => {
        return response.json()
    })
    .then(res => res.items)
    .catch((e) => {
        console.log('Error', e)
    })
}