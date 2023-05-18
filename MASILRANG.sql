CREATE TABLE T_MEMBER (
    ID      VARCHAR2(10) PRIMARY KEY,
    PWD     VARCHAR2(10),
    NAME    VARCHAR2(50),
    EMAIL   VARCHAR2(50),
    JOIN    DATE DEFAULT SYSDATE
);

INSERT INTO T_MEMBER VALUES('JKS2024', 'SPHB8250', '�����̻�����', 'jks2024@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('12345678', '12345678', '������', 'anyou@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('56785678', '1234567', '�����', 'jwy@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('fall1234', 'fall1234', '����', 'fall@gmail.com', sysdate);
INSERT INTO T_MEMBER VALUES('lee1234', 'lee1234', '�̼�', 'mimi@gmail.com', sysdate);
select * from t_member;
COMMIT;

--------------------------------------------------------------------------------

CREATE TABLE SBTI_QA --ORACLE
( S_QUESTION_NUM NUMBER(2) PRIMARY KEY,
	S_QUESTION VARCHAR(400),
	S_ANSWER1 VARCHAR(10),
	S_ANSWER2 VARCHAR(10)
);

INSERT INTO SBTI_QA VALUES (99, '���� ���� ���� ���� ���ϰ� ���ӿ� ������ ���ٴ� ���̰� ���� ���� ���� ���ϴ� ���̴�.', '', '');
INSERT INTO SBTI_QA VALUES (98, '�Ϸ�� ���� ������ ������ ������� ���°� ����.', '', '');
INSERT INTO SBTI_QA VALUES (1, 'ȸ�� �� ź�����Ḹ ���ð� �ִ� ���� �Ʊ��ٰ� �����Ѵ�.', 'û��', '');
INSERT INTO SBTI_QA VALUES (2, '������ �������� ��︮�� ��Ȳ�� ���ٰ� �����Ѵ�.', '������', '');
INSERT INTO SBTI_QA VALUES (3, '������ ��� �丮�� ������ ���� �ϴ� ���� ���ٰ� �����Ѵ�.', '������', '');
INSERT INTO SBTI_QA VALUES (4, '����� ������ ������ ���ɸ��� ��︰��.', 'Ź��', '');
INSERT INTO SBTI_QA VALUES (5, '�ڰ�� ������ �۰� ��������, ���� �����ؾ� �Ѵ�.', '������', '');
INSERT INTO SBTI_QA VALUES (6, '���信�� ���� �� ����!', 'û��', '');
INSERT INTO SBTI_QA VALUES (7, '���� ������ ������ ȥ�� �ϴ� �͵� ����.', 'û��', '������');
INSERT INTO SBTI_QA VALUES (8, '��ҿ� ���� ��� ���Ŵ�.', 'û��', '������');
INSERT INTO SBTI_QA VALUES (9, '����亸�ٴ� ������� �� ���� ����.', 'û��', '');
INSERT INTO SBTI_QA VALUES (10, '���ᰰ�� �δ���� ���� ����.', 'Ź��', '������');
INSERT INTO SBTI_QA VALUES (11, '��ä�ֽ��� �ǰ��� ���� �Ӹ��� �ƴ϶� ���ִ�.', '������', '');
INSERT INTO SBTI_QA VALUES (12, '���ִ� �谡 �ҷ��� �ȴ�.', 'û��', '������');
INSERT INTO SBTI_QA VALUES (13, '�粿ġ��?', 'Ź��', '������');
INSERT INTO SBTI_QA VALUES (14, '�λ��� ���� ���� ����. �޴ٴ� ���� ������!', 'Ź��', '������');
INSERT INTO SBTI_QA VALUES (15, '���� ����� ���δ�', 'Ź��', '');
INSERT INTO SBTI_QA VALUES (16, '����� ������ ���ϴ°� ���ƿ�.', '������', '');
INSERT INTO SBTI_QA VALUES (17, '�꿡 ������ ���� ���� ���ľ� �Ѵ�.', 'Ź��', '');
INSERT INTO SBTI_QA VALUES (18, '��� ���������� �ַ��� ���ٰ� �����Ѵ�.', 'û��', '������');
INSERT INTO SBTI_QA VALUES (19, '���� �ڶ�ȸ ���� ���� ������ �Ͱų� ���ô�.', '������', '');
INSERT INTO SBTI_QA VALUES (20, '����⸦ ���� ����ְ� ��������.', '������', '');

CREATE TABLE SBTI_RESULT
( RES_NUM NUMBER(2) PRIMARY KEY,
	RES_CATEGORY VARCHAR(50),
	RES_SUL VARCHAR(50),
	RES_SUL_IMG VARCHAR(500)
);

INSERT INTO SBTI_RESULT VALUES(1, '���밡 �η��� ���� Ź�� ����', '����Ʈ', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/fWO1-1668403134296-1Z7A1584.jpg');
INSERT INTO SBTI_RESULT VALUES(2, '���밡 �η��� ���� Ź�� ����', '�����', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/lYo2-1657767149603-00.jpg');
INSERT INTO SBTI_RESULT VALUES(3, '���밡 �η��� ���� Ź�� ����', '���� �˹���', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/zNh6-1658109835900-0.jpg');
INSERT INTO SBTI_RESULT VALUES(4, '���밡 �η��� ���� Ź�� ����', '���ǲ���', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/a7pq-1649400825257-1.jpg');
INSERT INTO SBTI_RESULT VALUES(5, 'û���ϰ� ����� ����', '���� ������', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/rC0W-1659321041025-0.jpg');
INSERT INTO SBTI_RESULT VALUES(6, 'û���ϰ� ����� ����', '���� 1957', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/TOnv-1655794504098-1.jpg');
INSERT INTO SBTI_RESULT VALUES(7, 'û���ϰ� ����� ����', '���߼� ����', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/Tl1R-1672193066583-wang+%281%29.jpg');
INSERT INTO SBTI_RESULT VALUES(8, 'û���ϰ� ����� ����', '���� ��ȭ��', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/0tUF-1650544574118-1.jpg');
INSERT INTO SBTI_RESULT VALUES(9, '���� ���� ������', '���� ������ ����', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/xdPQ-1642143289464-gdr%20bsa0.jpg');
INSERT INTO SBTI_RESULT VALUES(10, '���� ���� ������', '���ɽ���', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/HJby-1675410687308-1.jpg');
INSERT INTO SBTI_RESULT VALUES(11, '���� ���� ������', '��Ϲ���', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/PBJf-1657699612618-honey.jpg');
INSERT INTO SBTI_RESULT VALUES(12, '���� ���� ������', '�������', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/ET3f-1642143422782-dspp0.jpg');
INSERT INTO SBTI_RESULT VALUES(13, '����ϰ� �����ϰ�', '�ݼ�', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/izr4-1660285384158-resize_-6.jpg');
INSERT INTO SBTI_RESULT VALUES(14, '����ϰ� �����ϰ�', '�߻� 40%', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/Pmvo-1654844288132-THUMB.jpg');
INSERT INTO SBTI_RESULT VALUES(15, '����ϰ� �����ϰ�', '������� ����', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/hkA6-1666236696597-thumb_red.jpg');
INSERT INTO SBTI_RESULT VALUES(16, '����ϰ� �����ϰ�', '��������', 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/UTA6-1682479792760-%EC%8D%B8%EB%84%A4%EC%9D%BC-2.jpg');

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

/* ȸ����ȣ ���� ������ */
CREATE SEQUENCE USER_SQNO
INCREMENT BY 1
START WITH 10000001
NOCYCLE
NOCACHE;

INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE1', 'JYPMUSIC1', '�ӳ���', '950922-2430614', 'skdus@naver.com', '010-1995-0922', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE2', 'JYPMUSIC2', '����ȿ', '970201-2156743', 'wlgy@naver.com', '010-1997-0201', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE3', 'JYPMUSIC3', '�̳�', '970324-2756332', 'mina@naver.com', '010-1997-0324', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE4', 'JYPMUSIC4', '���', '961109-2237883', 'ahah@naver.com', '010-1996-1109', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE5', 'JYPMUSIC5', '�糪', '961229-2587413', 'sana@naver.com', '010-1996-1229', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'TWICE6', 'JYPMUSIC6', '����', '990614-2433852', 'wmdnl@naver.com', '010-1999-0614', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ1', 'JYPMUSIC7', '�̹�ȣ', '981025-1739112', 'leeknow@naver.com', '010-1998-1025', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ2', 'JYPMUSIC8', 'Ȳ����', '000320-3756145', 'guswls@naver.com', '010-2000-0320', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'SKZ3', 'JYPMUSIC9', '��¹�', '000922-3186724', 'tmdals@naver.com', '010-2000-0922', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'NMIXX1', 'JYPMUSIC10', '���ؿ�', '030225-4759193', 'godnjs@naver.com', '010-2003-0225', '');
	INSERT INTO MEMBER_INFO VALUES(USER_SQNO.NEXTVAL, 'NMIXX2', 'JYPMUSIC11', '����', '040126-4370551', 'tjfdbs@naver.com', '010-2004-0126', '');

SELECT * FROM MEMBER_INFO;
COMMIT;

DROP TABLE MEMBER_INFO;
DROP SEQUENCE USER_SQNO;


SELECT * FROM SBTI_RESULT WHERE RES_CATEGORY = '���� ���� ������'

