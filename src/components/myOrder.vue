<template>
    <div>
        <table class="myorder"  cellpadding="10">
            <tr>
                <th class="fs">股票代码</th>
                <th>当前价<br>期初价</th>
                <th>权利金<br>持有份数</th>
                <th>认购日期<br>到期时间</th>
                <th>参考盈亏</th>
            </tr>
            <tr>
                <td class="fs">浦发银行<span>600000</span></td>
                <td><b class="red">11.56</b><br>11.66</td>
                <td>30万<br>50</td>
                <td>2018-05-01<br>2018-08-01</td>
                <td><b class="blue">-56.35</b></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import '../common/css/common.less';
.myorder{
    text-align: center;
    width:100%;
    tr:nth-child(even){
        background: #f7f7f7;
    }
    tr{
        border-bottom:1px solid #ebebeb;
        th{
            font-size:12px;
            font-weight: normal;
        }
        td{
            font-size:12px;
            color:#888888;
            span{
                display: block;
                color:#cccccc;
            }
        }
        td .red{
            color:#dd2a2b;
            font-weight: normal
        }
        td .blue{
            color:@blue;
            font-weight: normal
        }
    }
    .fs{
        text-align: left;
    }

}
</style>
