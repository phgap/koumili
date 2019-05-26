'use strict';
const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
    homeIndex: homeIndex
};

function homeIndex(req, res) {
    /***********************************/
    /*************Mock******************/
    let homeIndexGoods = []
    let homeIndexGoodsId = 1;
    for (let i = 0; i < 20; i++) {
        homeIndexGoods.push({
            'id': homeIndexGoodsId++,
            'img': Random.image('165x220', Random.color(), 'Hello'),
            'name': Random.last(),
            'price': '' + Random.natural(100, 2000)
        })
    }
    /*************Mock******************/
    /***********************************/

    res.json({ data: homeIndexGoods });
}
