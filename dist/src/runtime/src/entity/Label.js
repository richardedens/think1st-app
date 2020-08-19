"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Label = /** @class */ (function () {
    function Label() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Label.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 200),
        __metadata("design:type", String)
    ], Label.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "nl", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "en", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "fr", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "de", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "da", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "ar", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "fa", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "po", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 2000),
        __metadata("design:type", String)
    ], Label.prototype, "es", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Label.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Label.prototype, "updatedAt", void 0);
    Label = __decorate([
        typeorm_1.Entity()
    ], Label);
    return Label;
}());
exports.Label = Label;
exports.default = Label;
//# sourceMappingURL=Label.js.map