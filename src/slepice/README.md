Kevin se rozhodl, že se stane farmářem. A to ne jen tak ledajakým, chce mít co nejvíce slepic v celém širém okolí.

**Dnes si koupil na tržišti slepičí vejce**, ze kterého se mu za `K` dní vylíhne jeho první slepice. Ta snese své první vejce po `P` dnech od narození a **každé další** opět po `P` dnech.

Z těchto vajec se vylíhnou další slepice, opět po `K` dnech ode dne snesení vejce, a tyto slepice budou snášet další vejce. Takto se bude Kevinova farma postupně rozrůstat.

Kevina by teď zajímalo, kolik bude mít slepic po `D` dnech, aby se mohl pochlubit kamarádům.

## ÚKOL 

**Formát vstupu:** Na vstupu dostanete jediný řádek obsahující tři přirozená čísla `K`, `P` a `D`. 
- `K` značí **dobu, za jakou se z vejce vylíhne** slepice, 
- `P` periodu snášení vajec danou slepicí: tedy první vejce slepice snese `P`-tý den svého života, další `2*P`-tý a tak stále dále – slepice neumírají. 
- `D` značí **počet dní**, po kterých chce Kevin vědět, kolik bude mít slepic.

Pokud se slepice narodí 2. den, a `P = 2`, tak **3. den** ještě žádné vejce snesené není, ale **4. den** již ano. Jestliže zároveň `K = 3`, tak se během **7. dne** (4 + 3) vylíhne další slepice, a pro ni je to 1. den života. Po `P` (2) dnech, tedy během **9. dne**, i tato slepice snese vejce (a pak 11. den, 13. den, ...)

**Formát výstupu:**
- Jediné číslo, počet slepic na sklonku `D`-tého dne.
