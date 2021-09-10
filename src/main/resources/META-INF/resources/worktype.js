const URL = 'http://localhost:8080';
let worktypes = [];

const createWorktype = () => {
    const worktype1 = {};
    const worktype2 = {};
    const worktype3 = {};
    const worktype4 = {};
    worktype1['worktypename'] = "Work";
    worktype2['worktypename'] = "Internal education";
    worktype3['worktypename'] = "Sick";
    worktype4['worktypename'] = "Holiday";

    console.log("" + worktype1['worktypename'] + "" + worktype2['worktypename'] + "" + worktype3['worktypename'] + "" + worktype4['worktypename'])


    fetch(`${URL}/worktypes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(worktype1, worktype2, worktype3, worktype4)
    }).then((result) => {
        result.json().then((worktype1, worktype2, worktype3, worktype4) => {
            worktypes.push(worktype1);
            worktypes.push(worktype2);
            worktypes.push(worktype3);
            worktypes.push(worktype4);
            renderWorktypes()
        });
    });
};

const renderWorktypes = () => {
    const display = document.querySelector('#worktypeDisplay');
    display.innerHTML = '';

    var select = document.createElement('select');
    select.name = "Worktype";
    select.id = "worktype"

    worktypes.forEach((worktype) => {
        var option = document.createElement('option');
        option.value = worktype.id;
        option.text = worktype.worktypename;
        select.appendChild(option);
    });
    var label = document.createElement("label");
    label.innerHTML = "Choose your worktype: "
    label.htmlFor = "worktype";

    //document.getElementById("worktypeDisplay").appendChild(label).appendChild(select);
};
