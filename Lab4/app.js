"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let BodyType;
    (function (BodyType) {
        BodyType["SEDAN"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyType["HATCHBACK"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyType["SUV"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["STANDARD"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        CarClass["PREMIUM"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    let OwnerDocumentType;
    (function (OwnerDocumentType) {
        OwnerDocumentType["PASSPORT"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        OwnerDocumentType["DRIVER_LICENSE"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(OwnerDocumentType = Transport.OwnerDocumentType || (Transport.OwnerDocumentType = {}));
    class Owner {
        constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
    }
    Transport.Owner = Owner;
    class CarImpl {
        constructor(make, model, year, vin, licensePlate, owner, bodyType, carClass) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.licensePlate = licensePlate;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        displayInfo() {
            console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, VIN: ${this.vin}, License Plate: ${this.licensePlate}, Owner: ${this.owner.lastName}, Body Type: ${this.bodyType}, Class: ${this.carClass}`);
        }
    }
    Transport.CarImpl = CarImpl;
    class MotorbikeImpl {
        constructor(make, model, year, vin, licensePlate, owner, type, hasSidecar) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.licensePlate = licensePlate;
            this.owner = owner;
            this.type = type;
            this.hasSidecar = hasSidecar;
        }
        displayInfo() {
            console.log(`Motorbike: ${this.make} ${this.model}, Year: ${this.year}, VIN: ${this.vin}, License Plate: ${this.licensePlate}, Owner: ${this.owner.lastName}, Type: ${this.type}, Has Sidecar: ${this.hasSidecar}`);
        }
    }
    Transport.MotorbikeImpl = MotorbikeImpl;
    class VehicleStorageImpl {
        constructor() {
            this.vehicles = [];
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
        getAllVehicles() {
            return this.vehicles;
        }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
//# sourceMappingURL=app.js.map