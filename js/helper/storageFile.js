import { decorate, observable } from "mobx";
import RNFS from "react-native-fs";
import { observer } from "mobx-react";

class StorageFile {
@observable response;
    constructor() {
        this.archivosDelStorage();
        this.response = [];
    }

    async archivosDelStorage() {
        var route = `${RNFS.DocumentDirectoryPath}`;
        const res = await RNFS.readDir(route)
        res.map((el)=> this.response.push(el.name))
      }
}

const FileStorage = new StorageFile();
export default FileStorage;
