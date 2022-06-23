export const enumFilter = {
    ShowAll: "ShowAll",
    Design: "Design",
    Branding: "Branding",
    Illustration: "Illustration",
    Motion: "Motion",
}

export function filter(data, type){
    let res =  data.filter((elem) => elem.category === type);
    return res;
}