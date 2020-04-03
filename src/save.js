const ipsModel = require("../model/ips");

const def = {
    ip: "",
    address: "",
    ip6: "",
    ip6v: "",
    d1: "",
    //纬度
    latitude: "",
    //经度
    longitude: ""
};
//ip,address,ip6,ip6v,d1
const saveData = data => {
    let objs = Object.assign({}, def, data);
    for (const key in objs) {
        if (objs[key] === undefined || objs[key] === null) {
            objs[key] = "";
        }
    }
    console.log("保存数据到数据库", objs);
    if (!objs.ip) return console.log("ip错误");
    ipsModel.upsert(objs);
};

module.exports = saveData;