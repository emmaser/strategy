// This is the Transport constructor.
var Transport = function (strategy) {
    this.strategy = strategy;
};
// transport people using the Strategy passed to the constructor.
Transport.prototype.transporter = function () {
    return this.strategy();
};

// Since a function encapsulates an algorithm, it makes a perfect
// candidate for a Strategy.
var walkingTransportingStrategy = function () {
    console.log("Se irá a pie.");
};

var truckTransportingStrategy = function () {
    console.log("Se irá en camión!");
};

var helicopterTransportingStrategy = function () {
    console.log("Se irá en helicoptero.");
};

// Let's use these strategies!
var walkingTransport = new Transport(walkingTransportingStrategy);
var truckTransport = new Transport(truckTransportingStrategy);
var helicopterTransport = new Transport(helicopterTransportingStrategy);

walkingTransport.transporter();   //=> Se irá a pie.
truckTransport.transporter(); //=> Se irá en camión!
helicopterTransport.transporter();    //=> Se irá en helicoptero.