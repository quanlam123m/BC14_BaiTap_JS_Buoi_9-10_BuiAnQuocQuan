function NhanVien(tkNV, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    this.tkNV = tkNV
    this.tenNV = tenNV
    this.email = email
    this.matKhau = matKhau
    this.ngayLam = ngayLam
    this.luong = luong
    this.chucVu = chucVu
    this.gioLam = gioLam
}

NhanVien.prototype.tinhLuong = function () {
    if (this.chucVu === "Sếp") {
        return this.luong * 3
    }
    if (this.chucVu === "Trưởng phòng") {
        return this.luong * 2
    }
    else {
        return this.luong
    }
}

NhanVien.prototype.xepLoai = function () {
    if (this.gioLam >= 192) {
        return "Xuất xắc"
    }
    if (this.gioLam >= 176) {
        return "Giỏi"
    }
    if (this.gioLam >= 160) {
        return "Khá"
    }
    if (this.gioLam < 160) {
        return "Trung Bình"
    }
}