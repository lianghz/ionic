var images = require("images");

function uploadImg(tmp_path,imageName) {
    
    var out_path = "./public/images/" + imageName,
        photo;
    console.log('out_path=' + out_path);

    photo = images(tmp_path);
    photo.size(400)
        .save(out_path, {
            quality: 100
        });

}

var methods = {
    'uploadImg': uploadImg,
};
module.exports = methods;