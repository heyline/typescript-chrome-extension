import {Gist} from "./Gist"

export class GitHub extends Gist {

    private readonly baseUrl = "https://api.github.com/gists"

    get(): Promise<string> {
        const url = `${this.baseUrl}/${this.gistId}`
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

    init(config: object): Promise<string> {
        const data = {
            files: this.toFiles(config),
            description: "sync config",
            public: false
        }
        const url = this.baseUrl
        const method = 'POST'
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

    cover(config: object): Promise<string> {
        const data = {
            files: this.toFiles(config),
            description: "sync config",
            public: false
        }
        const url = `${this.baseUrl}/${this.gistId}`
        const method = 'PATCH'
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

    del(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            this.request({
                method: 'DELETE',
                url: `${this.baseUrl}/${this.gistId}`,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(() => {
                resolve(true)
            }).catch(reject)
        })
    }

}
