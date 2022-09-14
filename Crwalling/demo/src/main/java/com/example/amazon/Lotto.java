package com.example.amazon;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Lotto {
    public Lotto() {    
        getNumber();
    }    
    public void getNumber() {
        try {
            Document doc = Jsoup.connect("https://www.nlotto.co.kr").get();
            //System.out.println(doc);
            Elements contents ;
            contents = doc.select("#lottoDrwNo");
            System.out.println("[ "+ contents.text() +" 회 로또 당첨번호]\n");
            
            for (int i=1;i<=6;i++) {
                contents = doc.select("#drwtNo" + i);
                System.out.println(i+ "번 : " + contents.text());
            }
                contents = doc.select("#bnusNo");
                System.out.println("보너스번호 : " + contents.text());
            
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
