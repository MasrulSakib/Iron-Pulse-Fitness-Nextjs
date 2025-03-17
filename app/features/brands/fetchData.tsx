export const getBrandData = async () => {
    const res = await fetch('/brandData.json');
    return await res.json();
} 