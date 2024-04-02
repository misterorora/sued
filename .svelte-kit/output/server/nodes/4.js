

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/announcements/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.w7t-e6Qx.js","_app/immutable/chunks/scheduler.CuuB7FCS.js","_app/immutable/chunks/index.IzQj82vo.js"];
export const stylesheets = [];
export const fonts = [];
