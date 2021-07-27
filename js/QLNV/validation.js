function Validator() {
    this.error = {}
}

// Để trống input
Validator.prototype.isRequired = function (name, value) {
    if (!value) {
        this.error[name] = "Vui lòng nhập vào trường này"
        return false
    }
    return true
}

// Email
Validator.prototype.email = function (name, value) {
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        this.error[name] = "Email không đúng định dạng"
        return false
    }
    return true
}

// Account 
Validator.prototype.account = function (name, value) {
    if (!/[0-9]{4,6}$/.test(value)) {
        this.error[name] = "Tài Khoản không hợp lệ";
        return false;

    }
    return true
}

// Name 
Validator.prototype.nameCheck = function (name, value) {
    if (!/[A-Za-z]$/.test(value)) {
        this.error[name] = "Tên nhân viên không hợp lệ";
        return false;

    }
    return true
}

// Mật khẩu 
Validator.prototype.password = function (name, value) {
    if (!/^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{6,10}$/.test(value)) {
        this.error[name] = "Mật Khẩu phải có ký tự đặc biệt và phải từ 6-10 ký tự";
        return false;
    }
    return true
}

// Lương
Validator.prototype.salary = function (name, value) {
    if (1000000 < value && value < 20000000) {
        return true;

    } else {
        this.error[name] = "Giá trị từ 1.000.000 - 20.000.000";
        return false;
    }

}

// Giờ làm
Validator.prototype.timeCheck = function (name, value) {
    if (80 < value && value < 200) {
        return true;
    } else {
        this.error[name] = "Giá trị giờ làm 80h - 200h";
        return false;
    }
}