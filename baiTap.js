//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.
function bai1(x) {
    return x * x;
}

//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
// Gọi hàm vừa xây dựng được
function bai2() {
    dienTich(10);
    chuVi(10);
}

function dienTich(r) {
    return Math.Pi * r * r;
}

function chuVi(r) {
    return Math.PI * 2 * r;
}

//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.
function bai3(n) {
    let tich = 1;
    for (let i = 0; i < n; i++) {
        tich *= i;
    }
    return tich;
}

//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function bai4() {
    let value = prompt("Nhap vao ki tu bat ki");
    if (parseInt(value)) return true;
    else return false;
}

//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ,
// trả về số nguyên có giá trị nhỏ nhất.
function bai5(a, b, c) {
    if (a < b && a < c) return a;
    else if (b < a && b < c) return b;
    else if (c < a && c < b) return c;
}

//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào
// có phải là nguyên dương không. Nếu là nguyên dương trả về true,
// ngược lại trả về false.
function bai6(a) {
    if (a >= 0) return true;
    else return false;
}


//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì,
// thực hiện đổi chỗ hai số nguyên đó.
function bai7(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return console.log(a, b)
}

//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ,
// sau đó đảo ngược mảng số nguyên đó.
function bai8(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return console.log(arr);
}

//Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
function bai9(arr, key) {
    var count = 0;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            count++;
        }
    }

    return document.write(key + " so lan xuat hien lan luot la " + count);
}

