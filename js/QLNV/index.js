document.getElementById("btnThemNV").addEventListener("click", themNhanVien)
document.getElementById("tableDanhSach").addEventListener("click", select)
document.getElementById("btnCapNhat").addEventListener("click", capNhatNhanVien)
document.getElementById("btnTimNV").addEventListener("click", timKiem)

var qlnv = new QuanLyNhanVien()
qlnv.khoiTao()
hienThi(qlnv.dsnv)

function hienThi(dsnv) {
    var tbody = document.getElementById("tableDanhSach")
    var html = ""
    for (var i = 0; i < dsnv.length; i += 1) {
        var nv = dsnv[i]
        html += `
        <tr>
            <td>${nv.tkNV}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tinhLuong().toFixed(2)}</td>
            <td>${nv.xepLoai()}</td>
            <td>
            <button class="btn btn-primary" data-action="select" data-id="${nv.tkNV}" data-target="#myModal">Update</button>
            <button class="btn btn-primary" data-action="delete" data-id="${nv.tkNV}">Delete</button>
            </td>
        </tr>
        `
    }
    tbody.innerHTML = html
}

function select(event) {
    var tkNV = event.target.getAttribute("data-id")
    var action = event.target.getAttribute("data-action")

    if (action === "select") {
        chonNhanVien(tkNV)
    }
    if (action === "delete") {
        xoaNhanVien(tkNV)
    }
}

function themNhanVien() {
    var tkNV = document.getElementById("tknv").value
    var tenNV = document.getElementById("name").value
    var email = document.getElementById("email").value
    var matKhau = document.getElementById("password").value
    var ngayLam = document.getElementById("datepicker").value
    var luong = +document.getElementById("luongCB").value
    var chucVu = document.getElementById("chucvu").value
    var gioLam = +document.getElementById("gioLam").value

    var NV = new NhanVien(tkNV, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)

    var isValid = xacThuc(NV)
    if (!isValid) {
        return
    }

    qlnv.themNhanVien(NV)
    hienThi(qlnv.dsnv)
    reset()
}

function capNhatNhanVien() {
    var tkNV = document.getElementById("tknv").value
    var tenNV = document.getElementById("name").value
    var email = document.getElementById("email").value
    var matKhau = document.getElementById("password").value
    var ngayLam = document.getElementById("datepicker").value
    var luong = +document.getElementById("luongCB").value
    var chucVu = document.getElementById("chucvu").value
    var gioLam = +document.getElementById("gioLam").value

    var NV = new NhanVien(tkNV, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)

    var isValid = xacThuc(NV)
    if (!isValid) {
        return
    }

    qlnv.capNhatNhanVien(NV)
    hienThi(qlnv.dsnv)
    reset()
}

function reset() {
    updateForm({})
    document.getElementById("tknv").disabled = false
}

function updateForm(nhanVien) {
    document.getElementById("tknv").value = nhanVien.tkNV || ""
    document.getElementById("name").value = nhanVien.tenNV || ""
    document.getElementById("email").value = nhanVien.email || ""
    document.getElementById("password").value = nhanVien.matKhau || ""
    document.getElementById("datepicker").value = nhanVien.ngayLam || ""
    document.getElementById("luongCB").value = nhanVien.luong || ""
    document.getElementById("chucvu").value = nhanVien.chucVu || ""
    document.getElementById("gioLam").value = nhanVien.gioLam || ""
}

function xoaNhanVien(tkNV) {
    qlnv.xoaNhanVien(tkNV)
    hienThi(qlnv.dsnv)
}

function chonNhanVien(tkNV) {
    var nhanVien = qlnv.chonNhanVien(tkNV)
    document.getElementById("tknv").disabled = true
    updateForm(nhanVien)
}

function timKiem() {
    var search = document.getElementById("searchName").value
    var newDsnv = qlnv.timKiemNhanVien(search)
    hienThi(newDsnv)
}

function xacThuc(nhanVien) {
    var validator = new Validator()
    var isValid =
        validator.isRequired('tbTKNV', nhanVien.tkNV) &&
        validator.account('tbTKNV', nhanVien.tkNV);
    isValid &=
        validator.isRequired('tbTen', nhanVien.tenNV) &&
        validator.nameCheck('tbTen', nhanVien.tenNV);
    isValid &=
        validator.isRequired('tbEmail', nhanVien.email) &&
        validator.email('tbEmail', nhanVien.email);
    isValid &=
        validator.isRequired('tbMatKhau', nhanVien.matKhau) &&
        validator.password('tbMatKhau', nhanVien.matKhau);
    isValid &= validator.isRequired('tbNgay', nhanVien.ngayLam);
    isValid &=
        validator.isRequired('tbLuongCB', nhanVien.luong) &&
        validator.salary('tbLuongCB', nhanVien.luong);
    isValid &= validator.isRequired('tbChucVu', nhanVien.chucVu);
    isValid &=
        validator.isRequired('tbGiolam', nhanVien.gioLam) &&
        validator.timeCheck('tbGiolam', nhanVien.gioLam);

    if (!isValid) {
        for (var key in validator.error) {
            if (validator.error[key]) {
                document.getElementById(key).innerHTML = validator.error[key]
            }
        }
        return false
    }

    return true
}