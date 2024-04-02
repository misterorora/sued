

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BnTGBxJ9.js","_app/immutable/chunks/scheduler.CuuB7FCS.js","_app/immutable/chunks/index.IzQj82vo.js","_app/immutable/chunks/entry.CLlR81_B.js"];
export const stylesheets = [];
export const fonts = [];
