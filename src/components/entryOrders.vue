<template>
    <div>
        <table class="entryTable"  cellpadding="10">
            <tr>
                <th class="fs">股票代码</th>
                <th>当前价<br>委托价</th>
                <th>名义本金</th>
                <th>权利金</th>
                <th>方向</th>
            </tr>
            <tr>
                <td class="fs">浦发银行<span>600000</span></td>
                <td><b class="red">11.56</b><br>11.66</td>
                <td>50000</td>
                <td>30万</td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.entryTable{
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
    }
    .fs{
        text-align: left;
    }

}
</style>
