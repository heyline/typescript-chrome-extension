import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import fetchAdapter from "@vespaiach/axios-fetch-adapter";

/**
 *
 * github: https://docs.github.com/en/rest/reference/gists
 *
 * gitee: https://gitee.com/api/v5/swagger#/getV5Gists
 *
 * gitlab: https://docs.gitlab.com/ee/api/snippets.html
 *
 */
export abstract class Gist {

    abstract url: string

    protected readonly token: string
    protected readonly gistId?: string

    constructor(token: string, gistId?: string) {
        this.token = token
        this.gistId = gistId
    }

    /**
     * @return gist id
     * */
    abstract init(config: object): Promise<string>

    /**
     * @return gist json string
     * */
    abstract get(): Promise<string>

    /**
     * @return gist id
     * */
    abstract cover(config: object): Promise<string>

    abstract del(): Promise<boolean>

    request(request: AxiosRequestConfig): Promise<AxiosResponse> {
        // fix axios not working
        request.adapter = fetchAdapter
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await axios.request(request))
            } catch (error: any) {
                if (error.response) {
                    if (error.response.status === 404) {
                        reject(error.message)
                    } else {
                        reject(error.response.data.message)
                    }
                } else {
                    reject(error.message)
                }
            }
        })
    }

    parseResponse(result: any): string {
        return result.data.files["twp-config.json"].content as string
    }

    wrapConfig(localConfig: object) {
        const files: { [key: string]: object } = {}
        files["twp-config.json"] = {
            content: JSON.stringify(localConfig)
        }
        return {
            files: files,
            description: "sync config",
            public: false
        }
    }

}


