<template>
    <div>
        <div class="searchBox">
            <van-search placeholder="请输入股票编号/名称/拼音" v-model="value" background="#fff" />
        </div>
        <table border="0" class="stock" cellpadding="10">
            <tr>
                <th>股票名称</th>
                <th>现价</th>
                <th>涨跌幅</th>
                <th></th>
            </tr>
            <tr class="list">
                <td>浦发银行<span>600000</span></td>
                <td class="red">11.53</td>
                <td class="red">+0.09%</td>
                <td><van-button type="danger" size="small">认购</van-button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },

}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.searchBox{
    padding:0.5rem 0;
    .bottomRim;
}
.stock{
    margin-top:0.5rem;
    text-align: center;
    width:100%;
    th{
        font-weight: normal;
        color:@font-Sgray;
        width:25%;
        font-size:1.2rem;
    }
    .list{
        font-size:1.1rem;
        .bottomRim;
        span{
            display: block;
            color:@font-Sgray;
            font-size:1rem;
        }
        .red{
            color:@red;
        }
    }
}
</style>
