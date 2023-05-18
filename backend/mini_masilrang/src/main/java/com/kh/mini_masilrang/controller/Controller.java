package com.kh.mini_masilrang.controller;

import com.kh.mini_masilrang.dao.MemberDAO;
import com.kh.mini_masilrang.dao.SBTIQuestionDAO;
import com.kh.mini_masilrang.dao.SBTIResultDAO;
import com.kh.mini_masilrang.vo.MemberVO;
import com.kh.mini_masilrang.vo.SBTIQuestionVO;
import com.kh.mini_masilrang.vo.SBTIResultVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

// 프론트(3000)랑 백(8111)이랑 포트가 다른 것은 에러처리 하지 말도록 예외처리
@CrossOrigin(origins = "http://localhost:3000")
// rest 방식의 요청에 응답을 주겠다
@RestController
public class Controller {

    @GetMapping("/sbti")
    public ResponseEntity<List<SBTIQuestionVO>> questionList(@RequestParam Integer number) {
        System.out.println("질문 번호: " + number);
        SBTIQuestionDAO dao = new SBTIQuestionDAO();
        List<SBTIQuestionVO> list = dao.questionSelect(number);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<MemberVO>> memberList(@RequestParam Integer no) {
        System.out.println("유저 번호: " + no);
        MemberDAO dao = new MemberDAO();
        List<MemberVO> list = dao.memberSelect(no);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/sbtirecommend")
    public  ResponseEntity<List<SBTIResultVO>> sbtiList(@RequestParam String cat) {
        System.out.println("카테고리: " + cat);
        SBTIResultDAO dao = new SBTIResultDAO();
        List<SBTIResultVO> list = dao.sbtiRecommend(cat);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/sbtiupdate")
    public ResponseEntity<Boolean> sbtiUpdate(@RequestBody SbtiUpdateRequest sbtiData) {
        int getId = sbtiData.getNo();
        String getSbtiRes = sbtiData.getSbti();
        MemberDAO dao = new MemberDAO();
        boolean isTrue = dao.sbtiUpdate(getId, getSbtiRes);
        return new ResponseEntity<>(isTrue, HttpStatus.OK);
    }

}

class SbtiUpdateRequest {
    private int no;
    private String sbti;

    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }

    public String getSbti() {
        return sbti;
    }
    public void setSbti(String sbti) {
        this.sbti = sbti;
    }
}
