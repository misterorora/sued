import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".headline.svelte-13cm8eq{font-size:5vw;text-align:center;line-height:1;font-weight:700;position:absolute;left:50%;top:20%;transform:translate(-50%, -50%);letter-spacing:0.02em;text-shadow:2px 8px 6px #00000033, 0px -5px 35px #FFFFFF4D;color:#c79f50}.small_headline.svelte-13cm8eq{font-size:3vw;text-align:center;position:absolute;left:50%;top:40%;transform:translate(-50%, -50%);color:black;text-shadow:2px 8px 6px #00000033, 0px -5px 35px #FFFFFF4D}.explore.svelte-13cm8eq{text-align:center;margin-top:50vh}.button.svelte-13cm8eq{display:inline-block;padding:15px 30px;font-size:20px;background-color:#c79f50;color:white;text-decoration:none;border-radius:5px;transition:background-color 0.3s ease}.button.svelte-13cm8eq:hover{background-color:#a67a36}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <main data-svelte-h="svelte-zm0d1e"><a href="/teams" class="outline-link"><div class="headline svelte-13cm8eq"><p>Südstadt-Volleyball</p></div> <div class="small_headline svelte-13cm8eq"><p>Herzlichen willkommen auf der Website der Nethüppers und noch Sturmball!</p></div> <div class="explore svelte-13cm8eq"><a href="/teams" class="button svelte-13cm8eq">Erfahre mehr</a> </div></a> </main>`;
});
export {
  Page as default
};
