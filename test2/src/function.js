import fsp from 'fs/promises'

async function createFile (filename, text) {
    try {
        await fsp.writeFile(filename, text); 
    }
    catch (exist) {
        await fsp.appendFile(text); 
    }

}

export default createFile; 