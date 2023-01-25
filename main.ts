import {MarketDataApi} from "./apis/market-data-api";

import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';

// ✅ write to file SYNCHRONOUSLY
function syncWriteFile(filename: string, data: any) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    writeFileSync(join(__dirname, filename), data, {
        flag: 'w',
    });

    const contents = readFileSync(join(__dirname, filename), 'utf-8');
    console.log(contents); // 👉️ "One Two Three Four"

    return contents;
}

function stringify(obj:any) {
    let cache: any[] = [];
    let str: any = JSON.stringify(obj, function(key, value) {
        if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    cache = null; // reset the cache
    return str;
}

const exec = async () => {
    const accessToken = ""

    const md_api = new MarketDataApi({ accessToken });
    const currs = await md_api.publicCurrencyGet()
    const str = stringify(currs.data)
    syncWriteFile('main-data.json', str);
}
exec();