//Задача 1
document.write('Задание 1' + '</br>')
let arr1 = [1,2,3,4,5]
for (let i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + ' ')
}

//Задача 2
document.write('</br>' + 'Задание 2' + '</br>')

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > -4)
        continue;
    if (arr2[i] < -10)
        continue;
    document.write(arr2[i] + ' ')
}

//Задача 3 ??
document.write('</br>' + 'Задание 3' + '</br>')

let arr3 = [];
for (let i = 22, j = 0; i < 57, j < 35; i++, j++) {
    arr3[j] = (i + 1);
}
document.write(arr3 + '</br>')
let i = 22,
    j = 0;
while (i++ < 57, j++ <35) {
    arr3[j - 1] = i;
}
document.write(arr3 + '</br>')


let a = 57,
    sum = 0;
for (let i = 22; i <= a; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++)
        sum += j;

}
document.write(sum)

//Задача 4
document.write('</br>' + 'Задание 4' + '</br>')
let arr4 = ['10','20','30','50','235','3000']
let j4 = arr4.length;
    for (let i = 0; i < j4; i++) {
        str = arr4[i] + "";
        if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
            document.write(arr4[i] + ' ')
    }
}

//Задача 5
document.write('</br>' + 'Задание 5' + '</br>')
arr5 = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
for (let i = 0; i < arr5.length; i++) {
    if (i == 5 || i ==6) {
        document.write(arr5[i].bold() + ' ')
    }
    else {
        document.write(arr5[i] + ' ')
    }
}

//Задача 6
document.write('</br>' + 'Задание 6' + '</br>')
let arr6 = ['2', 3, 7, 10, '12', 100, 28]
let response6 = arr6[arr6.length -1];
document.write(response6);
 //Задача 7
document.write('</br>' + 'Задание 7' + '</br>')
let a6;
let arr7 = [];

for (let i = 0; a6 != ''; i++) {
    a6 = prompt('Введите любое число,для окончания ввода оставте поле пустым');
    if (a6 != ''){
        arr7.push(a6);
    } else {
        continue;
    }
 arr7.sort() //сортирует
}
document.write(arr7)

//Задача 8
document.write('</br>' + 'Задание 8' + '</br>')
function reverse(array){
let arr8 = [];
while (array.length) {
    arr8.push(array.pop());
}
    return arr8;

}
document.write(reverse([12, false, 'text', 4, 2, -5, 0]))


//Задача 9
document.write('</br>' + 'Задание 9' + '</br>')
let arr9 = [5, 9, 21, , , 9, 78, , , ,  6];
let arr99 = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === undefined) arr99++;
}

document.write('Пустых элементов массива: ' + arr99);

//Задача 10
document.write('</br>' + 'Задание 10' + '</br>')






//Задача 11
document.write('</br>' + 'Задание 11' + '</br>')
