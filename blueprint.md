#Blueprint: Web Penzionu (verze 12.0)

## Přehled

Tento dokument popisuje vytvoření nové webové prezentace od nuly. Cílem je moderní, minimalistický a luxusní design inspirovaný webem `meziplutky.cz`. Projekt bude postaven na framework-less základu (HTML, CSS, JavaScript) pro maximální rychlost a čistotu kódu.

## Klíčové prvky designu

*   **Vizuální styl:** Čistý, vzdušný, s důrazem na typografii, kvalitní fotografie a "whitespace".
*   **Barevná paleta:**
    *   **Primární barva:** Bílá (`#fdfdfd`).
    *   **Sekundární (akcentová) barva:** Elegantní zelená (`#5A7C49`). Používá se pro nadpisy, patičku a CTA tlačítka.
    *   **Text:** Tmavě šedá (`#333333`) a bílá (`#ffffff`).
*   **Typografie:**
    *   **Nadpisy:** Elegantní patkový font (Playfair Display).
    *   **Text & Menu:** Moderní bezpatkový font (Montserrat).
*   **Responzivita:** Plně responzivní design pro perfektní zobrazení na mobilech i desktopech.

---

## Plán implementace

### Fáze 1-11 (Dokončeno)

*   Základní struktura, navigace, redesign menu, obsah hlavní stránky, oprava chyb, prokliky, vytvoření a sjednocení podstránek, oprava zobrazení hlavičky, implementace patičky a dokončení stránky kontaktů.

### Fáze 12: Sjednocení barevného schématu

1.  **Cíl:** Aplikovat novou sjednocenou barevnou paletu napříč celým webem pro konzistentní a profesionální vzhled.
2.  **Kroky:**
    *   **Upravit `style.css`:**
        *   V `:root` aktualizovat proměnnou `--color-accent` na hodnotu `#5A7C49`.
        *   Změnit barvu pozadí patičky (`.site-footer-main`) na `var(--color-accent)`.
        *   Aplikovat `var(--color-accent)` na všechny hlavní nadpisy (`h1`, `h2`, `h3`) v obsahu (`main`).
        *   **Upravit barvu CTA tlačítek (`.button`) na `var(--color-accent)` a přizpůsobit `:hover` stav.**
        *   Upravit `:hover` stav odkazů v patičce pro zajištění kontrastu.
