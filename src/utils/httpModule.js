export function httpGetParams(url, params) {
    let esc = encodeURIComponent
    let query = Object.keys(params)
                .map(k => esc(k) + '=' + esc(params[k]))
                .join('&')

    let getUrl = url + query
    return getUrl
}


