--生成唯一id

CREATE DEFINER=`root`@`localhost` FUNCTION `GetByID`() RETURNS varchar(300) CHARSET utf8
BEGIN
	
RETURN(select substring(MD5(RAND()),1,32) );

END