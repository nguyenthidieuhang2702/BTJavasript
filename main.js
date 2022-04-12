/* Bài 1:
Đầu vào:
        + Lương 1 ngày: 100.000
        + Số ngày làm: 30
Xử lý:
        + Tính số tiền lương: Số ngày làm * Lương 1 ngày
Đầu ra:
        + Tính tiền lương
*/
var luong1Ngay = "100000";
var soNgayLam = "30";
var tienLuong = luong1Ngay * soNgayLam;
console.log(tienLuong);

/* Bài 2:
Đầu vào:
        + 5 số thực :
        a = 1
        b= 2
        c= 3
        d= 4
        e= 5
Xử lý:
        + Tính số trung bình: (a + b + c + d + e)/5
Đầu ra:
        + Trung bình
*/
var a = "1";
var b = "2";
var c = "3";
var d = "4";
var e = "5";
var TB = (a + b + c + d + e) / 5;
console.log(TB);
/* Bài 3:
Đầu vào:
        + Giá USD:23.500VDN
        + Số USD: 2
Xử lý:
        + Số tiền quy đổi: Số USD * 23.500 VND
Đầu ra:
        + Số tiền quy đổi
*/
var USD = "2";
var soTienQuyDoi = USD * 23500;
console.log(soTienQuyDoi);
/*Bài 4:
Đầu vào:
        + Chiều dài : 40
        + Chiều rộng: 60
Xử lý: 
        + Diện tích = Dài * Rộng
        + Chu vi = (Dài + Rộng )*2
Đầu ra:
        + Diện tích
        + Chu vi
*/
var dai = "60";
var rong = "40";
var dienTich = dai * rong;
console.log(dienTich);
var chuVi = (dai + rong) * 2;
console.log(chuVi);

/*Bài 5:
Đầu vào:
        + Số
Xử lý
        + Số hàng đơn vị = số % 10
        + Số hàng chục = số /10
        + Tong = Số hàng chục + Hàng đơn vị
Đầu ra:
        +Tổng?
*/
var so = "56";
var soHangDonVi = so % 10;
var soHangChuc = so / 10;
var tong = soHangChuc + soHangDonVi;
console.log(tong);