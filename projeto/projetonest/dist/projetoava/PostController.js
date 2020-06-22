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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const PostServices_1 = require("./services/PostServices");
const CreatePostDto_1 = require("./dtos/CreatePostDto");
let PostController = class PostController {
    constructor(postServices) {
        this.postServices = postServices;
    }
    findAll() {
        return this.postServices.findAll();
    }
    create(createPostDto) {
        return this.postServices.create(createPostDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePostDto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "create", null);
PostController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [PostServices_1.PostServices])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map