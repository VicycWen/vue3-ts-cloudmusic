// const base_url = 'http://localhost:3000/api'
export default function request(url, options) {
    return new Promise((resolve, reject) => {
        const { timeout = 5000, ...rest } = options
        const timer = setTimeout(() => {
            reject(new Error('fetch timeout'))
        }, timeout)
        fetch(url, rest)
            .then(res => {
                clearTimeout(timer)
                resolve(res.json())
            })
            .catch(err => {
                clearTimeout(timer)
                reject(err)
            })
    })
}
