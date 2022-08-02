
class CustomMatch {
    constructor(num) {
        this.Num = num;
    }
    plus = function (num) {
        this.Num += num;
        return this;
    };

    minus = function (num) {
        this.Num -= num;
        return this;
    };

    multiply = function (num) {
        this.Num *= num;
        return this;
    };

    divide = function (num) {
        this.Num /= num;
        return this;
    };

    show(){
        console.log(this.Num);
    }
}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

result.show();
