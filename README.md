# Modal   
Egy modalt, azaz felugró ablakot kell készítened.
A modal főbb részei: 
![image](https://user-images.githubusercontent.com/68642008/182607883-280f11e5-4db3-4c43-be2a-4786569ba477.png)

- bezárás gomb
- fejléc
- tartalmi rész
- lábléc (alsó gombok jobbra igazítva)   
- A modal szélessége alaphelyzetben 100%, 560 pixel felett 50%
- A modalt nem dinamikusan JavaScriptből kell létrehozni, hanem már eleve a DOM része lehet!   

## Működés:
- A modalt bármilyen gomb vagy egyéb elem eseményéhez hozzá lehessen rendelni, tehát pl.: ha rákattintok egy gombra, akkor jelenik meg
- A modal mind vertikálisan, mind horizontálisan középre kell legyen pozicionálva
- Amikor a modal megnyílik, a hátteret egy részben áttetsző réteggel le kell takarni, a modalt focus-ba kell helyezni

![image](https://user-images.githubusercontent.com/68642008/182608104-6c592ae8-7aa3-4843-8c32-0f02587252a3.png)

- A modal egy egyszerű animáció kíséretében jelenjen meg (pl.: fade)
- A modal egy egyszerű animáció kíséretében tűnjön el bezáráskor
- A modalon kívülre kattintva is automatikusan záródjon be a modal, tűnjön el az overlay réteg
