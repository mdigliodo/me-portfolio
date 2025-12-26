export const createPageUrl = (page) => {
    if (!page) return "/";
    const slug = page.toLowerCase().replace(/\s+/g, '-');
    return slug === 'home' ? '/' : `/${slug}`;
};
