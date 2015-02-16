/**
 * Created by hjsix2 on 2015. 2. 13..
 */
var PI = Math.PI;

exports.area = function (r) {
    return PI * r * r;
};

exports.circumference = function (r) {
    return 2 * PI * r;
};
