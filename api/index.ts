import got from "got";
import {BASE_URL} from "../config";

const  client = got.extend({
    prefixUrl: BASE_URL,
});

export default client;