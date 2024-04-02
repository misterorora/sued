import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1pww557{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:rgba(255, 255, 255, 0.8)}.impressum.svelte-1pww557{max-width:800px;background-color:white;padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1pww557" data-svelte-h="svelte-m9xun6"><div class="impressum svelte-1pww557"><h1>Impressum</h1> <p>Angaben gemäß § 5 TMG</p> <p>Fußball ist unser Leben e.V. <br> 
    Kickerstr. 12<br> 
    12345 Stollenhausen</p> <p><strong>Gemeinschaftlich vertretungsberechtigt:</strong><br>
    1. Vorsitzender: Felix Fußballmann <br>
    c/o Kickerstr. 12<br>
    12345 Stollenhausen<br>
    Telefon: +49 (0)815/1234567 - 1<br>
    E-Mail: felix@fussball.de<br><br>
    2. Vorsitzender: Frauke Fußballfrau <br>
    c/o Kickerstr. 12<br>
    12345 Stollenhausen<br>
    Telefon: +49 (0)815/1234567 - 2<br>
    E-Mail: frauke@fussball.de</p> <p><strong>Registergericht:</strong> Amtsgericht Stollenhausen<br> <strong>Registernummer:</strong> VR 12345</p> <p><strong>Umsatzsteuer-Identifikationsnummer:</strong><br>
    DE456789</p> <p><strong>V.i.S.d § 18 Abs. 2 MStV</strong><br>
    Felix Fußballmann<br>
    Kickerstr. 12<br>
    12345 Stollenhausen</p> <p><strong>Haftungsausschluss:</strong> (Übernommen und angepasst aus dem ursprünglichen Impressum)</p> <p>Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</a></p></div> </main>`;
});
export {
  Page as default
};
