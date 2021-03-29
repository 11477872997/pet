/**
 * 返回前端时间处理
 */
function getTIme(time){
    let times = '';
    let d = new Date(time);
    let m = d.getFullYear();//年
    let y = d.getMonth();//月
    let r = d.getDate();//日
    let s = d.getHours(); //时
    let f = d.getMinutes(); //分
        if (r < 10) {
           r = "0" + r;
        };
        if (s < 10) {
           s = "0" + s;
        };
        if (f < 10) {
          f = "0" + f;
        };
    times =`${m}年${y}月${r}日 ${s}时${f}分`
    return times;
}   

module.exports = getTIme; 