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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var EC = protractor_1.ExpectedConditions;
var timeout = 10000;
describe('Chilli Piper Test Assesment', function () {
    var _this = this;
    it('Navigate to Gmail URL', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.get("https://www.gmail.com")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.manage().window().maximize()
                        //type in Usename
                    ];
                case 3:
                    _a.sent();
                    //type in Usename
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.id("identifierId"))), timeout, "No items found")];
                case 4:
                    //type in Usename
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("input[type='email']")).sendKeys("chilliPiperusertest@gmail.com")
                        //click on Next
                    ];
                case 5:
                    _a.sent();
                    //click on Next
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.id("identifierNext")).click()
                        //type in Password
                    ];
                case 6:
                    //click on Next
                    _a.sent();
                    //type in Password
                    return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 7:
                    //type in Password
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.id("password"))), timeout, "No items found")];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("input[type='password']")).sendKeys("Ch1ll1test")
                        //click on Next
                    ];
                case 10:
                    _a.sent();
                    //click on Next
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.id("passwordNext")).click()
                        //verifies Login and page is correct
                    ];
                case 11:
                    //click on Next
                    _a.sent();
                    //verifies Login and page is correct
                    return [4 /*yield*/, protractor_1.browser.wait((0, protractor_1.element)(protractor_1.by.css('div[class="OS"]')).isPresent(), 10000, 'timeout')];
                case 12:
                    //verifies Login and page is correct
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Send email', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("div[role='button"))), timeout, "No items found")];
                case 1:
                    _a.sent();
                    //Click on compose email
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.cssContainingText("div[role='button']", "Compose")).click()];
                case 2:
                    //Click on compose email
                    _a.sent();
                    expect((0, protractor_1.element)(protractor_1.by.cssContainingText("div[class='aYF']", "New Message")));
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)
                        //Add a recipient
                    ];
                case 3:
                    _a.sent();
                    //Add a recipient
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("textarea[aria-autocomplete='list']"))), timeout, "No items found")];
                case 4:
                    //Add a recipient
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("textarea[aria-autocomplete='list']")).sendKeys("chilliPiperusertest@gmail.com")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)
                        //Add a subject
                    ];
                case 6:
                    _a.sent();
                    //Add a subject
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("input[name='subjectbox']"))), timeout, "No items found")];
                case 7:
                    //Add a subject
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("input[name='subjectbox']")).sendKeys("testChili")];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)
                        //Create message
                    ];
                case 9:
                    _a.sent();
                    //Create message
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("div[aria-label='Message Body']"))), timeout, "No items found")];
                case 10:
                    //Create message
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("div[aria-label='Message Body']")).sendKeys("This is a test assesment")];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)
                        //Click Send
                    ];
                case 12:
                    _a.sent();
                    //Click Send
                    return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("div[class='dC']"))), timeout, "No items found")];
                case 13:
                    //Click Send
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("div[class='dC']")).click()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)
                        //Validate message arrived (Received email)
                    ];
                case 15:
                    _a.sent();
                    //Validate message arrived (Received email)
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.linkText("Sent")).click()];
                case 16:
                    //Validate message arrived (Received email)
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Schedule email sent', function () { return __awaiter(_this, void 0, void 0, function () {
        var searchMails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //select email from the inbox
                return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.linkText("Inbox")).click()];
                case 1:
                    //select email from the inbox
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    searchMails = protractor_1.element.all(protractor_1.by.css("tr[jsmodel='nXDxbd']"));
                    searchMails.count().then(function (numberOfItems) { return Math.floor(Math.random() * numberOfItems); }).then(function (randomNumber) {
                        searchMails.get(randomNumber).click();
                    });
                    protractor_1.browser.sleep(2000);
                    //click snooze
                    //await browser.actions().mouseMove(element(by.css("div[data-tooltip='Snooze']"))).perform();
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove((0, protractor_1.element)(protractor_1.by.css("div[data-tooltip='Snooze']"))).mouseMove((0, protractor_1.element)(protractor_1.by.css("div[data-tooltip='Snooze']"))).click().perform()];
                case 2:
                    //click snooze
                    //await browser.actions().mouseMove(element(by.css("div[data-tooltip='Snooze']"))).perform();
                    _a.sent();
                    //await element(by.css("div[data-tooltip='Snooze']")).click()
                    protractor_1.browser.sleep(2000);
                    //select day/time
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.linkText("Tomorrow")).click()];
                case 3:
                    //select day/time
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Search email', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //Add a search ('test')
                return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("input[placeholder='Search mail']"))), timeout, "No items found")];
                case 1:
                    //Add a search ('test')
                    _a.sent();
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("input[placeholder='Search mail']")).sendKeys("test")
                        //Click on the results
                    ];
                case 2:
                    _a.sent();
                    //Click on the results
                    return [4 /*yield*/, (0, protractor_1.element)(protractor_1.by.css("button[aria-label='Search mail']")).click()];
                case 3:
                    //Click on the results
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
