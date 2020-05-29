import axios from "axios"

async function _http(method, url, data) {
    await axios({
        url: url,
        method: method === 'post' ? 'post' : 'get',
        data: data
    }).then(res => {
        console.log(res)
        return res
    })
}

export default {
    _http
}