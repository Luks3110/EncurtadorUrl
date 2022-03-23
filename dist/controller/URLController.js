"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const url_1 = require("./../model/url");
const constants_1 = require("./../config/constants");
const shortid_1 = __importDefault(require("shortid"));
class URLController {
    shorten(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { originURL } = req.body;
            const url = url_1.URLModel.findOne({ originURL });
            if (url) {
                res.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortUrl = `${constants_1.config.API_URL}/${hash}`;
            const newUrl = url_1.URLModel.create({ hash, shortUrl, originURL });
            res.json(newUrl);
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = {
                originURL: 'https://www.linkedin.com/feed/',
                hash: "sNMMHJ5vL",
                shortUrl: "http://localhost:3000/sNMMHJ5vL"
            };
            res.redirect(url.originURL);
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=URLController.js.map