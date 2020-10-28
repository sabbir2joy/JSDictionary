let Studentroll = {
    1: "Sabbir",
    2: "Rafi",
    3: "Murad",
    4: "Abir",
    5: "Jubair",
}

var myArray = Object.values(Studentroll);
document.getElementById('dic').innerHTML = myArray;

function count() {
    var count = 0;

    for (var i in Studentroll) {
        if (Studentroll.hasOwnProperty(i)) count++;
    }
    return count;
}

var age = prompt('What is your age?');

if ((age >= 18) && (age <= 35)) {
    var name = prompt('What is your name?');
    for (let i = 0; i < count(); i++) {
        if (Studentroll[i] == name) {
            status = 'Belong to the list';
            document.getElementById('text').innerHTML = status;
            break;
        } else {
            status = 'Not in the list';
            document.getElementById('text').innerHTML = status;
        }
    }


} else {
    var status = 'Age Not Okay!'
    document.getElementById('text').innerHTML = status;

}