const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGEKIT_UTL_ENDPOINT
})

async function uploadFile(req, res) {
    const result = await ImageKit.upload({
        file:file,
        filename: filename
    });
    return result;
}

module.exports = uploadFile;