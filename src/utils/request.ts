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
    signal?: AbortSignal,
    retryTimes?: number
}


export default function request(url: string, options: fetchOptions) {
    return new Promise((resolve, reject) => {
        const { timeout = 10, retryTimes = 2, ...rest } = options
        // console.log("重试次数：",retryTimes);
        
        const controller = new AbortController();
        const { signal } = controller;
        const timer = setTimeout(() => {
            // 超时重试
            if(retryTimes > 0){
                controller.abort()
                request(url, {...options,retryTimes:retryTimes - 1})
            }else{
                reject(new Error('fetch timeout'))
            }
        }, timeout)
        fetch(base_url + url, {...rest, signal})
            .then(res => {
                clearTimeout(timer)
                resolve(res.json())
            })
            .catch(err => {
                // console.log('err:',err, err.message, err.name);
                // 失败重试
                if(retryTimes > 0 && err.name !== 'AbortError'){
                    request(url, {...options,retryTimes:retryTimes - 1})
                }else{
                    clearTimeout(timer)
                    reject(err)
                }
                
            })
    })
}
