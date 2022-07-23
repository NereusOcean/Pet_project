
function generateCards(data, constData) {
    let res = JSON.parse(JSON.stringify(data));
    let newObj = JSON.parse(JSON.stringify(constData));

    for(let i = 0; i < 9; ++i){
        let cur = newObj[i];
        cur.id = Number(res[res.length-1].id)+1;
        cur.name = constData[i%9].name + cur.id;
        res.push(cur);
    }
    console.log(res);
    return res;
}

export default generateCards