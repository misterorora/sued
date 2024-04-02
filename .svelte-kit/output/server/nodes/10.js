

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/training/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.DjobNNDl.js","_app/immutable/chunks/scheduler.CuuB7FCS.js","_app/immutable/chunks/index.IzQj82vo.js"];
export const stylesheets = ["_app/immutable/assets/9.OpVeWxlD.css"];
export const fonts = [];
