var obj = {
    name: 'Alice',
    cat: {
        name: 'Bob',
        cat2: {
            name: 'Bob2',
            cat3: {
                name: 'Bob3'
        }
        }
    }
}

if(
    // obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3
    obj.cat?.cat2?.cat3
    ) {
    console.log(obj.cat.cat2.cat3.name);
}