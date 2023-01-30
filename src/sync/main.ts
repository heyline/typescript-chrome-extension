import {getGist, coverGist, initGist} from "./api";
import * as yaml from "js-yaml";

export class SomeClass {

    async down() {
        try {
            const configOnTheCloud = await getGist('GitHub', "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", "3685832f668f453dc9ec89c4f973a10b")
            console.log(configOnTheCloud)

            const config = yaml.load(configOnTheCloud) as any
            console.log(config)

            // config.syncConfig = selfConfig;
            // this.config.writeRaw(yaml.dump(config));
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    async upLoad() {
        try {
            // const store = yaml.load(this.config.readRaw()) as any;
            const localConfig = {haha: 777}
            let gistId = await coverGist('GitHub', "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", "3974fdeeddede4d83dc3c7a4afdbdaac", localConfig)
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    async init() {
        try {
            // const store = yaml.load(this.config.readRaw()) as any;
            const localConfig = {haha: 123}
            let gistId = await initGist('GitHub', "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", localConfig)
        } catch (error) {
            console.error(error);
        } finally {
        }
    }


}
