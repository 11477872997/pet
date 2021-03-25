/**
 * 获取当前时间戳(秒)
 */
 function getNowSceond(){
	return Math.floor(Date.now() / 1000);
}
 
/**
 * 根据时间戳获取年,月,日,时,分,秒
 * @param {*} nTimeStamps 
 */
function getTimeInfo(nTimeStamps) {
    //转毫秒
    let date = new Date(nTimeStamps * 1000);
    //返回数据
    let retData = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return retData;
}
 
//当前时间戳
let curTimeStamps = getNowSceond();
//时间戳转对象
let timeInfo = getTimeInfo(curTimeStamps);

module.exports =  timeInfo;