import { Transport } from './app';

const owner1 = new Transport.Owner("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.PASSPORT, "1234", "567890");

const car1 = new Transport.CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, Transport.BodyType.SEDAN, Transport.CarClass.PREMIUM);
const motorbike1 = new Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2021, "JYARN23E0A0000001", "B456CD", owner1, "Спортивная", true);

const vehicleStorage = new Transport.VehicleStorageImpl<Transport.Vehicle>();

vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(motorbike1);

const vehicles = vehicleStorage.getAllVehicles();
vehicles.forEach(vehicle => vehicle.displayInfo());