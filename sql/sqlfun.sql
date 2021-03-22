--生成唯一id

CREATE DEFINER=`root`@`localhost` FUNCTION `GetByID`() RETURNS varchar(300) CHARSET utf8
BEGIN
	
RETURN(select substring(MD5(RAND()),1,32) );

END

--生成随机字符串
CREATE DEFINER=`root`@`localhost` FUNCTION `rand_string`(n INT) RETURNS varchar(255) CHARSET utf8
BEGIN 
        DECLARE char_str varchar(200) DEFAULT '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        DECLARE return_str varchar(255) DEFAULT '';
        DECLARE i INT DEFAULT 0;
        WHILE i < n DO
            SET return_str = concat(return_str, substring(char_str, FLOOR(1 + RAND()*36), 1));
            SET i = i+1;
        END WHILE;
        RETURN return_str;
    END

--生成随机字符
CREATE DEFINER=`root`@`localhost` FUNCTION `NewProc`(n INT) RETURNS varchar(255) CHARSET utf8
BEGIN 
        DECLARE char_str varchar(200) DEFAULT '地区地级行政地区只存在于黑龙江省、西藏自治区和新疆维吾尔自治区。';
        DECLARE return_str varchar(255) DEFAULT '';
        DECLARE i INT DEFAULT 0;
        WHILE i < n DO
            SET return_str = concat(return_str, substring(char_str, FLOOR(1 + RAND()*36), 1));
            SET i = i+1;
        END WHILE;
        RETURN return_str;
    END


--生成测试数据--
CREATE DEFINER=`root`@`localhost` PROCEDURE `batchInsertTestData`()
BEGIN
	#Routine body goes here...
	DECLARE i int;
	set i=0;
	while i<100 do 
		INSERT into `storte`(id,usernmae,password,img,place,source,StoreImage,DetailedAddress,ShopName,ShopIntroduction,phoneNumber)
		VALUES (GetByID(),rand_string(8),NewProc(6),'public/img/1.jpg',GetByID(),'weixin',NewProc(5),NewProc(25),NewProc(8),NewProc(30),ROUND(RAND()*1000000000000));
		set i=i+1;
	END WHILE;
END