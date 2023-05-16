package com.kh.mini_masilrang.dao;

import com.kh.mini_masilrang.common.Common;
import com.kh.mini_masilrang.vo.MemberVO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MemberDAO {
    private Connection conn = null;
    private Statement stmt = null;
    private ResultSet rs = null;
    private PreparedStatement pStmt = null;

    public List<MemberVO> memberSelect(int getNo) {
        List<MemberVO> list = new ArrayList<>();
        try {
            conn = Common.getConnection();
            stmt = conn.createStatement();
            String sql = "SELECT * FROM MEMBER_INFO WHERE USER_NO = " + getNo;
            rs = stmt.executeQuery(sql);

            while(rs.next()) {
                int no = rs.getInt(("USER_NO"));
                String id = rs.getString("USER_ID");
                String pw = rs.getString("USER_PW");
                String name = rs.getString("USER_NAME");
                String jumin = rs.getString("USER_JUMIN");
                String email = rs.getString("USER_EMAIL");
                String phone = rs.getString("USER_PHONE");
                String sbti = rs.getString("USER_SBTI");

                MemberVO vo = new MemberVO();
                vo.setNo(no);
                vo.setId(id);
                vo.setPw(pw);
                vo.setName(name);
                vo.setJumin(jumin);
                vo.setEmail(email);
                vo.setPhone(phone);
                vo.setSbti(sbti);
                list.add(vo);
            }
            Common.close(rs);
            Common.close(stmt);
            Common.close(conn);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
