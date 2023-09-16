// const base_url = 'http://localhost:3000/api'
interface fetchOptions {
    timeout?: number,
    method?: string,
    body?: string,
    // headers?: Object,
    // credentials?: string,
    mode?: 'cors' | 'no-cors' | 'same-origin',
    // redirect?: string,
    referrer?: string,
    integrity?: string,
    keepalive?: boolean,
    signal?: AbortSignal
    
}


export default function request(url: string, options: fetchOptions) {
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
