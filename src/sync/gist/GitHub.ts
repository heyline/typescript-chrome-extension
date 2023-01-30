import {Gist} from "./Gist"

export class GitHub extends Gist {

    override readonly url = "https://api.github.com/gists"

    init(config: object): Promise<string> {
        const method = 'POST'
        const url = this.url
        const data = this.wrapConfig(config)
        return new Promise(async (resolve, reject) => {
            this.request({
                method,
                url,
                data,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(res => {
                resolve(res.data.id)
            }).catch(reject)
        })
    }

    cover(config: object, gistId: string): Promise<string> {
        const method = 'PATCH'
        const url = `${this.url}/${gistId}`
        const data = this.wrapConfig(config)
        return new Promise(async (resolve, reject) => {
            this.request({
                method,
                url,
                data,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(res => {
                resolve(res.data.id)
            }).catch(reject)
        })
    }

    get(gistId: string): Promise<string> {
        const url = `${this.url}/${gistId}`
        return new Promise(async (resolve, reject) => {
            this.request({
                method: 'GET',
                url,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(res => {
                resolve(this.parseResponse(res))
            }).catch(reject)
        })
    }

    del(gistId: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            this.request({
                method: 'DELETE',
                url: `${this.url}/${gistId}`,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(() => {
                resolve(true)
            }).catch(reject)
        })
    }

}
