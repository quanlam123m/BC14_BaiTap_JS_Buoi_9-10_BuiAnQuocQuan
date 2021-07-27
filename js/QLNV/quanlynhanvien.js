function QuanLyNhanVien() {
    this.dsnv = JSON.parse(localStorage.getItem("dsnv")) || []
}

QuanLyNhanVien.prototype.khoiTao = function () {
    if (this.dsnv.length === 0) {
        return
    }

    this.dsnv = this.dsnv.map(function (nv) {
        return new NhanVien(
            nv.tkNV,
            nv.tenNV,
            nv.email,
            nv.matKhau,
            nv.ngayLam,
            nv.luong,
            nv.chucVu,
            nv.gioLam)
    })
}

QuanLyNhanVien.prototype.saveLocalStorage = function () {
    localStorage.setItem("dsnv", JSON.stringify(this.dsnv))
}

QuanLyNhanVien.prototype.themNhanVien = function (nhanVien) {
    this.dsnv.push(nhanVien)
    this.saveLocalStorage()
}

QuanLyNhanVien.prototype.capNhatNhanVien = function (nhanVien) {
    this.dsnv = this.dsnv.map(function (nv) {
        if (nv.tkNV === nv.tkNV) {
            return nhanVien
        }
        return nv
    })
    this.saveLocalStorage()
}

QuanLyNhanVien.prototype.xoaNhanVien = function (tkNV) {
    this.dsnv = this.dsnv.filter(function (nv) {
        return nv.tkNV !== tkNV
    })
    this.saveLocalStorage()
}

QuanLyNhanVien.prototype.chonNhanVien = function (tkNV) {
    return this.nhanVien = this.dsnv.find(function (nv) {
        return nv.tkNV === tkNV
    })
}

QuanLyNhanVien.prototype.timKiemNhanVien = function (search) {
    return this.dsnv.filter(function (nv) {
        return nv.xepLoai().toLowerCase().indexOf(search.trim().toLowerCase()) !== -1
    })
}