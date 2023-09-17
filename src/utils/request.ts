const base_url = 'https://service-flgzov7m-1259174451.gz.apigw.tencentcs.com'
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
        fetch(base_url + url, rest)
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
