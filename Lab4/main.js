"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var owner1 = new app_1.Transport.Owner("������", "����", "��������", new Date(1985, 5, 15), app_1.Transport.OwnerDocumentType.PASSPORT, "1234", "567890");
var car1 = new app_1.Transport.CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, app_1.Transport.BodyType.SEDAN, app_1.Transport.CarClass.PREMIUM);
var motorbike1 = new app_1.Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2021, "JYARN23E0A0000001", "B456CD", owner1, "����������", true);
var vehicleStorage = new app_1.Transport.VehicleStorageImpl();
vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(motorbike1);
var vehicles = vehicleStorage.getAllVehicles();
vehicles.forEach(function (vehicle) { return vehicle.displayInfo(); });
