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
//按图片原来尺寸保存
function uploadImgOsize(tmp_path,imageName) {
    
    var out_path = "./public/images/" + imageName,
        photo;
    console.log('out_path=' + out_path);

    photo = images(tmp_path);
    photo.save(out_path, {
            quality: 100
        });

}

var methods = {
    'uploadImg': uploadImg,
    'uploadImgOsize':uploadImgOsize
};
module.exports = methods;