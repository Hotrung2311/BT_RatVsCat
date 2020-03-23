let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    this.sound = function () {
        alert("meo meo")
    };
    this.chasing = function (rat) {
        if (this.speed > rat.speed){
            console.log(this.name + " bắt được " + rat.name);
        }
    };
    this.eating = function(rat){
        if (rat.status === true){
            this.weight = this.weight + rat.weight;
            console.log(this.weight);
        }
    }
};