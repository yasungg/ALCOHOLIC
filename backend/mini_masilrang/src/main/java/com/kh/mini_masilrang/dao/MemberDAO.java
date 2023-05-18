package com.kh.mini_masilrang.dao;

import com.kh.mini_masilrang.common.Common;
import com.kh.mini_masilrang.vo.MemberVO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.parseInt;

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
                vo.setUser_no(no);
                vo.setUser_id(id);
                vo.setUser_id(pw);
                vo.setUser_name(name);
                vo.setUser_jumin(jumin);
                vo.setUser_email(email);
                vo.setUser_phone(phone);
                vo.setUser_sbti(sbti);
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

    public boolean sbtiUpdate(int user_no, String user_sbti) {
        int result = 0;
        String sql = "UPDATE MEMBER_INFO SET USER_SBTI = ? WHERE USER_NO = ?";
        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1,user_sbti);
            pStmt.setInt(2, user_no);
            result = pStmt.executeUpdate();
            System.out.println("sbti 업데이트 결과: " + user_no + " -> " + user_sbti);

        } catch (Exception e) {
            e.printStackTrace();
        }
        Common.close(pStmt);
        Common.close(conn);

        if (result == 1) return true;
        else return false;
    }
}
