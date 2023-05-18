package com.kh.mini_masilrang.dao;

import com.kh.mini_masilrang.common.Common;
import com.kh.mini_masilrang.vo.SBTIQuestionVO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SBTIQuestionDAO {
    private Connection conn = null;
    private Statement stmt = null;
    private ResultSet rs = null;
    private PreparedStatement pStmt = null;

    public List<SBTIQuestionVO> questionSelect(int getNumber) {
        List<SBTIQuestionVO> list = new ArrayList<>();
        try{
            conn = Common.getConnection();
            stmt = conn.createStatement();
            String sql = "SELECT * FROM SBTI_QA WHERE S_QUESTION_NUM = " + getNumber;
            rs = stmt.executeQuery(sql);

            while (rs.next()) {
                int number = rs.getInt("S_QUESTION_NUM");
                String question = rs.getString("S_QUESTION");
                String answer1 = rs.getString("S_ANSWER1");
                String answer2 = rs.getString("S_ANSWER2");

                SBTIQuestionVO vo = new SBTIQuestionVO();
                vo.setNumber(number);
                vo.setQuestion(question);
                vo.setAnswer1(answer1);
                vo.setAnswer2(answer2);
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
