export const getBlogData = async () => {
    const res = await fetch('/blogData.json');
    return await res.json();
} 