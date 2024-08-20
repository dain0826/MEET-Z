package com.c108.meetz.domain;

public interface BadWord {
    String[] KOREAN_BAD_WORDS = {
        "병신", "씨발", "좆", "개새끼", "미친놈", "개자식", "씨발놈", "빡대가리", "씹새끼", "꺼져",
            "닥쳐", "지랄", "엿먹어", "개똥", "죽어라", "쓰레기", "좆같은", "미친년", "존나", "좆같아",
                "씨발년", "씨발놈", "개새끼", "좆까", "개자지", "개씹", "개좆", "개젓", "개창년", "개같은",
                "개걸레", "개걸래", "개고자", "개너구리", "개덜떨어진", "개떨거지", "개떡", "개돼지", "개망나니",
                "개멍청이", "개바보", "바보", "바보야", "버보", "바보아", "바보이", "경바보", "개백정", "개부랄",
                "개불알", "개색기", "개색끼", "개새리", "개쉐이", "개쉑", "버보", "민경바보", "영바보", "영바봉",
                "바보오", "바봉", "바봇", "밥오", "바오보", "바아보", "바봅", "버봅", "바보양",
                "개씹새끼", "개좆같은", "개좆자지", "개좆쟁이", "개좇", "개지랄", "개지랄놈", "개지랄년", "개창",
                "개창놈", "개쳐먹을", "개쳐죽일", "개호로새끼", "개호로쉐", "개호로자식", "개후레", "개후레년",
                "개후레자식", "개후장", "개후장놈", "개후질", "개후장년", "거시기", "거지같은", "걸레년", "걸레같은년",
                "걸레보지", "걸레핀년", "계새끼", "골빈", "공알", "괘새끼", "구씹", "굿보지", "귀두", "김치녀",
                "깨쌔끼", "나빼썅", "난자마셔", "난자먹어", "난자핧아", "내꺼빨아", "내꺼핧아", "내미랄", "내씨발",
                "내자지", "내잠지", "내조지", "너거애비", "년놈", "노무노무", "노무현", "뇬", "누나강간", "늬미",
                "니기미", "니년", "니미", "니미랄", "니씨브랄", "니애미", "니애비", "니할애비", "닝기리", "닥쳐",
                "달달이", "달딸이", "닳은년", "대가리", "대갈", "대음순", "더러운년", "돈새끼", "돌으년", "돌은새끼",
                "동생강간", "뒈져", "뒤이치기", "뒤져라", "뒤져버", "뒤져야", "뒤져야지", "뒤져요", "뒤졌", "뒤지겠",
                "뒤지고싶", "뒤지길", "뒤진다", "뒤질", "뒤치기", "뒷치기", "등신", "디져라", "디졌", "디지고",
                "디질", "따먹기", "따먹는다", "따먹어", "따먹어야지", "따먹었어", "따먹었지", "따먹을까", "따먹자",
                "딴년", "딸달이", "딸딸이", "떠라이", "또라이", "똘아이", "띠발", "띠발뇬", "띠벌", "띠벨", "띠불",
                "띠브울", "띠블", "띠블넘", "런년", "럼들", "롬들", "막간년", "맘충", "맛간년", "맛없는년", "맛이간년",
                "머갈", "믜칀", "믜친", "미띤", "미시친발", "미쳣네", "미쳤나", "미쳤니", "미췬", "미칀", "미치인",
                "미친", "미친개", "미친구녕", "미친구멍", "미친넘", "미친년", "미친놈", "미친눔", "미친새",
                "미친새끼", "미친색", "미친쉐이", "미친씨부랄", "미티넘", "미틴", "미틴것", "및힌", "바주카자지",
                "발놈", "백보지", "버따리자지", "버지", "버지구녕", "버지구멍", "버지냄새", "버지따먹기", "버지뚫어",
                "버지뜨더", "버지물마셔", "버지벌려", "버지벌료", "버지빨아", "버지빨어", "버지썰어", "버지쑤셔",
                "버지털", "버지핧아", "버짓물", "버짓물마셔", "벌창같은년", "벵신", "병닥", "병딱", "병맛", "병신",
                "병신세리", "병신셰리", "병신씨발", "병크", "보지", "보지구녕", "보지구멍", "보지녀", "보지따먹기",
                "보지뚫어", "보지뜨더", "보지머리박기", "보지물", "보지물마셔", "보지박어", "보지벌려", "보지벌료",
                "보지벌리", "보지벌리자", "보지보지", "보지빨아", "보지빨어", "보지에자지껴", "보지에자지너",
                "보지자지", "보지정액", "보지쥐어짜", "보지찌져", "보지찢어", "보지털", "보지털뽑아", "보지털어",
                "보지틀래기", "보지핧아", "보지핧아줄까", "보지핧아줘", "보지핧어", "보짓물", "보짓물마셔",
                "봉알", "부랄", "불알", "붕신", "붕알", "뷰웅신", "븅신", "브랄", "빙띤", "빙신", "빙신쉐이",
                "빠가야로", "빠가냐", "빠간가", "빠가새", "빠가니", "빠가십새", "빠가씹새", "빠구리", "빠구울",
                "빠굴", "빠굴이", "빠네", "빠라", "빠아가", "빠아구리", "빠아구우리", "빠아아라", "빠큐", "빡새끼",
                "빨치산", "빻았", "빻은", "뻐큐", "뻑유", "뻑큐", "뻨큐", "뼈큐", "뽀지", "사까시", "사까아시",
                "사새끼", "상년", "새77ㅣ", "새ㄲㅣ", "새끼", "새끼라", "새끼야", "새퀴", "새킈", "새키", "색희",
                "색히", "샊기", "샊히", "샹년", "섀키", "성괴", "성교", "성교하자", "성교해", "성폭행", "세끼",
                "세엑스", "세엑쓰", "세키", "섹끼", "섹스", "섹스하자", "섹스해", "소음순", "쇅끼", "쇡끼", "쉐끼",
                "쉬박", "쉬발", "쉬방새", "쉬버", "쉬빡", "쉬이바", "쉬탱", "쉬팍", "쉬펄", "쉽세", "쉽알넘",
                "슈ㅣ발", "슈발", "슈벌", "슈우벌", "스벌", "싑창", "시댕이", "시미발친", "시미친발", "시바",
                "시파", "시바라지", "시바류", "시바시바", "시바알", "시바앙", "시박색히", "시발", "시발년",
                "시발놈", "시발새끼", "시방새", "시방색희", "시방쉑희", "시벌", "시벌탱", "시볼탱", "시부럴",
                "시부렬", "시부울", "시뷰럴", "시뷰렬", "시빡", "시빨", "시새발끼", "시이발", "시입세", "시친발미",
                "시키가", "시탱", "시팍", "시팍새끼", "시팔", "시팔넘", "시팔년", "시팔놈", "시팔새끼", "시펄",
                "십녀", "십버지", "십부랄", "십부럴", "십새", "십세", "십세리", "십세이", "십셰리", "십쉐끼",
                "십자석", "십자슥", "십지랄", "십창", "십창녀", "십탱", "십탱구리", "십탱굴이", "십팔", "십팔넘",
                "십팔새끼", "싸가지", "싸가지없", "싸물어", "쌍년", "쌍놈", "쌍보지", "쌍쌍보지", "쌔끼", "썅",
                "썅놈", "썅년", "썌끼", "쎄끼", "쎄리", "쒸8", "쒸댕", "쒸발", "쒸팔", "쒸펄", "쓰댕", "쓰뎅",
                "쓰래기같", "쓰레기새", "쓰렉", "쓰루", "쓰바", "쓰바새끼", "쓰발", "쓰벌", "쓰벨", "쓰브랄쉽세",
                "쓰파", "씌8", "씌댕", "씌뎅", "씌발", "씌벨", "씌팔", "씝창", "씨8", "씨ㅂㅏ", "씨가랭넘",
                "씨가랭년", "씨가랭놈", "씨걸", "씨댕", "씨댕이", "씨뎅", "씨바", "씨바라", "씨바알", "씨박색희",
                "씨박색히", "씨발", "씨발년", "씨발롬", "씨발병신", "씨방새", "씨방세", "씨뱅가리", "씨버럼",
                "씨벌", "씨벌년", "씨벌쉐이", "씨벌탱", "씨벨", "씨볼탱", "씨부랄", "씨부럴", "씨부렬", "씨불알",
                "씨뷰럴", "씨뷰렬", "씨브럴", "씨블", "씨블년", "씨븡", "씨븡새끼", "씨비", "씨빠빠", "씨빡",
                "씨빨", "씨뻘", "씨새발끼", "씨섹끼", "씨이발", "씨입", "씨입새", "씨입새에", "씨입세", "씨입세에",
                "씨파넘", "씨팍", "씨팍넘", "씨팍새끼", "씨팍세끼", "씨팔", "씨퐁", "씨퐁넘", "씨퐁뇬", "씨퐁보지",
                "씨퐁자지", "씹", "씹귀", "씹년", "씹덕", "씹못", "씹물", "씹미랄", "씹버지", "씹보지", "씹부랄",
                "씹브랄", "씹빵구", "씹뻐럴", "씹뽀지", "씹새", "씹새끼", "씹세", "씹쉐뀌", "씹쌔", "씹쌔끼",
                "씹자석", "씹자슥", "씹자지", "씹지랄", "씹창", "씹창녀", "씹치", "씹탱", "씹탱굴이", "씹탱이",
                "씹팔", "씹팔넘", "씹할", "아가리", "아닥", "아아가리", "아오ㅅㅂ", "아오시바", "암캐년", "애무",
                "애미", "애미랄", "애미보지", "애미씨뱅", "애미자지", "애미잡년", "애미좃물", "애비", "애애무",
                "애에무", "애에미", "애에비", "앰창", "야하다", "야한", "야동", "어미강간", "어미따먹자", "어미쑤시자",
                "엄창", "에무", "에미", "에비", "에애무", "에에무", "에에미", "에에비", "엠생", "엠창", "염병",
                "염병할", "염뵹", "엿같", "엿먹어라", "엿이나", "옘병", "오르가즘", "왕버지", "왕자지", "왕잠지",
                "왕털버지", "왕털보지", "왕털자지", "왕털잠지", "왜저럼", "외퀴", "요년", "유깝", "유두", "유두빨어",
                "유두핧어", "유발조물락", "유방", "유방만져", "유방빨아", "유방주물럭", "유방쪼물딱", "유방쪼물럭",
                "유방핧아", "유방핧어", "유우까압", "유우깝", "유우방", "유우우방것", "육갑", "은년", "은새끼",
                "음경", "이년", "이새끼", "자기핧아", "자압것", "자위", "자지", "자지구녕", "자지구멍", "자지꽂아",
                "자지넣자", "자지뜨더", "자지뜯어", "자지박어", "자지빨아", "자지빨아줘", "자지빨어", "자지쑤셔",
                "자지쓰레기", "자지정개", "자지짤라", "자지털", "자지핧아", "자지핧아줘", "자지핧어", "작은보지",
                "잠지", "짬지", "잠지뚫어", "잠지물마셔", "잠지털", "잠짓물마셔", "잡것", "잡년", "잡놈", "저년",
                "저엇", "저엊", "적까", "절라", "점물", "젓가튼쉐이", "젓같내", "젓까", "젓냄새", "젓대가리",
                "젓떠", "젓만이", "젓물", "젓물냄새", "젓밥", "정액마셔", "정액먹어", "정액발사", "정액짜", "정액핧아",
                "정자마셔", "정자먹어", "정자핧아", "젖같", "젖까", "젖탱이", "젗같", "젼나", "젼낰", "졌같은",
                "졏같", "조가튼", "조개넓은년", "조개따조?", "조개마셔줘?", "조개벌려조?", "조개보지", "조개속물",
                "조개쑤셔줘?", "조개핧아줘?", "조깟", "조또", "조오가튼", "조오까튼", "조오또", "조오오조", "조오온니",
                "조오올라", "조오우까튼", "조오웃", "조오지", "조온", "조온나", "조온니", "조온마니", "조온만", "조올라",
                "조옴마니", "조옷만", "조우까튼", "족같내", "족까", "족까내", "존.나", "존ㄴ나", "존귀", "존귘", "존나",
                "존나아", "존낙", "존내", "존니", "존똑", "존마니", "존맛", "존멋", "존버", "존싫", "존쎄", "존쎼",
                "존예", "존웃", "존잘", "존잼", "존좋", "존트", "졸귀", "졸귘", "졸라", "졸맛", "졸멋", "졸싫", "졸예",
                "졸웃", "졸잼", "졸좋", "좀마니", "좀물", "좀쓰레기", "좁밥", "좁빠라라", "좃", "젖", "좃가튼뇬", "좃간년",
                "좃까", "좃까리", "좃깟네", "좃냄새", "좃넘", "좃대가리", "좃도", "좃또", "좃마무리", "좃만아", "좃만이",
                "좃만한것", "좃만한쉐이", "좃물", "좃물냄새", "좃보지", "좃부랄", "좃빠구리", "좃빠네", "좃빠라라", "좃털",
                "종나", "좆", "좆같은놈", "좆같은새끼", "좆까", "좆까라", "좆나", "좆년", "좆도", "좆만아", "좆만한년",
                "좆만한놈", "좆만한새끼", "좆먹어", "좆물", "좆밥", "좆빨아", "좆새끼", "좆털", "좇", "좋만", "좋만한것",
                "좋오웃", "죠낸", "죠온나", "죤나", "죤내", "죵나", "죶", "주글년", "주길년", "주둥이", "주둥아리", "줬같은",
                "쥐랄", "쥰나", "쥰내", "쥰니", "쥰트", "즤랄", "지껄이", "지랄", "ㅈ1랄", "지럴", "지롤", "지뢀", "지뢰",
                "지이라알", "지이랄", "짱깨", "짱께", "쪼녜", "쪼다", "쪼다새끼", "쪽바리", "쪽발", "쫂", "쫓같", "쬰잘",
                "쬲", "찝째끼", "창남", "창녀", "창녀버지", "창년", "창년벼지", "창놈", "처먹", "첫빠", "쳐마", "쳐먹",
                "쳐받는", "쳐발라", "쳐쑤셔박어", "촌씨브라리", "촌씨브랑이", "촌씨브랭이", "취ㅈ", "취좃", "친구년",
                "친년", "친노마", "친놈", "크리토리스", "큰보지", "클리토리스", "파친", "펑글", "페니스", "항문",
                "항문수셔", "항문쑤셔", "허버리년", "허벌", "허벌년", "허벌레", "허벌보지", "허벌자식", "허벌자지",
                "허어벌", "헐렁보지", "혀로보지핧기", "호냥년", "호로", "호로새끼", "호로자", "호로자슥", "호로자식",
                "호로잡", "호루자슥", "화낭년", "화냥년", "후라덜넘", "후려", "후우자앙", "후우장", "후장", "후장꽂아",
                "후장뚫어", "꽃휴", "시발", "미칭럼", "ㅂㅅ", "걔섀", "느금", "느금마", "늑음", "ㅈ같", "ㅈ같네", "욕설", "비속어", "욕"
    };
}