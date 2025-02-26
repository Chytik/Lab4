"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var BodyType;
    (function (BodyType) {
        BodyType["SEDAN"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyType["HATCHBACK"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyType["SUV"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["STANDARD"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        CarClass["PREMIUM"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    var OwnerDocumentType;
    (function (OwnerDocumentType) {
        OwnerDocumentType["PASSPORT"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        OwnerDocumentType["DRIVER_LICENSE"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(OwnerDocumentType = Transport.OwnerDocumentType || (Transport.OwnerDocumentType = {}));
    var Owner = /** @class */ (function () {
        function Owner(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        return Owner;
    }());
    Transport.Owner = Owner;
    var CarImpl = /** @class */ (function () {
        function CarImpl(make, model, year, vin, licensePlate, owner, bodyType, carClass) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.licensePlate = licensePlate;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        CarImpl.prototype.displayInfo = function () {
            console.log("Car: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year, ", VIN: ").concat(this.vin, ", License Plate: ").concat(this.licensePlate, ", Owner: ").concat(this.owner.lastName, ", Body Type: ").concat(this.bodyType, ", Class: ").concat(this.carClass));
        };
        return CarImpl;
    }());
    Transport.CarImpl = CarImpl;
    var MotorbikeImpl = /** @class */ (function () {
        function MotorbikeImpl(make, model, year, vin, licensePlate, owner, type, hasSidecar) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.licensePlate = licensePlate;
            this.owner = owner;
            this.type = type;
            this.hasSidecar = hasSidecar;
        }
        MotorbikeImpl.prototype.displayInfo = function () {
            console.log("Motorbike: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year, ", VIN: ").concat(this.vin, ", License Plate: ").concat(this.licensePlate, ", Owner: ").concat(this.owner.lastName, ", Type: ").concat(this.type, ", Has Sidecar: ").concat(this.hasSidecar));
        };
        return MotorbikeImpl;
    }());
    Transport.MotorbikeImpl = MotorbikeImpl;
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl() {
            this.vehicles = [];
        }
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        VehicleStorageImpl.prototype.sortByMake = function () {
            return this.vehicles.sort(function (a, b) {
                if (a.make < b.make)
                    return -1; // ���������� �� ����������� (� �� �)
                if (a.make > b.make)
                    return 1;
                return 0;
            });
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
function freezePrototype(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function uppercaseMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
var CarImpl = function () {
    var _classDecorators = [freezePrototype];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CarImpl = _classThis = /** @class */ (function () {
        function CarImpl_1(make, model, year, vin, licensePlate, owner, bodyType, carClass) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.licensePlate = licensePlate;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        CarImpl_1.prototype.displayInfo = function () {
            return "Car: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year, ", VIN: ").concat(this.vin, ", License Plate: ").concat(this.licensePlate, ", Owner: ").concat(this.owner.lastName, ", Body Type: ").concat(this.bodyType, ", Class: ").concat(this.carClass);
        };
        return CarImpl_1;
    }());
    __setFunctionName(_classThis, "CarImpl");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarImpl = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarImpl = _classThis;
}();
var owner1 = new Transport.Owner("������", "����", "��������", new Date(1985, 5, 15), Transport.OwnerDocumentType.PASSPORT, "1234", "567890");
var car = new CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, Transport.BodyType.SEDAN, Transport.CarClass.PREMIUM);
console.log(car.displayInfo());
