

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/announcements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CQgmZrgY.js","_app/immutable/chunks/scheduler.CuuB7FCS.js","_app/immutable/chunks/index.IzQj82vo.js"];
export const stylesheets = [];
export const fonts = [];
