CREATE TABLE T_MEMBER (
    ID      VARCHAR2(10) PRIMARY KEY,
    PWD     VARCHAR2(10),
    NAME    VARCHAR2(50),
    EMAIL   VARCHAR2(50),
    JOIN    DATE DEFAULT SYSDATE
);

INSERT INTO T_MEMBER VALUES('JKS2024', 'SPHB8250', '곰돌이사육사', 'jks2024@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('12345678', '12345678', '안유진', 'anyou@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('56785678', '1234567', '장원영', 'jwy@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('fall1234', 'fall1234', '가을', 'fall@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('lee1234', 'lee1234', '이서', 'mimi@gmail.com', sysdate);
select * from t_member;
COMMIT;

--------------------------------------------------------------------------------

CREATE TABLE SBTI_QA --ORACLE
( S_QUESTION_NUM NUMBER(2) PRIMARY KEY,
	S_QUESTION VARCHAR(400),
	S_ANSWER1 VARCHAR(10),
	S_ANSWER2 VARCHAR(10)
);

INSERT INTO SBTI_QA VALUES (99, '나는 마실 술을 먼저 정하고 모임에 나가기 보다는 모이고 나서 마실 술을 정하는 편이다.', '', '');
INSERT INTO SBTI_QA VALUES (98, '하루라도 술을 마시지 않으면 우울증이 오는것 같다.', '', '');
INSERT INTO SBTI_QA VALUES (1, '회식 때 탄산음료만 마시고 있는 것은 아깝다고 생각한다.', '청주', '');
INSERT INTO SBTI_QA VALUES (2, '와인은 생각보다 어울리는 상황이 많다고 생각한다.', '과실주', '');
INSERT INTO SBTI_QA VALUES (3, '집에서 고기 요리에 가볍게 한잔 하는 것은 좋다고 생각한다.', '과실주', '');
INSERT INTO SBTI_QA VALUES (4, '비오는 날에는 파전에 막걸리가 어울린다.', '탁주', '');
INSERT INTO SBTI_QA VALUES (5, '자고로 술잔은 작고 가볍지만, 술은 묵직해야 한다.', '증류주', '');
INSERT INTO SBTI_QA VALUES (6, '국밥에는 역시 술 한잔!', '청주', '');
INSERT INTO SBTI_QA VALUES (7, '가끔 집에서 가볍게 혼술 하는 것도 좋다.', '청주', '증류주');
INSERT INTO SBTI_QA VALUES (8, '평소에 차를 즐겨 마신다.', '청주', '증류주');
INSERT INTO SBTI_QA VALUES (9, '제삿밥보다는 제삿술에 더 눈이 간다.', '청주', '');
INSERT INTO SBTI_QA VALUES (10, '음료같이 부담없는 술도 좋다.', '탁주', '과실주');
INSERT INTO SBTI_QA VALUES (11, '야채주스는 건강에 좋을 뿐만이 아니라 맛있다.', '과실주', '');
INSERT INTO SBTI_QA VALUES (12, '맥주는 배가 불러서 싫다.', '청주', '증류주');
INSERT INTO SBTI_QA VALUES (13, '양꼬치에?', '탁주', '증류주');
INSERT INTO SBTI_QA VALUES (14, '인생도 쓰고 술도 쓰다. 달다는 놈은 누구야!', '탁주', '과실주');
INSERT INTO SBTI_QA VALUES (15, '밥배와 술배는 따로다', '탁주', '');
INSERT INTO SBTI_QA VALUES (16, '숙취는 없지만 취하는게 좋아요.', '증류주', '');
INSERT INTO SBTI_QA VALUES (17, '산에 오르면 역시 한잔 걸쳐야 한다.', '탁주', '');
INSERT INTO SBTI_QA VALUES (18, '어르신 선물용으로 주류도 좋다고 생각한다.', '청주', '증류주');
INSERT INTO SBTI_QA VALUES (19, '와인 박람회 같은 곳에 가보고 싶거나 가봤다.', '과실주', '');
INSERT INTO SBTI_QA VALUES (20, '산딸기를 보면 담금주가 생각난다.', '과실주', '');

CREATE TABLE SBTI_RESULT
( RES_NUM NUMBER(2) PRIMARY KEY,
	RES_CATEGORY VARCHAR(50),
	RES_SUL VARCHAR(50),
	RES_SUL_IMG VARCHAR(500)
);

INSERT INTO SBTI_RESULT VALUES(1, '숙취가 두렵지 않은 탁주 러버', '막쿠르트', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/fWO1-1668403134296-1Z7A1584.jpg');
INSERT INTO SBTI_RESULT VALUES(2, '숙취가 두렵지 않은 탁주 러버', '삼양춘', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/lYo2-1657767149603-00.jpg');
INSERT INTO SBTI_RESULT VALUES(3, '숙취가 두렵지 않은 탁주 러버', '세종 알밤주', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/zNh6-1658109835900-0.jpg');
INSERT INTO SBTI_RESULT VALUES(4, '숙취가 두렵지 않은 탁주 러버', '마실꾸지', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/a7pq-1649400825257-1.jpg');
INSERT INTO SBTI_RESULT VALUES(5, '청아하고 우아한 한잔', '고흥 유자주', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/rC0W-1659321041025-0.jpg');
INSERT INTO SBTI_RESULT VALUES(6, '청아하고 우아한 한잔', '동학 1957', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/TOnv-1655794504098-1.jpg');
INSERT INTO SBTI_RESULT VALUES(7, '청아하고 우아한 한잔', '궁중술 왕주', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/Tl1R-1672193066583-wang+%281%29.jpg');
INSERT INTO SBTI_RESULT VALUES(8, '청아하고 우아한 한잔', '술아 국화주', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/0tUF-1650544574118-1.jpg');
INSERT INTO SBTI_RESULT VALUES(9, '와인 말고 전통주', '고도리 복숭아 와인', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/xdPQ-1642143289464-gdr%20bsa0.jpg');
INSERT INTO SBTI_RESULT VALUES(10, '와인 말고 전통주', '벚꽃시즌', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/HJby-1675410687308-1.jpg');
INSERT INTO SBTI_RESULT VALUES(11, '와인 말고 전통주', '허니문배', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/PBJf-1657699612618-honey.jpg');
INSERT INTO SBTI_RESULT VALUES(12, '와인 말고 전통주', '댄싱파파', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/ET3f-1642143422782-dspp0.jpg');
INSERT INTO SBTI_RESULT VALUES(13, '깔끔하게 묵직하게', '금설', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/izr4-1660285384158-resize_-6.jpg');
INSERT INTO SBTI_RESULT VALUES(14, '깔끔하게 묵직하게', '추사 40%', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/Pmvo-1654844288132-THUMB.jpg');
INSERT INTO SBTI_RESULT VALUES(15, '깔끔하게 묵직하게', '서울고량주 레드', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/hkA6-1666236696597-thumb_red.jpg');
INSERT INTO SBTI_RESULT VALUES(16, '깔끔하게 묵직하게', '진도백주', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/UTA6-1682479792760-%EC%8D%B8%EB%84%A4%EC%9D%BC-2.jpg');

COMMIT;

DROP TABLE SBTI_RESULT;
DROP TABLE SBTI_QA;

------------------------------------------------------------

CREATE TABLE MEMBER_INFO
( USER_NO NUMBER(8) PRIMARY KEY,
	USER_ID VARCHAR(20),
	USER_PW VARCHAR(40),
	USER_NAME VARCHAR(30),
	USER_JUMIN VARCHAR(14),
	USER_EMAIL VARCHAR(50),
	USER_PHONE VARCHAR(13),
	USER_SBTI VARCHAR(50)
);

/* 회원번호 증가 시퀀스 */
CREATE SEQUENCE USER_SQNO
INCREMENT BY 1
START WITH 10000001
NOCYCLE
NOCACHE;

INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE1', 'JYPMUSIC1', '임나연', '950922-2430614', 'skdus@naver.com', '010-1995-0922', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE2', 'JYPMUSIC2', '박지효', '970201-2156743', 'wlgy@naver.com', '010-1997-0201', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE3', 'JYPMUSIC3', '미나', '970324-2756332', 'mina@naver.com', '010-1997-0324', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE4', 'JYPMUSIC4', '모모', '961109-2237883', 'ahah@naver.com', '010-1996-1109', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE5', 'JYPMUSIC5', '사나', '961229-2587413', 'sana@naver.com', '010-1996-1229', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE6', 'JYPMUSIC6', '쯔위', '990614-2433852', 'wmdnl@naver.com', '010-1999-0614', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ1', 'JYPMUSIC7', '이민호', '981025-1739112', 'leeknow@naver.com', '010-1998-1025', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ2', 'JYPMUSIC8', '황현진', '000320-3756145', 'guswls@naver.com', '010-2000-0320', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ3', 'JYPMUSIC9', '김승민', '000922-3186724', 'tmdals@naver.com', '010-2000-0922', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'NMIXX1', 'JYPMUSIC10', '오해원', '030225-4759193', 'godnjs@naver.com', '010-2003-0225', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'NMIXX2', 'JYPMUSIC11', '설윤', '040126-4370551', 'tjfdbs@naver.com', '010-2004-0126', '');

SELECT * FROM MEMBER_INFO;
COMMIT;

DROP TABLE MEMBER_INFO;
DROP SEQUENCE USER_SQNO;


SELECT * FROM SBTI_RESULT WHERE RES_CATEGORY = '와인 말고 전통주'

