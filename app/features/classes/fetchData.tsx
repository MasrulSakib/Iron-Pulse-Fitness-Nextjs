export const getClassData = async () => {
    const res = await fetch('/classData.json');
    return await res.json();
}