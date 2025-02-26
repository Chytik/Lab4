export namespace Transport {
    export enum BodyType {
        SEDAN = "�����",
        HATCHBACK = "�������",
        SUV = "�����������"
    }

    export enum CarClass {
        STANDARD = "��������",
        PREMIUM = "�������"
    }

    export enum OwnerDocumentType {
        PASSPORT = "�������",
        DRIVER_LICENSE = "������������ �������������"
    }

    export interface Vehicle {
        displayInfo(): void;
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    export interface Motorbike extends Vehicle {
        type: string;
        hasSidecar: boolean;
    }

    export class Owner {
        constructor(
            public lastName: string,
            public firstName: string,
            public middleName: string,
            public birthDate: Date,
            public documentType: OwnerDocumentType,
            public documentSeries: string,
            public documentNumber: string
        ) { }
    }

    export class CarImpl implements Car {
        constructor(
            public make: string,
            public model: string,
            public year: number,
            public vin: string,
            public licensePlate: string,
            public owner: Owner,
            public bodyType: BodyType,
            public carClass: CarClass
        ) { }

        displayInfo(): void {
            console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, VIN: ${this.vin}, License Plate: ${this.licensePlate}, Owner: ${this.owner.lastName}, Body Type: ${this.bodyType}, Class: ${this.carClass}`);
        }
    }

    export class MotorbikeImpl implements Motorbike {
        constructor(
            public make: string,
            public model: string,
            public year: number,
            public vin: string,
            public licensePlate: string,
            public owner: Owner,
            public type: string,
            public hasSidecar: boolean
        ) { }

        displayInfo(): void {
            console.log(`Motorbike: ${this.make} ${this.model}, Year: ${this.year}, VIN: ${this.vin}, License Plate: ${this.licensePlate}, Owner: ${this.owner.lastName}, Type: ${this.type}, Has Sidecar: ${this.hasSidecar}`);
        }
    }

    
    export interface VehicleStorage<T extends Vehicle> {
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
        sortByMake(): T[]; 
    }
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private vehicles: T[] = [];


        addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }

        getAllVehicles(): T[] {
            return this.vehicles;
        }

        sortByMake(): T[] {
            return this.vehicles.sort((a, b) => {
                if (a.make < b.make) return -1; 
                if (a.make > b.make) return 1;
                return 0;
            });
        }
    }
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private vehicles: T[] = [];

        addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }

        getAllVehicles(): T[] {
            return this.vehicles;
        }

        sortByMake(): T[] {
            return this.vehicles.sort((a, b) => a.make.localeCompare(b.make));
        }
    }
}

function freezePrototype(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}

@freezePrototype
class CarImpl implements Transport.Car {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public vin: string,
        public licensePlate: string,
        public owner: Transport.Owner,
        public bodyType: Transport.BodyType,
        public carClass: Transport.CarClass
    ) { }

    uppercaseMethod
    displayInfo(): string {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}, VIN: ${this.vin}, License Plate: ${this.licensePlate}, Owner: ${this.owner.lastName}, Body Type: ${this.bodyType}, Class: ${this.carClass}`;
    }
}

const owner1 = new Transport.Owner("������", "����", "��������", new Date(1985, 5, 15), Transport.OwnerDocumentType.PASSPORT, "1234", "567890");
const car = new CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, Transport.BodyType.SEDAN, Transport.CarClass.PREMIUM);

console.log(car.displayInfo()); 
const vehicles: Transport.Vehicle[] = [
    new Transport.CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, Transport.BodyType.SEDAN, Transport.CarClass.PREMIUM),
    new Transport.CarImpl("Honda", "Civic", 2019, "2HGBH41JXMN109187", "B456CD", owner2, Transport.BodyType.HATCHBACK, Transport.CarClass.STANDARD)
];

const sortedVehicles = vehicles.sort((a, b) => a.make.localeCompare(b.make));



 