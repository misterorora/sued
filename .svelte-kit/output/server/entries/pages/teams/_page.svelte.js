import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".spotify.svelte-c534vt{position:absolute;top:52%;left:25%;transform:translateX(-50%);width:40%;height:352px}.spotify_text.svelte-c534vt{font-size:2vw;text-align:center;position:fixed;left:75%;top:60%;transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-aiz1k0">Teams</h1> <main data-svelte-h="svelte-krng73"><div class="spotify svelte-c534vt"><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4e70rKjBB3L7Ca4m7rpkMs?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Team Playlist"></iframe></div> <p class="spotify_text svelte-c534vt">Hören sie hier die offizielle Team Playlist!</p> </main>`;
});
export {
  Page as default
};
