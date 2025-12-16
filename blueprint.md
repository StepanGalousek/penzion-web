
# Blueprint: Web Penzionu "Zelený Domeček Mikulov"

## 1. Přehled Projektu

Cílem tohoto projektu je vytvořit moderní, elegantní a responzivní webovou prezentaci pro rodinný penzion "Zelený Domeček Mikulov". Web slouží jako hlavní online vizitka, která má za úkol přilákat nové zákazníky, informovat o nabízených službách (ubytování, vinotéka, degustace) a poskytnout snadný způsob, jak penzion kontaktovat.

Důraz je kladen na vizuální stránku, která má reflektovat klidnou a pohodovou atmosféru penzionu a krásu jihomoravské krajiny, a na bezchybnou funkčnost na všech zařízeních (desktop, tablet, mobil).

## 2. Implementované Funkce a Design

### Základní Struktura a Design

- **Písma:**
  - Nadpisy: `Playfair Display` (serif) - pro eleganci a tradiční nádech.
  - Běžný text: `Montserrat` (sans-serif) - pro moderní vzhled a vynikající čitelnost.
- **Barevná Paleta:**
  - Hlavní akcentní barva: `#5A7C49` (elegantní zelená).
  - Text: Tmavě šedá (`#333333`) na světlém pozadí, bílá (`#ffffff`) na tmavém pozadí.
  - Pozadí: Téměř bílá (`#fdfdfd`).
- **Layout:** Responzivní design postavený na moderních CSS technikách (Grid, Flexbox), který se automaticky přizpůsobuje různým velikostem obrazovky.

### Klíčové Komponenty a Funkce

1.  **Hlavička a Navigace (`<header>`):
    - **Fixní pozice:** Menu je neustále viditelné při rolování stránkou.
    - **Dynamická změna vzhledu:**
        - Nad úvodní `hero` sekcí je menu průhledné s bílým textem.
        - Po odrolování níže se automaticky mění na pevnou bílou lištu s černým textem pro zajištění čitelnosti. Tato funkce je řízena JavaScriptem, který sleduje pozici scrollbaru.
    - **Responzivní menu:** Na mobilních zařízeních se navigační odkazy schovají pod tlačítko "Menu", které po kliknutí plynule zobrazí a skryje plnohodnotnou navigaci.

2.  **Úvodní Sekce (`.hero`):
    - **Výška:** Nastavena na `70vh` (70 % výšky obrazovky) jako kompromis mezi vizuálním dopadem a správným zobrazením kompozice fotografie.
    - **Filmová Animace Přiblížení:**
        - Obrázek se po dobu 20 sekund plynule zvětšuje o 5 % (`transform: scale(1.05)`).
        - Animace je nastavena tak, aby po dokončení zůstala v konečném (přiblíženém) stavu (`animation-fill-mode: forwards`).
    - **Zarovnání obrázku:** Vlastnost `object-fit: cover` zajišťuje, že obrázek vždy vyplní prostor sekce bez deformace. `object-position: center` garantuje, že se obrázek bude vždy soustředit na svůj střed.
    - **Překryv:** Jemný tmavý překryv (`rgba(0, 0, 0, 0.2)`) zajišťuje, že bílý text v navigaci je vždy dobře čitelný.

3.  **Galerie Služeb (`.gallery-section`):
    - **Interaktivní Efekt při Najetí Myší:**
        - Při najetí myší na obrázek se tento plynule zvětší (`transform: scale(1.05)`).
        - Současně se obrázek lehce projasní (`filter: brightness(1.1)`).
        - Efekt je plynulý díky `transition` vlastnosti.
    - **Struktura:** Třísloupcová mřížka na desktopu, která se na mobilních zařízeních automaticky mění na jednosloupcovou pro lepší čitelnost.

### Podstránky

- Vytvořeny základní HTML soubory pro všechny podstránky (`index.html`, `ubytovani.html`, `vinoteka.html`, `degustace.html`, `kontakty.html`) pro zajištění funkční navigace.

## 3. Plán Poslední Změny (Oprava Ořezu Hero Obrázku)

**Problém:**
Úvodní obrázek v `hero` sekci byl příliš přiblížený a oříznutý. Místo celé scény s kostelem byl vidět pouze jeho detail, což neodpovídalo původnímu záměru.

**Příčina:**
Kombinace vlastností `height: 100vh` a `object-fit: cover` nutila prohlížeč obrázek nepřirozeně zvětšit, aby vyplnil celou výšku obrazovky, což vedlo k masivnímu ořezu.

**Řešení (Iterativní postup):**

1.  **První pokus:** Snížení síly animačního přiblížení z `scale(1.15)` na `scale(1.05)`. Ukázalo se jako nedostatečné.
2.  **Druhý pokus:** Deaktivace animace a snížení výšky `hero` sekce na `85vh`. To problém zmírnilo, ale ořez byl stále příliš velký.
3.  **Finální řešení:**
    - Výška `hero` sekce byla snížena na `70vh`. Tím se změnil poměr stran kontejneru a `object-fit: cover` již nemusí obrázek tolik zvětšovat.
    - Byla znovu aktivována jemná animace přiblížení (`scale(1.05)`), která dodává dynamiku bez negativního dopadu na kompozici.

**Výsledek:**
Úvodní sekce nyní zobrazuje podstatně větší část fotografie (včetně celého kostela) a zároveň si zachovává moderní a elegantní vzhled s jemným pohybovým efektem.
