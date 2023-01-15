import {Gist} from "./gist/Gist";
import {GitHub} from "./gist/GitHub";

export function getGist(
    destination: 'Gitee' | 'GitHub' | 'GitLab',
    token: string,
    gistId: string
): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            let gist!: Gist
            if (destination === 'GitHub') {
                gist = new GitHub(token, gistId);
            }
            resolve(await gist.get())
        } catch (error) {
            reject(error);
        }
    })
}

export function initGist(
    destination: 'Gitee' | 'GitHub' | 'GitLab',
    token: string,
    config: object
): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            let gist!: Gist
            if (destination === 'GitHub') {
                gist = new GitHub(token, undefined);
            }
            resolve(await gist.init(config))
        } catch (error) {
            reject(error);
        }
    })
}

export function coverGist(
    destination: 'Gitee' | 'GitHub' | 'GitLab',
    token: string,
    gistId: string,
    config: object
): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            let gist!: Gist
            if (destination === 'GitHub') {
                gist = new GitHub(token, gistId);
            }
            resolve(await gist.cover(config))
        } catch (error) {
            reject(error);
        }
    })
}
