const globalMethods = {

    _deep: obj => {
        return JSON.parse(JSON.stringify(obj));
    },
    // v有值 下啦刷新  否则 滚动加载 
    loadList: (that, v) => {
        let _that = that.data
        if (_that.dataList.length >= _that.pageInfo.total) {
            _that.noData = true;
            console.log("noDate");
            return;
        }
        return that.getDataList().then(res => {
            // console.log("分页", res.data.records);
            if (v) {
                _that.dataList = res.data.data;
            } else {
                _that.dataList = [..._that.dataList, ...res.data.data];
            }
            _that.pageInfo.total = parseInt(res.data.total);
            _that.pageInfo.page = _that.pageInfo.page + 1;
            if (_that.dataList.length >= _that.pageInfo.total) {
                _that.noData = true;
            }
            that.setData({
                dataList: _that.dataList,
                noData: _that.noData
            })
            return res;
        });
    },

    //重置分页数据
    reset: (that) => {
        let _that = that.data
        _that.pageInfo = JSON.parse(JSON.stringify(_that._pageInfo))
        _that.dataList = []
        _that.noData = false
        that.setData({
            // dataList:  _that.dataList,
            noData: _that.noData
        })
    },
};

export default globalMethods;