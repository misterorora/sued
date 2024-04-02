import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: ".header.svelte-d9j5gp{display:flex;justify-content:space-between;align-items:center;padding:10px}.home.svelte-d9j5gp{margin:0;font-size:24px;font-weight:bold;border-radius:5px}nav.svelte-d9j5gp{padding:10px}ul.svelte-d9j5gp{display:flex;list-style:none;margin:0;padding:0}li.svelte-d9j5gp{margin-right:1em;font-weight:bold}a.svelte-d9j5gp{color:black;text-decoration:none;padding:5px 10px;border-radius:5px}.standard.svelte-d9j5gp:hover{background-color:#BEDAEF;transition:background-color 0.3s ease}.home.svelte-d9j5gp:hover{background-color:#BEDAEF;transition:background-color 0.3s ease}.member.svelte-d9j5gp{color:white;text-decoration:none;border-radius:5px}.button.svelte-d9j5gp{background-color:#c79f50;transition:background-color 0.3s ease;color:white}.button.svelte-d9j5gp:hover{background-color:#a67a36}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `  <div class="header svelte-d9j5gp" data-svelte-h="svelte-1uf6odr"> <h1 class="home svelte-d9j5gp"><a href="/" class="svelte-d9j5gp">Südstadt-Volleyball</a></h1> <nav class="svelte-d9j5gp"><ul class="svelte-d9j5gp"><li class="svelte-d9j5gp"><a class="standard svelte-d9j5gp" href="/announcements">Ankündigungen</a></li> <li class="svelte-d9j5gp"><a class="standard svelte-d9j5gp" href="/teams">Teams</a></li> <div class="member svelte-d9j5gp"><li class="svelte-d9j5gp"><a href="/contact" class="button svelte-d9j5gp">Mitglied werden?</a></li></div> <li class="svelte-d9j5gp"><a class="standard svelte-d9j5gp" href="/rules">Regeln</a></li> <li class="svelte-d9j5gp"><a class="standard svelte-d9j5gp" href="/training">Trainingsplan</a></li> <li class="svelte-d9j5gp"><a class="standard svelte-d9j5gp" href="/gallery">Galerie</a></li></ul></nav> </div>`;
});
const css = {
  code: '.footer.svelte-l4os55{position:fixed;bottom:0;right:0;padding:10px;z-index:1}nav.svelte-l4os55{background-color:"#e4d5b7";padding:10px}ul.svelte-l4os55{display:flex;list-style:none;margin:0;padding:0}li.svelte-l4os55{margin-right:1em;font-weight:bold}a.svelte-l4os55{color:black;text-decoration:none;padding:5px 10px;border-radius:5px}a.svelte-l4os55:hover{background-color:#BEDAEF;transition:background-color 0.3s ease}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <div class="footer svelte-l4os55" data-svelte-h="svelte-wgw3jh"> <nav class="svelte-l4os55"><ul class="svelte-l4os55"><li class="svelte-l4os55"><a href="/impressum" class="svelte-l4os55">Impressum</a></li> <li class="svelte-l4os55"><a href="/contact" class="svelte-l4os55">Kontakt</a></li></ul></nav> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` <title data-svelte-h="svelte-1xjisg4">Südstadt-Volleyball</title>  <main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  <div>${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
