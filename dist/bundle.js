/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/Application.ts":
/*!***********************************!*\
  !*** ./src/common/Application.ts ***!
  \***********************************/
/*! exports provided: EInputEventType, CanvasInputEvent, CanvasMouseEvent, CanvasKeyBoardEvent, Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EInputEventType", function() { return EInputEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasInputEvent", function() { return CanvasInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMouseEvent", function() { return CanvasMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasKeyBoardEvent", function() { return CanvasKeyBoardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/TSM */ "./src/common/math/TSM.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var EInputEventType;
(function (EInputEventType) {
    EInputEventType[EInputEventType["MOUSEEVENT"] = 0] = "MOUSEEVENT";
    EInputEventType[EInputEventType["MOUSEDOWN"] = 1] = "MOUSEDOWN";
    EInputEventType[EInputEventType["MOUSEUP"] = 2] = "MOUSEUP";
    EInputEventType[EInputEventType["MOUSEMOVE"] = 3] = "MOUSEMOVE";
    EInputEventType[EInputEventType["MOUSEDRAG"] = 4] = "MOUSEDRAG";
    EInputEventType[EInputEventType["KEYBOARDEVENT"] = 5] = "KEYBOARDEVENT";
    EInputEventType[EInputEventType["KEYUP"] = 6] = "KEYUP";
    EInputEventType[EInputEventType["KEYDOWN"] = 7] = "KEYDOWN";
    EInputEventType[EInputEventType["KEYPRESS"] = 8] = "KEYPRESS"; //按键事件
})(EInputEventType || (EInputEventType = {}));
;
// CanvasKeyboardEvent和CanvasMouseEvent都继承自本类
// 基类定义了共同的属性，keyboard或mouse事件都能使用组合键
// 例如你可以按着ctrl键的同时点击鼠标左键做某些事情
// 当然你也可以按着alt + a 键做另外一些事情
class CanvasInputEvent {
    // 构造函数，使用了default参数
    constructor(type, altKey = false, ctrlKey = false, shiftKey = false) {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.type = type;
    }
}
// 纯数据类
// 我们不需要导出Timer类，因为只是作为内部类使用
class Timer {
    constructor(callback) {
        this.id = -1; // 计时器的id号 
        // 标记当前计时器是否有效，很重要的一个变量，具体看后续代码
        this.enabled = false;
        this.callbackData = undefined; // 用作回调函数的参数
        this.countdown = 0; // 倒计时器，每次update时会倒计时
        this.timeout = 0; // 
        this.onlyOnce = false;
        this.callback = callback;
    }
}
class CanvasMouseEvent extends CanvasInputEvent {
    constructor(type, canvasPos, button, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.canvasPosition = canvasPos;
        this.button = button;
        console.log(this.button);
    }
}
class CanvasKeyBoardEvent extends CanvasInputEvent {
    constructor(type, key, keyCode, repeat, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.key = key;
        this.keyCode = keyCode;
        this.repeat = repeat;
    }
}
class Application {
    constructor(canvas) {
        this.timers = [];
        this._timeId = -1;
        this._fps = 0;
        this.isFlipYCoord = false;
        this._isRightMouseDown = false; // 为了支持鼠标按下drag事件
        // _start成员变量用于标记当前Application是否进入不间断的循环状态
        this._start = false;
        // 由Window对象的requestAnimationFrame返回的大于0的id号
        // 我们可以使用cancelAnimationFrame ( this ._requestId )来取消动画循环
        this._requestId = -1;
        // Application基类拥有一个HTMLCanvasElement对象
        // 这样子类可以分别从该HTMLCanvasElement中获取Canvas2D或WebGL上下文对象
        this.canvas = canvas;
        // canvas元素能够监听鼠标事件
        this.canvas.addEventListener("mousedown", this, false);
        this.canvas.addEventListener("mouseup", this, false);
        this.canvas.addEventListener("mousemove", this, false);
        // 很重要一点，键盘事件不能在canvas中触发，但是能在全局的window对象中触发
        // 因此我们能在window对象中监听键盘事件
        window.addEventListener("keydown", this, false);
        window.addEventListener("keyup", this, false);
        window.addEventListener("keypress", this, false);
        // 初始化时，mouseDown为false
        this._isMouseDown = false;
        // 默认状态下，不支持mousemove事件
        this.isSupportMouseMove = false;
        this.frameCallback = null;
        document.oncontextmenu = function () { return false; }; // 禁止右键上下文菜单
    }
    // 判断当前Application是否一直在调用requestAnimationFrame
    isRunning() {
        return this._start;
    }
    // 计算当前的FPS（Frame Per Second）
    get fps() {
        return this._fps;
    }
    // 启动动画循环
    start() {
        if (this._start === false) {
            this._start = true;
            //this . _requestId = -1 ; // 将_requestId设置为-1
            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            // 启动更新渲染循环
            this._requestId = requestAnimationFrame((msec) => {
                // 启动step方法
                this.step(msec);
            });
            //注释掉上述代码，使用下面代码来启动step方法
            //this . _requestId = requestAnimationFrame ( this . step . bind ( this ) ) ;
        }
    }
    // 不停的周而复始运动
    step(timeStamp) {
        //第一次调用本函数时，设置start和lastTime为timestamp
        if (this._startTime === -1)
            this._startTime = timeStamp;
        if (this._lastTime === -1)
            this._lastTime = timeStamp;
        //计算当前时间点与第一次调用step时间点的差
        let elapsedMsec = timeStamp - this._startTime;
        //计算当前时间点与上一次调用step时间点的差(可以理解为两帧之间的时间差)
        // 此时intervalSec实际是毫秒表示
        let intervalSec = (timeStamp - this._lastTime);
        // 第一帧的时候,intervalSec为0,防止0作分母
        if (intervalSec !== 0) {
            // 计算fps
            this._fps = 1000.0 / intervalSec;
        }
        // 我们update使用的是秒为单位，因此转换为秒表示
        intervalSec /= 1000.0;
        //记录上一次的时间戳
        this._lastTime = timeStamp;
        this._handleTimers(intervalSec);
        // console.log (" elapsedTime = " + elapsedMsec + " diffTime = " + intervalSec);
        // 先更新
        this.update(elapsedMsec, intervalSec);
        // 后渲染
        this.render();
        if (this.frameCallback !== null) {
            this.frameCallback(this);
        }
        // 递归调用，形成周而复始的前进
        requestAnimationFrame((elapsedMsec) => {
            this.step(elapsedMsec);
        });
    }
    // 停止动画循环
    stop() {
        if (this._start) {
            // cancelAnimationFrame函数用于:
            //取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求
            //alert(this._requestId);
            cancelAnimationFrame(this._requestId);
            //this . _requestId = -1 ; // 将_requestId设置为-1
            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false;
        }
    }
    //虚方法，子类能覆写（override），用于更新
    //注意: 第二个参数是秒为单位，第一参数是毫秒为单位
    update(elapsedMsec, intervalSec) { }
    //虚方法，子类能覆写（override），用于渲染
    render() { }
    // 虚函数，子类覆写（overide），用于同步各种资源后启动Application
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // 调用start方法，该方法会启动requestAnimationFrame
            // 然后不停的进行回调
            this.start();
        });
    }
    // 调用dispatchXXXX虚方法进行事件分发
    // handleEvent是接口EventListenerObject定义的协议分发，必须要实现
    handleEvent(evt) {
        switch (evt.type) {
            case "mousedown":
                this._isMouseDown = true;
                this.onMouseDown(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDOWN));
                break;
            case "mouseup":
                this._isMouseDown = false;
                this.onMouseUp(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEUP));
                break;
            case "mousemove":
                // 如果isSupportMouseMove为true，才会每次鼠标移动触发mouseMove事件
                if (this.isSupportMouseMove) {
                    this.onMouseMove(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEMOVE));
                }
                // 同时，如果当前鼠标任意一个键处于按下状态并拖动时，触发drag事件
                if (this._isMouseDown) {
                    this.onMouseDrag(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDRAG));
                }
                break;
            case "keypress":
                this.onKeyPress(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYPRESS));
                break;
            case "keydown":
                this.onKeyDown(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYDOWN));
                break;
            case "keyup":
                this.onKeyUp(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYUP));
                break;
        }
    }
    onMouseDown(evt) {
        return;
    }
    onMouseUp(evt) {
        return;
    }
    onMouseMove(evt) {
        return;
    }
    onMouseDrag(evt) {
        return;
    }
    onKeyDown(evt) {
        return;
    }
    onKeyUp(evt) {
        return;
    }
    onKeyPress(evt) {
        return;
    }
    getMouseCanvas() {
        return this.canvas;
    }
    // 将鼠标事件发生时鼠标指针的位置变换为相对当前canvas元素的偏移表示
    // 这是一个私有方法，意味着只能在本类中使用,子类和其他类都无法调用本方法
    // 只要是鼠标事件（down / up / move / drag .....）都需要调用本方法
    // 将相对于浏览器viewport表示的点变换到相对于canvas表示的点
    viewportToCanvasCoordinate(evt) {
        // 切记，很重要一点：
        // getBoundingClientRect方法返回的ClientRect
        let rect = this.getMouseCanvas().getBoundingClientRect();
        // 获取触发鼠标事件的target元素，这里总是HTMLCanvasElement
        if (evt.target) {
            let x = evt.clientX - rect.left;
            let y = 0;
            y = evt.clientY - rect.top; // 相对于canvas左上的偏移
            if (this.isFlipYCoord) {
                y = this.getMouseCanvas().height - y;
            }
            // 变成矢量表示
            let pos = new _math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([x, y]);
            return pos;
        }
        alert("evt . target为null");
        throw new Error("evt . target为null");
    }
    // 将DOM Event对象信息转换为我们自己定义的CanvasMouseEvent事件
    _toCanvasMouseEvent(evt, type) {
        // 向下转型，将Event转换为MouseEvent
        let event = evt;
        if (type === EInputEventType.MOUSEDOWN && event.button === 2) {
            this._isRightMouseDown = true;
        }
        else if (type === EInputEventType.MOUSEUP && event.button === 2) {
            this._isRightMouseDown = false;
        }
        let buttonNum = event.button;
        if (this._isRightMouseDown && type === EInputEventType.MOUSEDRAG) {
            buttonNum = 2;
        }
        // 将客户区的鼠标pos变换到Canvas坐标系中表示
        let mousePosition = this.viewportToCanvasCoordinate(event);
        // 将Event一些要用到的信息传递给CanvasMouseEvent并返回
        let canvasMouseEvent = new CanvasMouseEvent(type, mousePosition, buttonNum, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasMouseEvent;
    }
    // 将DOM Event对象信息转换为我们自己定义的Keyboard事件
    _toCanvasKeyBoardEvent(evt, type) {
        let event = evt;
        // 将Event一些要用到的信息传递给CanvasKeyBoardEvent并返回
        let canvasKeyboardEvent = new CanvasKeyBoardEvent(type, event.key, event.keyCode, event.repeat, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasKeyboardEvent;
    }
    // 初始化时，timers是空列表
    // 为了减少内存析构，我们在removeTimer时，并不从timers中删除掉timer，而是设置enabled为false
    // 这样让内存使用量和析构达到相对平衡状态
    // 每次添加一个计时器时，先查看timers列表中是否有没有时候用的timer，有的话，返回该timer的id号
    // 如果没有可用的timer，就重新new一个timer，并设置其id号以及其他属性
    addTimer(callback, timeout = 1.0, onlyOnce = false, data = undefined) {
        let timer;
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            if (timer.enabled === false) {
                timer.callback = callback;
                timer.callbackData = data;
                timer.timeout = timeout;
                timer.countdown = timeout;
                timer.enabled = true;
                timer.onlyOnce = onlyOnce;
                return timer.id;
            }
        }
        // 不存在，就新创建一个Timer对象
        timer = new Timer(callback);
        timer.callbackData = data;
        timer.timeout = timeout;
        timer.countdown = timeout;
        timer.enabled = true;
        timer.id = ++this._timeId; // 由于初始化时id为-1,所以前++
        timer.onlyOnce = onlyOnce; //设置是否是一次回调还是重复回调
        // 添加到timers列表中去
        this.timers.push(timer);
        // 返回新添加的timer的id号
        return timer.id;
    }
    // 根据id在timers列表中查找
    // 如果找到，则设置timer的enabled为false，并返回true
    // 如没找到，返回false
    removeTimer(id) {
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].id === id) {
                let timer = this.timers[i];
                timer.enabled = false; // 只是enabled设置为false，并没有从数组中删除掉
                found = true;
                break;
            }
        }
        return found;
    }
    // _handleTimers私有方法被Application的update函数调用
    // update函数第二个参数是以秒表示的前后帧时间差
    // 正符合_handleTimers参数要求
    // 我们的计时器依赖于requestAnimationFrame回调
    // 如果当前Application没有调用start的话
    // 则计时器不会生效
    _handleTimers(intervalSec) {
        // 遍历整个timers列表
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            // 如果当前timer enabled为false，那么继续循环
            if (timer.enabled === false) {
                continue;
            }
            // countdown初始化时 = timeout
            // 每次调用本函数，会减少上下帧的时间间隔
            // 从而形成倒计时的效果
            timer.countdown -= intervalSec;
            // 如果countdown 小于 0.0，那么说明时间到了
            // 要触发回调了
            // 从这里看到，实际上timer并不是很精确的
            // 举个例子，假设我们update每次0.16秒
            // 我们的timer设置0.3秒回调一次
            // 那么实际上是 ( 0.3 - 0.32 ) < 0 ,触发回调
            if (timer.countdown < 0.0) {
                // 调用回调函数
                timer.callback(timer.id, timer.callbackData);
                // 如果该计时器需要重复触发
                if (timer.onlyOnce === false) {
                    // 我们重新将countdown设置为timeout
                    // 由此可见，timeout不会更改，它规定了触发的时间间隔
                    // 每次更新的是countdown倒计时器
                    timer.countdown = timer.timeout; //很精妙的一个技巧
                }
                else { // 如果该计时器只需要触发一次，那么我们就删除掉该计时器
                    this.removeTimer(timer.id);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/common/container/Dictionary.ts":
/*!********************************************!*\
  !*** ./src/common/container/Dictionary.ts ***!
  \********************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
class Dictionary {
    constructor(useES6Map = true) {
        this._count = 0;
        if (useES6Map === true) {
            this._items = new Map();
        }
        else {
            this._items = {};
        }
    }
    get length() {
        return this._count;
    }
    contains(key) {
        if (this._items instanceof Map) {
            return this._items.has(key);
        }
        else {
            return (this._items[key] !== undefined);
        }
    }
    find(key) {
        if (this._items instanceof Map) {
            return this._items.get(key);
        }
        else {
            return this._items[key];
        }
    }
    insert(key, value) {
        if (this._items instanceof Map) {
            this._items.set(key, value);
        }
        else {
            this._items[key] = value;
        }
        this._count++;
    }
    remove(key) {
        let ret = this.find(key);
        if (ret === undefined) {
            return false;
        }
        if (this._items instanceof Map) {
            this._items.delete(key);
        }
        else {
            delete this._items[key];
        }
        this._count--;
        return true;
    }
    get keys() {
        let keys = [];
        if (this._items instanceof Map) {
            let keyArray = this._items.keys();
            for (let key of keyArray) {
                keys.push(key);
            }
        }
        else {
            for (var prop in this._items) {
                if (this._items.hasOwnProperty(prop)) {
                    keys.push(prop);
                }
            }
        }
        return keys;
    }
    get values() {
        let values = [];
        if (this._items instanceof Map) {
            // 一定要用of，否则出错
            let vArray = this._items.values();
            for (let value of vArray) {
                values.push(value);
            }
        }
        else {
            for (let prop in this._items) {
                if (this._items.hasOwnProperty(prop)) {
                    values.push(this._items[prop]);
                }
            }
        }
        return values;
    }
}


/***/ }),

/***/ "./src/common/container/TypedArrayList.ts":
/*!************************************************!*\
  !*** ./src/common/container/TypedArrayList.ts ***!
  \************************************************/
/*! exports provided: TypedArrayList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedArrayList", function() { return TypedArrayList; });
class TypedArrayList {
    constructor(typedArrayConstructor, capacity = 8) {
        this._typedArrayConstructor = typedArrayConstructor;
        this._capacity = capacity; // 而预先分配内存的个数为capacity
        // 确保初始化时至少有8个元素的容量
        if (this._capacity === 0) {
            this._capacity = 8; // 默认分配8个元素内存
        }
        this._array = new this._typedArrayConstructor(this._capacity); // 预先分配capacity个元素的内存
        this._length = 0; // 初始化时，其_length为0
        this.capacityChangedCallback = null; //默认情况下，回调函数为null
    }
    get length() {
        return this._length;
    }
    get capacity() {
        return this._capacity;
    }
    get typeArray() {
        return this._array;
    }
    // 最简单高效的处理方式，直接设置_length为0，重用整个类型数组
    clear() {
        this._length = 0;
    }
    pushArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i]);
        }
    }
    push(num) {
        // 如果当前的length超过了预先分配的内存容量
        // 那就需要进行内存扩容
        if (this._length >= this._capacity) {
            //如果最大容量数>0
            if (this._capacity > 0) {
                //增加当前的最大容量数(每次翻倍增加)
                this._capacity += this._capacity;
                console.log("curr capacity = " + this._capacity);
            }
            let oldArray = this._array;
            this._array = new this._typedArrayConstructor(this._capacity);
            // 将oldArray中的数据复制到新建的array中
            this._array.set(oldArray);
            // 如果有回调函数，则调用回调函数
            if (this.capacityChangedCallback) {
                this.capacityChangedCallback(this);
            }
        }
        this._array[this._length] = num;
        return this._length++;
    }
    at(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("索引越界！");
        }
        // 都是number类型
        let ret = this._array[idx];
        return ret;
    }
    subArray(start = 0, end = this.length) {
        return this._array.subarray(start, end);
    }
    slice(start = 0, end = this.length) {
        return this._array.slice(start, end);
    }
}


/***/ }),

/***/ "./src/common/math/MathHelper.ts":
/*!***************************************!*\
  !*** ./src/common/math/MathHelper.ts ***!
  \***************************************/
/*! exports provided: EAxisType, EPlaneLoc, MathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAxisType", function() { return EAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlaneLoc", function() { return EPlaneLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathHelper", function() { return MathHelper; });
/* harmony import */ var _TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TSM */ "./src/common/math/TSM.ts");

var EAxisType;
(function (EAxisType) {
    EAxisType[EAxisType["NONE"] = -1] = "NONE";
    EAxisType[EAxisType["XAXIS"] = 0] = "XAXIS";
    EAxisType[EAxisType["YAXIS"] = 1] = "YAXIS";
    EAxisType[EAxisType["ZAXIS"] = 2] = "ZAXIS";
})(EAxisType || (EAxisType = {}));
var EPlaneLoc;
(function (EPlaneLoc) {
    EPlaneLoc[EPlaneLoc["FRONT"] = 0] = "FRONT";
    EPlaneLoc[EPlaneLoc["BACK"] = 1] = "BACK";
    EPlaneLoc[EPlaneLoc["COPLANAR"] = 2] = "COPLANAR"; // 与平面共面
})(EPlaneLoc || (EPlaneLoc = {}));
class MathHelper {
    // 角度/弧度互转函数
    static toRadian(degree) {
        return degree * Math.PI / 180;
    }
    static toDegree(radian) {
        return radian / Math.PI * 180;
    }
    // 浮点数容差相等函数
    static numberEquals(left, right) {
        if (Math.abs(left - right) > _TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return false;
        }
        return true;
    }
    static clamp(x, min, max) {
        return (x < min) ? min : (x > max) ? max : x;
    }
    // 判断一个整数是否是2的n次方(1,2,4,8,16,32,64,128,258,512,1024,2048,....)
    // 用于2的n次方纹理判断
    static isPowerOfTwo(value) {
        return ((value & (value - 1)) == 0);
    }
    static obj2GLViewportSpace(localPt, mvp, viewport, viewportPt) {
        let v = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]([localPt.x, localPt.y, localPt.z, 1.0]);
        mvp.multiplyVec4(v, v); // 将顶点从local坐标系变换到投影坐标系，或裁剪坐标系
        if (v.w === 0.0) // 如果变换后的w为0，则返回false
         {
            return false;
        }
        // 将裁剪坐标系的点的x / y / z分量除以w，得到normalized坐标值[ -1 , 1 ]之间
        v.x /= v.w;
        v.y /= v.w;
        v.z /= v.w;
        // [-1 , 1]标示的点变换到视口坐标系
        v.x = v.x * 0.5 + 0.5;
        v.y = v.y * 0.5 + 0.5;
        v.z = v.z * 0.5 + 0.5;
        // 视口坐标系再变换到屏幕坐标系
        viewportPt.x = v.x * viewport[2] + viewport[0];
        viewportPt.y = v.y * viewport[3] + viewport[1];
        viewportPt.z = v.z;
        return true;
    }
    // 计算三角形的法向量
    static computeNormal(a, b, c, result) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        let l0 = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        let l1 = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(b, a, l0);
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(c, a, l1);
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(l0, l1, result);
        result.normalize();
        return result;
    }
    // 下面四个函数是平面相关函数
    //ax+by+cz-d=0
    static planeFromPoints(a, b, c, result = null) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]();
        let normal = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.computeNormal(a, b, c, normal);
        let d = -_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(normal, a);
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = d;
        return result;
    }
    static planeFromPointNormal(point, normal, result = null) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]();
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = -_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(normal, point);
        return result;
    }
    static planeFromPolygon(polygon) {
        if (polygon.length < 3) {
            throw new Error("多变形的顶点数必须大于或等于3!!!");
        }
        return MathHelper.planeFromPoints(polygon[0], polygon[1], polygon[2]);
    }
    static planeDistanceFromPoint(plane, point) {
        return (point.x * plane.x + point.y * plane.y + point.z * plane.z + plane.w);
    }
    static planeTestPoint(plane, point) {
        let num = MathHelper.planeDistanceFromPoint(plane, point);
        if (num > _TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return EPlaneLoc.FRONT;
        }
        else if (num < -_TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return EPlaneLoc.BACK;
        }
        else {
            return EPlaneLoc.COPLANAR;
        }
    }
    static planeNormalize(plane) {
        let length, ilength;
        length = Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
        if (length === 0) {
            throw new Error("面积为0的平面!!!");
        }
        ilength = 1.0 / length;
        plane.x = plane.x * ilength;
        plane.y = plane.y * ilength;
        plane.z = plane.z * ilength;
        plane.w = plane.w * ilength;
        return length;
    }
    static boundBoxAddPoint(v, mins, maxs) {
        if (v.x < mins.x) {
            mins.x = v.x;
        }
        ;
        if (v.x > maxs.x) {
            maxs.x = v.x;
        }
        ;
        if (v.y < mins.y) {
            mins.y = v.y;
        }
        ;
        if (v.y > maxs.y) {
            maxs.y = v.y;
        }
        ;
        if (v.z < mins.z) {
            mins.z = v.z;
        }
        ;
        if (v.z > maxs.z) {
            maxs.z = v.z;
        }
        ;
    }
    static boundBoxClear(mins, maxs, value = Infinity) {
        mins.x = mins.y = mins.z = value; // 初始化时，让mins表示浮点数的最大范围
        maxs.x = maxs.y = maxs.z = -value; // 初始化是，让maxs表示浮点数的最小范围
    }
    // 获得AABB包围盒的中心点坐标
    static boundBoxGetCenter(mins, maxs, out = null) {
        if (out === null) {
            out = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        }
        // (maxs + mins) * 0.5
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].sum(mins, maxs, out);
        out.scale(0.5);
        return out;
    }
    static boundBoxGet8Points(mins, maxs, pts8) {
        /*
        /3--------/7  |
        / |       /   |
        /  |      /   |
        1---------5   |
        |  /2- - -|- -6
        | /       |  /
        |/        | /
        0---------4/
        */
        let center = MathHelper.boundBoxGetCenter(mins, maxs); // 获取中心点
        let maxs2center = _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(center, maxs); // 获取最大点到中心点之间的距离向量
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z])); // 0
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z])); // 1
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z])); // 2
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z])); // 3
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z])); // 4
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z])); // 5
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z])); // 6
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z])); // 7
    }
    static boundBoxTransform(mat, mins, maxs) {
        let pts = []; // 分配数组内存，类型为vec3
        MathHelper.boundBoxGet8Points(mins, maxs, pts); // 获得局部坐标系表示的AABB的8个顶点坐标
        let out = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"](); // 变换后的顶点
        // 遍历局部坐标系的8个AABB包围盒的顶点坐标
        for (let i = 0; i < pts.length; i++) {
            // 将局部坐标表示的顶点变换到mat坐标空间中去，变换后的结果放在out变量中
            mat.multiplyVec3(pts[i], out);
            // 重新构造新的，与世界坐标系轴对称的AABB包围盒
            this.boundBoxAddPoint(out, mins, maxs);
        }
    }
    static boundBoxContainsPoint(point, mins, maxs) {
        return (point.x >= mins.x && point.x <= maxs.x && point.y >= mins.y && point.y <= maxs.y && point.z >= mins.z && point.z <= maxs.z);
    }
    static boundBoxBoundBoxOverlap(min1, max1, min2, max2) {
        if (min1.x > max2.x)
            return false;
        if (max1.x < min2.x)
            return false;
        if (min1.y > max2.y)
            return false;
        if (max1.y < min2.y)
            return false;
        if (min1.z > max2.z)
            return false;
        if (max1.z < min2.z)
            return false;
        return true;
    }
    static convertVec3IDCoord2GLCoord(v, scale = 10.0) {
        let f = v.y; // opengl right = dooom3 x
        v.y = v.z; //opengl up = doom3 z
        v.z = -f; //opengl forward = doom3 -y
        if (!MathHelper.numberEquals(scale, 0) && !MathHelper.numberEquals(scale, 1.0)) {
            v.x /= scale;
            v.y /= scale;
            v.z /= scale;
        }
    }
    static convertVec2IDCoord2GLCoord(v) {
        v.y = 1.0 - v.y;
    }
    static matrixFrom(pos, q, dest = null) {
        if (dest === null) {
            dest = new _TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        }
        q.toMat4(dest);
        dest.values[12] = pos.x;
        dest.values[13] = pos.y;
        dest.values[14] = pos.z;
        return dest;
    }
}


/***/ }),

/***/ "./src/common/math/TSM.ts":
/*!********************************!*\
  !*** ./src/common/math/TSM.ts ***!
  \********************************/
/*! exports provided: EPSILON, vec2, vec3, vec4, mat4, quat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return vec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return vec4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return mat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return quat; });
let EPSILON = 0.0001;
class vec2 {
    constructor(values = null) {
        this.values = new Float32Array(2);
        if (values) {
            this.x = values[0];
            this.y = values[1];
        }
        else {
            this.x = this.y = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec2();
        dest.x = this.x;
        dest.y = this.y;
        return dest;
    }
}
class vec3 {
    constructor(values = null) {
        this.values = new Float32Array(3);
        if (values !== null) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
        }
        else {
            this.x = this.y = this.z = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        return dest;
    }
    negate(dest = null) {
        if (!dest)
            dest = this;
        dest.x = -this.x;
        dest.y = -this.y;
        dest.z = -this.z;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        return true;
    }
    get length() {
        return Math.sqrt(this.length2);
    }
    get length2() {
        let x = this.x, y = this.y, z = this.z;
        return (x * x + y * y + z * z);
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    scale(value, dest = null) {
        if (!dest) {
            dest = this;
        }
        else {
            this.copy(dest);
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let length = this.length;
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        dest.z *= length;
        return dest;
    }
    normalize2() {
        let length = this.length;
        let len = 1.0 / length;
        this.x *= len;
        this.y *= len;
        this.z *= len;
        return length;
    }
    static multiplyScalar(vector, value, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    static cross(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        dest.x = y * z2 - z * y2;
        dest.y = z * x2 - x * z2;
        dest.z = x * y2 - y * x2;
        return dest;
    }
    static dot(vector, vector2) {
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        return (x * x2 + y * y2 + z * z2);
    }
    static sum(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        dest.z = vector.z + vector2.z;
        return dest;
    }
    static difference(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        dest.z = vector.z - vector2.z;
        return dest;
    }
}
vec3.up = new vec3([0, 1, 0]);
vec3.down = new vec3([0, -1, 0]);
vec3.right = new vec3([1, 0, 0]);
vec3.left = new vec3([-1, 0, 0]);
vec3.forward = new vec3([0, 0, 1]);
vec3.backward = new vec3([0, 0, -1]);
vec3.zero = new vec3([0, 0, 0]);
vec3.v0 = new vec3([0, 0, 0]);
vec3.v1 = new vec3([0, 0, 0]);
vec3.v2 = new vec3([0, 0, 0]);
class vec4 {
    constructor(values = null) {
        this.values = new Float32Array(4);
        if (values) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
            this.w = values[3];
        }
        else {
            this.x = this.y = this.z = this.w = 0.0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    get vec3() {
        return new vec3([this.x, this.y, this.z]);
    }
    get r() {
        return this.values[0];
    }
    get g() {
        return this.values[1];
    }
    get b() {
        return this.values[2];
    }
    get a() {
        return this.values[3];
    }
    set r(value) {
        this.values[0] = value;
    }
    set g(value) {
        this.values[1] = value;
    }
    set b(value) {
        this.values[2] = value;
    }
    set a(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec4();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        dest.w = this.w;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        if (Math.abs(this.w - vector.w) > threshold)
            return false;
        return true;
    }
}
vec4.red = new vec4([1.0, 0.0, 0.0, 1.0]);
vec4.green = new vec4([0.0, 1.0, 0.0, 1.0]);
vec4.blue = new vec4([0.0, 0.0, 1.0, 1.0]);
vec4.black = new vec4([0, 0, 0, 0]);
vec4.v0 = new vec4();
vec4.v1 = new vec4();
vec4.v2 = new vec4();
class mat4 {
    constructor(values = null) {
        this.values = new Float32Array(16);
        if (values) {
            this.set(values);
        }
        else {
            this.setIdentity();
        }
    }
    set(values) {
        for (let i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    at(index) {
        return this.values[index];
    }
    copy(dest = null) {
        if (!dest)
            dest = new mat4();
        for (let i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    equals(matrix, threshold = EPSILON) {
        for (let i = 0; i < 16; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold)
                return false;
        }
        return true;
    }
    getRow(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index * 4 + 0],
            dest.y = this.values[index * 4 + 1],
            dest.z = this.values[index * 4 + 2],
            dest.w = this.values[index * 4 + 3];
        return dest;
    }
    getColumn(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index];
        dest.y = this.values[index + 4];
        dest.z = this.values[index + 8];
        dest.w = this.values[index + 12];
        return dest;
    }
    getPosition(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[12];
        dest.y = this.values[13];
        dest.z = this.values[14];
        return dest;
    }
    getXAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[0];
        dest.y = this.values[1];
        dest.z = this.values[2];
        return dest;
    }
    getYAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[4];
        dest.y = this.values[5];
        dest.z = this.values[6];
        return dest;
    }
    getZAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[8];
        dest.y = this.values[9];
        dest.z = this.values[10];
        return dest;
    }
    getAxis(idx, dest = null) {
        if (idx === 0) {
            return this.getXAxis(dest);
        }
        else if (idx === 1) {
            return this.getYAxis(dest);
        }
        else {
            return this.getZAxis(dest);
        }
    }
    setIdentity() {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;
        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;
        return this;
    }
    transpose() {
        let temp01 = this.values[1], temp02 = this.values[2], temp03 = this.values[3], temp12 = this.values[6], temp13 = this.values[7], temp23 = this.values[11];
        this.values[1] = this.values[4];
        this.values[2] = this.values[8];
        this.values[3] = this.values[12];
        this.values[4] = temp01;
        this.values[6] = this.values[9];
        this.values[7] = this.values[13];
        this.values[8] = temp02;
        this.values[9] = temp12;
        this.values[11] = this.values[14];
        this.values[12] = temp03;
        this.values[13] = temp13;
        this.values[14] = temp23;
        return this;
    }
    determinant() {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11], a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
    }
    inverse(out) {
        this.copy(out);
        let a00 = out.values[0], a01 = out.values[1], a02 = out.values[2], a03 = out.values[3], a10 = out.values[4], a11 = out.values[5], a12 = out.values[6], a13 = out.values[7], a20 = out.values[8], a21 = out.values[9], a22 = out.values[10], a23 = out.values[11], a30 = out.values[12], a31 = out.values[13], a32 = out.values[14], a33 = out.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        let det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        if (!det)
            return false;
        det = 1.0 / det;
        out.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
        out.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
        out.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
        out.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
        out.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
        out.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
        out.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
        out.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
        out.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
        out.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
        out.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
        out.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
        out.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
        out.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
        out.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
        out.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
        return true;
    }
    multiply(matrix) {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3];
        let a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7];
        let a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let b0 = matrix.at(0), b1 = matrix.at(1), b2 = matrix.at(2), b3 = matrix.at(3);
        this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(4);
        b1 = matrix.at(5);
        b2 = matrix.at(6);
        b3 = matrix.at(7);
        this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(8);
        b1 = matrix.at(9);
        b2 = matrix.at(10);
        b3 = matrix.at(11);
        this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(12);
        b1 = matrix.at(13);
        b2 = matrix.at(14);
        b3 = matrix.at(15);
        this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12];
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13];
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14];
        return dest;
    }
    multiplyVec4(vector, dest = null) {
        if (!dest)
            dest = new vec4();
        let x = vector.x, y = vector.y, z = vector.z, w = vector.w;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
        return dest;
    }
    // 矩阵变换
    translate(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
        return this;
    }
    scale(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[0] *= x;
        this.values[1] *= x;
        this.values[2] *= x;
        this.values[3] *= x;
        this.values[4] *= y;
        this.values[5] *= y;
        this.values[6] *= y;
        this.values[7] *= y;
        this.values[8] *= z;
        this.values[9] *= z;
        this.values[10] *= z;
        this.values[11] *= z;
        return this;
    }
    rotate(angle, axis) {
        let x = axis.x, y = axis.y, z = axis.z;
        let length = Math.sqrt(x * x + y * y + z * z);
        if (!length)
            return null;
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        let s = Math.sin(angle);
        let c = Math.cos(angle);
        let t = 1.0 - c;
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return this;
    }
    // 视矩阵和投影矩阵
    static frustum(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            (near * 2) / rl,
            0,
            0,
            0,
            0,
            (near * 2) / tb,
            0,
            0,
            (right + left) / rl,
            (top + bottom) / tb,
            -(far + near) / fn,
            -1,
            0,
            0,
            -(far * near * 2) / fn,
            0
        ]);
    }
    static perspective(fov, aspect, near, far) {
        let top = near * Math.tan(fov * 0.5), right = top * aspect;
        return mat4.frustum(-right, right, -top, top, near, far);
    }
    static orthographic(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            2 / rl,
            0,
            0,
            0,
            0,
            2 / tb,
            0,
            0,
            0,
            0,
            -2 / fn,
            0,
            -(left + right) / rl,
            -(top + bottom) / tb,
            -(far + near) / fn,
            1
        ]);
    }
    static lookAt(position, target, up = vec3.up) {
        if (position.equals(target)) {
            return this.identity;
        }
        let z = vec3.difference(position, target).normalize();
        let x = vec3.cross(up, z).normalize();
        let y = vec3.cross(z, x).normalize();
        return new mat4([
            x.x,
            y.x,
            z.x,
            0,
            x.y,
            y.y,
            z.y,
            0,
            x.z,
            y.z,
            z.z,
            0,
            -vec3.dot(x, position),
            -vec3.dot(y, position),
            -vec3.dot(z, position),
            1
        ]);
    }
    static product(m1, m2, result = null) {
        let a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2), a03 = m1.at(3), a10 = m1.at(4), a11 = m1.at(5), a12 = m1.at(6), a13 = m1.at(7), a20 = m1.at(8), a21 = m1.at(9), a22 = m1.at(10), a23 = m1.at(11), a30 = m1.at(12), a31 = m1.at(13), a32 = m1.at(14), a33 = m1.at(15);
        let b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2), b03 = m2.at(3), b10 = m2.at(4), b11 = m2.at(5), b12 = m2.at(6), b13 = m2.at(7), b20 = m2.at(8), b21 = m2.at(9), b22 = m2.at(10), b23 = m2.at(11), b30 = m2.at(12), b31 = m2.at(13), b32 = m2.at(14), b33 = m2.at(15);
        if (result) {
            result.set([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
            return result;
        }
        else {
            return new mat4([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
        }
    }
}
mat4.identity = new mat4().setIdentity();
mat4.m0 = new mat4();
mat4.m1 = new mat4();
class quat {
    constructor() {
        this.values = new Float32Array(4);
        this.setIdentity();
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        for (let i = 0; i < 4; i++) {
            this.values[i] = 0;
        }
    }
    copy(dest = null) {
        if (!dest)
            dest = new quat();
        for (let i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    roll() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
    }
    pitch() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
    }
    yaw() {
        return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
    }
    equals(vector, threshold = EPSILON) {
        for (let i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - vector.at(i)) > threshold)
                return false;
        }
        return true;
    }
    setIdentity() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    }
    calculateW() {
        let x = this.x, y = this.y, z = this.z;
        this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));
        return this;
    }
    static dot(q1, q2) {
        return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
    }
    inverse() {
        let dot = quat.dot(this, this);
        if (!dot) {
            this.setIdentity();
            return this;
        }
        let invDot = dot ? 1.0 / dot : 0;
        this.x *= -invDot;
        this.y *= -invDot;
        this.z *= -invDot;
        this.w *= invDot;
        return this;
    }
    conjugate() {
        this.values[0] *= -1;
        this.values[1] *= -1;
        this.values[2] *= -1;
        return this;
    }
    length() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let x = this.x, y = this.y, z = this.z, w = this.w;
        let length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (!length) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            dest.w = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        dest.z = z * length;
        dest.w = w * length;
        return dest;
    }
    add(other) {
        for (let i = 0; i < 4; i++) {
            this.values[i] += other.at(i);
        }
        return this;
    }
    // 这个是左到右结合 this.cross.other
    multiply(other) {
        let q1x = this.values[0], q1y = this.values[1], q1z = this.values[2], q1w = this.values[3];
        let q2x = other.x, q2y = other.y, q2z = other.z, q2w = other.w;
        this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let qx = this.x, qy = this.y, qz = this.z, qw = this.w;
        //
        let ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return dest;
    }
    toMat4(dest = null) {
        if (!dest)
            dest = new mat4();
        let x = this.x, y = this.y, z = this.z, w = this.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2;
        dest.set([
            1 - (yy + zz),
            xy + wz,
            xz - wy,
            0,
            (xy - wz),
            (1 - (xx + zz)),
            (yz + wx),
            0,
            xz + wy,
            yz - wx,
            1 - (xx + yy),
            0,
            0,
            0,
            0,
            1
        ]);
        return dest;
    }
    static sum(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        dest.x = q1.x + q2.x;
        dest.y = q1.y + q2.y;
        dest.z = q1.z + q2.z;
        dest.w = q1.w + q2.w;
        return dest;
    }
    static product(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return dest;
    }
    static cross(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        return dest;
    }
    static shortMix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        if (time <= 0.0) {
            q1.copy(q1);
            return dest;
        }
        else if (time >= 1.0) {
            q2.copy(dest);
            return dest;
        }
        let cos = quat.dot(q1, q2), q2a = q2.copy();
        if (cos < 0.0) {
            q2a.inverse();
            cos = -cos;
        }
        let k0, k1;
        if (cos > 0.9999) {
            k0 = 1 - time;
            k1 = 0 + time;
        }
        else {
            let sin = Math.sqrt(1 - cos * cos);
            let angle = Math.atan2(sin, cos);
            let oneOverSin = 1 / sin;
            k0 = Math.sin((1 - time) * angle) * oneOverSin;
            k1 = Math.sin((0 + time) * angle) * oneOverSin;
        }
        dest.x = k0 * q1.x + k1 * q2a.x;
        dest.y = k0 * q1.y + k1 * q2a.y;
        dest.z = k0 * q1.z + k1 * q2a.z;
        dest.w = k0 * q1.w + k1 * q2a.w;
        return dest;
    }
    static mix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        let cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (Math.abs(cosHalfTheta) >= 1.0) {
            q1.copy(dest);
            return dest;
        }
        let halfTheta = Math.acos(cosHalfTheta), sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            dest.x = q1.x * 0.5 + q2.x * 0.5;
            dest.y = q1.y * 0.5 + q2.y * 0.5;
            dest.z = q1.z * 0.5 + q2.z * 0.5;
            dest.w = q1.w * 0.5 + q2.w * 0.5;
            return dest;
        }
        let ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta, ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
        dest.x = q1.x * ratioA + q2.x * ratioB;
        dest.y = q1.y * ratioA + q2.y * ratioB;
        dest.z = q1.z * ratioA + q2.z * ratioB;
        dest.w = q1.w * ratioA + q2.w * ratioB;
        return dest;
    }
    static fromAxis(axis, angle, dest = null) {
        if (!dest)
            dest = new quat();
        angle *= 0.5;
        let sin = Math.sin(angle);
        dest.x = axis.x * sin;
        dest.y = axis.y * sin;
        dest.z = axis.z * sin;
        dest.w = Math.cos(angle);
        return dest;
    }
}
quat.identity = new quat().setIdentity();
quat.q0 = new quat();
quat.q1 = new quat();
quat.q2 = new quat();


/***/ }),

/***/ "./src/common/utils/HttpRequest.ts":
/*!*****************************************!*\
  !*** ./src/common/utils/HttpRequest.ts ***!
  \*****************************************/
/*! exports provided: ImageInfo, HttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInfo", function() { return ImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
// 有时我们在完成时需要按名称查询对应的HTMLImageElement对象
// 此时就需要ImageInfo结构了
class ImageInfo {
    constructor(path, image) {
        this.name = path;
        this.image = image;
    }
}
class HttpRequest {
    //这个函数要起作用，必须要在tsconfig.json中将default的es5改成ES2015
    static loadImageAsync(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function () {
                reject(new Error('Could not load image at ' + url));
            };
            image.src = url;
        });
    }
    //这个函数要起作用，必须要在tsconfig.json中将default的es5改成ES2015
    static loadImageAsyncSafe(url, name = url) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = function () {
                let info = new ImageInfo(name, image);
                resolve(info);
            };
            image.onerror = function () {
                resolve(null);
            };
            image.src = url;
        });
    }
    static loadTextFileAsync(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (ev) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            };
            xhr.open("get", url, true, null, null);
            xhr.send();
        });
    }
    static loadArrayBufferAsync(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = "arraybuffer";
            xhr.onreadystatechange = (ev) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
            };
            xhr.open("get", url, true, null, null);
            xhr.send();
        });
    }
}


/***/ }),

/***/ "./src/common/utils/Tokenizer.ts":
/*!***************************************!*\
  !*** ./src/common/utils/Tokenizer.ts ***!
  \***************************************/
/*! exports provided: ETokenType, Doom3Factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETokenType", function() { return ETokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Factory", function() { return Doom3Factory; });
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["NONE"] = 0] = "NONE";
    ETokenType[ETokenType["STRING"] = 1] = "STRING";
    ETokenType[ETokenType["NUMBER"] = 2] = "NUMBER";
})(ETokenType || (ETokenType = {}));
// 该工厂需要被调用方使用，因此export导出
class Doom3Factory {
    // 注意返回的是IDoom3Tokenizer接口而不是Doom3Tokenizer实现类
    static createTokenizer() {
        return new Doom3Tokenizer();
    }
}
class Doom3Token {
    constructor() {
        this._charArr = [];
        this._charArr.length = 0;
        this._type = ETokenType.NONE;
        this._val = 0.0;
    }
    reset() {
        this._charArr.length = 0;
        this._type = ETokenType.NONE;
        this._val = 0.0;
    }
    get type() {
        return this._type;
    }
    getString() {
        // _charArr数组中存放的都是单个字符序列，例如[d,o,o,m,3]
        // 我们可以使用数组的join方法将字符串联成字符串
        // 下面会使用join方法后，会返回doom3这个字符串
        return this._charArr.join("");
    }
    getFloat() {
        return this._val;
    }
    getInt() {
        // 使用parserInt函数
        // 第一个参数是一个字符串类型的数字表示
        // 第二个参数是进制，我们一般用10进制
        return parseInt(this._val.toString(), 10);
    }
    isString(str) {
        let count = this._charArr.length;
        // 字符串长度不相等，肯定不等
        if (str.length !== count) {
            return false;
        }
        // 遍历每个字符
        for (let i = 0; i < count; i++) {
            // _charArr数组类型中每个char和输入的string类型中的每个char进行严格比较（!==操作符而不是!=）
            // 只要任意一个char不相等，意味着字符串不相等
            if (this._charArr[i] !== str[i]) {
                return false;
            }
        }
        return true;
    }
    //下面三个非接口方法被IDoom3Tokenizer接口的实现类Doom3Tokenizer所使用
    // 将一个char添加到_charArr数组的尾部
    addChar(c) {
        this._charArr.push(c);
    }
    // 设置数字，并将类型设置为NUMBER
    setVal(num) {
        this._val = num;
        this._type = ETokenType.NUMBER;
    }
    //设置类型
    setType(type) {
        this._type = type;
    }
}
class Doom3Tokenizer {
    constructor() {
        this._whiteSpaces = [" ", "\t", "\v", "\n", "\r"];
        this._digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        //要解析的字符串，使用Doom3Tokenizer字符串来初始化变量
        this._source = "Doom3Tokenizer";
        this._currIdx = 0;
        // 增加一个私有变量_current,并使用new进行初始化
        this._current = new Doom3Token();
    }
    //判断某个字符是不是数字
    _isDigit(c) {
        for (let i = 0; i < this._digits.length; i++) {
            if (c === this._digits[i]) {
                return true;
            }
        }
        return false;
    }
    _isWhitespace(c) {
        for (let i = 0; i < this._whiteSpaces.length; i++) {
            if (c === this._whiteSpaces[i]) {
                return true;
            }
        }
        return false;
    }
    //创建IToken接口
    createToken() {
        return new Doom3Token();
    }
    //实现公开的接口方法，设置要解析的字符串，并且重置当前索引
    setSource(source) {
        this._source = source;
        this._currIdx = 0;
    }
    //实现公开的接口方法，不改变要解析的字符串，仅重置当前索引
    reset() {
        this._currIdx = 0;
    }
    // 实现moveNext方法，实际调用的是getNextToken方法
    moveNext() {
        return this.getNextToken(this._current);
    }
    // 通过get方式实现只读属性current
    get current() {
        return this._current;
    }
    //跳过所有的空白字符，将当前索引指向非空白字符
    _skipWhitespace() {
        let c = "";
        do {
            c = this._getChar(); //移动当前索引
            //结束条件:数据源解析全部完成或者当前字符不是空白符
        } while (c.length > 0 && this._isWhitespace(c));
        return c;
    }
    //修改为私有方法
    getNextToken(tok) {
        //这里将IDoom3Token类型使用as操作符向下转型为Doom3Token
        /*之所以要向下转型是因为_getNumber 等方法的输出参数类型是Doom3Token而不是IDoom3Token
        **因此需要从IDoom3Token向下转型到Doom3Token
        **在TypeScript也可以使用< >来进行类型转换，代码如下所示:
        ** let token : Doom3Token = < Doom3Token > tok;
        */
        let token = tok;
        //初始化为空字符串
        let c = "";
        //重用token，每次调用本函数时，将token的索引重置为0
        //避免发生内存重新分配
        token.reset();
        do {
            // 第一步:跳过所有的空白字符,返回第一个可显示的字符
            c = this._skipWhitespace();
            // 第二步:判断非空白字符的第一个字符的开头是什么
            if (c == '/' && this._peekChar() == '/') {
                // 如果是//开头，则跳过单行注释中的所有字符
                c = this._skipComments0();
            }
            else if (c == '/' && this._peekChar() == '*') {
                //如果是/*开头的字符，则跳过多行注释中的所有字符
                c = this._skipComments1();
            }
            else if (this._isDigit(c) || c == '-' || (c == '.' && this._isDigit(this._peekChar()))) {
                //如果当前字符是数字或是符号开头或者以点号以及数字开头
                //则返回到上一个字符索引处，因为_getNumber会重新处理数字情况
                this._ungetChar();
                this._getNumber(token);
                return true;
            }
            else if (c == '\"' || c == '\'') {
                //如果以\"或\'开头的字符，例如'origin'或'Body'
                //结束char也是\"或\'
                this._getSubstring(token, c);
                return true;
            }
            else if (c.length > 0) {
                //正常的字符串返回到上一个字符索引处，因为_getString会重新处理相关情况
                this._ungetChar();
                this._getString(token);
                return true;
            }
        } while (c.length > 0);
        return false;
    }
    //获得当前的索引指向的char，并且将索引加1，后移一位
    _getChar() {
        //数组越界检查
        if (this._currIdx >= 0 && this._currIdx < this._source.length) {
            return this._source.charAt(this._currIdx++);
        }
        return "";
    }
    //探测一下一个字符是什么
    //很微妙的后++操作
    _peekChar() {
        //数组越界检查，与getChar区别是并没移动当前索引
        //这里我们能体会到
        if (this._currIdx >= 0 && this._currIdx < this._source.length) {
            return this._source.charAt(this._currIdx);
        }
        return "";
    }
    _ungetChar() {
        //将索引前移1位
        if (this._currIdx > 0) {
            --this._currIdx;
        }
    }
    _skipComments0() {
        let c = "";
        do {
            c = this._getChar();
            //结束条件: 数据源解析全部完成或者遇到换行符
        } while (c.length > 0 && c != '\n');
        return c;
    }
    _skipComments1() {
        //进入本函数是，当前索引只想/字符
        let c = "";
        // 1、先读取*号
        c = this._getChar();
        // 2、然后读取所有非* /这两个符号结尾的所有字符
        do {
            c = this._getChar();
            //结束条件: 数据源解析全部完成或者当前字符为*且下一个字符是/，也就是以*/结尾
        } while (c.length > 0 && (c != '*' || this._peekChar() != '/'));
        // 3. 由于上面读取到结束*前的字符就停止了，因此我们要将*也读取(消费)掉
        c = this._getChar();
        return c;
    }
    _getNumber(token) {
        let val = 0.0;
        let isFloat = false; // 是不是浮点数
        let scaleValue = 0.1; // 缩放的倍数
        //获取当前的字符(当前可能的值是[数字，小数点，负号])
        let c = this._getChar();
        //预先判断是不是负数
        let isNegate = (c === '-'); // 是不是负数
        let consumed = false;
        //获得0的ascii编码，使用了字符串的charCodeAt实列方法
        let ascii0 = "0".charCodeAt(0);
        // 3.14 -3.14 .13 -.13 3. -3.
        // 只能进来三种类型的字符:- . 数字
        do {
            // 将当前的字符添加到token中去
            token.addChar(c);
            // 如果当前的字符是.的话，设置为浮点数类型
            if (c == '.') {
                isFloat = true;
            }
            else if (c !== '-') {
                // 10进制从字符到浮点数的转换算法
                // 否则如果不是-符号的话，说明是数字(代码运行到这里已经将点和负号操作符都排斥掉了，仅可能是数字)
                //这里肯定是数字了，我们获取当前的数字字符的ascii编码
                let ascii = c.charCodeAt(0);
                //将当前数字的ascii编码减去"0"的ascii编码的算法其实就是进行字符串-数字的类型转换
                let vc = (ascii - ascii0);
                if (!isFloat) // 整数部分算法，10倍递增，因为10进制
                    val = 10 * val + vc;
                else {
                    // 小数部分算法
                    val = val + scaleValue * vc;
                    //10倍递减
                    scaleValue *= 0.1;
                }
            } /* else { //运行到这段代码的，只能是负号 c = '-'
                console.log("运行到此处的只能是:" + c);
            }*/
            //上面循环中的代码没有消费字符，之所以使用consumed变量，是为了探测下一个字符
            if (consumed === true)
                this._getChar();
            c = this._peekChar();
            consumed = true;
            //结束条件：数据源解析全部完成或下一个字符既不是数字也不是小数点（如果是浮点数表示的话）
        } while (c.length > 0 && (this._isDigit(c) || (!isFloat && c === '.')));
        //如果是负数的话，要取反
        if (isNegate)
            val = -val;
        //设置数字和NUMBER类型
        token.setVal(val);
    }
    // 我们将左右大中小括号以及点号逗号都当作单独的Token处理
    // 如果想要增加更多的标点符号作为token，可以在本函数中进行添加
    _isSpecialChar(c) {
        switch (c) {
            case '(':
                return true;
            case ')':
                return true;
            case '[':
                return true;
            case ']':
                return true;
            case '{':
                return true;
            case '}':
                return true;
            case ',':
                return true;
            case '.':
                return true;
        }
        return false;
    }
    // 进入该函数，说明肯定不是数字，不是单行注释，不是多行注释，也不是子字符串
    // 进入该函数只有两种类型的字符串，即不带双引号或单引号的字符串以及specialChar
    _getString(token) {
        // 获取当前字符，因为前面已经判断为字符串了
        let c = this._getChar();
        token.setType(ETokenType.STRING);
        // 进入循环
        do {
            //将当前的char添加到token中
            token.addChar(c);
            if (!this._isSpecialChar(c)) {
                c = this._getChar(); // 只有不是特殊操作符号的字符，才调用_getChar移动当前索引
            }
            //如果this . _isSpecialChar ( c )为true，不会调用_getChar函数，并且满足了跳出while循环的条件
            //结束条件：数据源解析全部完成或下一个是空白符或者当前字符是特殊符号
        } while (c.length > 0 && !this._isWhitespace(c) && !this._isSpecialChar(c));
    }
    _getSubstring(token, endChar) {
        let end = false;
        let c = "";
        token.setType(ETokenType.STRING);
        do {
            //获取字符
            c = this._getChar();
            //如果当前字符是结束符(要么是\",要么是\')
            if (c === endChar) {
                end = true; //结束符
            }
            else {
                token.addChar(c);
            }
            //结束条件: 数据源解析全部完成或换行符（子串不能多行表示）或是结束符号(要么是\",要么是\')
        } while (c.length > 0 && c !== '\n' && !end);
    }
}


/***/ }),

/***/ "./src/demo/AsyncLoadTestApplication.ts":
/*!**********************************************!*\
  !*** ./src/demo/AsyncLoadTestApplication.ts ***!
  \**********************************************/
/*! exports provided: AsyncLoadTestApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncLoadTestApplication", function() { return AsyncLoadTestApplication; });
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _common_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Application */ "./src/common/Application.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class AsyncLoadTestApplication extends _common_Application__WEBPACK_IMPORTED_MODULE_1__["Application"] {
    constructor() {
        super(...arguments);
        this._urls = ["data/uv.jpg", "data/test.jpg", "data/p1.jpg"];
        /*
        // 覆写（override）基类方法
        public async run (): Promise<void>
        {
            // 重点关注代码调用顺序与运行后的显示顺序之间的关系
            await this.loadImagesSequence();        // 1、先await调用Sequence版加载Image
            await this.loadTextFile();              // 2、然后await调用文本文件加载方法
            this.loadImagesParallel();              // 3、最后调用Parallel版加载image
            console.log( "4、完成run方法的调用" );      // 4、完成输出
        }
        */
        /*
        // 覆写（override）基类方法
        public async run (): Promise<void>
        {
            // 重点关注代码调用顺序与运行后的显示顺序之间的关系
            await this.loadImagesSequence();        // 1、先await调用Sequence版加载Image
            await this.loadTextFile();              // 2、然后await调用文本文件加载方法
            this.loadImagesParallel();              // 3、最后调用Parallel版加载image
            console.log( "4、完成run方法的调用" );      // 4、完成输出
        }
        */
    }
    // 必须要使用async关键字，一个一个载入图像文件
    loadImagesSequence() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this._urls.length; i++) {
                let image = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"].loadImageAsync(this._urls[i]);
                console.log("1、loadImagesSequence : ", i, image);
            }
        });
    }
    // 不需要用使用async,并行载入所有图像文件
    loadImagesParallel() {
        // 使用Promise.all方法，并发方式加载所有image文件
        let _promises = [];
        for (let i = 0; i < this._urls.length; i++) {
            _promises.push(_common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"].loadImageAsync(this._urls[i]));
        }
        Promise.all(_promises).then((images) => {
            for (let i = 0; i < images.length; i++) {
                console.log("3、loadImagesParallel : ", images[i]);
            }
        });
    }
    loadImagesParallelWithPromise() {
        return new Promise((resolve, reject) => {
            let _promises = [];
            for (let i = 0; i < this._urls.length; i++) {
                _promises.push(_common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"].loadImageAsync(this._urls[i]));
            }
            Promise.all(_promises).then((images) => {
                for (let i = 0; i < images.length; i++) {
                    console.log("3、loadImagesParallelWithPromise : ", images[i]);
                }
                resolve();
            });
        });
    }
    loadTextFile() {
        return __awaiter(this, void 0, void 0, function* () {
            let str = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"].loadTextFileAsync("data/test.txt");
            console.log("2、文本文件内容：", str);
        });
    }
    // 覆写（override）基类方法
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // 重点关注代码调用顺序与运行后的显示顺序之间的关系
            //await this.loadImagesSequence();        // 1、先await调用Sequence版加载Image
            yield this.loadTextFile(); // 2、然后await调用文本文件加载方法
            //this.loadImagesParallel();              // 3、最后调用Parallel版加载image
            //await this.loadImagesParallelWithPromise();
            console.log("4、完成run方法的调用"); // 4、完成输出
        });
    }
}


/***/ }),

/***/ "./src/demo/BasicWebGLApplication.ts":
/*!*******************************************!*\
  !*** ./src/demo/BasicWebGLApplication.ts ***!
  \*******************************************/
/*! exports provided: BasicWebGLApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicWebGLApplication", function() { return BasicWebGLApplication; });
/* harmony import */ var _common_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Application */ "./src/common/Application.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/WebGLHepler */ "./src/webgl/WebGLHepler.ts");
/* harmony import */ var _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");
/* harmony import */ var _webgl_WebGLCoordSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/WebGLCoordSystem */ "./src/webgl/WebGLCoordSystem.ts");






class BasicWebGLApplication extends _common_Application__WEBPACK_IMPORTED_MODULE_0__["Application"] {
    constructor(canvas) {
        // 1、创建WebGLRenderingContext上下文渲染对象
        super(canvas); // 调用基类构造函数
        this.colorShader_vs = `
        // 1、 attribute顶点属性声明
        attribute vec3 aPosition;  
        attribute vec4 aColor;
    
        // 2、 uniform变量声明
        uniform mat4 uMVPMatrix;

        // 3、 varying变量声明
        varying vec4 vColor;
    
        // 4、 顶点处理入口main函数
        void main(void){
            // 5、 gl_Position为Vertex Shader内置varying变量，varying变量会被传递到Fragment Shader中去
            gl_Position = uMVPMatrix * vec4(aPosition,1.0); // 6、 将坐标值从局部坐标系变换到裁剪坐标系
            vColor = aColor; // 7、 将颜色属性传递到Fragment Shader中去
        }
        `;
        this.colorShader_fs = `
    
        #ifdef GL_ES
            precision highp float;
        #endif
        
        varying  vec4 vColor;
        void main(void){
            gl_FragColor = vColor;
        }        
       `;
        this.colorShader_vs_2 = `
       attribute mediump vec3 aPosition;
       attribute mediump vec4 aColor;
   
       uniform mediump mat4 uMVPMatrix;

       varying lowp vec4 vColor;
   
       void main(void){
           gl_Position = uMVPMatrix * vec4(aPosition,1.0);
           gl_PointSize = 10.0;
           vColor = aColor;
       }
       `;
        this.colorShader_fs_2 = `
       varying  lowp vec4 vColor;
       void main(void){
           gl_FragColor = vColor;
       }        
      `;
        this.uniformMap = {};
        this.attribMap = {};
        let contextAttribs = {
            // WebGL上下文渲染对象需要创建深度和模版缓冲区
            depth: true,
            stencil: true,
            // WebGL上下文自动会创建一个颜色缓冲区,
            alpha: true,
            premultipliedAlpha: true,
            // 帧缓冲区抗锯齿以及是否保留上一帧的内容
            antialias: true,
            preserveDrawingBuffer: false // 参看第五章5.2.1节说明           
        };
        let ctx = this.canvas.getContext("webgl", contextAttribs);
        if (ctx === null) {
            alert(" 无法创建WebGLRenderingContext上下文对象 ");
            throw new Error(" 无法创建WebGLRenderingContext上下文对象 ");
        }
        // 从canvas元素中获得webgl上下文渲染对象，WebGL API都通过该上下文渲染对象进行调用
        this.gl = ctx;
        canvas.addEventListener('webglcontextlost', function (e) {
            console.log(JSON.stringify(e)); // 当触发webglcontextlost事件时，将该事件相关信息打印到控制台
        }, false);
        //GLHelper.triggerContextLostEvent( this.gl );
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].printStates(this.gl);
        // 在构造函数中增加如下代码:
        // 构造投影矩阵
        this.projectMatrix = _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].perspective(_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(45), this.canvas.width / this.canvas.height, 0.1, 100);
        // 构造视矩阵
        this.viewMatrix = _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].lookAt(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]([0, 0, 5]), new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]());
        // 构造viewprojectMatrix
        this.viewProjectMatrix = _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].product(this.projectMatrix, this.viewMatrix);
        // 设置视口区域
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        // 设置裁剪区域
        this.gl.scissor(0, 0, this.canvas.width, this.canvas.height);
        // 需要开启裁剪测试
        this.gl.enable(this.gl.SCISSOR_TEST);
        // 着色器编译
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].printWebGLInfo(this.gl);
        this.vsShader = _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].createShader(this.gl, _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["EShaderType"].VS_SHADER);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].compileShader(this.gl, this.colorShader_vs, this.vsShader);
        this.fsShader = _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].createShader(this.gl, _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["EShaderType"].FS_SHADER);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].compileShader(this.gl, this.colorShader_fs, this.fsShader);
        // 着色器链接
        this.program = _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].createProgram(this.gl);
        // 1、 printProgramActiveInfos作为afterProgramLink的回调函数
        // 注意我们用了function对象的bind方法，因为在printProgramActiveInfos函数中使用了this指针
        // 该this指针需要指向BasicWebGLApplication对象，因此必须要使用bind方法进行绑定操作
        if (_webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].linkProgram(this.gl, this.program, this.vsShader, this.fsShader, this.printProgramActiveInfos.bind(this), this.printProgramActiveInfos.bind(this)) === true) {
            this.printProgramActiveInfos(); // 2、链接成功后打印所有的active attribute 和 uniform 变量
        }
        this.verts = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array, 6 * 7);
        this.ivbo = _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].createBuffer(this.gl);
        // 初始化evbo
        this.indices = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Uint16Array, 6);
        this.evbo = _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].createBuffer(this.gl);
        // this.gl.frontFace(this.gl.CCW);
        this.gl.enable(this.gl.CULL_FACE);
        // this.gl.cullFace(this.gl.BACK);
        this.coordSystem9s = this.makeViewportCoordSystems();
        this.coordSystem4s = this.makeViewportCoordSystems(2);
    }
    printProgramActiveInfos() {
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].getProgramActiveAttribs(this.gl, this.program, this.attribMap);
        console.log("attribMap = ", JSON.stringify(this.attribMap));
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].getProgramAtciveUniforms(this.gl, this.program, this.uniformMap);
        console.log("unfiorms = ", JSON.stringify(this.uniformMap));
    }
    makeViewportCoordSystems(num = 3) {
        let coords = [];
        let w = this.canvas.width / num;
        let h = this.canvas.height / num;
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                coords.push(new _webgl_WebGLCoordSystem__WEBPACK_IMPORTED_MODULE_5__["GLCoordSystem"]([i * w, j * h, w, h]));
            }
        }
        return coords;
    }
    render9Viewports() {
        // 从下到上第一列
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[0].viewport);
        this.drawRectByInterleavedVBO(0, 6, this.gl.TRIANGLES);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[1].viewport);
        this.drawRectByInterleavedVBO(0, 3, this.gl.TRIANGLES);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[2].viewport);
        this.drawRectByInterleavedVBO(3, 3, this.gl.TRIANGLES);
        // 从下到上第二列
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[3].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.TRIANGLE_FAN);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[4].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.TRIANGLE_STRIP);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[5].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.POINTS);
        // 从下到上第三列
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[6].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.LINE_STRIP);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[7].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.LINE_LOOP);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem9s[8].viewport);
        this.drawRectByInterleavedVBO(0, 4, this.gl.LINES);
    }
    render4Viewports() {
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem4s[0].viewport);
        this.drawRectByInterleavedVBOWithEBO(0, 6, this.gl.TRIANGLES);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem4s[1].viewport);
        this.drawRectByInterleavedVBOWithEBO(0, 6, this.gl.TRIANGLE_FAN);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem4s[2].viewport);
        this.drawRectByInterleavedVBOWithEBO(0, 6, this.gl.TRIANGLE_STRIP);
        _webgl_WebGLHepler__WEBPACK_IMPORTED_MODULE_3__["GLHelper"].setViewport(this.gl, this.coordSystem4s[3].viewport);
        this.drawRectByInterleavedVBOWithEBO(2 * 3, 3, this.gl.TRIANGLE_STRIP);
    }
    render() {
        this.render9Viewports();
        //this.render4Viewports();
    }
    drawRectByInterleavedVBO(first, count, mode = this.gl.TRIANGLES) {
        // 重用动态数组，因此调用clear方法，将当前索引reset到0位置
        this.verts.clear();
        // 声明interleaved存储的顶点数组。
        let data;
        if (mode === this.gl.TRIANGLES) {
            data = [
                // 三角形0
                -0.5, -0.5, 0, 1, 0, 0, 1,
                0.5, -0.5, 0, 0, 1, 0, 1,
                0.5, 0.5, 0, 0, 0, 1, 0,
                // 三角形1
                0.5, 0.5, 0, 0, 0, 1, 0,
                -0.5, 0.5, 0, 0, 1, 0, 1,
                -0.5, -0.5, 0, 1, 0, 0, 1 // 左下  0
            ];
        }
        else if (mode === this.gl.TRIANGLE_STRIP) {
            data = [
                -0.5, 0.5, 0, 0, 1, 0, 1,
                -0.5, -0.5, 0, 1, 0, 0, 1,
                0.5, 0.5, 0, 0, 0, 1, 0,
                0.5, -0.5, 0, 0, 1, 0, 1,
            ];
        }
        else {
            data = [
                -0.5, -0.5, 0, 1, 0, 0, 1,
                0.5, -0.5, 0, 0, 1, 0, 1,
                0.5, 0.5, 0, 0, 0, 1, 0,
                -0.5, 0.5, 0, 0, 1, 0, 1,
            ];
        }
        this.verts.pushArray(data);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.ivbo);
        // 使用我们自己实现的动态类型数组的subArray方法，该方法不会重新创建Float32Array对象
        // 而是返回一个子数组的引用，这样效率比较高
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.verts.subArray(), this.gl.DYNAMIC_DRAW);
        // vertexAttribPointer方法参数说明：
        // 1、使用VertexShader中的attribue变量名aPosition,在attribMap中查找到我们自己封装的GLAttribInfo对象,该对象中存储了顶点属性寄存器的索引号
        // 2、aPosition的类型为vec3,而vec3由3个float类型组成，因此第二个参数为3,第三个参数为gl.FLOAT常量值
        // 但是aColor的类型为vec4,,而vec4由4个float类型组成,因此第二个参数为4,第三个参数为gl.FLOAT常量值
        // 3、第四个参数用来指明attribe变量是否使用需要normalized，
        // 由于normalize只对gl.BYTE / gl.SHORT [-1 , 1 ]和gl.UNSIGNED_BYTE / gl.UNSIGNED_SHORT [ 0 , 1 ]有效
        // 而我们的aPosition和aColor在WebGLBuffer被定义为FLOAT表示的vec3和vec4,因此直接设置false
        // 4、关于最后两个参数，需要参考图5.12，因此请参考本书内容
        this.gl.vertexAttribPointer(this.attribMap["aPosition"].location, 3, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 0);
        this.gl.vertexAttribPointer(this.attribMap["aColor"].location, 4, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 12);
        // 默认情况下，是关闭vertexAttrbArray对象的，因此需要开启
        // 一旦开启后，当我们调用draw开头的WebGL方法时，WebGL驱动会自动将VBO中的顶点数据上传到对应的Vertex Shader中
        this.gl.enableVertexAttribArray(this.attribMap["aPosition"].location);
        this.gl.enableVertexAttribArray(this.attribMap["aColor"].location);
        // 绘制阶段
        this.gl.useProgram(this.program); // 设置要使用的WebGLProgram对象
        let mat = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"]().scale(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]([2, 2, 2]));
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].product(this.viewProjectMatrix, mat, mat);
        // 将vMVPMatrix uniform变量上传（upload）到着色器重
        this.gl.uniformMatrix4fv(this.uniformMap["uMVPMatrix"].location, false, mat.values);
        // 调用drawArrays对象
        this.gl.drawArrays(mode, first, count); // 几个顶点
        // 将渲染状态恢复的未设置之前
        this.gl.useProgram(null);
        this.gl.disableVertexAttribArray(this.attribMap["aPosition"].location);
        this.gl.disableVertexAttribArray(this.attribMap["aColor"].location);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
    drawRectByInterleavedVBOWithEBO(byteOffset, count, mode = this.gl.TRIANGLES, isCCW = true) {
        // 重用动态数组，因此调用clear方法，将当前索引reset到0位置
        this.verts.clear();
        // 声明interleaved存储的顶点数组。
        // 逆时针顺序声明不重复的顶点属性相关数据
        this.verts.pushArray([
            -0.5, -0.5, 0, 1, 0, 0, 1,
            0.5, -0.5, 0, 0, 1, 0, 1,
            0.5, 0.5, 0, 0, 0, 1, 0,
            -0.5, 0.5, 0, 0, 1, 0, 1,
        ]);
        // 清空索引类型数组
        this.indices.clear();
        if (mode === this.gl.TRIANGLES || this.gl.TRIANGLE_FAN) {
            // 如果是TRIANGLES或TRIANGLE_FAN方式，我们的索引按照TRIANGLE_FAN方式排列
            if (isCCW === true) {
                this.indices.pushArray([0, 1, 2, 0, 2, 3]);
            }
            else {
                this.indices.pushArray([0, 2, 1, 0, 3, 2]);
            }
        }
        else if (mode === this.gl.TRIANGLE_STRIP) {
            // 如果是TRIANGLE_STRIP方式
            this.indices.pushArray([0, 1, 2, 2, 3, 0]);
        }
        else {
            // 简单起见，本方法就只演示三角形相关内容。
            return;
        }
        // 绑定VBO
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.ivbo);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.verts.subArray(), this.gl.DYNAMIC_DRAW);
        this.gl.vertexAttribPointer(this.attribMap["aPosition"].location, 3, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 0);
        this.gl.vertexAttribPointer(this.attribMap["aColor"].location, 4, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 12);
        this.gl.enableVertexAttribArray(this.attribMap["aPosition"].location);
        this.gl.enableVertexAttribArray(this.attribMap["aColor"].location);
        // 绑定EBO
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.evbo);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.indices.subArray(), this.gl.DYNAMIC_DRAW);
        this.gl.useProgram(this.program);
        let mat = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"]().scale(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]([2, 2, 2]));
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].product(this.viewProjectMatrix, mat, mat);
        this.gl.uniformMatrix4fv(this.uniformMap["uMVPMatrix"].location, false, mat.values);
        // 调用drawElements方法
        this.gl.drawElements(mode, count, this.gl.UNSIGNED_SHORT, byteOffset);
        this.gl.useProgram(null);
        this.gl.disableVertexAttribArray(this.attribMap["aPosition"].location);
        this.gl.disableVertexAttribArray(this.attribMap["aColor"].location);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
}


/***/ }),

/***/ "./src/demo/CoordSystemApplicationDemo.ts":
/*!************************************************!*\
  !*** ./src/demo/CoordSystemApplicationDemo.ts ***!
  \************************************************/
/*! exports provided: CoordSystemApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordSystemApplication", function() { return CoordSystemApplication; });
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/DrawHelper */ "./src/lib/DrawHelper.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");




class CoordSystemApplication extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__["CameraApplication"] {
    constructor(canvas) {
        super(canvas, { preserveDrawingBuffer: false }, true); // 调用基类构造函数
        // 存储当前使用的坐标系、视口以及旋转轴、旋转角度等信息的数组
        // 可以使用makeOneGLCoorSystem和makeFourGLCoordSystems方法来切换
        this.coordSystems = [];
        this.mvp = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"](); // 当前要绘制的坐标系的model-view-project矩阵
        this.cubeMVP = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"](); // 当前要绘制的绕坐标系某个轴的立方体的model-view-project矩阵
        this.isOneViewport = false; // 用来切换是否单视口还是多视口（4个视口）绘制
        this.speed = 1; // 旋转速度
        this.isD3dMode = false; // 用来标记是D3D坐标系
        this.makeFourGLCoordSystems();
        this.currentDrawMethod = this.drawCoordSystem;
    }
    makeOneGLCoorSystem() {
        this.coordSystems = []; // 清空坐标系数组内容，用于按需重新生成
        // 如果只有一个坐标系的话，其视口和裁剪区与canvas元素尺寸一致 
        this.coordSystems.push(new _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["CoordSystem"]([0, 0, this.canvas.width, this.canvas.height], _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].zero, new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1, 1, 0]).normalize(), 45, true)); // 右下
        this.isD3dMode = false;
    }
    makeFourGLCoordSystems() {
        this.coordSystems = []; // 清空坐标系数组内容，用于按需重新生成
        let hw = this.canvas.width * 0.5;
        let hh = this.canvas.height * 0.5;
        let dir = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1, 1, 1]).normalize();
        // 对于四视口渲染来说，将整个窗口平分成2*2四个视口表示
        this.coordSystems.push(new _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["CoordSystem"]([0, hh, hw, hh], _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].zero, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, 0)); // 左上，旋转轴为y轴
        this.coordSystems.push(new _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["CoordSystem"]([hw, hh, hw, hh], _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].zero, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, 0)); // 右上，旋转轴为x轴
        this.coordSystems.push(new _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["CoordSystem"]([0, 0, hw, hh], _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].zero, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, 0)); // 左下，旋转轴为z轴
        this.coordSystems.push(new _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["CoordSystem"]([hw, 0, hw, hh], _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].zero, dir, 0, true)); // 右下，旋转轴为[ 1 , 1 , 1 ]
        this.isD3dMode = false;
    }
    update(elapsedMsec, intervalSec) {
        // s = vt，根据两帧间隔更新角速度和角位移
        for (let i = 0; i < this.coordSystems.length; i++) {
            let s = this.coordSystems[i];
            s.angle += this.speed;
        }
        // 我们在CameraApplication中也覆写（override）的update方法
        // CameraApplication的update方法用来计算摄像机的投影矩阵以及视图矩阵
        // 所以我们必须要调用基类方法，用于控制摄像机更新
        // 否则你将什么都看不到，切记！
        super.update(elapsedMsec, intervalSec);
    }
    render() {
        // 使用了 preserveDrawingBuffer: false 创建WebGLRenderingContext，因此可以不用每帧调用clear方法清屏
        // this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );
        // 由于要使用Canvs2D绘制文字，所以必须要有ctx2D对象
        if (this.ctx2D === null) {
            return;
        }
        // 对Canvas2D上下文渲染对象进行清屏操作
        this.ctx2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // 遍历整个坐标系视口数组
        for (let i = 0; i < this.coordSystems.length; i++) {
            let s = this.coordSystems[i];
            // 使用当前的坐标系及视口数据作为参数，调用currentDrawMethod回调函数
            this.currentDrawMethod(s);
        }
    }
    onKeyPress(evt) {
        super.onKeyPress(evt); // 调用基类方法，这样摄像机键盘事件全部有效了
        if (evt.key === "1") {
            // 将currentDrawMethod函数指针指向drawCoordSystem
            this.currentDrawMethod = this.drawCoordSystem;
        }
        else if (evt.key === "2") {
            // 将currentDrawMethod函数指针指向drawFullCoordSystem
            this.currentDrawMethod = this.drawFullCoordSystem;
        }
        else if (evt.key === "3") {
            // 将currentDrawMethod函数指针指向drawFullCoordSystemWithRotatedCube
            this.currentDrawMethod = this.drawFullCoordSystemWithRotatedCube;
        }
        else if (evt.key === "c") {
            this.isOneViewport = !this.isOneViewport;
            if (this.isOneViewport === true) {
                this.makeOneGLCoorSystem(); // 切换到单视口渲染
            }
            else {
                this.makeFourGLCoordSystems(); // 切换到多视口渲染
            }
        }
    }
    drawText(pos, axis, mvp, inverse = false) {
        if (this.ctx2D === null) {
            return;
        }
        let out = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]();
        // 调用 MathHelper.obj2ScreenSpace这个核心函数，将局部坐标系标示的一个点变换到屏幕坐标系上
        if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].obj2GLViewportSpace(pos, mvp, this.camera.getViewport(), out)) {
            out.y = this.canvas.height - out.y; // 变换到屏幕坐标系，左手系，原点在左上角，x向右，y向下
            this.ctx2D.save(); // 渲染状态进栈
            this.ctx2D.font = "30px Arial"; // 使用大一点的Arial字体对象
            if (axis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS) {
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                this.ctx2D.fillStyle = "red"; // 红色
                if (inverse === true) {
                    this.ctx2D.textAlign = "right";
                    this.ctx2D.fillText("-X", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("X", out.x, out.y); // 进行文字绘制
                }
            }
            else if (axis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS) {
                this.ctx2D.textAlign = "center"; // X轴居中对齐
                this.ctx2D.fillStyle = "green"; // 绿色
                if (inverse === true) {
                    this.ctx2D.textBaseline = 'top'; // -Y轴为top对齐
                    this.ctx2D.fillText("-Y", out.x, out.y); // 行文字绘制
                }
                else {
                    this.ctx2D.textBaseline = 'bottom'; // Y轴为bottom对齐
                    this.ctx2D.fillText("Y", out.x, out.y); // 进行文字绘制
                }
            }
            else {
                this.ctx2D.fillStyle = "blue"; // 绿色
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                if (inverse === true) {
                    this.ctx2D.textAlign = "right"; // X轴居中对齐
                    this.ctx2D.fillText("-Z", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("Z", out.x, out.y); // 进行文字绘制
                }
            }
            this.ctx2D.restore(); // 恢复原来的渲染状态
        }
    }
    // 绘制带文字指示的三轴坐标系
    drawCoordSystem(s) {
        // 设置当前的视口
        this.camera.setViewport(s.viewport[0], s.viewport[1], s.viewport[2], s.viewport[3]);
        // 1、绘制三轴坐标系
        this.matStack.pushMatrix();
        {
            this.matStack.translate(s.pos); // 将坐标系平移到s.pos位置
            this.matStack.rotate(s.angle, s.axis, false); // 绕着s.axis轴旋转s.angle度
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.mvp); // 合成model-view-project矩阵
            // 调用DrawHelper.drawCoordSystem的方法绘制X / Y / Z坐标系
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawCoordSystem(this.builder, this.mvp, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].NONE, 1, s.isDrawAxis ? s.axis : null, s.isD3D);
        }
        this.matStack.popMatrix();
        // 绘制坐标系的标示文字，调用drawText方法
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS, this.mvp, false); // X 
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS, this.mvp, false); // Y
        if (this.isD3dMode === false) {
            this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS, this.mvp, false); // Z
        }
    }
    // 绘制带文字指示的六轴坐标系
    drawFullCoordSystem(s) {
        // 设置当前的视口
        this.camera.setViewport(s.viewport[0], s.viewport[1], s.viewport[2], s.viewport[3]);
        // 1、绘制六轴坐标系
        this.matStack.pushMatrix(); // 矩阵进栈
        {
            this.matStack.translate(s.pos); // 将坐标系平移到s.pos位置
            this.matStack.rotate(s.angle, s.axis, false); // 坐标系绕着s.axis轴旋转s.angle度
            // 合成model-view-project矩阵
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.mvp);
            // 使用mvp矩阵绘制六轴坐标系，调用的是DrawHelper.drawFullCoordSystem的静态辅助方法
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawFullCoordSystem(this.builder, this.mvp, 1, s.isDrawAxis ? s.axis : null);
            this.matStack.popMatrix(); // 矩阵出栈
        }
        // 绘制坐标系的标示文字,调用的是本类的drawText方法
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS, this.mvp, false); // X 
        this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([-1, 0, 0]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS, this.mvp, true); // -X
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS, this.mvp, false); // Y
        this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0, -1, 0]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS, this.mvp, true); // -Y
        if (this.isD3dMode === false) {
            this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS, this.mvp, false); // Z
            this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0, 0, -1]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS, this.mvp, true); // -Z
        }
    }
    drawFullCoordSystemWithRotatedCube(s) {
        // 设置当前的视口
        this.camera.setViewport(s.viewport[0], s.viewport[1], s.viewport[2], s.viewport[3]);
        this.matStack.pushMatrix();
        {
            // 第一步：绘制旋转的坐标系
            this.matStack.translate(s.pos); // 平移到当前坐标系的原点
            this.matStack.rotate(s.angle, s.axis, false); // 绕着当前坐标系的轴旋转angle度
            // 合成坐标系的model-view-project矩阵
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.mvp);
            // 绘制坐标系
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawFullCoordSystem(this.builder, this.mvp, 1, s.isDrawAxis ? s.axis : null);
            // 第二步：绘制绕x轴旋转的线框立方体
            this.matStack.pushMatrix();
            {
                this.matStack.rotate(s.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, false);
                this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0.8, 0.4, 0]));
                this.matStack.rotate(s.angle * 2, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, false);
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMVP);
                _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawWireFrameCubeBox(this.builder, this.cubeMVP, 0.1);
                this.matStack.popMatrix();
            }
            // 第三步：绘制绕y轴旋转的线框立方体
            this.matStack.pushMatrix();
            {
                this.matStack.rotate(s.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, false);
                this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0.2, 0.8, 0]));
                this.matStack.rotate(s.angle * 2, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, false);
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMVP);
                _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawWireFrameCubeBox(this.builder, this.cubeMVP, 0.1, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec4"].green);
                this.matStack.popMatrix();
            }
            // 第四步：绘制绕z轴旋转的线框立方体
            this.matStack.pushMatrix();
            {
                this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0.0, 0.0, 0.8]));
                this.matStack.rotate(s.angle * 2, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, false);
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMVP);
                _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawWireFrameCubeBox(this.builder, this.cubeMVP, 0.1, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec4"].blue);
                this.matStack.popMatrix();
            }
            // 第五步：绘制绕坐标系旋转轴（s.axis）旋转的线框立方体
            this.matStack.pushMatrix();
            {
                let len = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]();
                this.matStack.translate(s.axis.scale(0.8, len));
                this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0, 0.3, 0]));
                this.matStack.rotate(s.angle, s.axis, false);
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMVP);
                _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_2__["DrawHelper"].drawWireFrameCubeBox(this.builder, this.cubeMVP, 0.1, new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec4"]());
                this.matStack.popMatrix();
            }
            this.matStack.popMatrix();
        }
        // 第六步：绘制坐标系的标示文字
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS, this.mvp, false); // X
        this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([-1, 0, 0]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS, this.mvp, true); // -X
        this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS, this.mvp, false); // Y
        this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0, -1, 0]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS, this.mvp, true); // -Y
        if (this.isD3dMode === false) {
            this.drawText(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS, this.mvp, false); // Z
            this.drawText(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([0, 0, -1]), _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS, this.mvp, true); // -Z
        }
    }
}


/***/ }),

/***/ "./src/demo/Doom3Application.ts":
/*!**************************************!*\
  !*** ./src/demo/Doom3Application.ts ***!
  \**************************************/
/*! exports provided: Doom3Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Application", function() { return Doom3Application; });
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _lib_Doom3ProcScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Doom3ProcScene */ "./src/lib/Doom3ProcScene.ts");
/* harmony import */ var _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/DrawHelper */ "./src/lib/DrawHelper.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class Doom3Application extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__["CameraApplication"] {
    constructor(canvas) {
        super(canvas, { premultipliedAlpha: false }, true);
        this.angle = 0;
        this.program = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_2__["GLProgramCache"].instance.getMust("texture");
        this.colorProgram = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_2__["GLProgramCache"].instance.getMust("color");
        this.scene = new _lib_Doom3ProcScene__WEBPACK_IMPORTED_MODULE_1__["Doom3ProcScene"](this.gl);
    }
    run() {
        const _super = Object.create(null, {
            run: { get: () => super.run }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scene.parseDoom3Map("./data/doom3/level.proc");
            this.camera.y = this.scene.mins.y + 5;
            _super.run.call(this);
        });
    }
    render() {
        this.gl.disable(this.gl.CULL_FACE);
        this.scene.draw(this.camera, this.program, this.builder);
        this.scene.drawBoundBox(this.builder, this.camera, this.colorProgram);
        this.matStack.loadIdentity();
        this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["vec3"]([0, 6, 0]));
        this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["vec3"].up);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["mat4"].m0);
        this.colorProgram.bind();
        _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_3__["DrawHelper"].drawWireFrameCubeBox(this.builder, _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["mat4"].m0, 0.2, new _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["vec4"]([0, 0, 1, 1]));
        this.colorProgram.unbind();
        this.angle += 1;
        this.gl.enable(this.gl.CULL_FACE);
    }
}


/***/ }),

/***/ "./src/demo/MD5SkinedMeshApplication.ts":
/*!**********************************************!*\
  !*** ./src/demo/MD5SkinedMeshApplication.ts ***!
  \**********************************************/
/*! exports provided: MD5SkinedMeshApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5SkinedMeshApplication", function() { return MD5SkinedMeshApplication; });
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _lib_MD5SkinedMesh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/MD5SkinedMesh */ "./src/lib/MD5SkinedMesh.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class MD5SkinedMeshApplication extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__["CameraApplication"] {
    constructor(canvas) {
        super(canvas, { premultipliedAlpha: false }, true);
        this.angle = 0;
        this.currFrame = 0;
        this.program = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_1__["GLProgramCache"].instance.getMust("texture");
        this.texBuilder = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_4__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_5__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_5__["GLAttribState"].TEXCOORD_BIT, this.program, _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_6__["GLTextureCache"].instance.getMust("default"), _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_4__["EVertexLayout"].INTERLEAVED);
        this.model = new _lib_MD5SkinedMesh__WEBPACK_IMPORTED_MODULE_7__["MD5SkinedMesh"]();
        this.camera.z = 4;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"].loadTextFileAsync(_lib_MD5SkinedMesh__WEBPACK_IMPORTED_MODULE_7__["MD5SkinedMesh"].path + "suit.md5mesh");
            this.model.parse(response);
            yield this.model.loadTextures(this.gl);
            response = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"].loadTextFileAsync(_lib_MD5SkinedMesh__WEBPACK_IMPORTED_MODULE_7__["MD5SkinedMesh"].path + "suit_walk.md5anim");
            this.model.parseAnim(response);
            this.start();
        });
    }
    update(elapsedMsec, intervalSec) {
        super.update(elapsedMsec, intervalSec);
        this.currFrame++;
        this.currFrame %= this.model.anims[0].frames.length; // 连续播放
        this.model.playAnim(0, this.currFrame); // 更新0号动画序列
        this.angle += 0.5;
    }
    render() {
        this.matStack.loadIdentity();
        this.matStack.rotate(-90, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right);
        this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
        this.model.drawBindPose(this.texBuilder, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
        this.matStack.pushMatrix();
        this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1.0, 0, 0]));
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
        this.model.drawAnimPose(this.texBuilder, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
        this.matStack.popMatrix();
    }
}


/***/ }),

/***/ "./src/demo/MeshBuilderApplication.ts":
/*!********************************************!*\
  !*** ./src/demo/MeshBuilderApplication.ts ***!
  \********************************************/
/*! exports provided: MeshBuilderApplicaton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshBuilderApplicaton", function() { return MeshBuilderApplicaton; });
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _webgl_WebGLCoordSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/WebGLCoordSystem */ "./src/webgl/WebGLCoordSystem.ts");
/* harmony import */ var _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/DrawHelper */ "./src/lib/DrawHelper.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");









class MeshBuilderApplicaton extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__["CameraApplication"] {
    constructor(canvas) {
        super(canvas);
        this.angle = 0; // 用来更新旋转角度
        this.cubeTexCoords = [
            0, 0.5, 0.5, 0.5, 0.5, 1, 0, 1,
            0.5, 0.5, 1, 0.5, 1, 1, 0.5, 1,
            0, 0, 0.5, 0, 0.5, 0.5, 0, 0.5,
            0.5, 0, 1, 0, 1, 0.5, 0.5, 0.5,
            0.25, 0.25, 0.75, 0.25, 0.75, 0.75, 0.25, 0.75,
            0, 0, 1, 0, 1, 1, 0, 1 // 整个贴图映射到立方体的下面
        ];
        // 使用default纹理和着色器
        this.texture = _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_4__["GLTextureCache"].instance.getMust("default");
        this.colorShader = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_5__["GLProgramCache"].instance.getMust("color");
        this.textureShader = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_5__["GLProgramCache"].instance.getMust("texture");
        // 创建不同EVertexLayout的颜色着色器
        this.builder0 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].COLOR_BIT, this.colorShader, null, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].INTERLEAVED);
        this.builder1 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].COLOR_BIT, this.colorShader, null, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].SEQUENCED);
        this.builder2 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].COLOR_BIT, this.colorShader, null, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].SEPARATED);
        // 创建不同EVertexLayout的纹理着色器
        this.tbuilder0 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT, this.textureShader, this.texture.texture, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].INTERLEAVED);
        this.tbuilder1 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT, this.textureShader, this.texture.texture, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].SEQUENCED);
        this.tbuilder2 = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLMeshBuilder"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT, this.textureShader, this.texture.texture, _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["EVertexLayout"].SEPARATED);
        // 可以随便该行列数量，用于多视口渲染使用
        this.coords = _webgl_WebGLCoordSystem__WEBPACK_IMPORTED_MODULE_6__["GLCoordSystem"].makeViewportCoordSystems(this.canvas.width, this.canvas.height, 2, 3);
        this.camera.z = 4; // 调整摄像机位置
        // 初始化时指向页面1的绘图函数
        this.currentDrawMethod = this.drawByMatrixWithColorShader;
    }
    setViewport(coord) {
        // camera的setViewport方法内部会调用:
        // 1、gl.viewport ( x , y , width , height )方法
        // 2、gl.scissor ( x , y , width , height )方法
        // 而在WebGLApplication的构造函数调用的GLHelper.setDefaultState方法已经开启了SCISSOR_TEST
        // 因此可以进行视口大小的裁剪操作了，超出视口部分的内容都被裁剪掉了！！
        this.camera.setViewport(coord.viewport[0], coord.viewport[1], coord.viewport[2], coord.viewport[3]);
    }
    update(elapsedMsec, intervalSec) {
        // 每帧旋转1度
        this.angle += 1;
        // 调用基类方法，这样就能让摄像机进行更新
        super.update(elapsedMsec, intervalSec);
    }
    drawByMatrixWithColorShader() {
        // 很重要，由于我们后续使用多视口渲染，因此必须要调用camera的setviewport方法
        this.camera.setViewport(0, 0, this.canvas.width, this.canvas.height);
        // 使用cleartColor方法设置当前颜色缓冲区背景色是什么颜色
        this.gl.clearColor(0.8, 0.8, 0.8, 1);
        // 调用clear清屏操作
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // 关闭三角形背面剔除功能，这是因为在初始化是，我们是开启了该功能
        // 但是由于我们下面会渲染三角形和四边形这两个2d形体，所以要关闭，否则不会显示三角形或四边形的背面部分
        this.gl.disable(this.gl.CULL_FACE);
        // EVertexLayout.INTERLEAVED 顶点存储格式绘制绕z轴旋转的三角形
        this.matStack.pushMatrix();
        {
            this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([-1.5, 0, 0])); // 将坐标系左移1.5个单位（右移为正，左移为负)
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward); // 绕着right轴每帧旋转this.angle数量，单位为度而不是弧度
            // 合成model-view-projection矩阵，存储到mat4的静态变量中，减少内存的重新分配
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.builder0.begin(this.gl.TRIANGLES); // 在使用GLMeshBuilder时，必须要调用beging方法
            this.builder0.color(1, 0, 0).vertex(-0.5, 0, 0); // 顶点0为红色  左
            this.builder0.color(0, 1, 0).vertex(0.5, 0, 0); // 顶点1为绿色  右
            this.builder0.color(0, 0, 1).vertex(0, 0.5, 0); // 顶点2为蓝色  上
            this.builder0.end(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0); // 在使用GLMeshBuilder时，必须要调用end方法进行真正的绘制提交命令
            this.matStack.popMatrix(); // 矩阵出堆栈
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 0.8);
        }
        // EVertexLayout.SEQUENCED 顶点存储格式绘制绘制绕y轴旋转的四边形
        this.matStack.pushMatrix(); // 矩阵堆栈进栈
        {
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up); // 在窗口中心绘制，因此不需要平移，只需要旋转
            // 合成model-view-projection矩阵，存储到mat4的静态变量中，减少内存的重新分配
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.builder1.begin(this.gl.TRIANGLE_FAN); // 注意这里我们使用TRIANGLE_FAN图元而不是TRIANGLES图元绘制
            this.builder1.color(1, 0, 0).vertex(-0.5, 0, 0); // 顶点0为红色  左下
            this.builder1.color(0, 1, 0).vertex(0.5, 0, 0); // 顶点1为绿色  右下
            this.builder1.color(0, 0, 1).vertex(0.5, 0.5, 0); // 顶点2为蓝色  右上
            this.builder1.color(1, 1, 0).vertex(-0.5, 0.5, 0); // 顶点3为黄色 左上
            this.builder1.end(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0); // 向GPU提交绘制命令
            this.matStack.popMatrix(); // 矩阵出堆栈
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder1, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 0.8);
        }
        // EVertexLayout.SEPARATED 顶点存储格式绘制绘制绕[ 1 , 1 , 1 ]轴转转的立方体
        this.matStack.pushMatrix(); // 矩阵堆栈进栈
        {
            this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1.5, 0, 0])); // 将坐标系右移1.5个单位（右移为正，左移为负)
            this.matStack.rotate(-this.angle, new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1, 1, 1]).normalize()); // 绕[ 1 , 1 , 1 ]轴旋转，主要轴调用normalize方法进行单位化
            // 合成model-view-projection矩阵，存储到mat4的静态变量中，减少内存的重新分配
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawWireFrameCubeBox(this.builder2, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, 0.2); // 调用DrawHelper类的静态drawWireFrameCubeBox方法
            this.matStack.popMatrix(); // 矩阵出堆栈
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder2, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 0.8);
        }
        // 恢复三角形背面剔除功能
        this.gl.enable(this.gl.CULL_FACE);
    }
    drawByMultiViewportsWithTextureShader() {
        // 第一步，设置viewport
        this.setViewport(this.coords[0]);
        // 第二步，设置viewport的背景色（可选，如果你不想使用default深灰色的背景色）
        this.gl.clearColor(0.0, 0, 0, 1);
        // 第三步，将viewport设置为第二步设置的背景色（可选，如果你不想使用default深灰色的背景色）
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.matStack.pushMatrix();
        {
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.tbuilder0.begin(this.gl.TRIANGLES);
            this.tbuilder0.texcoord(0, 0).vertex(-1, 0, 0);
            this.tbuilder0.texcoord(1, 0).vertex(1, 0, 0);
            this.tbuilder0.texcoord(0.5, 0.5).vertex(0, 1, 0);
            this.tbuilder0.end(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
        // 使用default深灰色的背景色，所以只使用第一步设置了viewport，忽略第二/第三步
        this.setViewport(this.coords[1]);
        this.matStack.pushMatrix();
        {
            this.tbuilder1.begin(this.gl.TRIANGLE_FAN);
            this.matStack.rotate(-this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.tbuilder1.texcoord(0, 0).vertex(-1, -0.5, 0);
            this.tbuilder1.texcoord(1, 0).vertex(1, -0.5, 0);
            this.tbuilder1.texcoord(1, 1).vertex(1, 0.5, 0);
            this.tbuilder1.texcoord(0, 1).vertex(-1, 0.5, 0);
            this.tbuilder1.end(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
        // 在viewport2中绘制绕y轴旋转、使用cubeTexCoords的立方体
        this.setViewport(this.coords[2]);
        this.matStack.pushMatrix();
        {
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawTextureCubeBox(this.tbuilder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, 0.5, this.cubeTexCoords);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
        // 在viewport3中绘制绕x轴旋转、使用cubeTexCoords的立方体
        this.setViewport(this.coords[3]);
        this.gl.clearColor(1.0, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.matStack.pushMatrix();
        {
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].right);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawTextureCubeBox(this.tbuilder1, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, 0.5, this.cubeTexCoords);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
        // 在viewport4中绘制绕z轴旋转、使用cubeTexCoords的立方体
        this.setViewport(this.coords[4]);
        this.gl.clearColor(0.0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.matStack.pushMatrix();
        {
            this.matStack.rotate(this.angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawTextureCubeBox(this.tbuilder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, 0.5, this.cubeTexCoords);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
        // 在viewport5中绘制绕[ 1 , 1 , 1 ]轴旋转、使用默认贴图坐标的立方体
        this.setViewport(this.coords[5]);
        this.matStack.pushMatrix();
        {
            this.matStack.rotate(this.angle, new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([1, 1, 1]).normalize());
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0);
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawTextureCubeBox(this.tbuilder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, 0.8);
            this.matStack.popMatrix();
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder0, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].m0, _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE, 1.5);
        }
    }
    render() {
        // 调用的的currentDrawMethod这个回调函数，该函数指向当前要渲染的页面方法
        this.currentDrawMethod();
    }
    onKeyPress(evt) {
        super.onKeyPress(evt); // 调用基类方法，这样摄像机键盘事件全部有效了
        if (evt.key === "1") {
            // 将currentDrawMethod函数指针指向drawByMatrixWithColorShader方法
            this.currentDrawMethod = this.drawByMatrixWithColorShader;
        }
        else if (evt.key === "2") {
            // 将currentDrawMethod函数指针指向drawByMultiViewportsWithTextureShader方法
            this.currentDrawMethod = this.drawByMultiViewportsWithTextureShader;
        }
    }
}


/***/ }),

/***/ "./src/demo/Q3BspApplication.ts":
/*!**************************************!*\
  !*** ./src/demo/Q3BspApplication.ts ***!
  \**************************************/
/*! exports provided: Q3BspApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BspApplication", function() { return Q3BspApplication; });
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _lib_Quake3BspScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Quake3BspScene */ "./src/lib/Quake3BspScene.ts");
/* harmony import */ var _lib_Quake3BspParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Quake3BspParser */ "./src/lib/Quake3BspParser.ts");
/* harmony import */ var _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class Q3BspApplication extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_0__["CameraApplication"] {
    constructor(canvas) {
        super(canvas);
        this.bspScene = new _lib_Quake3BspScene__WEBPACK_IMPORTED_MODULE_2__["Quake3BspScene"](this.gl); // 创建Quake3BspScene对象
        this.program = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.getMust("texture"); // 获取默认的纹理着色器对象
        this.camera.y = 6; // 设置摄像机的高度
    }
    render() {
        this.bspScene.draw(this.camera, this.program);
    }
    run() {
        const _super = Object.create(null, {
            run: { get: () => super.run }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // 1、创建Quake3BspParser对象，用来解析二进制的BSP文件格式
            let parser = new _lib_Quake3BspParser__WEBPACK_IMPORTED_MODULE_3__["Q3BspParser"]();
            // 2、使用HttpRequest的loadArrayBufferAsync静态方法从服务器某个路径载入.bsp文件
            let buffer = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].loadArrayBufferAsync(this.bspScene.pathPrifix + "test1_paul.bsp");
            // 3、注意上面载入bsp二进制数据时使用了await关键字对资源进行同步
            // 因此确保parse方法调用时，buffer是有数据的。
            // 如果上面方法不使用await，那么loadArrayBufferAsync是异步调用
            // parse方法调用时，buffer极大几率是个空对象，切记！
            parser.parse(buffer);
            // 4、当解析完成bsp文件后，调用bspScene的loadTextures方法，从服务器上载入相应的各种纹理
            // 需要注意的是，这里也使用了await关键字
            yield this.bspScene.loadTextures(parser);
            // 5、一旦所有纹理都载入了后，就调用bspScene的compileMap方法生成GLStaticMesh对象
            this.bspScene.compileMap(parser);
            // 6、资源全局加载完成以及渲染数据都组装完成后，进入游戏循环
            _super.run.call(this);
        });
    }
}


/***/ }),

/***/ "./src/demo/RotatingCubeApplication.ts":
/*!*********************************************!*\
  !*** ./src/demo/RotatingCubeApplication.ts ***!
  \*********************************************/
/*! exports provided: RotatingCubeApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatingCubeApplication", function() { return RotatingCubeApplication; });
/* harmony import */ var _webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/DrawHelper */ "./src/lib/DrawHelper.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _lib_Primitives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Primitives */ "./src/lib/Primitives.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class RotatingCubeApplication extends _lib_CameraApplication__WEBPACK_IMPORTED_MODULE_2__["CameraApplication"] {
    constructor(canvas) {
        super(canvas, { premultipliedAlpha: false }, true); // 调用基类构造函数
        // 初始化角位移和角速度
        this.cubeAngle = 0;
        this.triAngle = 0;
        this.cubeSpeed = 100;
        this.triSpeed = 1;
        this.triTimerId = -1;
        this.currTexIdx = 0;
        this.textures = [];
        this.textures.push(_webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_5__["GLTextureCache"].instance.getMust("default"));
        // 创建封装后的GLProgram类
        this.textureProgram = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_6__["GLProgramCache"].instance.getMust("texture");
        this.colorProgram = _webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_6__["GLProgramCache"].instance.getMust("color");
        this.cube = new _lib_Primitives__WEBPACK_IMPORTED_MODULE_9__["Cube"](0.5, 0.5, 0.5);
        let data = this.cube.makeGeometryData();
        this.cubeVAO = data.makeStaticVAO(this.gl);
        this._hitAxis = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].NONE; // 初始化时没选中任何一条坐标轴
        // 初始化时，世界矩阵都为归一化矩阵
        this.cubeMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"]();
        this.triMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"]();
        // 调整摄像机的位置
        this.camera.z = 8;
    }
    _renderCube() {
        // 绑定要绘制的texutre和program
        this.textures[this.currTexIdx].bind();
        this.textureProgram.bind();
        this.textureProgram.loadSampler();
        // 绘制立方体
        this.matStack.loadIdentity();
        // 第一个渲染堆栈操作
        {
            this.matStack.pushMatrix(); // 矩阵进栈
            this.matStack.rotate(this.cubeAngle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].up, false); // 以角度(非弧度)为单位，每帧旋转
            // 合成modelViewProjection矩阵
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMatrix);
            // 将合成的矩阵给GLProgram对象
            this.textureProgram.setMatrix4(_webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_0__["GLProgram"].MVPMatrix, this.cubeMatrix);
            this.cubeVAO.draw(); // 使用当前绑定的texture和program绘制cubeVao对象
            // 使用辅助方法绘制坐标系
            _lib_DrawHelper__WEBPACK_IMPORTED_MODULE_7__["DrawHelper"].drawCoordSystem(this.builder, this.cubeMatrix, this._hitAxis, 1);
            this.matStack.popMatrix(); // 矩阵出栈
        }
        // 解除绑定的texture和program
        this.textureProgram.unbind();
        this.textures[this.currTexIdx].unbind();
    }
    _renderTriangle() {
        // 禁止渲染三角形时启用背面剔除功能
        this.gl.disable(this.gl.CULL_FACE);
        // 由于三角形使用颜色+位置信息进行绘制，因此要绑定当前的GPU Program为colorProgram
        this.colorProgram.bind();
        {
            this.matStack.pushMatrix(); // 新产生一个矩阵
            // 立方体绘制在Canvas的中心
            // 而三角形则绘制在向左（负号）平移2个单位处的位置
            this.matStack.translate(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]([-2, 0, 0]));
            // 使用弧度，绕Z轴进行Roll旋转
            this.matStack.rotate(this.triAngle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].forward, true);
            // 使用类似OpenGL1.1的立即绘制模式
            this.builder.begin(); // 开始绘制，defatul使用gl.TRIANGLES方式绘制
            this.builder.color(1, 0, 0).vertex(-0.5, 0, 0); // 三角形第一个点的颜色与坐标
            this.builder.color(0, 1, 0).vertex(0.5, 0, 0); // 三角形第二个点的颜色与坐标
            this.builder.color(0, 0, 1).vertex(0, 0.5, 0); // 三角形第三个点的颜色与坐标
            // 合成model-view-projection matrix
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.triMatrix);
            // 将mvpMatrix传递给GLMeshBuilder的end方法，该方法会正确的显示图形
            this.builder.end(this.triMatrix);
            this.matStack.popMatrix(); // 删除一个矩阵
        }
        this.colorProgram.unbind();
        // 恢复背面剔除功能
        this.gl.enable(this.gl.CULL_FACE);
    }
    // 关于Canvas2D的详细应用，可以参考本书的姐妹篇：TypeScript图形渲染实战：2D架构设计与实现
    _renderText(text, x = this.canvas.width * 0.5, y = 150) {
        if (this.ctx2D !== null) {
            this.ctx2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx2D.save(); // 渲染状态进栈
            this.ctx2D.fillStyle = "red"; // 红色
            this.ctx2D.textAlign = "center"; // X轴居中对齐
            this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
            this.ctx2D.font = "30px Arial"; // 使用大一点的Arial字体对象
            this.ctx2D.fillText(text, x, y); // 进行文字绘制
            this.ctx2D.restore(); // 恢复原来的渲染状态
        }
    }
    drawText(pos, axis, mvp, inverse = false) {
        if (this.ctx2D === null) {
            return;
        }
        let out = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"]();
        // 调用 MathHelper.obj2ScreenSpace这个核心函数，将局部坐标系标示的一个点变换到屏幕坐标系上
        if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["MathHelper"].obj2GLViewportSpace(pos, mvp, this.camera.getViewport(), out)) {
            out.y = this.canvas.height - out.y; // 变换到屏幕坐标系，左手系，原点在左上角，x向右，y向下
            this.ctx2D.save(); // 渲染状态进栈
            this.ctx2D.font = "30px Arial"; // 使用大一点的Arial字体对象
            if (axis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].XAXIS) {
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                this.ctx2D.fillStyle = "red"; // 红色
                if (inverse === true) {
                    this.ctx2D.textAlign = "right";
                    this.ctx2D.fillText("-X", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("X", out.x, out.y); // 进行文字绘制
                }
            }
            else if (axis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_8__["EAxisType"].YAXIS) {
                this.ctx2D.textAlign = "center"; // X轴居中对齐
                this.ctx2D.fillStyle = "green"; // 绿色
                if (inverse === true) {
                    this.ctx2D.textBaseline = 'top'; // -Y轴为top对齐
                    this.ctx2D.fillText("-Y", out.x, out.y); // 行文字绘制
                }
                else {
                    this.ctx2D.textBaseline = 'bottom'; // Y轴为bottom对齐
                    this.ctx2D.fillText("Y", out.x, out.y); // 进行文字绘制
                }
            }
            else {
                this.ctx2D.fillStyle = "blue"; // 绿色
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                if (inverse === true) {
                    this.ctx2D.textAlign = "right"; // X轴居中对齐
                    this.ctx2D.fillText("-Z", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("Z", out.x, out.y); // 进行文字绘制
                }
            }
            this.ctx2D.restore(); // 恢复原来的渲染状态
        }
    }
    render() {
        this._renderCube();
        this._renderTriangle();
        this._renderText("第一个WebGL Demo");
    }
    update(elapsedMsec, intervalSec) {
        // s = vt，根据两帧间隔更新角速度和角位移
        this.cubeAngle += this.cubeSpeed * intervalSec;
        // 我们在CameraApplication中也覆写（override）的update方法
        // CameraApplication的update方法用来计算摄像机的投影矩阵以及视图矩阵
        // 所以我们必须要调用基类方法，用于控制摄像机更新
        // 否则你将什么都看不到，切记！
        super.update(elapsedMsec, intervalSec);
    }
    // 资源同步方法
    run() {
        const _super = Object.create(null, {
            run: { get: () => super.run }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // await必须要用于async声明的函数中
            let img = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"].loadImageAsync("data/pic0.png");
            let tex = new _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](this.gl);
            tex.upload(img, 0, true);
            tex.filter();
            this.textures.push(tex);
            console.log("1、第一个纹理载入成功！");
            // await必须要用于async声明的函数中
            img = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"].loadImageAsync("data/pic1.jpg");
            tex = new _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](this.gl);
            tex.upload(img, 0, true);
            tex.filter();
            this.textures.push(tex);
            console.log("2、第二个纹理载入成功！");
            // 在资源同步加载完成后，直接启动换肤的定时器，每隔2秒，将立方体的皮肤进行周而复始的替换
            this.addTimer(this.cubeTimeCallback.bind(this), 2, false);
            console.log("3、启动Application程序");
            _super.run.call(this); // 调用基类的run方法，基类run方法内部调用了start方法
        });
    }
    cubeTimeCallback(id, data) {
        this.currTexIdx++; // 定时让计数器+1
        // 取模操作，让currTexIdx的取值范围为[ 0, 2 ]之间（当前有3个纹理）
        this.currTexIdx %= this.textures.length;
    }
    triTimeCallback(id, data) {
        this.triAngle += this.triSpeed;
    }
    onKeyDown(evt) {
        if (evt.key === "q") {
            if (this.triTimerId === -1) {
                this.triTimerId = this.addTimer(this.triTimeCallback.bind(this), 0.25, false);
            }
        }
        else if (evt.key === "e") {
            if (this.triTimerId !== -1) {
                if (this.removeTimer(this.triTimerId)) {
                    this.triTimerId = -1;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/lib/Camera.ts":
/*!***************************!*\
  !*** ./src/lib/Camera.ts ***!
  \***************************/
/*! exports provided: ECameraType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECameraType", function() { return ECameraType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _Frustum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Frustum */ "./src/lib/Frustum.ts");



var ECameraType;
(function (ECameraType) {
    ECameraType[ECameraType["FPSCAMERA"] = 0] = "FPSCAMERA";
    ECameraType[ECameraType["FLYCAMERA"] = 1] = "FLYCAMERA";
})(ECameraType || (ECameraType = {}));
class Camera {
    constructor(gl, width, height, fovY = 45.0, zNear = 1, zFar = 1000) {
        this._type = ECameraType.FLYCAMERA;
        this._position = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this._xAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([1, 0, 0]);
        this._yAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([0, 1, 0]);
        this._zAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([0, 0, 1]);
        this.gl = gl;
        this._aspectRatio = width / height;
        this._fovY = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(fovY);
        this._near = zNear;
        this._far = zFar;
        this._top = this._near * Math.tan(this._fovY * 0.5),
            this._right = this._top * this._aspectRatio;
        this._bottom = -this._top;
        this._left = -this._right;
        this._frustum = new _Frustum__WEBPACK_IMPORTED_MODULE_2__["Frustum"]();
        this._projectionMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this._viewMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this._invViewMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this._viewProjMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this._invViewProjMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this.controlByMouse = false;
    }
    get fovY() {
        return this._fovY;
    }
    set fovY(value) {
        this._fovY = value;
    }
    get near() {
        return this._near;
    }
    set near(value) {
        this._near = value;
    }
    get far() {
        return this._far;
    }
    set far(value) {
        this._far = value;
    }
    get aspectRatio() {
        return this._aspectRatio;
    }
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    setViewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
        this.gl.scissor(x, y, width, height);
        this.aspectRatio = width / height;
    }
    getViewport() {
        return this.gl.getParameter(this.gl.VIEWPORT);
    }
    //千万别用this.position.x = xxx，因为无法设置this._viewDirty
    //请用下面的三个set方法
    set x(value) {
        this._position.x = value;
    }
    set y(value) {
        this._position.y = value;
    }
    set z(value) {
        this._position.z = value;
    }
    get x() {
        return this._position.x;
    }
    get y() {
        return this._position.y;
    }
    get z() {
        return this._position.z;
    }
    get xAxis() {
        return this._xAxis;
    }
    get yAxis() {
        return this._yAxis;
    }
    get zAxis() {
        return this._zAxis;
    }
    get type() {
        return this._type;
    }
    //比较特别，需要重新修正一些内容，或者直接禁止修改type
    set type(value) {
        this._type = value;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get bottom() {
        return this._bottom;
    }
    get top() {
        return this._top;
    }
    update(intervalSec) {
        this._projectionMatrix = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].perspective(this.fovY, this.aspectRatio, this.near, this.far);
        this._calcViewMatrix();
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].product(this._projectionMatrix, this._viewMatrix, this._viewProjMatrix);
        this._viewProjMatrix.copy(this._invViewProjMatrix);
        this._viewProjMatrix.inverse(this._invViewProjMatrix);
    }
    //局部坐标系下的前后运动
    moveForward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.x += this._zAxis.x * speed;
            this._position.z += this._zAxis.z * speed;
        }
        else {
            this._position.x += this._zAxis.x * speed;
            this._position.y += this._zAxis.y * speed;
            this._position.z += this._zAxis.z * speed;
        }
    }
    //局部坐标系下的左右运动
    moveRightward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.x += this._xAxis.x * speed;
            this._position.z += this._xAxis.z * speed;
        }
        else {
            this._position.x += this._xAxis.x * speed;
            this._position.y += this._xAxis.y * speed;
            this._position.z += this._xAxis.z * speed;
        }
    }
    //局部坐标系下的上下运动
    moveUpward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.y += speed;
        }
        else {
            this._position.x += this._yAxis.x * speed;
            this._position.y += this._yAxis.y * speed;
            this._position.z += this._yAxis.z * speed;
        }
    }
    //局部坐标轴的左右旋转
    yaw(angle) {
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.setIdentity();
        angle = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(angle);
        if (this._type === ECameraType.FPSCAMERA) {
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.rotate(angle, _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].up);
        }
        else {
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.rotate(angle, this._yAxis);
        }
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._zAxis, this._zAxis);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._xAxis, this._xAxis);
    }
    //局部坐标轴的上下旋转
    pitch(angle) {
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.setIdentity();
        angle = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(angle);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.rotate(angle, this._xAxis);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._yAxis, this._yAxis);
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._zAxis, this._zAxis);
    }
    //局部坐标轴的滚转
    roll(angle) {
        if (this._type === ECameraType.FLYCAMERA) {
            angle = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(angle);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.setIdentity();
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.rotate(angle, this._zAxis);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._xAxis, this._xAxis);
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].m0.multiplyVec3(this._yAxis, this._yAxis);
        }
    }
    //从当前postition和target获得view矩阵
    //并且从view矩阵抽取forward,up,right方向矢量
    lookAt(target, up = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].up) {
        this._viewMatrix = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].lookAt(this._position, target, up);
        this._xAxis.x = this._viewMatrix.values[0];
        this._yAxis.x = this._viewMatrix.values[1];
        this._zAxis.x = this._viewMatrix.values[2];
        this._xAxis.y = this._viewMatrix.values[4];
        this._yAxis.y = this._viewMatrix.values[5];
        this._zAxis.y = this._viewMatrix.values[6];
        this._xAxis.z = this._viewMatrix.values[8];
        this._yAxis.z = this._viewMatrix.values[9];
        this._zAxis.z = this._viewMatrix.values[10];
    }
    get viewMatrix() {
        return this._viewMatrix;
    }
    get invViewMatrix() {
        return this._invViewMatrix;
    }
    get projectionMatrix() {
        return this._projectionMatrix;
    }
    get viewProjectionMatrix() {
        return this._viewProjMatrix;
    }
    get invViewProjectionMatrix() {
        return this._invViewProjMatrix;
    }
    get frustum() {
        return this._frustum;
    }
    //从当前轴以及postion合成view矩阵
    _calcViewMatrix() {
        //固定forward方向
        this._zAxis.normalize();
        //forward cross right = up
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(this._zAxis, this._xAxis, this._yAxis);
        this._yAxis.normalize();
        //up cross forward = right
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(this._yAxis, this._zAxis, this._xAxis);
        this._xAxis.normalize();
        let x = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this._xAxis, this._position);
        let y = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this._yAxis, this._position);
        let z = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(this._zAxis, this._position);
        this._viewMatrix.values[0] = this._xAxis.x;
        this._viewMatrix.values[1] = this._yAxis.x;
        this._viewMatrix.values[2] = this._zAxis.x;
        this._viewMatrix.values[3] = 0.0;
        this._viewMatrix.values[4] = this._xAxis.y;
        this._viewMatrix.values[5] = this._yAxis.y;
        this._viewMatrix.values[6] = this._zAxis.y;
        this._viewMatrix.values[7] = 0.0;
        this._viewMatrix.values[8] = this._xAxis.z;
        this._viewMatrix.values[9] = this._yAxis.z;
        this._viewMatrix.values[10] = this._zAxis.z;
        this._viewMatrix.values[11] = 0.0;
        this._viewMatrix.values[12] = x;
        this._viewMatrix.values[13] = y;
        this._viewMatrix.values[14] = z;
        this._viewMatrix.values[15] = 1.0;
        //求view的逆矩阵，也就是世界矩阵
        this._viewMatrix.inverse(this._invViewMatrix);
        this._frustum.buildFromCamera(this);
    }
}


/***/ }),

/***/ "./src/lib/CameraApplication.ts":
/*!**************************************!*\
  !*** ./src/lib/CameraApplication.ts ***!
  \**************************************/
/*! exports provided: CameraApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraApplication", function() { return CameraApplication; });
/* harmony import */ var _webgl_WebGLApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/WebGLApplication */ "./src/webgl/WebGLApplication.ts");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ "./src/lib/Camera.ts");


class CameraApplication extends _webgl_WebGLApplication__WEBPACK_IMPORTED_MODULE_0__["WebGLApplication"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2d = false) {
        super(canvas, contextAttributes, need2d);
        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.gl, canvas.width, canvas.height, 45, 1, 2000);
        this.camera.z = 4;
    }
    //子类override update函数时必须要调用基类本方法
    update(elapsedMsec, intervalSec) {
        // 调用Camera对象的update，这样就能实时的计算camera的投影和视图矩阵
        // 这样才能保证摄像机正确运行
        // 如果CameraApplication的子类覆写（override）本函数
        // 那么必须在函数的最后一句代码调用: super.update(elapsedMsec,intervalSec)
        this.camera.update(intervalSec);
    }
    // 内置一个通用的摄像机按键事件响应操作
    // 覆写（）
    onKeyPress(evt) {
        if (evt.key === "w") {
            this.camera.moveForward(-1); // 摄像机向前运行        
        }
        else if (evt.key === "s") {
            this.camera.moveForward(1); // 摄像机向后运行
        }
        else if (evt.key === "a") {
            this.camera.moveRightward(1); // 摄像机向右运行
        }
        else if (evt.key === "d") {
            this.camera.moveRightward(-1); // 摄像机向左运行
        }
        else if (evt.key === "z") {
            this.camera.moveUpward(1); // 摄像机向上运行
        }
        else if (evt.key === "x") {
            this.camera.moveUpward(-1); // 摄像机向下运行
        }
        else if (evt.key === "y") {
            this.camera.yaw(1); // 摄像机绕本身的Y轴旋转
        }
        else if (evt.key === "r") {
            this.camera.roll(1); // 摄像机绕本身的Z轴旋转
        }
        else if (evt.key == "p") {
            this.camera.pitch(1); // 摄像机绕本身的X轴旋转
        }
    }
}


/***/ }),

/***/ "./src/lib/Doom3ProcParser.ts":
/*!************************************!*\
  !*** ./src/lib/Doom3ProcParser.ts ***!
  \************************************/
/*! exports provided: Doom3BspNode, Doom3Portal, Doom3Area, Doom3Vertex, Doom3Surface, Doom3ProcParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3BspNode", function() { return Doom3BspNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Portal", function() { return Doom3Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Area", function() { return Doom3Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Vertex", function() { return Doom3Vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3Surface", function() { return Doom3Surface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3ProcParser", function() { return Doom3ProcParser; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/Tokenizer */ "./src/common/utils/Tokenizer.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");



class Doom3BspNode {
    constructor() {
        this.plane = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"](); // 平面数据
        this.front = -1; // BSP平面正面所指向的area号
        this.back = -1; // BSP平面背面所指向的area号
    }
}
// 每个portal属于哪个两个area
class Doom3Portal {
    constructor() {
        this.index = -1; // 在portal列表中的索引号
        this.points = []; // portal的顶点数据
        this.plane = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"](); // portal的平面数据
        this.areas = new Array(2); // 一个portal可以被连接最多两个area
    }
}
// 一个area包含多个portal
class Doom3Area {
    constructor() {
        this.name = "";
        this.portals = []; // 一个区域可以包含n个portal
        this.surfaces = []; // 一个区域由多个surface组成
        // 整个Area(可以看成房间)的绑定盒大小
        this.mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([Infinity, Infinity, Infinity]); // 绑定盒mins
        this.maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-Infinity, -Infinity, -Infinity]); // 绑定盒maxs
    }
}
// Doom3 PROC的顶点格式数据
class Doom3Vertex {
    constructor() {
        this.pos = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"](); // 位置坐标向量
        this.st = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"](); // 纹理坐标向量
        this.normal = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"](); // 法向量
    }
}
// 一个area可以由多个surface组成
// 一个surface使用同一种材质，并且具有顶点和索引缓存
class Doom3Surface {
    constructor() {
        this.material = ""; // 当前表面所用的材质名称
        this.vertices = []; // 当前表面顶点数据集合
        this.indices = []; // 当前顶点的索引数据集合
        // 当前表面的绑定盒
        this.mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([Infinity, Infinity, Infinity]);
        this.maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-Infinity, -Infinity, -Infinity]);
    }
}
class Doom3ProcParser {
    constructor() {
        this.pathPrifix = "./data/doom3/";
        this.version = -1;
        this.nodes = [];
        this.areas = [];
        this.portals = [];
        this.mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([Infinity, Infinity, Infinity]);
        this.maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-Infinity, -Infinity, -Infinity]);
    }
    parse(source) {
        // 使用Doom3Factory的工厂方法createTokenizer创建IDoom3Tokenizer接口
        let tokenizer = _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["Doom3Factory"].createTokenizer();
        // 再用IDoom3Tokenizer接口的createToken方法创建一直被重用的IDoom3Token接口
        let token = tokenizer.createToken();
        // 设置IDoom3Tokenizer解析器要解析的字符串数据
        tokenizer.setSource(source);
        // 到目前位置，我们已经设置好要解析的数据了，接下来就要进入循环解析流程了
        // 1、读取PROC文件的版本号字符串
        this._readMapVersion(tokenizer, token);
        // 2、只要getNextToken返回true，就一直循环
        while (tokenizer.getNextToken(token)) {
            // 如果碰到关键字"model"
            if (token.isString("model") === true) {
                // 则调用_readArea方法解析房间渲染数据
                this._readArea(tokenizer, token);
            } // 如果碰到interAreaPortals关键字
            else if (token.isString("interAreaPortals") === true) {
                // 则调用_readPortals方法解析门廊数据
                this._readPortals(tokenizer, token);
            } // 如果碰到nodels关键字
            else if (token.isString("nodes") === true) {
                // 则调用_readNodes方法解析BSP Node数据
                this._readNodes(tokenizer, token);
            }
        }
    }
    makeSurfaceVerticesTo(areaId, surfId, arr) {
        let area = this.areas[areaId];
        let surf = area.surfaces[surfId];
        for (let i = 0; i < surf.vertices.length; i++) {
            let v = surf.vertices[i];
            arr.push(v.pos.x);
            arr.push(v.pos.y);
            arr.push(v.pos.z);
            arr.push(v.st.x);
            arr.push(v.st.y);
        }
    }
    makeSurfaceIndicesTo(areaId, surfId, arr) {
        let area = this.areas[areaId];
        let surf = area.surfaces[surfId];
        for (let i = 0; i < surf.indices.length; i++) {
            let idx = surf.indices[i];
            arr.push(idx);
        }
    }
    makeAreaStaticMeshData(areaId, verts, indices) {
        let area = this.areas[areaId];
        for (let j = 0; j < area.surfaces.length; j++) {
            this.makeSurfaceVerticesTo(areaId, j, verts);
            this.makeSurfaceIndicesTo(areaId, j, indices);
        }
    }
    makeSceneStaticMeshData(verts, indices) {
        for (let i = 0; i < this.areas.length; i++) {
            for (let j = 0; j < this.areas[i].surfaces.length; j++) {
                this.makeSurfaceVerticesTo(i, j, verts);
                this.makeSurfaceIndicesTo(i, j, indices);
            }
        }
    }
    makeAllSurfVertsPosTo(arr) {
        for (let i = 0; i < this.areas.length; i++) {
            let area = this.areas[i];
            for (let j = 0; j < area.surfaces.length; j++) {
                let surf = area.surfaces[j];
                for (let k = 0; k < surf.vertices.length; k++) {
                    let v = surf.vertices[k];
                    // 使用复制，而不是引用
                    arr.push(v.pos.copy());
                }
            }
        }
    }
    _readMapVersion(parser, token) {
        parser.getNextToken(token);
        let str = token.getString();
        if (str.indexOf("mapProcFile") < 0) {
            throw new Error("目前仅支持Doom3格式地图");
        }
        str = str.substring(11);
        this.version = parseInt(str);
    }
    _readSurfaces(parser, token) {
        let surf = new Doom3Surface(); // 分配Doom3Surface对象的内存
        let ptCount = 0; // 顶点的数量
        let idxCount = 0; // 索引的数量
        parser.getNextToken(token); // 跳过 {
        // 获取材质名称
        parser.getNextToken(token);
        surf.material = token.getString();
        // 获取顶点数量
        parser.getNextToken(token);
        ptCount = token.getInt(); // 顶点数量
        // 获取索引数量
        parser.getNextToken(token);
        idxCount = token.getInt(); // 索引数量
        // 遍历生成所有Doom3Vertex对象
        for (let i = 0; i < ptCount; i++) {
            let p = new Doom3Vertex(); // 分配内存
            // 每个顶点是通过()来表示的，因此开头要跳过左括号(，顶点解析结束后要跳过右括号)
            parser.getNextToken(token); // 跳过  ( 
            // 3个float,表示顶点坐标，并将doom3坐标系转换为WebGL坐标系
            parser.getNextToken(token);
            p.pos.x = token.getFloat();
            parser.getNextToken(token);
            p.pos.y = token.getFloat();
            parser.getNextToken(token);
            p.pos.z = token.getFloat();
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].convertVec3IDCoord2GLCoord(p.pos); // id顶点坐标系转换成WebGL顶点坐标系
            // 2个float，表示纹理坐标，并将Doom3纹理坐标系转换为WebGL纹理坐标系
            parser.getNextToken(token);
            p.st.x = token.getFloat();
            parser.getNextToken(token);
            p.st.y = token.getFloat();
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].convertVec2IDCoord2GLCoord(p.st); // id纹理坐标系转换成WebGL纹理坐标系
            // 3个float，表示法向量
            parser.getNextToken(token);
            p.normal.x = token.getFloat();
            parser.getNextToken(token);
            p.normal.y = token.getFloat();
            parser.getNextToken(token);
            p.normal.z = token.getFloat();
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].convertVec3IDCoord2GLCoord(p.normal); // id顶点坐标系转换成WebGL顶点坐标系
            // 将生成的Doom3Vertex添加到表面的vertices数组中去
            surf.vertices.push(p);
            // 计算当前表面的aabb包围体
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].boundBoxAddPoint(surf.vertices[i].pos, surf.mins, surf.maxs);
            parser.getNextToken(token); //跳过右括号
        }
        // 到此处，说明顶点全部解析完成，接下来解析索引数据
        // 注意下面遍历是i+=3的步进，原因是要将顺时针表示的索引转换为逆时针表示
        for (let i = 0; i < idxCount; i += 3) {
            // 连续读取i,i+1和i+2的三个索引
            parser.getNextToken(token);
            let a = token.getInt();
            parser.getNextToken(token);
            let b = token.getInt();
            parser.getNextToken(token);
            let c = token.getInt();
            // Doom3中，索引是顺时针的，webgl中是逆时针的，这是一个有用的技巧
            // 将三个索引加入到表面的indices数组中去，此时都是逆时针方向存储的
            surf.indices.push(c);
            surf.indices.push(b);
            surf.indices.push(a);
            // 这也是为什么要i+=3
        }
        parser.getNextToken(token); //跳过右大括号
        console.log("surface mins = " + JSON.stringify(surf.mins));
        console.log("surface maxs = " + JSON.stringify(surf.maxs));
        return surf;
    }
    // 读取一个area对象
    _readArea(parser, token) {
        let area = new Doom3Area(); // 分配Doom3Area对象内存
        let surfCount = 0;
        parser.getNextToken(token); // 跳过左花括号 {
        parser.getNextToken(token); // 获得name的token，是字符串类型
        area.name = token.getString(); // 获得model的name,例如"area0"
        parser.getNextToken(token); // 获得表面数量的token，该token类型为整数类型
        surfCount = token.getInt(); // 因此调用getInt获得表面数量
        // 知道了当前area有多个surface,就开始遍历得到所有的Doom3Surface对象
        for (let i = 0; i < surfCount; i++) {
            // 调用_readSurface方法，生成Doom3Surface对象
            let surf = this._readSurfaces(parser, token);
            area.surfaces.push(surf); // 将生成的Doom3Surface存储到surfaces数组中去
            // 计算area的绑定盒
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].boundBoxAddPoint(surf.mins, area.mins, area.maxs);
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].boundBoxAddPoint(surf.maxs, area.mins, area.maxs);
            console.log("area mins = ", JSON.stringify(area.mins));
            console.log("area maxs = ", JSON.stringify(area.maxs));
        }
        // 到这里，完成了所有表面的数据解析
        parser.getNextToken(token); // 跳过 }
        // 到这里，说明model全部结束
        // 构造场景级的绑定盒
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].boundBoxAddPoint(area.mins, this.mins, this.maxs);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].boundBoxAddPoint(area.maxs, this.mins, this.maxs);
        // 将当前解析完成的model加入到areas数组中去
        this.areas.push(area);
    }
    _readNodes(parser, token) {
        let nodeCount = 0;
        parser.getNextToken(token); // 跳过 {
        parser.getNextToken(token); // 获取节点的数量
        nodeCount = token.getInt();
        // 遍历所有Bsp节点
        for (let i = 0; i < nodeCount; i++) {
            let node = new Doom3BspNode();
            parser.getNextToken(token); // 跳过  ( 
            // 读取plane.x
            parser.getNextToken(token);
            node.plane.x = token.getFloat();
            // 读取plane.y
            parser.getNextToken(token);
            node.plane.y = token.getFloat();
            // 读取plane.z
            parser.getNextToken(token);
            node.plane.z = token.getFloat();
            // 读取plane.w
            parser.getNextToken(token);
            node.plane.w = token.getFloat();
            parser.getNextToken(token); // 跳过  ) 
            // front area index
            parser.getNextToken(token);
            node.front = token.getInt();
            // back area index
            parser.getNextToken(token);
            node.back = token.getInt();
            this.nodes.push(node);
        }
        parser.getNextToken(token); // 跳过 }
    }
    _readPortals(parser, token) {
        let portalCount = 0;
        let ptCount = 0;
        let area0 = -1;
        let area1 = -1;
        parser.getNextToken(token); // 跳过 {
        parser.getNextToken(token); // 跳过areaCount
        // 读取portal门廊数量
        parser.getNextToken(token);
        portalCount = token.getInt(); // 读取portal数量
        // 遍历所有的门廊
        for (let i = 0; i < portalCount; i++) {
            let portal = new Doom3Portal();
            parser.getNextToken(token);
            ptCount = token.getInt(); // 当前portal的顶点数量
            parser.getNextToken(token);
            area0 = token.getInt(); // 当前portal0的正面area索引号
            parser.getNextToken(token);
            area1 = token.getInt(); // 当前portal0的反面的area索引号
            // 设置portal正反面的房间号索引
            portal.areas[0] = area0;
            portal.areas[1] = area1;
            // portal的顶点坐标
            for (let j = 0; j < ptCount; j++) {
                let pt = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
                parser.getNextToken(token); // 跳过  ( 
                // x
                parser.getNextToken(token);
                pt.x = token.getFloat();
                // y
                parser.getNextToken(token);
                pt.y = token.getFloat();
                // z
                parser.getNextToken(token);
                pt.z = token.getFloat();
                parser.getNextToken(token); // 跳过  ) 
                // 将Doom3顶点坐标系转换成WebGL坐标系
                _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].convertVec3IDCoord2GLCoord(pt);
                portal.points.push(pt); // 添加到portal的points数组中去
            }
            this.portals.push(portal); // 将poral添加到Doom3ProcParser的portals数组中去
        }
    }
}


/***/ }),

/***/ "./src/lib/Doom3ProcScene.ts":
/*!***********************************!*\
  !*** ./src/lib/Doom3ProcScene.ts ***!
  \***********************************/
/*! exports provided: Doom3ProcScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doom3ProcScene", function() { return Doom3ProcScene; });
/* harmony import */ var _Doom3ProcParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doom3ProcParser */ "./src/lib/Doom3ProcParser.ts");
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl/WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");
/* harmony import */ var _DrawHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DrawHelper */ "./src/lib/DrawHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class RenderSurface {
    constructor(surf, tex, mins, maxs) {
        this.surface = surf;
        this.texture = tex;
        mins.copy(this.surface.mins); // 将Doom3Surface的mins复制到GLStaticMesh的mins属性中
        maxs.copy(this.surface.maxs); // 将Doom3Surface的maxs复制到GLStaticMesh的maxs属性中
    }
}
class Doom3ProcScene {
    constructor(gl) {
        this.renderSurfaces = [];
        this.mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["vec3"]([Infinity, Infinity, Infinity]);
        this.maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_4__["vec3"]([-Infinity, -Infinity, -Infinity]);
        this.gl = gl;
    }
    parseDoom3Map(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"].loadTextFileAsync(url);
            let parser = new _Doom3ProcParser__WEBPACK_IMPORTED_MODULE_0__["Doom3ProcParser"]();
            parser.parse(response);
            parser.mins.copy(this.mins);
            parser.maxs.copy(this.maxs);
            // 使用await
            yield this.loadTextures(parser);
            // 使用await等待所有纹理的加载完毕后才才运行下面的代码
            // 将Doom3的顶点和索引数据编译成GLStaticMesh对象
            let verts = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_3__["TypedArrayList"](Float32Array);
            let indices = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_3__["TypedArrayList"](Uint16Array);
            //最简单的方式，每个surface为一个StaticMesh
            for (let i = 0; i < parser.areas.length; i++) {
                for (let j = 0; j < parser.areas[i].surfaces.length; j++) {
                    verts.clear(); // 重用verts动态类型数组
                    indices.clear(); // 重用indices动态类型数组
                    parser.makeSurfaceVerticesTo(i, j, verts); // 将Doom3Surface对象中渲染数据转换为动态类型数组（因为GLStatic只接受动态类型数组作为输入）
                    parser.makeSurfaceIndicesTo(i, j, indices); // 将Doom3Surface对象中的索引数组转换为动态类型数组（因为GLStatic只接受动态类型数组作为输入）
                    // 根据名称查找当前GLTextureCache是否存在该纹理，此时await this.loadTextures( parser )已经载入所有纹理，但是可能存在的情况是服务器上的确没有要加载的纹理
                    let tex = _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__["GLTextureCache"].instance.getMaybe(parser.areas[i].surfaces[j].material);
                    if (tex === undefined) {
                        // 如果不存在，就用default纹理，创建GLStaticMesh
                        let mesh = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLStaticMesh"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_6__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_6__["GLAttribState"].TEXCOORD_BIT, verts.slice(), indices.slice());
                        // 然后创建RenderSurface
                        let surf = new RenderSurface(mesh, _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__["GLTextureCache"].instance.getMust("default"), parser.areas[i].surfaces[j].mins, parser.areas[i].surfaces[j].maxs);
                        // 将RenderSurface加入到渲染列表中去
                        this.renderSurfaces.push(surf);
                    }
                    else {
                        // 创建GLStaticMesh
                        let mesh = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_1__["GLStaticMesh"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_6__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_6__["GLAttribState"].TEXCOORD_BIT, verts.slice(), indices.slice());
                        // 然后创建RenderSurface
                        let surf = new RenderSurface(mesh, tex, parser.areas[i].surfaces[j].mins, parser.areas[i].surfaces[j].maxs);
                        // 将RenderSurface加入到渲染列表中去
                        this.renderSurfaces.push(surf);
                    }
                }
            }
        });
    }
    loadTextures(parser) {
        return __awaiter(this, void 0, void 0, function* () {
            // 封装一个Promise对象
            return new Promise((resolve, reject) => {
                // 创建字典对象
                let names = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_9__["Dictionary"]();
                let _promises = [];
                // 遍历所有Doom3Area对象
                for (let i = 0; i < parser.areas.length; i++) {
                    // 遍历当前的Doom3Area对象中的所有Doom3Surface对象
                    for (let j = 0; j < parser.areas[i].surfaces.length; j++) {
                        let surf = parser.areas[i].surfaces[j];
                        // 查看names字典，该字典保存所有已经添加的材质名称，目的是防止重复加载纹理
                        if (names.contains(surf.material) === false) {
                            // 如果不存在名字，就添加该名字
                            names.insert(surf.material, surf.material);
                            // 将Promise加入到_promises数组中
                            _promises.push(_common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"].loadImageAsyncSafe(surf.material + ".png", surf.material));
                        }
                    }
                }
                //console.log(names.Keys);
                // 添加完所有请求的Promise对象后，调用all静态方法
                Promise.all(_promises).then((images) => {
                    console.log(images); // 加载完毕后，输出所有ImaeInfo对象，用于debug
                    // 遍历ImageInfo对象，加载图像数据，生成纹理对象
                    for (let i = 0; i < images.length; i++) {
                        let img = images[i];
                        if (img !== null) {
                            // 创建GLTexture对象
                            let tex = new _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_8__["GLTexture"](this.gl, img.name);
                            tex.upload(img.image); // 加载图像数据
                            _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__["GLTextureCache"].instance.set(img.name, tex); // 将成功生成的GLTexture对象存储到GLTextureCache容器中
                        }
                    }
                    resolve(); // 全部完成后，调用resolve回调，表示完成回调
                });
            });
        });
    }
    draw(camera, program, builder = null) {
        program.bind(); //绑定纹理着色器
        program.setMatrix4(_webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].MVPMatrix, camera.viewProjectionMatrix); // 设置当前的mvp矩阵
        // 遍历所有RenderSurface对象
        for (let i = 0; i < this.renderSurfaces.length; i++) {
            let surf = this.renderSurfaces[i];
            // 增加如下代码用来判断当前的RenderSurface是否在视截体内
            if (camera.frustum.isBoundBoxVisible(surf.surface.mins, surf.surface.maxs) === false) {
                continue; // 不可见，就不要绘制了
            }
            surf.texture.bind(); // 绑定当前渲染表面的纹理对象
            program.loadSampler(); // 载入纹理Sampler
            surf.surface.draw(); // 调用GLStaticMesh的draw方法
            surf.texture.unbind(); // 解绑当前渲染表面的纹理，恢复WebGL的渲染状态
        }
        program.unbind(); // 渲染完毕后，解绑纹理着色器
    }
    drawBoundBox(builder, camera, program) {
        program.bind(); //绑定纹理着色器
        for (let i = 0; i < this.renderSurfaces.length; i++) {
            let surf = this.renderSurfaces[i];
            // 增加如下代码用来判断当前的RenderSurface是否在视截体内
            if (camera.frustum.isBoundBoxVisible(surf.surface.mins, surf.surface.maxs) === false) {
                continue; // 不可见，就不要绘制了
            }
            _DrawHelper__WEBPACK_IMPORTED_MODULE_10__["DrawHelper"].drawBoundBox(builder, camera.viewProjectionMatrix, surf.surface.mins, surf.surface.maxs);
        }
        program.unbind();
    }
}


/***/ }),

/***/ "./src/lib/DrawHelper.ts":
/*!*******************************!*\
  !*** ./src/lib/DrawHelper.ts ***!
  \*******************************/
/*! exports provided: CoordSystem, DrawHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordSystem", function() { return CoordSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawHelper", function() { return DrawHelper; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");


class CoordSystem {
    constructor(viewport, pos = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero, axis = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].up, angle = 0, isDrawAxis = false, isD3D = false) {
        this.viewport = []; // 当前坐标系被绘制在哪个视口中
        this.viewport = viewport;
        this.angle = angle;
        this.axis = axis;
        this.pos = pos;
        this.isDrawAxis = isDrawAxis;
        this.isD3D = isD3D;
    }
}
class DrawHelper {
    static getCirclePointsOnXYPlane(pts, radius, segment = 32) {
        pts.clear();
        let step = Math.PI / segment;
        let ang = 0;
        for (let i = 0; i <= segment; i++) {
            ang = i * step;
            pts.push(Math.cos(ang));
            pts.push(Math.sin(ang));
            pts.push(0.0);
        }
    }
    static drawFullCoordSystem(builder, mat, len = 1, rotateAxis = null) {
        builder.gl.lineWidth(5); // 用5个像素大小的直径绘制线段，但目前仅Safari浏览器实现
        builder.gl.disable(builder.gl.DEPTH_TEST); // 关闭帧缓存深度测试
        builder.begin(builder.gl.LINES);
        // 正x轴
        {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(len, 0, 0);
        }
        // 负x轴
        {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(-len, 0, 0);
        }
        // 正y轴
        {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, len, 0.0);
        }
        // 负y轴
        {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, -len, 0.0);
        }
        // 正z轴
        {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, len);
        }
        // 负z轴
        {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, -len);
        }
        if (rotateAxis !== null) {
            // 如果要绘制旋转轴，则绘制出来
            let scale = rotateAxis.scale(len);
            builder.color(0.0, 0.0, 0.0).vertex(0, 0, 0);
            builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, scale.z);
        }
        builder.end(mat); // 将渲染数据提交给GPU进行渲染
        builder.gl.lineWidth(1); // 恢复线宽为1个像素
        builder.gl.enable(builder.gl.DEPTH_TEST); // 恢复开始帧缓存深度测试
    }
    static drawCoordSystem(builder, mat, hitAxis, len = 5, rotateAxis = null, isLeftHandness = false) {
        builder.gl.lineWidth(5);
        builder.gl.disable(builder.gl.DEPTH_TEST);
        builder.begin(builder.gl.LINES);
        if (hitAxis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].XAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(len, 0, 0);
        }
        else {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(len, 0, 0);
        }
        if (hitAxis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].YAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, len, 0);
        }
        else {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, len, 0.0);
        }
        if (hitAxis === _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["EAxisType"].ZAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            if (isLeftHandness === true) {
                builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, 0, -len);
            }
            else {
                builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, 0, len);
            }
        }
        else {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            if (isLeftHandness === true) {
                builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, -len);
            }
            else {
                builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, len);
            }
        }
        if (rotateAxis !== null) {
            let scale = rotateAxis.scale(len);
            builder.color(0.0, 0.0, 0).vertex(0, 0, 0);
            if (isLeftHandness === true) {
                builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, -scale.z);
            }
            else {
                builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, scale.z);
            }
        }
        builder.end(mat);
        builder.gl.lineWidth(1);
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
    /*
        /3--------/7  |
        / |       /   |
        /  |      /   |
        1---------5   |
        |  /2- - -|- -6
        | /       |  /
        |/        | /
        0---------4/
    */
    // 根据mins点（上图中的顶点2，左下后）和maxs（上图中的顶点5，右上前）点的坐标，使用参数指定的颜色绘制线框绑定盒，它是一个立方体
    // GLMeshBuilder的begin / end被调用了三次
    static drawBoundBox(builder, mat, mins, maxs, color = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"].red) {
        builder.gl.disable(builder.gl.DEPTH_TEST);
        // 使用LINE_LOOP绘制底面，注意顶点顺序，逆时针方向，根据右手螺旋定则可知，法线朝外
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, mins.z); // 2  - - -
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, maxs.z); // 0  - - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, maxs.z); // 4  + - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, mins.z); // 6  + - -
            builder.end(mat);
        }
        // 使用LINE_LOOP绘制顶面，注意顶点顺序，逆时针方向，根据右手螺旋定则可知，法线朝外
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, mins.z); // 3  - + -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, mins.z); // 7  + + -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, maxs.z); // 5  + + +
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, maxs.z); // 1  - + +
            builder.end(mat);
        }
        // 使用LINES绘制
        builder.begin(builder.gl.LINES); // 使用的是LINES图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, mins.z); // 2  - - -
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, mins.z); // 3  - + -
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, maxs.z); // 0  - - +
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, maxs.z); // 1  - + +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, maxs.z); // 4  + - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, maxs.z); // 5  + + +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, mins.z); // 6  + - -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, mins.z); // 7  + + -
            builder.end(mat);
        }
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
    static drawWireFrameCubeBox(builder, mat, halfLen = 0.2, color = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"].red) {
        let mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-halfLen, -halfLen, -halfLen]);
        let maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([halfLen, halfLen, halfLen]);
        DrawHelper.drawBoundBox(builder, mat, mins, maxs, color);
    }
    /*
       /3--------/7  |
       / |       /   |
       /  |      /   |
       1---------5   |
       |  /2- - -|- -6
       | /       |  /
       |/        | /
       0---------4/
   */
    static drawTextureCubeBox(builder, mat, halfLen = 0.2, tc = [
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
    ]) {
        // 前面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[0], tc[1]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[2], tc[3]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.texcoord(tc[4], tc[5]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.texcoord(tc[6], tc[7]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.end(mat);
        // 右面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[8], tc[9]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.texcoord(tc[10], tc[11]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[12], tc[13]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.texcoord(tc[14], tc[15]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.end(mat);
        // 后面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[16], tc[17]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[18], tc[19]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[20], tc[21]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.texcoord(tc[22], tc[23]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.end(mat);
        // 左面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[24], tc[25]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[26], tc[27]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[28], tc[29]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.texcoord(tc[30], tc[31]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.end(mat);
        // 上面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[32], tc[33]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.texcoord(tc[34], tc[35]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.texcoord(tc[36], tc[37]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.texcoord(tc[38], tc[39]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.end(mat);
        // 下面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[40], tc[41]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[42], tc[43]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[44], tc[45]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[46], tc[47]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.end(mat);
    }
    // 其中参数pts是Frustum.points返回的包含8个顶点的数组
    static drawWireFrameFrustum(builder, mat, pts, color = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"].red) {
        builder.gl.disable(builder.gl.DEPTH_TEST);
        // 使用LINE_LOOP绘制近平面的四边形
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[0].x, pts[0].y, pts[0].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[1].x, pts[1].y, pts[1].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[2].x, pts[2].y, pts[2].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[3].x, pts[3].y, pts[3].z); // 
            builder.end(mat);
        }
        // 使用LINE_LOOP绘制远平面的四边形
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[4].x, pts[4].y, pts[4].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[5].x, pts[5].y, pts[5].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[6].x, pts[6].y, pts[6].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[7].x, pts[7].y, pts[7].z); // 
            builder.end(mat);
        }
        // 使用LINES绘制绘制近平面与远平面的四条边
        builder.begin(builder.gl.LINES); // 使用的是LINES图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[0].x, pts[0].y, pts[0].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[4].x, pts[4].y, pts[4].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[1].x, pts[1].y, pts[1].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[5].x, pts[5].y, pts[5].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[2].x, pts[2].y, pts[2].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[6].x, pts[6].y, pts[6].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[3].x, pts[3].y, pts[3].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[7].x, pts[7].y, pts[7].z); // 
            builder.end(mat);
        }
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
}
DrawHelper.defaultHitCollor = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]([1, 1, 0]);


/***/ }),

/***/ "./src/lib/Frustum.ts":
/*!****************************!*\
  !*** ./src/lib/Frustum.ts ***!
  \****************************/
/*! exports provided: Frustum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frustum", function() { return Frustum; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");


class Frustum {
    constructor(orgin = null, points8 = null) {
        //预先内存分配8个点
        if (orgin !== null) {
            this._origin = orgin;
        }
        else {
            this._origin = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        }
        if (points8 !== null && points8.length === 8) {
            this._points = points8;
        }
        else {
            this._points = new Array(8);
            for (let i = 0; i < this._points.length; i++) {
                this._points[i] = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
            }
        }
        this._planes = new Array(6);
        for (let i = 0; i < this._planes.length; i++) {
            this._planes[i] = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]();
        }
    }
    // 由代码可知，Frustum中的origin,points和planes都是在世界坐标系中的表示
    buildFromCamera(camera) {
        let left = camera.left * camera.far / camera.near;
        let right = camera.right * camera.far / camera.near;
        let bottom = camera.bottom * camera.far / camera.near;
        let top = camera.top * camera.far / camera.near;
        //计算出近平面4个点
        this.points[0].x = left;
        this.points[0].y = bottom;
        this.points[0].z = -camera.near;
        this.points[1].x = right;
        this.points[1].y = bottom;
        this.points[1].z = -camera.near;
        this.points[2].x = right;
        this.points[2].y = top;
        this.points[2].z = -camera.near;
        this.points[3].x = left;
        this.points[3].y = top;
        this.points[3].z = -camera.near;
        //计算出远平面4个点
        this.points[4].x = left;
        this.points[4].y = bottom;
        this.points[4].z = -camera.far;
        this.points[5].x = right;
        this.points[5].y = bottom;
        this.points[5].z = -camera.far;
        this.points[6].x = right;
        this.points[6].y = top;
        this.points[6].z = -camera.far;
        this.points[7].x = left;
        this.points[7].y = top;
        this.points[7].z = -camera.far;
        //记住，此时的摄像机和8个cornor是在view坐标系中表示
        //将摄像机的原点和8个cornor点变换到世界坐标系
        this._origin.x = 0;
        this._origin.y = 0;
        this._origin.z = 0;
        // 摄像机的原点在view坐标系中是[ 0 , 0 , 0 ],通过invViewMatrix * _origin，得到了_origin在世界坐标系的表示
        this._origin = camera.invViewMatrix.multiplyVec3(this.origin);
        // 将view坐标系中表示的8个顶点也变换到世界坐标系中
        for (let i = 0; i < this._points.length; i++) {
            this._points[i] = camera.invViewMatrix.multiplyVec3(this.points[i]);
        }
        //构建世界坐标系表示的6个平面，法线朝内
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._origin, this._points[0], this._points[3], this._planes[0]);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._origin, this._points[2], this._points[1], this._planes[1]);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._origin, this._points[3], this._points[2], this._planes[2]);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._origin, this._points[1], this._points[0], this._planes[3]);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._points[0], this._points[2], this._points[1], this._planes[4]);
        _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeFromPoints(this._points[5], this._points[7], this._points[4], this._planes[5]);
        // 将6个平面单位化
        for (let i = 0; i < this._planes.length; i++) {
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeNormalize(this._planes[i]);
        }
    }
    isSphereVisible(center, radius) {
        radius = -radius;
        for (let i = 0; i < this._planes.length; i++) {
            if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeDistanceFromPoint(this._planes[i], center) < radius) {
                return false;
            }
        }
        return true;
    }
    isBoundBoxVisible(mins, maxs) {
        for (let i = 0; i < this._planes.length; i++) {
            let current = this._planes[i];
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].v0.x = (current.x > 0.0) ? maxs.x : mins.x;
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].v0.y = (current.y > 0.0) ? maxs.y : mins.y;
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].v0.z = (current.z > 0.0) ? maxs.z : mins.z;
            if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeDistanceFromPoint(current, _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].v0) < 0.0) {
                return false;
            }
        }
        return true;
    }
    isTriangleVisible(a, b, c) {
        for (let i = 0; i < this._planes.length; i++) {
            let current = this._planes[i];
            if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeDistanceFromPoint(current, a) >= 0.0) {
                continue;
            }
            if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeDistanceFromPoint(current, b) >= 0.0) {
                continue;
            }
            if (_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].planeDistanceFromPoint(current, c) >= 0.0) {
                continue;
            }
            return false;
        }
        return true;
    }
    get origin() {
        return this._origin;
    }
    get points() {
        return this._points;
    }
    get planes() {
        return this._planes;
    }
}


/***/ }),

/***/ "./src/lib/MD5Anim.ts":
/*!****************************!*\
  !*** ./src/lib/MD5Anim.ts ***!
  \****************************/
/*! exports provided: EAnimatedComponent, MD5AnimJoint, MD5Frame, Pose, Skeleton, MD5Anim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnimatedComponent", function() { return EAnimatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5AnimJoint", function() { return MD5AnimJoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Frame", function() { return MD5Frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pose", function() { return Pose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return Skeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Anim", function() { return MD5Anim; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/Tokenizer */ "./src/common/utils/Tokenizer.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");



// MD5 Anim文件格式
var EAnimatedComponent;
(function (EAnimatedComponent) {
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_TX"] = 1] = "COMPONENT_BIT_TX";
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_TY"] = 2] = "COMPONENT_BIT_TY";
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_TZ"] = 4] = "COMPONENT_BIT_TZ";
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_QX"] = 8] = "COMPONENT_BIT_QX";
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_QY"] = 16] = "COMPONENT_BIT_QY";
    EAnimatedComponent[EAnimatedComponent["COMPONENT_BIT_QZ"] = 32] = "COMPONENT_BIT_QZ"; // & = true 表示pos.z有改变
})(EAnimatedComponent || (EAnimatedComponent = {}));
;
class MD5AnimJoint {
    constructor() {
        this.name = "";
        this.parentId = -1;
        this.componentBits = 0;
        this.componentOffset = 0;
        this.baseOriginInParentSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.baseOrientationInParentSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["quat"]();
    }
}
class MD5Frame {
    constructor() {
        this.min = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.max = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.components = [];
    }
}
;
class Pose {
    constructor() {
        this.parentId = -1;
        this.originInParentSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.orientationInParentSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["quat"]();
        this.matrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
    }
}
class Skeleton {
    constructor() {
        this.poses = [];
        this.minInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.maxInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
    }
}
class MD5Anim {
    constructor() {
        this.animJoints = [];
        this.frames = [];
        this.frameRate = 25;
        this.skeleton = new Skeleton();
    }
    _readHierarchy(parser, token, numJoints) {
        parser.getNextToken(token); // 读取hierarchy 关键字
        parser.getNextToken(token); // 读取左大括号 {
        for (let i = 0; i < numJoints; i++) {
            let channel = new MD5AnimJoint();
            parser.getNextToken(token);
            channel.name = token.getString();
            parser.getNextToken(token);
            channel.parentId = token.getInt();
            parser.getNextToken(token);
            channel.componentBits = token.getInt();
            parser.getNextToken(token);
            channel.componentOffset = token.getInt();
            this.animJoints.push(channel);
            this.skeleton.poses.push(new Pose());
        }
        parser.getNextToken(token); // }
    }
    _readBounds(parser, token, numFrames) {
        parser.getNextToken(token); // bounds
        parser.getNextToken(token); // {
        for (let i = 0; i < numFrames; i++) {
            let frame = new MD5Frame();
            // ( min.x min.y min.z ) 
            parser.getNextToken(token); // (		
            parser.getNextToken(token);
            frame.min.x = token.getFloat();
            parser.getNextToken(token);
            frame.min.y = token.getFloat();
            parser.getNextToken(token);
            frame.min.z = token.getFloat();
            parser.getNextToken(token); // )
            // ( max.x max.y max.z )
            parser.getNextToken(token); // (		
            parser.getNextToken(token);
            frame.max.x = token.getFloat();
            parser.getNextToken(token);
            frame.max.y = token.getFloat();
            parser.getNextToken(token);
            frame.max.z = token.getFloat();
            this.frames.push(frame);
            parser.getNextToken(token); // )		
        }
        parser.getNextToken(token); // }
    }
    _readBaseFrames(parser, token, numJoints) {
        parser.getNextToken(token); // baseFrame
        parser.getNextToken(token); // {
        for (let i = 0; i < numJoints; i++) {
            parser.getNextToken(token); // (		
            parser.getNextToken(token);
            this.animJoints[i].baseOriginInParentSpace.x = token.getFloat();
            parser.getNextToken(token);
            this.animJoints[i].baseOriginInParentSpace.y = token.getFloat();
            parser.getNextToken(token);
            this.animJoints[i].baseOriginInParentSpace.z = token.getFloat();
            parser.getNextToken(token); // )		
            parser.getNextToken(token); // (		
            parser.getNextToken(token);
            this.animJoints[i].baseOrientationInParentSpace.x = token.getFloat();
            parser.getNextToken(token);
            this.animJoints[i].baseOrientationInParentSpace.y = token.getFloat();
            parser.getNextToken(token);
            this.animJoints[i].baseOrientationInParentSpace.z = token.getFloat();
            this.animJoints[i].baseOrientationInParentSpace.calculateW();
            parser.getNextToken(token); // )
        }
        parser.getNextToken(token); // }
    }
    _readFrames(parser, token, numFrames, numComponents) {
        for (let i = 0; i < numFrames; i++) {
            parser.getNextToken(token); // frame
            parser.getNextToken(token); // frameId
            parser.getNextToken(token); // {
            for (let j = 0; j < numComponents; j++) {
                parser.getNextToken(token);
                // 添加到MD5Frame的components数组中去！！！！
                this.frames[i].components[j] = token.getFloat();
            }
            parser.getNextToken(token); // }
        }
    }
    parse(source) {
        let tokenizer = _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["Doom3Factory"].createTokenizer();
        let token = tokenizer.createToken();
        tokenizer.setSource(source);
        tokenizer.getNextToken(token); // Version 
        tokenizer.getNextToken(token);
        tokenizer.getNextToken(token); // Commandline 
        tokenizer.getNextToken(token);
        tokenizer.getNextToken(token); // numFrames
        tokenizer.getNextToken(token);
        let numFrames = token.getInt();
        tokenizer.getNextToken(token); // numJoints
        tokenizer.getNextToken(token);
        let numJoints = token.getInt();
        tokenizer.getNextToken(token); // frameRate
        tokenizer.getNextToken(token);
        this.frameRate = token.getInt();
        tokenizer.getNextToken(token); // numAnimatedComponents
        tokenizer.getNextToken(token);
        let numAnimatedComponents = token.getInt();
        // 接下来就是各个关键区块内容的解析
        this._readHierarchy(tokenizer, token, numJoints);
        this._readBounds(tokenizer, token, numFrames);
        this._readBaseFrames(tokenizer, token, numJoints);
        this._readFrames(tokenizer, token, numFrames, numAnimatedComponents);
    }
    // 参数frameNum指明要构建哪一帧的姿态骨架
    buildLocalSkeleton(frameNum) {
        let frame = this.frames[frameNum];
        // 构建当前帧的骨架姿态
        // 遍历当前帧中的所有关节
        for (let i = 0; i < this.animJoints.length; i++) {
            let applied = 0; //核心的变量
            let joint = this.animJoints[i]; // 获取当前的关节
            let pose = this.skeleton.poses[i]; // 获取当前要填充的pose
            // 将joint中相关数据复制到pose对应的变量中
            pose.parentId = joint.parentId;
            joint.baseOriginInParentSpace.copy(pose.originInParentSpace);
            joint.baseOrientationInParentSpace.copy(pose.orientationInParentSpace);
            // 根据bit值来替换姿态,注意components的寻址关系
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_TX) {
                // 替换tx
                pose.originInParentSpace.x = frame.components[joint.componentOffset + applied];
                applied++; // 加1
            }
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_TY) {
                // 替换ty
                pose.originInParentSpace.y = frame.components[joint.componentOffset + applied];
                applied++; // 加1
            }
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_TZ) {
                // 替换tz
                pose.originInParentSpace.z = frame.components[joint.componentOffset + applied];
                applied++; // 加1
            }
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_QX) {
                // 替换qx
                pose.orientationInParentSpace.x = frame.components[joint.componentOffset + applied];
                applied++;
            }
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_QY) {
                // 替换qy
                pose.orientationInParentSpace.y = frame.components[joint.componentOffset + applied];
                applied++;
            }
            if (joint.componentBits & EAnimatedComponent.COMPONENT_BIT_QZ) {
                // 替换qz
                pose.orientationInParentSpace.z = frame.components[joint.componentOffset + applied];
                applied++;
            }
            pose.orientationInParentSpace.calculateW(); // 计算quat的w值
            pose.orientationInParentSpace.normalize(); // quat的单位化
            // 将origin和orientation合成仿射矩阵mat,该矩阵是局部表示的矩阵
            // 此时pose.matrix是将local表示的顶点变换到父亲坐标系的矩阵，切记切记！！！
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].matrixFrom(pose.originInParentSpace, pose.orientationInParentSpace, pose.matrix);
        }
    }
    updateToModelSpaceSkeleton() {
        // 将pose的局部矩阵合成modelspace矩阵
        for (let i = 0; i < this.skeleton.poses.length; i++) {
            let pose = this.skeleton.poses[i];
            if (pose.parentId >= 0) {
                let parentPose = this.skeleton.poses[pose.parentId];
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].product(parentPose.matrix, pose.matrix, pose.matrix);
            }
        }
    }
}


/***/ }),

/***/ "./src/lib/MD5Mesh.ts":
/*!****************************!*\
  !*** ./src/lib/MD5Mesh.ts ***!
  \****************************/
/*! exports provided: MD5Vertex, MD5Joint, MD5Weight, MD5Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Vertex", function() { return MD5Vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Joint", function() { return MD5Joint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Weight", function() { return MD5Weight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Mesh", function() { return MD5Mesh; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");

// MD5 Mesh文件格式
// MD5模型的顶点数据结构
class MD5Vertex {
    constructor() {
        this.uv = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]();
        this.firstWeight = -1; // 初始化为-1
        this.numWeight = 0; // 初始化为0个
        this.finalPosInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.animiatedPosInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
    }
}
// MD5骨骼数据结构
class MD5Joint {
    constructor() {
        this.name = "";
        this.parentId = -1; // 初始化是索引都指向-1
        this.originInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.orientationInModelSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["quat"]();
        this.bindPoseMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this.inverseBindPoseMatrix = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
    }
}
// 骨骼动画的权重数据结构
class MD5Weight {
    constructor() {
        this.jointId = -1; // 初始化是索引都指向-1
        this.jointWeight = 0;
        this.posInJointSpace = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
    }
}
class MD5Mesh {
    constructor() {
        this.material = "";
        this.vertices = [];
        this.indices = [];
        this.weights = [];
    }
}


/***/ }),

/***/ "./src/lib/MD5SkinedMesh.ts":
/*!**********************************!*\
  !*** ./src/lib/MD5SkinedMesh.ts ***!
  \**********************************/
/*! exports provided: MD5SkinedMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5SkinedMesh", function() { return MD5SkinedMesh; });
/* harmony import */ var _MD5Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MD5Mesh */ "./src/lib/MD5Mesh.ts");
/* harmony import */ var _MD5Anim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MD5Anim */ "./src/lib/MD5Anim.ts");
/* harmony import */ var _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/Tokenizer */ "./src/common/utils/Tokenizer.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class MD5SkinedMesh {
    constructor() {
        this.joints = [];
        this.meshes = [];
        this.anims = [];
    }
    _readJoints(parser, token, numJoints) {
        parser.getNextToken(token); // 读取"joints"关键词
        parser.getNextToken(token); // 跳过 {
        for (let i = 0; i < numJoints; i++) {
            let joint = new _MD5Mesh__WEBPACK_IMPORTED_MODULE_0__["MD5Joint"]();
            parser.getNextToken(token); // joint名称
            joint.name = token.getString();
            parser.getNextToken(token); // joint的父亲id号
            joint.parentId = token.getInt();
            // joint的位置
            parser.getNextToken(token); // (
            parser.getNextToken(token);
            joint.originInModelSpace.x = token.getFloat();
            parser.getNextToken(token);
            joint.originInModelSpace.y = token.getFloat();
            parser.getNextToken(token);
            joint.originInModelSpace.z = token.getFloat();
            parser.getNextToken(token); // )
            // joint的方向，存储了quat的x,y,z值，w需要计算出来
            parser.getNextToken(token); // (
            parser.getNextToken(token);
            joint.orientationInModelSpace.x = token.getFloat();
            parser.getNextToken(token);
            joint.orientationInModelSpace.y = token.getFloat();
            parser.getNextToken(token);
            joint.orientationInModelSpace.z = token.getFloat();
            joint.orientationInModelSpace.calculateW(); // 计算quat.w值
            // 将joint的位置和quat合成bindpose矩阵，该矩阵位于modelspace
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_4__["MathHelper"].matrixFrom(joint.originInModelSpace, joint.orientationInModelSpace, joint.bindPoseMatrix);
            // 计算bindPoseMatrix的逆矩阵
            joint.bindPoseMatrix.inverse(joint.inverseBindPoseMatrix);
            this.joints.push(joint);
            parser.getNextToken(token); // )
        }
        parser.getNextToken(token); // }
    }
    _readVertex(parser, token, vertex) {
        parser.getNextToken(token); // vert
        parser.getNextToken(token);
        token.getInt();
        parser.getNextToken(token); // (
        parser.getNextToken(token);
        vertex.uv.x = token.getFloat();
        parser.getNextToken(token);
        vertex.uv.y = 1.0 - token.getFloat(); // 纹理坐标和Quake一样，y轴需要调整一下
        parser.getNextToken(token); // )
        parser.getNextToken(token);
        vertex.firstWeight = token.getInt();
        parser.getNextToken(token);
        vertex.numWeight = token.getInt();
    }
    _readWeight(parser, token, weight) {
        parser.getNextToken(token); // weight
        parser.getNextToken(token);
        token.getInt();
        parser.getNextToken(token);
        weight.jointId = token.getInt();
        parser.getNextToken(token);
        weight.jointWeight = token.getFloat();
        parser.getNextToken(token); // (
        parser.getNextToken(token);
        weight.posInJointSpace.x = token.getFloat();
        parser.getNextToken(token);
        weight.posInJointSpace.y = token.getFloat();
        parser.getNextToken(token);
        weight.posInJointSpace.z = token.getFloat();
        parser.getNextToken(token); // )
    }
    _readTriangleTo(parser, token, triIndices) {
        let i0;
        let i1;
        let i2;
        parser.getNextToken(token); // tri
        parser.getNextToken(token);
        token.getInt();
        parser.getNextToken(token);
        i0 = token.getInt();
        parser.getNextToken(token);
        i1 = token.getInt();
        parser.getNextToken(token);
        i2 = token.getInt();
        triIndices.push(i2, i1, i0); // 和Quake3一样，需要调整索引顺序，顺时针变为逆时针
    }
    _readMeshes(parser, token, numSurfs) {
        let count;
        let surf;
        let vertex;
        let weight;
        for (let i = 0; i < numSurfs; i++) {
            surf = new _MD5Mesh__WEBPACK_IMPORTED_MODULE_0__["MD5Mesh"]();
            parser.getNextToken(token); // "mesh"
            parser.getNextToken(token); // {
            parser.getNextToken(token); // "shader" 
            parser.getNextToken(token); //
            surf.material = token.getString();
            // 顶点
            parser.getNextToken(token); // "numverts" 
            parser.getNextToken(token);
            count = token.getInt();
            for (let j = 0; j < count; j++) {
                vertex = new _MD5Mesh__WEBPACK_IMPORTED_MODULE_0__["MD5Vertex"]();
                // 调用_readVertex方法
                this._readVertex(parser, token, vertex);
                surf.vertices.push(vertex);
            }
            // 索引三角形
            parser.getNextToken(token); // "numtris" keyword
            parser.getNextToken(token);
            count = token.getInt();
            for (let j = 0; j < count; j++) {
                // 调用_readTriangleTo方法
                this._readTriangleTo(parser, token, surf.indices);
            }
            // 权重值
            parser.getNextToken(token);
            parser.getNextToken(token);
            count = token.getInt();
            for (let j = 0; j < count; j++) {
                weight = new _MD5Mesh__WEBPACK_IMPORTED_MODULE_0__["MD5Weight"]();
                // 调用_readWeight方法
                this._readWeight(parser, token, weight);
                surf.weights.push(weight);
            }
            this.meshes.push(surf);
            parser.getNextToken(token); // }
        }
    }
    parse(source) {
        // 解析前准备工作
        let tokenizer = _common_utils_Tokenizer__WEBPACK_IMPORTED_MODULE_2__["Doom3Factory"].createTokenizer(); // 创建IDoom3Tokenizer接口
        let token = tokenizer.createToken(); // 创建重用的IToken接口
        tokenizer.setSource(source); // 设置要解析的.md5mesh文件文本字符串
        // 解析1、MD5Version 10
        tokenizer.getNextToken(token); // 读取MD5Version关键字
        tokenizer.getNextToken(token); // 读取版本号
        console.log("MD5Version = ", token.getInt()); // 数据类型为int
        // 解析2、commandline "<string>"
        tokenizer.getNextToken(token); // 读取commandline关键字
        tokenizer.getNextToken(token); // 读取commandline的值
        console.log("commmandline = ", token.getString());
        // 解析3、numJoints <int>
        tokenizer.getNextToken(token); // 读取numJoints关键字
        tokenizer.getNextToken(token); // 读取numJoints的值
        let numJoints = token.getInt(); // 转换为int类型
        console.log("numJoints = ", numJoints);
        // 解析4、numMeshes <int>
        tokenizer.getNextToken(token); // 读取numMeshes关键字
        tokenizer.getNextToken(token); // 读取numMeshes的值
        let numMeshes = token.getInt();
        console.log("numMeshes = ", numMeshes);
        // 解析5、读取关节数据（骨骼）
        this._readJoints(tokenizer, token, numJoints);
        // 解析6、读取mesh蒙皮数据
        this._readMeshes(tokenizer, token, numMeshes);
        // 最后逐mesh更新顶点坐标
        for (let i = 0; i < this.meshes.length; i++) {
            this.updateMeshFinalPositions(i);
        }
    }
    loadTextures(gl) {
        return __awaiter(this, void 0, void 0, function* () {
            // 封装一个Promise对象
            return new Promise((resolve, reject) => {
                // 创建字典对象
                let names = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_5__["Dictionary"]();
                let _promises = [];
                // 遍历所有MD5 Mesh对象集合
                for (let i = 0; i < this.meshes.length; i++) {
                    let mesh = this.meshes[i];
                    // 查看names字典，该字典保存所有已经添加的材质名称，目的是防止重复加载纹理
                    if (names.contains(mesh.material) === false) {
                        // 如果不存在名字，就添加该名字
                        names.insert(mesh.material, mesh.material);
                        // 将Promise加入到_promises数组中
                        _promises.push(_common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_6__["HttpRequest"].loadImageAsyncSafe(MD5SkinedMesh.path + mesh.material + ".png", mesh.material));
                    }
                }
                //console.log(names.Keys);
                // 添加完所有请求的Promise对象后，调用all静态方法
                Promise.all(_promises).then((images) => {
                    console.log(images); // 加载完毕后，输出所有ImaeInfo对象，用于debug
                    // 遍历ImageInfo对象，加载图像数据，生成纹理对象
                    for (let i = 0; i < images.length; i++) {
                        let img = images[i];
                        if (img !== null) {
                            // 创建GLTexture对象
                            let tex = new _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_7__["GLTexture"](gl, img.name);
                            tex.upload(img.image); // 加载图像数据
                            _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__["GLTextureCache"].instance.set(img.name, tex); // 将成功生成的GLTexture对象存储到GLTextureCache容器中
                        }
                    }
                    resolve(); // 全部完成后，调用resolve回调，表示完成回调
                });
            });
        });
    }
    parseAnim(content) {
        let anim = new _MD5Anim__WEBPACK_IMPORTED_MODULE_1__["MD5Anim"]();
        anim.parse(content);
        this.anims.push(anim);
    }
    updateMeshFinalPositions(meshIdx) {
        let mesh = this.meshes[meshIdx]; // 获取参数所指向的MD5Mesh结构
        // 变量MD5Mesh中的所有顶点
        for (let j = 0; j < mesh.vertices.length; j++) {
            let vert = mesh.vertices[j]; // 获取当前的MD5Vertex对象
            // 遍历当前MD5Vertex中关联的所有权重对象
            for (let k = 0; k < vert.numWeight; k++) {
                // 注意权重对象的寻址算法！！
                let weight = mesh.weights[vert.firstWeight + k];
                // 先获得当前顶点关联的weight对象，再从weight对象的jointId获得该weight所属的关节
                // 然后再从关节中获得基于模型坐标系表示的绑定姿态矩阵（在_readJoints方法中计算出了姿态矩阵和其逆矩阵）
                let bindPose = this.joints[weight.jointId].bindPoseMatrix;
                // 将基于骨骼坐标系表示的坐标变换到模型坐标系中表示
                bindPose.multiplyVec3(weight.posInJointSpace, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0);
                // 然后再乘以权重标量
                _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0.scale(weight.jointWeight);
                // 将计算出来的向量add到finalPosInModelSpace中
                vert.finalPosInModelSpace.add(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0);
            }
        }
        // 遍历完所有的权重对象后得到最终位于模型坐标系的顶点坐标
    }
    drawSkeleton(clrBuilder, mvp) {
        clrBuilder.program.bind(); //绑定着色器
        clrBuilder.begin(clrBuilder.gl.LINES);
        for (let i = 0; i < this.joints.length - 1; i++) {
            let joint = this.joints[i];
            let joint2 = this.joints[i + 1];
            clrBuilder.color(1, 0, 0).vertex(joint.originInModelSpace.x, joint.originInModelSpace.y, joint.originInModelSpace.z);
            clrBuilder.color(1, 0, 0).vertex(joint2.originInModelSpace.x, joint2.originInModelSpace.y, joint2.originInModelSpace.z);
        }
        clrBuilder.end(mvp);
        clrBuilder.unbind();
    }
    _drawMesh(meshIdx, texBuilder, mvp) {
        let mesh = this.meshes[meshIdx];
        let verts = mesh.vertices;
        // 如果纹理名对应的纹理存在，则使用，否则就使用default纹理
        let tex = _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__["GLTextureCache"].instance.getMaybe(mesh.material);
        if (tex !== undefined) {
            texBuilder.setTexture(tex);
        }
        else {
            texBuilder.setTexture(_webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__["GLTextureCache"].instance.getMust("default"));
        }
        // 直接使用finalPosInModelSpace来绘制绑定姿态
        texBuilder.begin();
        for (let j = 0; j < mesh.indices.length; j++) {
            let vert = verts[mesh.indices[j]];
            texBuilder.texcoord(vert.uv.x, vert.uv.y).vertex(vert.finalPosInModelSpace.x, vert.finalPosInModelSpace.y, vert.finalPosInModelSpace.z);
        }
        texBuilder.end(mvp);
    }
    _drawAnimMesh(meshIdx, texBuilder, mvp) {
        let mesh = this.meshes[meshIdx];
        let verts = mesh.vertices;
        let tex = _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__["GLTextureCache"].instance.getMaybe(mesh.material);
        if (tex !== undefined) {
            texBuilder.setTexture(tex);
        }
        else {
            texBuilder.setTexture(_webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_8__["GLTextureCache"].instance.getMust("default"));
        }
        texBuilder.begin();
        for (let j = 0; j < mesh.indices.length; j++) {
            let vert = verts[mesh.indices[j]];
            texBuilder.texcoord(vert.uv.x, vert.uv.y).vertex(vert.animiatedPosInModelSpace.x, vert.animiatedPosInModelSpace.y, vert.animiatedPosInModelSpace.z);
        }
        texBuilder.end(mvp);
    }
    drawBindPose(texBuilder, mvp) {
        for (let i = 0; i < this.meshes.length; i++) {
            this._drawMesh(i, texBuilder, mvp);
        }
    }
    drawAnimPose(texBuilder, mvp) {
        for (let i = 0; i < this.meshes.length; i++) {
            this._drawAnimMesh(i, texBuilder, mvp);
        }
    }
    playAnim(idx, frameNum) {
        let anim = this.anims[idx];
        anim.buildLocalSkeleton(frameNum); // 合成pose的局部matrix
        anim.updateToModelSpaceSkeleton(); // 合成pose的Model Space matrix表示
        for (let i = 0; i < anim.skeleton.poses.length; i++) {
            let pose = anim.skeleton.poses[i];
            // 继续合成pose的matrix矩阵
            // 此时pose.matrix的矩阵表示的是将Model Space坐标系表示的MD5Vertex.finalPosInModelSpace顶点
            // 变换到MD5Mesh中的bindpose的局部空间中去，然后接着变换到当前pose的Model Space中去
            _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["mat4"].product(pose.matrix, this.joints[i].inverseBindPoseMatrix, pose.matrix);
        }
        // 遍历所有mesh
        for (let i = 0; i < this.meshes.length; i++) {
            let mesh = this.meshes[i]; // 获取当前mesh
            for (let j = 0; j < mesh.vertices.length; j++) {
                let vert = mesh.vertices[j]; // 获取当前的MD5Vertex
                vert.animiatedPosInModelSpace.reset(); // 重用该坐标
                // 遍历各个权重，合成最终的animatedPosInModelSpace的值
                for (let k = 0; k < vert.numWeight; k++) {
                    let weight = mesh.weights[vert.firstWeight + k]; // 或取MD5Vertex关联的权重对象
                    // 获取当前权重关联的pose的matrix,注意这个matrix在本方法上面的注释
                    let bindPose = anim.skeleton.poses[weight.jointId].matrix;
                    bindPose.multiplyVec3(vert.finalPosInModelSpace, _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0); // 将finalPosInModelSpace变换到Model Space
                    _common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0.scale(weight.jointWeight); // 缩放权重
                    vert.animiatedPosInModelSpace.add(_common_math_TSM__WEBPACK_IMPORTED_MODULE_3__["vec3"].v0); // 添加当前权重到animiatedPosInModelSpace中去
                }
            }
        }
    }
}
MD5SkinedMesh.path = "data/doom3/";


/***/ }),

/***/ "./src/lib/Primitives.ts":
/*!*******************************!*\
  !*** ./src/lib/Primitives.ts ***!
  \*******************************/
/*! exports provided: GeometryData, Cube, GridPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryData", function() { return GeometryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPlane", function() { return GridPlane; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");




class GeometryData {
    constructor() {
        // 输入顶点属性数据
        this.positions = [];
        this.uvs = [];
        this.normals = [];
        this.colors = [];
        this.tangents = [];
        this.indices = [];
    }
    makeStaticVAO(gl, needNormals = false, needUV = true) {
        let bits = this.getAttribBits();
        if (needNormals === false) {
            bits &= ~_webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].NORMAL_BIT;
        }
        if (needUV === false) {
            bits &= ~_webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TEXCOORD_BIT;
        }
        let stride = _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].getVertexByteStride(bits);
        let step = stride / Float32Array.BYTES_PER_ELEMENT;
        let arrayBuffer = new ArrayBuffer(stride * this.positions.length);
        let buffer = new Float32Array(arrayBuffer);
        for (let i = 0; i < this.positions.length; i++) {
            // 位置
            let j = i * step;
            let idx = 0;
            buffer[j + (idx++)] = this.positions[i].x;
            buffer[j + (idx++)] = this.positions[i].y;
            buffer[j + (idx++)] = this.positions[i].z;
            //法线(用了bits后，不能用length来判断了！！！)
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].NORMAL_BIT) {
                buffer[j + (idx++)] = this.normals[i].x;
                buffer[j + (idx++)] = this.normals[i].y;
                buffer[j + (idx++)] = this.normals[i].z;
            }
            //纹理
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TEXCOORD_BIT) {
                buffer[j + (idx++)] = this.uvs[i].x;
                buffer[j + (idx++)] = this.uvs[i].y;
            }
            //颜色
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].COLOR_BIT) {
                buffer[j + (idx++)] = this.colors[i].x;
                buffer[j + (idx++)] = this.colors[i].y;
                buffer[j + (idx++)] = this.colors[i].z;
                buffer[j + (idx++)] = this.colors[i].w;
            }
            //切线
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TANGENT_BIT) {
                buffer[j + (idx++)] = this.tangents[i].x;
                buffer[j + (idx++)] = this.tangents[i].y;
                buffer[j + (idx++)] = this.tangents[i].z;
                buffer[j + (idx++)] = this.tangents[i].w;
            }
        }
        let mesh = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_2__["GLStaticMesh"](gl, bits, buffer, this.indices.length > 0 ? new Uint16Array(this.indices) : null);
        this.buildBoundingBoxTo(mesh.mins, mesh.maxs);
        return mesh;
    }
    buildBoundingBoxTo(mins, maxs) {
        for (let i = 0; i < this.positions.length; i++) {
            _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_3__["MathHelper"].boundBoxAddPoint(this.positions[i], mins, maxs);
        }
    }
    getAttribBits() {
        if (this.positions.length === 0) {
            throw new Error("必须要有顶数据!!!");
        }
        let bits = _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].POSITION_BIT;
        if (this.uvs.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TEXCOORD_BIT;
        }
        if (this.normals.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].NORMAL_BIT;
        }
        if (this.colors.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].COLOR_BIT;
        }
        if (this.tangents.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TANGENT_BIT;
        }
        return bits;
    }
}
class Cube {
    constructor(halfWidth = 0.2, halfHeight = 0.2, halfDepth = 0.2) {
        this.halfWidth = halfWidth;
        this.halfHeight = halfHeight;
        this.halfDepth = halfDepth;
    }
    /*
            /3--------/7  |
            / |       /   |
            /  |      /   |
            1---------5   |
            |  /2- - -|- -6
            | /       |  /
            |/        | /
            0---------4/

    */
    makeGeometryDataWithTextureCooord() {
        let data = new GeometryData();
        data.positions = [
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-this.halfWidth, -this.halfHeight, this.halfDepth]),
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, -this.halfHeight, this.halfDepth]),
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, this.halfHeight, this.halfDepth]),
        ];
        data.uvs = [
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([0, 0]),
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 0]),
            new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 1]),
        ];
        return data;
    }
    makeGeometryData() {
        let data = new GeometryData();
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-this.halfWidth, -this.halfHeight, this.halfDepth])); // 0
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 0]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-this.halfWidth, this.halfHeight, this.halfDepth])); // 1
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 1]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-this.halfWidth, -this.halfHeight, -this.halfDepth])); // 2
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([0, 0]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([-this.halfWidth, this.halfHeight, -this.halfDepth])); // 3
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([0, 1]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, -this.halfHeight, this.halfDepth])); // 4
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([0, 0]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, this.halfHeight, this.halfDepth])); // 5
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([0, 1]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, -this.halfHeight, -this.halfDepth])); // 6
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 0]));
        data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([this.halfWidth, this.halfHeight, -this.halfDepth])); // 7
        data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([1, 1]));
        // 法线朝外
        data.indices.push(0, 1, 3, 0, 3, 2); // 左面
        data.indices.push(3, 7, 6, 3, 6, 2); // 后面
        data.indices.push(6, 7, 5, 6, 5, 4); // 右面
        data.indices.push(5, 1, 0, 5, 0, 4); // 前面
        data.indices.push(1, 5, 7, 1, 7, 3); // 上面
        data.indices.push(2, 6, 4, 2, 4, 0); // 下面
        return data;
    }
}
class GridPlane {
    constructor(sx = 10, sy = 10, nx = 10, ny = 10) {
        this.sx = sx;
        this.sy = sy;
        this.nx = nx;
        this.ny = ny;
    }
    makeGeometryData() {
        let data = new GeometryData();
        for (let iy = 0; iy <= this.ny; iy++) {
            for (let ix = 0; ix <= this.nx; ix++) {
                let u = ix / this.nx;
                let v = iy / this.ny;
                let x = -this.sx / 2 + u * this.sx; // starts on the left
                let y = this.sy / 2 - v * this.sy; // starts at the top
                data.positions.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([x, y, 0]));
                data.uvs.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec2"]([u, 1.0 - v]));
                data.normals.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([0, 0, 1]));
                if (iy < this.ny && ix < this.nx) {
                    {
                        data.indices.push(iy * (this.nx + 1) + ix, (iy + 1) * (this.nx + 1) + ix + 1, iy * (this.nx + 1) + ix + 1);
                        data.indices.push((iy + 1) * (this.nx + 1) + ix + 1, iy * (this.nx + 1) + ix, (iy + 1) * (this.nx + 1) + ix);
                    }
                }
            }
        }
        return data;
    }
}


/***/ }),

/***/ "./src/lib/Quake3BspParser.ts":
/*!************************************!*\
  !*** ./src/lib/Quake3BspParser.ts ***!
  \************************************/
/*! exports provided: Q3BSPTexture, EQ3BSPSurfaceType, Q3BSPSurface, Q3BSPModel, Q3BSPVertex, Q3BspParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BSPTexture", function() { return Q3BSPTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQ3BSPSurfaceType", function() { return EQ3BSPSurfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BSPSurface", function() { return Q3BSPSurface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BSPModel", function() { return Q3BSPModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BSPVertex", function() { return Q3BSPVertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3BspParser", function() { return Q3BspParser; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");


class Q3BSPLump {
    constructor(offset = 0, length = 0) {
        this.offset = offset;
        this.length = length;
    }
}
class Q3BSPHeader {
    constructor() {
        this.id = -1;
        this.version = -1;
        this.lumps = new Array(Q3BspParser.TOTALLUMPS);
    }
}
Q3BSPHeader.TOTALBYTES = 144; // 4 + 4 + 17 * 8 = 144个字节
class Q3BSPTexture {
    constructor() {
        this.name = ""; //quake bsp中name都是定长字符串，包括null（0）结尾符，共64字节
        this.flag = -1; //本Demo没用到
        this.content = -1; //本Demo没用到
    }
}
Q3BSPTexture.TOTALBYTES = 72; // 64 + 4 + 4 = 72个字节
var EQ3BSPSurfaceType;
(function (EQ3BSPSurfaceType) {
    EQ3BSPSurfaceType[EQ3BSPSurfaceType["BAD"] = 0] = "BAD";
    EQ3BSPSurfaceType[EQ3BSPSurfaceType["PLANAR"] = 1] = "PLANAR";
    EQ3BSPSurfaceType[EQ3BSPSurfaceType["PATCH"] = 2] = "PATCH";
    EQ3BSPSurfaceType[EQ3BSPSurfaceType["TRIANGLE"] = 3] = "TRIANGLE";
    EQ3BSPSurfaceType[EQ3BSPSurfaceType["BILLBOARD"] = 4] = "BILLBOARD";
})(EQ3BSPSurfaceType || (EQ3BSPSurfaceType = {}));
class Q3BSPSurface {
    constructor() {
        this.textureIdx = 0; // 4 bytes 指向textures数组中的索引
        this.effectIdx = -1; // 4 bytes 本书没有使用该数据
        this.faceType = EQ3BSPSurfaceType.BAD; // 4 bytes
        // 下面的四个变量是理解BSP场景渲染的关键，在Quake3BSPScene中详解！！！
        this.firstVertIdx = -1; // 4 bytes 索引指向vertArray中的offset顶点
        this.numVert = 0; // 4 bytes 顶点数量  通过firstVertIdx和numVert可以获得vertex数据
        this.firstIndex = -1; // 4 bytes 指向索引缓存
        this.numIndex = 0; // 4 bytes
        // 下面的数据本书没用使用
        this.lightMapIdx = 0; // 4 bytes 
        this.lightMapX = 0; // 4 bytes
        this.lightMapY = 0; // 4 bytes
        this.lightMapWidth = 0; // 4 bytes
        this.lightMapHeight = 0; // 4 bytes
        this.lightMapOrigin = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.lightMapXAxis = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.lightMapYAxis = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.lightMapZAxis = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.patchWidth = 0; // 4 bytes
        this.patchHeight = 0; // 4 bytes
    }
}
// 合计每个表面所占字节数为104
Q3BSPSurface.TOTALBYETS = 104; // （12 * 4 + 12 * 4 + 8 = 104个字节）
class Q3BSPModel {
    constructor() {
        this.mins = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.maxs = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero; // 4 * 3 = 12 bytes
        this.firstFace = -1; // 4 bytes
        this.numFaces = 0; // 4 bytes
        this.firstBrush = -1; // 4 bytes
        this.numBrushes = 0; // 4 bytes
    }
}
Q3BSPModel.TOTALBYTES = 40; // 12 + 12 + 16 = 40 bytes
class Q3BSPVertex {
    constructor() {
        // 位置坐标信息
        this.x = 0;
        this.y = 0;
        this.z = 0;
        // 贴图坐标信息
        this.u = 0;
        this.v = 0;
        // 光照贴图坐标信息，本书不使用
        this.lu = 0;
        this.lv = 0;
        // 法线坐标信息，本书不使用
        this.nx = 0;
        this.ny = 0;
        this.nz = 0;
        // rgba颜色信息，本书也不使用
        this.r = 0; // byte
        this.g = 0;
        this.b = 0;
        this.a = 0;
    }
}
// [x,y,z,u,v,lu,lv,nx,ny,nz,r,g,b,a]  = 10 float * 4 + rgba（4） = 44 bytes
Q3BSPVertex.VERTTOTALBYTES = 44;
class Q3BspParser {
    constructor() {
        this.vertices = [];
        this.indices = [];
        this.mapSurfaces = [];
        this.meshSurfaces = [];
        this.textures = [];
        this.entities = "";
    }
    // 载入各个lump的偏移地址
    _loadHeader(view) {
        let header = new Q3BSPHeader();
        let offset = 0;
        // BSP头的ID信息(4字节 int类型)
        header.id = view.getInt32(offset, true);
        offset += 4;
        // 4 byte 整型 bsp地图版本号
        header.version = view.getInt32(offset, true);
        offset += 4;
        for (let i = 0; i < Q3BspParser.TOTALLUMPS; i++) {
            let lump = new Q3BSPLump();
            lump.offset = view.getInt32(offset, true);
            offset += 4;
            lump.length = view.getInt32(offset, true);
            offset += 4;
            // 不能使用push,因为BSPHeader已经分配好17个lump的内存了
            header.lumps[i] = lump;
        }
        console.log("sizeof(Q3BSPHeader) = ", offset);
        console.log("Q3BSPHeader = ", JSON.stringify(header));
        return header;
    }
    _loadEntityString(header, view) {
        // 使用Q3BspParser.ENTITIES索引号获取EntityString的Lump
        let lump = header.lumps[Q3BspParser.ENTITIES];
        // 获取EntityString块的字节偏移地址
        let offset = lump.offset;
        let charCode = 0;
        let strArr = []; // 将以char表示的字符存储在strArr数组中
        // 很重要一点，EntityString Lump的length属性正好表示的是char（1 byte)的数量
        // 所以遍历每个char数据
        for (let j = 0; j < lump.length; j++) {
            // 每个char是1个byte,也就是8个bit，所以要用getInt8方法
            charCode = view.getInt8(offset);
            offset += 1; // 更新offset变量，让下一次读取的指针后移1字节
            // BSP中存储的是C语言风格的字符数组表示，最后一个字符为0，表示字符串的结尾
            // 因此需要判断不为0，则添加到TS / JS的字符串数组中去
            if (charCode != 0) {
                strArr[j] = String.fromCharCode(charCode);
            }
        }
        // 最后完全解析后，使用Array对象的join方法，并且注意参数为“”,中间没有空格！！！
        // 这样合成一个完整额BSPEntityString，并且输出看看结果
        this.entities = strArr.join("");
        console.log("--------------load BSPEntityString---------");
        console.log(this.entities);
    }
    _loadTextures(header, view) {
        let lump = header.lumps[Q3BspParser.TEXTURES];
        // 如何计算Q3BSPTexture数量：数据块字节数 除以 每个Q3BSPTexture本身的字节数
        let count = lump.length / Q3BSPTexture.TOTALBYTES;
        let offset = lump.offset; // 获取当前的偏移量
        this.textures = new Array(count); // 分配内存
        let strArr = new Array(64); // BPS中name字符串最长63个char + '\0'结尾，合计64个
        let charCode = 0;
        // 遍历所有的Q3BSPTexture
        for (let i = 0; i < count; i++) {
            // 遍历每个name
            //64定长字符串，不足64的部分null结尾
            for (let j = 0; j < 64; j++) {
                // 获取char表示的字符
                charCode = view.getInt8(offset);
                offset += 1; // 下一个偏移量
                if (charCode != 0) {
                    // 加载到TS / JS字符窜数组中
                    strArr[j] = String.fromCharCode(charCode);
                }
            }
            // 生成Q3BSPTexture
            let texture = new Q3BSPTexture();
            texture.name = strArr.join(""); // 合成TS / JS字符串
            // 读取flag ，int类型，4个字节
            texture.flag = view.getInt32(offset, true);
            offset += 4;
            // 读取context，int类型，4个字节
            texture.content = view.getInt32(offset, true);
            offset += 4;
            // 将Q3BSPTexture对象添加到QuakeBspParser类的textures数组中缓存起来，后续会使用
            this.textures[i] = texture;
        }
        // 最后输出纹理相关信息
        console.log("-----------load BSPTexture-------------- ");
        console.log(this.textures);
    }
    _loadSurfaces(header, view) {
        let lump = header.lumps[Q3BspParser.SURFACES];
        let count = lump.length / Q3BSPSurface.TOTALBYETS;
        let offset = lump.offset;
        for (let i = 0; i < count; i++) {
            let surface = new Q3BSPSurface();
            surface.textureIdx = view.getInt32(offset, true);
            offset += 4;
            surface.effectIdx = view.getInt32(offset, true);
            offset += 4;
            surface.faceType = Q3BspParser.toSurfaceType(view.getInt32(offset, true));
            offset += 4;
            surface.firstVertIdx = view.getInt32(offset, true);
            offset += 4;
            surface.numVert = view.getInt32(offset, true);
            offset += 4;
            surface.firstIndex = view.getInt32(offset, true);
            offset += 4;
            surface.numIndex = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapIdx = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapX = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapY = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapWidth = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapHeight = view.getInt32(offset, true);
            offset += 4;
            surface.lightMapOrigin = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
            surface.lightMapOrigin.x = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapOrigin.y = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapOrigin.z = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapXAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
            surface.lightMapXAxis.x = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapXAxis.y = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapXAxis.z = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapYAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
            surface.lightMapYAxis.x = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapYAxis.y = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapYAxis.z = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapZAxis = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
            surface.lightMapZAxis.x = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapZAxis.y = view.getFloat32(offset, true);
            offset += 4;
            surface.lightMapZAxis.z = view.getFloat32(offset, true);
            offset += 4;
            surface.patchWidth = view.getInt32(offset, true);
            offset += 4;
            surface.patchHeight = view.getInt32(offset, true);
            offset += 4;
            // 进行表面分类，根据类型，添加到对应的表面数组中去,目前就支持两种类型表面
            switch (surface.faceType) {
                case EQ3BSPSurfaceType.PLANAR:
                    this.mapSurfaces.push(surface);
                    break;
                case EQ3BSPSurfaceType.TRIANGLE:
                    this.meshSurfaces.push(surface);
                    break;
                default:
                    break;
            }
        }
        // 排序整个表面，先按表面类型，从小到大排序
        // 如果表面类型一致，则再按纹理从小到大排序
        // 按上述权重排序的目的是为了减少渲染状态的切换，加快渲染速度
        this.mapSurfaces.sort((a, b) => {
            return a.textureIdx - b.textureIdx;
        });
        this.meshSurfaces.sort((a, b) => {
            return a.textureIdx - b.textureIdx;
        });
        // 最后输出表面相关信息
        console.log("-----------load BSPSurface-------------- ");
        console.log("Map Surfs: ", this.mapSurfaces);
        console.log(" Mesh Surfs: ", this.meshSurfaces);
    }
    _loadIndices(header, view) {
        let lump = header.lumps[Q3BspParser.INDEXES];
        let count = lump.length / 4; // 每个索引用4个字节表示(int 32类型)
        let offset = lump.offset;
        this.indices = new Array(count);
        for (let i = 0; i < count; i++) {
            let value = view.getInt32(offset, true);
            this.indices[i] = value;
            offset += 4;
        }
        // 输出顶点索引数据
        console.log("-----------load BSPIndices-------------- ");
        console.log(this.indices);
    }
    _loadVerts(header, view) {
        let lump = header.lumps[Q3BspParser.VERTS];
        let count = lump.length / Q3BSPVertex.VERTTOTALBYTES; // 计算出顶点总数
        let offset = lump.offset;
        this.vertices = new Array(count);
        let vert;
        for (let i = 0; i < count; i++) {
            vert = new Q3BSPVertex();
            // 读取x y z 坐标，每个分量都是4 byte浮点数
            vert.x = view.getFloat32(offset, true);
            offset += 4;
            vert.y = view.getFloat32(offset, true);
            offset += 4;
            vert.z = view.getFloat32(offset, true);
            offset += 4;
            // 读取u v纹理坐标，每个分量都是4 byte浮点数
            vert.u = view.getFloat32(offset, true);
            offset += 4;
            vert.v = view.getFloat32(offset, true);
            offset += 4;
            // 读取lu lv光照图纹理坐标，每个分量都是4 byte浮点数
            vert.lu = view.getFloat32(offset, true);
            offset += 4;
            vert.lv = view.getFloat32(offset, true);
            offset += 4;
            // 读取法向量，每个分量都是4 byte浮点数
            vert.nx = view.getFloat32(offset, true);
            offset += 4;
            vert.ny = view.getFloat32(offset, true);
            offset += 4;
            vert.nz = view.getFloat32(offset, true);
            offset += 4;
            // 读取r / g / b / a颜色，每个分量都是1 byte字节数
            vert.r = view.getUint8(offset);
            offset += 1;
            vert.g = view.getUint8(offset);
            offset += 1;
            vert.b = view.getUint8(offset);
            offset += 1;
            vert.a = view.getUint8(offset);
            offset += 1;
            // 转换为opengl坐标系
            Q3BspParser.toGLCoord(vert);
            // 添加到vertices数组中缓存起来
            this.vertices[i] = vert;
        }
        // 输出顶点信息
        console.log("-----------load BSPVert-------------- ");
        console.log(this.vertices);
    }
    static toSurfaceType(type) {
        if (type === 0) {
            return EQ3BSPSurfaceType.BAD;
        }
        else if (type === 1) {
            return EQ3BSPSurfaceType.PLANAR;
        }
        else if (type === 2) {
            return EQ3BSPSurfaceType.PATCH;
        }
        else if (type === 3) {
            return EQ3BSPSurfaceType.TRIANGLE;
        }
        else if (type === 4) {
            return EQ3BSPSurfaceType.BILLBOARD;
        }
        return EQ3BSPSurfaceType.BAD;
    }
    // Quake3BspParser核心方法
    parse(data) {
        // 参数data来自服务器，是一个BSP二进制文件数据
        // 要解析二进制数据，必须要用DataView对象
        let view = new DataView(data);
        // 调用_loadHeader私有方法，解析BSP文件头
        let header = this._loadHeader(view);
        // 判断文件的id和版本号正确
        if (header.id !== Q3BspParser.BSPID && header.version !== Q3BspParser.BSPVER) {
            alert("Quake3 BSP 版本不正确！");
            throw new Error("Quake3 BSP 版本不正确！");
        }
        // 一旦解析好文件头，有了各个Lump的偏移和大小数据后，我们就可以进行随机读取
        // BSP中有17个数据Lump,本节我们只使用如下5个数据块
        this._loadEntityString(header, view);
        this._loadTextures(header, view);
        this._loadVerts(header, view);
        this._loadIndices(header, view);
        this._loadSurfaces(header, view);
    }
    static toGLCoord(v, scale = 8) {
        // 将Q3的顶点坐标变换为WebGL的坐标系
        let f = v.y;
        v.y = v.z;
        v.z = -f;
        // 进行顶点的缩放操作
        if (!_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].numberEquals(scale, 0) && !_common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].numberEquals(scale, 1.0)) {
            v.x /= scale;
            v.y /= scale;
            v.z /= scale;
        }
        // 将Q3的纹理坐标系变换为WebGL的纹理坐标系
        v.lv = 1.0 - v.lv;
        v.v = 1.0 - v.v;
    }
}
Q3BspParser.BSPID = (("P".charCodeAt(0) << 24) + ("S".charCodeAt(0) << 16) + ("B".charCodeAt(0) << 8) + "I".charCodeAt(0));
Q3BspParser.BSPVER = 46;
// BSP中所有的数据块名称和编号
// 编号必须如下所示，不能随便修改！！！！
Q3BspParser.ENTITIES = 0; // 本DEMO解析
Q3BspParser.TEXTURES = 1; // 本DEMO解析，shader，但是我们只当纹理使用
Q3BspParser.PLANES = 2;
Q3BspParser.BSPNODES = 3;
Q3BspParser.BSPLEAFS = 4;
Q3BspParser.LEAFSURFACES = 5;
Q3BspParser.LEAFBRUSHES = 6;
Q3BspParser.MODELS = 7;
Q3BspParser.BRUSHES = 8;
Q3BspParser.BRUSHSIDES = 9;
Q3BspParser.VERTS = 10; // 所有可渲染顶点数据
Q3BspParser.INDEXES = 11; // 索引数据
Q3BspParser.EFFECTS = 12;
Q3BspParser.SURFACES = 13; // 所有表面数据
Q3BspParser.LIGHTMAPS = 14;
Q3BspParser.LIGHTGRID = 15;
Q3BspParser.VISIBILITY = 16;
Q3BspParser.TOTALLUMPS = 17;


/***/ }),

/***/ "./src/lib/Quake3BspScene.ts":
/*!***********************************!*\
  !*** ./src/lib/Quake3BspScene.ts ***!
  \***********************************/
/*! exports provided: Quake3BspScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quake3BspScene", function() { return Quake3BspScene; });
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/HttpRequest */ "./src/common/utils/HttpRequest.ts");
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");
/* harmony import */ var _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");
/* harmony import */ var _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class DrawSurface {
    constructor(texture, byteOffset = -1, count = 0) {
        this.texture = texture;
        this.byteOffset = byteOffset;
        this.elemCount = count;
    }
}
class Quake3BspScene {
    constructor(gl) {
        this.pathPrifix = "./data/quake3/"; // 默认的BSP资源服务器端文件夹
        this.gl = gl;
        this.texDict = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_5__["Dictionary"]();
        this.bspSurfaces = [];
        this.meshSurfaces = [];
        this._defaultTexture = _webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_7__["GLTextureCache"].instance.getMust("default");
    }
    draw(camera, program) {
        //this.gl.frontFace(this.gl.CW);
        this.gl.disable(this.gl.CULL_FACE);
        // 绑定当前使用的GLProgram对象
        program.bind();
        // 设置当前的mvp矩阵
        program.setMatrix4(_webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_2__["GLProgram"].MVPMatrix, camera.viewProjectionMatrix);
        this._scene.bind(); // 绑定场景vao对象
        // 遍历所有的BSP表面
        for (let i = 0; i < this.bspSurfaces.length; i++) {
            let surf = this.bspSurfaces[i];
            surf.texture.bind(); // 绑定纹理对象
            program.loadSampler(); // 载入纹理Sampler
            // 调用drawRange方法
            this._scene.drawRange(surf.byteOffset, surf.elemCount);
            surf.texture.unbind(); // 解除纹理对象的绑定
        }
        // 接下来绘制所有静态mesh对象的表面，其渲染流程同上
        for (let i = 0; i < this.meshSurfaces.length; i++) {
            let surf = this.meshSurfaces[i];
            surf.texture.bind();
            program.loadSampler();
            this._scene.drawRange(surf.byteOffset, surf.elemCount);
            surf.texture.unbind();
        }
        // 最后解绑vao和program对象
        this._scene.unbind();
        program.unbind();
        this.gl.enable(this.gl.CULL_FACE);
        //this.gl.frontFace(this.gl.CCW);
    }
    // 使用async关键字，需要返回一个Promise对象
    // 说明本方法是一个异步加载方法，可以使用await关键字来同步资源
    loadTextures(parser) {
        return __awaiter(this, void 0, void 0, function* () {
            // 封装Promise对象
            return new Promise((resolve, reject) => {
                let _promises = [];
                for (let i = 0; i < parser.textures.length; i++) {
                    // 仅加载一次，所以先查询texDict中是否存在已经加载的纹理名了
                    if (this.texDict.contains(parser.textures[i].name)) {
                        // 如果已经加载了，就跳过
                        continue;
                    }
                    _promises.push(_common_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"].loadImageAsyncSafe(this.pathPrifix + parser.textures[i].name + ".jpg", parser.textures[i].name));
                }
                Promise.all(_promises).then((images) => {
                    for (let i = 0; i < images.length; i++) {
                        let img = images[i];
                        if (img !== null) {
                            // 加载纹理
                            let tex = new _webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_3__["GLTexture"](this.gl, img.name);
                            tex.upload(img.image);
                            this.texDict.insert(img.name, tex);
                        }
                    }
                    console.log(this.texDict.keys);
                    resolve();
                });
            });
        });
    }
    compileMap(parser) {
        // 所有的顶点都放入到vertices中去了
        // Q3BSPVertex带有更多的信息，而我们目前的BSP场景渲染仅需要位置坐标信息（ x / y / z )和纹理坐标信息（ s / t )
        // 因此每个渲染顶点占用5个float
        let vertices = new Float32Array(parser.vertices.length * 5);
        let j = 0;
        // 将Q3BSPVertex复制到渲染顶点中
        for (let i = 0; i < parser.vertices.length; i++) {
            vertices[j++] = (parser.vertices[i].x);
            vertices[j++] = (parser.vertices[i].y);
            vertices[j++] = (parser.vertices[i].z);
            vertices[j++] = (parser.vertices[i].u);
            vertices[j++] = (parser.vertices[i].v);
        }
        // 完成渲染用的顶点数据后，接着转换索引数据
        let indices = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_6__["TypedArrayList"](Uint16Array);
        // 重组索引,先bsp地图的索引缓存，遍历所有Q3BSPSurface
        for (let i = 0; i < parser.mapSurfaces.length; i++) {
            // 逐表面
            let surf = parser.mapSurfaces[i]; // 获取当前正在使用的Q3BSPSurface对象
            // 注意使用下面如何寻址纹理名
            let tex = this.texDict.find(parser.textures[surf.textureIdx].name);
            if (tex === undefined) {
                tex = this._defaultTexture;
            }
            // 起始地址和索引数量，关键点，地址是byte表示,每个索引使用unsignedShort类型，所以占2个字节，所以要indices.length*2
            let drawSurf = new DrawSurface(tex, indices.length * 2, surf.numIndex);
            for (let k = 0; k < surf.numIndex; k++) {
                // 渲染BSP地图关键的索引寻址关系！！！！，一定要理解如下的关系式
                let pos = surf.firstVertIdx + parser.indices[surf.firstIndex + k];
                indices.push(pos);
            }
            this.bspSurfaces.push(drawSurf);
        }
        // 重组索引，静态物体的索引缓存
        for (let i = 0; i < parser.meshSurfaces.length; i++) {
            let surf = parser.meshSurfaces[i];
            // 可能存在的情况是，BSP中有纹理名，但是服务器上不存在对应的图像，就需要先进行检测是否有该图像的存在
            let tex = this.texDict.find(parser.textures[surf.textureIdx].name);
            if (tex === undefined) {
                // 如果图像不存在，就使用默认纹理
                tex = this._defaultTexture;
            }
            // 起始地址和索引数量，关键点，地址是byte表示
            let drawSurf = new DrawSurface(tex, indices.length * 2, surf.numIndex);
            for (let k = 0; k < surf.numIndex; k++) {
                // 渲染BSP地图关键的索引寻址关系！！！！，一定要理解如下的关系式
                let pos = surf.firstVertIdx + parser.indices[surf.firstIndex + k];
                indices.push(pos);
            }
            this.meshSurfaces.push(drawSurf);
        }
        // 合成一个庞大的顶点和索引缓存后，就可以生成GLStaticMesh对象了
        this._scene = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_0__["GLStaticMesh"](this.gl, _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].POSITION_BIT | _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_1__["GLAttribState"].TEXCOORD_BIT, vertices, indices.subArray());
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_MeshBuilderApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo/MeshBuilderApplication */ "./src/demo/MeshBuilderApplication.ts");
/* harmony import */ var _demo_Q3BspApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo/Q3BspApplication */ "./src/demo/Q3BspApplication.ts");
/* harmony import */ var _demo_Doom3Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/Doom3Application */ "./src/demo/Doom3Application.ts");
/* harmony import */ var _demo_RotatingCubeApplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/RotatingCubeApplication */ "./src/demo/RotatingCubeApplication.ts");
/* harmony import */ var _demo_CoordSystemApplicationDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/CoordSystemApplicationDemo */ "./src/demo/CoordSystemApplicationDemo.ts");
/* harmony import */ var _demo_BasicWebGLApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/BasicWebGLApplication */ "./src/demo/BasicWebGLApplication.ts");
/* harmony import */ var _demo_MD5SkinedMeshApplication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/MD5SkinedMeshApplication */ "./src/demo/MD5SkinedMeshApplication.ts");
/* harmony import */ var _demo_AsyncLoadTestApplication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/AsyncLoadTestApplication */ "./src/demo/AsyncLoadTestApplication.ts");








// 获得HTMLSelectElement对象，用来切换要运行的Application
let select = document.getElementById('select');
// 获取用于获得webgl上下文对象的HTMLCanvasElement元素
let canvas = document.getElementById('webgl');
let appNames = [
    "第3章：RotatingCubeApplication",
    "第3章：AsyncLoadTestApplication",
    '第4章：BasicWebGLApplication',
    '第7章：MeshBuilderApplication',
    '第7章：CoordSystemApplication',
    '第8章：Q3BspApplication',
    '第9章：Doom3Application',
    '第10章：MD5SkinedMeshApplication'
];
function addItem(select, value) {
    select.options.add(new Option(value, value));
}
function addItemes(select) {
    if (canvas === null) {
        return;
    }
    for (let i = 0; i < appNames.length; i++) {
        addItem(select, appNames[i]);
    }
}
var EAPPName;
(function (EAPPName) {
    EAPPName[EAPPName["ROTATINGCUBE"] = 0] = "ROTATINGCUBE";
    EAPPName[EAPPName["ASYNCLOAD"] = 1] = "ASYNCLOAD";
    EAPPName[EAPPName["BASICWEBGL"] = 2] = "BASICWEBGL";
    EAPPName[EAPPName["MESHBUILDER"] = 3] = "MESHBUILDER";
    EAPPName[EAPPName["COORDSYSTEM"] = 4] = "COORDSYSTEM";
    EAPPName[EAPPName["Q3BSP"] = 5] = "Q3BSP";
    EAPPName[EAPPName["DOOM3PROC"] = 6] = "DOOM3PROC";
    EAPPName[EAPPName["DOOM3MD5"] = 7] = "DOOM3MD5";
})(EAPPName || (EAPPName = {}));
function runApplication(name) {
    // 获取用于获得webgl上下文对象的HTMLCanvasElement元素
    let canvas = document.getElementById('webgl');
    if (name === EAPPName.ROTATINGCUBE) {
        let app = new _demo_RotatingCubeApplication__WEBPACK_IMPORTED_MODULE_3__["RotatingCubeApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
    else if (name === EAPPName.ASYNCLOAD) {
        let app = new _demo_AsyncLoadTestApplication__WEBPACK_IMPORTED_MODULE_7__["AsyncLoadTestApplication"](canvas);
        app.run();
    }
    else if (name === EAPPName.BASICWEBGL) {
        let app = new _demo_BasicWebGLApplication__WEBPACK_IMPORTED_MODULE_5__["BasicWebGLApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
    else if (name === EAPPName.MESHBUILDER) {
        let app = new _demo_MeshBuilderApplication__WEBPACK_IMPORTED_MODULE_0__["MeshBuilderApplicaton"](canvas);
        app.frameCallback = frameCallback;
        app.start();
    }
    else if (name === EAPPName.COORDSYSTEM) {
        let app = new _demo_CoordSystemApplicationDemo__WEBPACK_IMPORTED_MODULE_4__["CoordSystemApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
    else if (name === EAPPName.Q3BSP) {
        let app = new _demo_Q3BspApplication__WEBPACK_IMPORTED_MODULE_1__["Q3BspApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
    else if (name === EAPPName.DOOM3PROC) {
        let app = new _demo_Doom3Application__WEBPACK_IMPORTED_MODULE_2__["Doom3Application"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
    else if (name === EAPPName.DOOM3MD5) {
        let app = new _demo_MD5SkinedMeshApplication__WEBPACK_IMPORTED_MODULE_6__["MD5SkinedMeshApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
}
function createText(tagName) {
    let elem = document.getElementById(tagName);
    let text = document.createTextNode("");
    elem.appendChild(text);
    return text;
}
let fps = createText("fps");
let tris = createText("tris");
let verts = createText("verts");
function frameCallback(app) {
    fps.nodeValue = String(app.fps.toFixed(0));
    tris.nodeValue = "0";
    verts.nodeValue = "0";
}
/*
select.onchange = (): void =>
{
    // 获取用于获得webgl上下文对象的HTMLCanvasElement元素
    let canvas: HTMLCanvasElement | null = document.getElementById( 'webgl' ) as HTMLCanvasElement;
    if ( select.selectedIndex === 0 )
    {
        let app: RotatingCubeApplication = new RotatingCubeApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    } else if ( select.selectedIndex === 1 )
    {
        let app:AsyncLoadTestApplication = new AsyncLoadTestApplication(canvas);
        app.run();
    } else if ( select.selectedIndex === 2 )
    {
        let app:Application = new BasicWebGLApplication(canvas);
        app.frameCallback = frameCallback;
        app.run();
    } else if ( select.selectedIndex === 3 )
    {
        let app: Application = new MeshBuilderApplicaton( canvas );
        app.frameCallback = frameCallback;
        app.start();
    } else if ( select.selectedIndex === 4 )
    {
        let app: CoordSystemApplication = new CoordSystemApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    } else if ( select.selectedIndex === 5 )
    {
        let app: Application = new Q3BspApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    } else if ( select.selectedIndex === 6 )
    {
        let app: Doom3Application = new Doom3Application( canvas );
        app.frameCallback = frameCallback;
        app.run();
    } else if ( select.selectedIndex === 7 )
    {
        let app: MD5SkinedMeshApplication = new MD5SkinedMeshApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    }
}
*/
//addItemes( select );
runApplication(EAPPName.ROTATINGCUBE);
//runApplication(EAPPName.ASYNCLOAD);
//runApplication(EAPPName.BASICWEBGL);
//runApplication(EAPPName.MESHBUILDER);
//runApplication(EAPPName.COORDSYSTEM);
//runApplication(EAPPName.Q3BSP);
//runApplication(EAPPName.DOOM3PROC);
//runApplication(EAPPName.DOOM3MD5);


/***/ }),

/***/ "./src/webgl/WebGLApplication.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLApplication.ts ***!
  \***************************************/
/*! exports provided: WebGLApplication, WebGL2Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLApplication", function() { return WebGLApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGL2Application", function() { return WebGL2Application; });
/* harmony import */ var _common_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Application */ "./src/common/Application.ts");
/* harmony import */ var _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLMatrixStack */ "./src/webgl/WebGLMatrixStack.ts");
/* harmony import */ var _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _WebGLHepler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebGLHepler */ "./src/webgl/WebGLHepler.ts");









class WebGLApplication extends _common_Application__WEBPACK_IMPORTED_MODULE_0__["Application"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2D = false) {
        super(canvas);
        // 为了在3D环境中同时支持Canvas2D绘制，特别是为了实现文字绘制
        this.canvas2D = null;
        this.ctx2D = null;
        let ctx = this.canvas.getContext("webgl", contextAttributes);
        if (ctx === null) {
            alert(" 无法创建WebGLRenderingContext上下文对象 ");
            throw new Error(" 无法创建WebGLRenderingContext上下文对象 ");
        }
        this.gl = ctx;
        if (need2D === true) {
            let canvasElem = document.createElement("canvas");
            canvasElem.width = this.canvas.width;
            canvasElem.height = this.canvas.height;
            canvasElem.style.backgroundColor = "transparent";
            canvasElem.style.position = "absolute";
            canvasElem.style.left = "0px";
            canvasElem.style.top = "0px";
            let parent = this.canvas.parentElement;
            if (parent === null) {
                throw new Error("canvas元素必须要有父亲!!");
            }
            parent.appendChild(canvasElem);
            this.ctx2D = canvasElem.getContext("2d");
            canvasElem.addEventListener("mousedown", this, false);
            canvasElem.addEventListener("mouseup", this, false);
            canvasElem.addEventListener("mousemove", this, false);
            this.canvas.removeEventListener("mousedown", this);
            this.canvas.removeEventListener("mouseup", this);
            this.canvas.removeEventListener("mousemove", this);
            this.canvas2D = canvasElem;
        }
        this.matStack = new _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__["GLWorldMatrixStack"]();
        // 初始化渲染状态
        _WebGLHepler__WEBPACK_IMPORTED_MODULE_8__["GLHelper"].setDefaultState(this.gl);
        // 由于Canvas是左手系，而webGL是右手系，需要FilpYCoord
        this.isFlipYCoord = true;
        // 初始化时，创建default纹理
        _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__["GLTextureCache"].instance.set("default", _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__["GLTexture"].createDefaultTexture(this.gl));
        // 初始化时，创建颜色和纹理Program
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("color", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultColorProgram(this.gl));
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("texture", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultTextureProgram(this.gl));
        // 初始化时，创建颜色GLMeshBuilder对象
        this.builder = new _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__["GLMeshBuilder"](this.gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].POSITION_BIT | _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].COLOR_BIT, _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.getMust("color"));
    }
    getMouseCanvas() {
        if (this.canvas2D !== null && this.ctx2D !== null) {
            return this.canvas2D;
        }
        else {
            return this.canvas;
        }
    }
}
class WebGL2Application extends _common_Application__WEBPACK_IMPORTED_MODULE_0__["Application"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2D = false) {
        super(canvas);
        this.canvas2D = null;
        this.ctx2D = null;
        let ctx = this.canvas.getContext("webgl", contextAttributes);
        if (ctx === null) {
            alert(" 无法创建WebGLRenderingContext上下文对象 ");
            throw new Error(" 无法创建WebGLRenderingContext上下文对象 ");
        }
        this.gl = ctx;
        if (need2D === true) {
            let canvasElem = document.createElement("canvas");
            canvasElem.width = this.canvas.width;
            canvasElem.height = this.canvas.height;
            canvasElem.style.backgroundColor = "transparent";
            canvasElem.style.position = "absolute";
            canvasElem.style.left = "0px";
            canvasElem.style.top = "0px";
            let parent = this.canvas.parentElement;
            if (parent === null) {
                throw new Error("canvas元素必须要有父亲!!");
            }
            parent.appendChild(canvasElem);
            this.ctx2D = canvasElem.getContext("2d");
            canvasElem.addEventListener("mousedown", this, false);
            canvasElem.addEventListener("mouseup", this, false);
            canvasElem.addEventListener("mousemove", this, false);
            this.canvas.removeEventListener("mousedown", this);
            this.canvas.removeEventListener("mouseup", this);
            this.canvas.removeEventListener("mousemove", this);
            this.canvas2D = canvasElem;
        }
        // 初始化渲染状态
        _WebGLHepler__WEBPACK_IMPORTED_MODULE_8__["GLHelper"].setDefaultState(this.gl);
        // 内置一个矩阵堆栈
        this.matStack = new _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__["GLMatrixStack"]();
        this.matStack.perspective(45, canvas.width / canvas.height, 0.1, 1000);
        // 由于Canvas是左手系，而webGL是右手系，需要FilpYCoord
        this.isFlipYCoord = true;
        // 初始化时，创建default纹理
        _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__["GLTextureCache"].instance.set("default", _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__["GLTexture"].createDefaultTexture(this.gl));
        // 初始化时，创建颜色和纹理Program
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("color", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultColorProgram(this.gl));
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("texture", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultTextureProgram(this.gl));
        // 初始化时，创建颜色GLMeshBuilder对象
        this.builder = new _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__["GLMeshBuilder"](this.gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].POSITION_BIT | _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].COLOR_BIT, _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.getMust("color"));
    }
    getMouseCanvas() {
        if (this.canvas2D !== null && this.ctx2D !== null) {
            return this.canvas2D;
        }
        else {
            return this.canvas;
        }
    }
}


/***/ }),

/***/ "./src/webgl/WebGLAttribState.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLAttribState.ts ***!
  \***************************************/
/*! exports provided: GLAttribState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLAttribState", function() { return GLAttribState; });
class GLAttribState {
    static makeVertexAttribs(useTexcoord0, useTexcoord1, useNormal, useTangent, useColor) {
        // 不管如何，总是使用位置坐标属性
        let bits = GLAttribState.POSITION_BIT;
        // 使用 |= 操作符添加标记位
        if (useTexcoord0 === true) {
            bits |= GLAttribState.TEXCOORD_BIT;
        }
        if (useTexcoord1 === true) {
            bits |= GLAttribState.TEXCOORD1_BIT;
        }
        if (useNormal === true) {
            bits |= GLAttribState.NORMAL_BIT;
        }
        if (useTangent === true) {
            bits |= GLAttribState.TANGENT_BIT;
        }
        if (useColor === true) {
            bits |= GLAttribState.COLOR_BIT;
        }
        return bits;
    }
    // 使用按位与（&）操作符来测试否是包含某个位标记值
    static hasPosition(attribBits) { return (attribBits & GLAttribState.POSITION_BIT) !== 0; }
    static hasNormal(attribBits) { return (attribBits & GLAttribState.NORMAL_BIT) !== 0; }
    static hasTexCoord_0(attribBits) { return (attribBits & GLAttribState.TEXCOORD_BIT) !== 0; }
    static hasTexCoord_1(attribBits) { return (attribBits & GLAttribState.TEXCOORD1_BIT) !== 0; }
    static hasColor(attribBits) { return (attribBits & GLAttribState.COLOR_BIT) !== 0; }
    static hasTangent(attribBits) { return (attribBits & GLAttribState.TANGENT_BIT) !== 0; }
    static setAttribVertexArrayPointer(gl, offsetMap) {
        let stride = offsetMap[GLAttribState.ATTRIBSTRIDE];
        if (stride === 0) {
            throw new Error("vertex Array有问题！！");
        }
        // sequenced的话stride为0
        if (stride !== offsetMap[GLAttribState.ATTRIBBYTELENGTH]) {
            stride = 0;
        }
        if (stride === undefined) {
            stride = 0;
        }
        let offset = offsetMap[GLAttribState.POSITION_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.POSITION_LOCATION, GLAttribState.POSITION_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.NORMAL_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.NORMAL_LOCATION, GLAttribState.NORMAL_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TEXCOORD_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TEXCOORD_LOCATION, GLAttribState.TEXCOORD_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TEXCOORD1_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TEXCOORD1_LOCATION, GLAttribState.TEXCOORD1_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.COLOR_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.COLOR_LOCATION, GLAttribState.COLOR_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TANGENT_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TANGENT_LOCATION, GLAttribState.TANGENT_COMPONENT, gl.FLOAT, false, stride, offset);
        }
    }
    static setAttribVertexArrayState(gl, attribBits, enable = true) {
        if (GLAttribState.hasPosition(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.POSITION_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.POSITION_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.POSITION_LOCATION);
        }
        if (GLAttribState.hasNormal(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
        }
        if (GLAttribState.hasColor(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.COLOR_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.COLOR_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.COLOR_LOCATION);
        }
        if (GLAttribState.hasTangent(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
        }
    }
    static getVertexByteStride(attribBits) {
        let byteOffset = 0;
        if (GLAttribState.hasPosition(attribBits)) {
            byteOffset += GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            byteOffset += GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            byteOffset += GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            byteOffset += GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            byteOffset += GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            byteOffset += GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        return byteOffset;
    }
    static getSequencedLayoutAttribOffsetMap(attribBits, vertCount) {
        let offsets = {}; // 初始化顶点属性偏移表
        let byteOffset = 0; // 初始化时的首地址为0
        if (GLAttribState.hasPosition(attribBits)) {
            // 记录位置坐标的首地址
            offsets[GLAttribState.POSITION_NAME] = 0;
            // 位置坐标由3个float值组成，因此下一个属性的首地址位 3 * 4 * 顶点数量
            byteOffset += vertCount * GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        //SequencedLayout具有ATTRIBSTRIDE和ATTRIBSTRIDE属性
        offsets[GLAttribState.ATTRIBSTRIDE] = byteOffset / vertCount; // 总的字节数 / 顶点数量  = 每个顶点的stride，实际上顺序存储时不需要这个值
        offsets[GLAttribState.ATTRIBBYTELENGTH] = byteOffset; // 总的字节数
        return offsets;
    }
    static getInterleavedLayoutAttribOffsetMap(attribBits) {
        let offsets = {}; // 初始化顶点属性偏移表
        let byteOffset = 0; // 初始化时的首地址为0
        if (GLAttribState.hasPosition(attribBits)) {
            // 记录位置坐标的首地址
            offsets[GLAttribState.POSITION_NAME] = 0;
            // 位置坐标由3个float值组成，因此下一个属性的首地址位 3 * 4 = 12个字节处
            byteOffset += GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        // 下面各个属性偏移计算算法同上，唯一区别是分量的不同而已
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = byteOffset;
            byteOffset += GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = byteOffset;
            byteOffset += GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = byteOffset;
            byteOffset += GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = byteOffset;
            byteOffset += GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = byteOffset;
            byteOffset += GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        // stride和length相等
        offsets[GLAttribState.ATTRIBSTRIDE] = byteOffset; // 间隔数组方法存储的话，顶点的stride非常重要
        offsets[GLAttribState.ATTRIBBYTELENGTH] = byteOffset;
        return offsets;
    }
    static getSepratedLayoutAttribOffsetMap(attribBits) {
        // 每个顶点属性使用一个vbo的话，每个offsets中的顶点属性的偏移都是为0
        // 并且offsets的length = vbo的个数，不需要顶点stride和byteLenth属性
        let offsets = {};
        let byteOffset = 0;
        if (GLAttribState.hasPosition(attribBits)) {
            offsets[GLAttribState.POSITION_NAME] = 0;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = 0;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = 0;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = 0;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = 0;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = 0;
        }
        return offsets;
    }
    static isAttribStateValid(attribBits) {
        // 一定要有位置向量
        if (!GLAttribState.hasPosition(attribBits)) {
            return false;
        }
        //计算tangent space必须要有uv坐标和法线向量
        if (GLAttribState.hasTangent(attribBits)) {
            if (!GLAttribState.hasTexCoord_0(attribBits)) {
                return false;
            }
            if (!GLAttribState.hasNormal(attribBits)) {
                return false;
            }
        }
        return true;
    }
}
// 顶点属性
GLAttribState.POSITION_BIT = (1 << 0);
GLAttribState.POSITION_COMPONENT = 3; //xyz
GLAttribState.POSITION_NAME = "aPosition";
GLAttribState.POSITION_LOCATION = 0;
GLAttribState.TEXCOORD_BIT = (1 << 1);
GLAttribState.TEXCOORD_COMPONENT = 2; //st
GLAttribState.TEXCOORD_NAME = "aTexCoord";
GLAttribState.TEXCOORD_LOCATION = 1;
GLAttribState.TEXCOORD1_BIT = (1 << 2);
GLAttribState.TEXCOORD1_COMPONENT = 2;
GLAttribState.TEXCOORD1_NAME = "aTexCoord1";
GLAttribState.TEXCOORD1_LOCATION = 2;
GLAttribState.NORMAL_BIT = (1 << 3);
GLAttribState.NORMAL_COMPONENT = 3; //xyz
GLAttribState.NORMAL_NAME = "aNormal";
GLAttribState.NORMAL_LOCATION = 3;
GLAttribState.TANGENT_BIT = (1 << 4);
GLAttribState.TANGENT_COMPONENT = 4; //xyzw
GLAttribState.TANGENT_NAME = "aTangent";
GLAttribState.TANGENT_LOCATION = 4;
GLAttribState.COLOR_BIT = (1 << 5);
GLAttribState.COLOR_COMPONENT = 4;
GLAttribState.COLOR_NAME = "aColor";
GLAttribState.COLOR_LOCATION = 5;
/*
public static readonly WEIGHT0_BIT: number = (1 << 7);
public static readonly WEIGHT1_BIT: number = (1 << 8);
public static readonly WEIGHT2_BIT: number = (1 << 9);
public static readonly WEIGHT3_BIT: number = (1 << 10);
*/
GLAttribState.ATTRIBSTRIDE = "STRIDE";
GLAttribState.ATTRIBBYTELENGTH = "BYTELENGTH";
GLAttribState.FLOAT32_SIZE = Float32Array.BYTES_PER_ELEMENT;
GLAttribState.UINT16_SIZE = Uint16Array.BYTES_PER_ELEMENT;


/***/ }),

/***/ "./src/webgl/WebGLCoordSystem.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLCoordSystem.ts ***!
  \***************************************/
/*! exports provided: GLCoordSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLCoordSystem", function() { return GLCoordSystem; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");

class GLCoordSystem {
    constructor(viewport, pos = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].zero, axis = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].up, angle = 0, isDrawAxis = false, isD3D = false) {
        this.viewport = []; // 当前坐标系被绘制在哪个视口中
        this.viewport = viewport;
        this.angle = angle;
        this.axis = axis;
        this.pos = pos;
        this.isDrawAxis = isDrawAxis;
        this.isD3D = isD3D;
    }
    static makeViewportCoordSystems(width, height, row = 2, colum = 2) {
        let coords = [];
        let w = width / colum; // 一行有多少个
        let h = height / row; // 一列右多少个
        // 循环生成GLCoordSystem对象，每个GLCoordSystem内置了表示viewport的数组
        for (let i = 0; i < colum; i++) {
            for (let j = 0; j < row; j++) {
                // viewport是[ x , y , width , height ]格式
                coords.push(new GLCoordSystem([i * w, j * h, w, h]));
            }
        }
        // 将生成的GLCoordSystem数组返回
        return coords;
    }
}


/***/ }),

/***/ "./src/webgl/WebGLHepler.ts":
/*!**********************************!*\
  !*** ./src/webgl/WebGLHepler.ts ***!
  \**********************************/
/*! exports provided: EShaderType, EGLSLESDataType, GLUniformInfo, GLAttribInfo, GLHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShaderType", function() { return EShaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGLSLESDataType", function() { return EGLSLESDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLUniformInfo", function() { return GLUniformInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLAttribInfo", function() { return GLAttribInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLHelper", function() { return GLHelper; });
// 枚举类
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["VS_SHADER"] = 0] = "VS_SHADER";
    EShaderType[EShaderType["FS_SHADER"] = 1] = "FS_SHADER";
})(EShaderType || (EShaderType = {}));
var EGLSLESDataType;
(function (EGLSLESDataType) {
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EGLSLESDataType[EGLSLESDataType["INT_VEC2"] = 35667] = "INT_VEC2";
    EGLSLESDataType[EGLSLESDataType["INT_VEC3"] = 35668] = "INT_VEC3";
    EGLSLESDataType[EGLSLESDataType["INT_VEC4"] = 35669] = "INT_VEC4";
    EGLSLESDataType[EGLSLESDataType["BOOL"] = 35670] = "BOOL";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_2D"] = 35677] = "SAMPLER_2D";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_CUBE"] = 35678] = "SAMPLER_CUBE";
    EGLSLESDataType[EGLSLESDataType["FLOAT"] = 5126] = "FLOAT";
    EGLSLESDataType[EGLSLESDataType["INT"] = 5124] = "INT";
})(EGLSLESDataType || (EGLSLESDataType = {}));
class GLUniformInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class GLAttribInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class GLHelper {
    static printStates(gl) {
        // 所有的boolean状态变量，共9个
        console.log("1. isBlendEnable = " + gl.isEnabled(gl.BLEND));
        console.log("2. isCullFaceEnable = " + gl.isEnabled(gl.CULL_FACE));
        console.log("3. isDepthTestEnable = " + gl.isEnabled(gl.DEPTH_TEST));
        console.log("4. isDitherEnable = " + gl.isEnabled(gl.DITHER));
        console.log("5. isPolygonOffsetFillEnable = " + gl.isEnabled(gl.POLYGON_OFFSET_FILL));
        console.log("6. isSampleAlphtToCoverageEnable = " + gl.isEnabled(gl.SAMPLE_ALPHA_TO_COVERAGE));
        console.log("7. isSampleCoverageEnable = " + gl.isEnabled(gl.SAMPLE_COVERAGE));
        console.log("8. isScissorTestEnable = " + gl.isEnabled(gl.SCISSOR_TEST));
        console.log("9. isStencilTestEnable = " + gl.isEnabled(gl.STENCIL_TEST));
    }
    static printWebGLInfo(gl) {
        console.log("renderer = " + gl.getParameter(gl.RENDERER));
        console.log("version = " + gl.getParameter(gl.VERSION));
        console.log("vendor = " + gl.getParameter(gl.VENDOR));
        console.log("glsl version = " + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    }
    static printWebGLTextureInfo(gl) {
        console.log("MAX_COMBINED_TEXTURE_IMAGE_UNITS = ", gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        console.log("MAX_TEXTURE_IMAGE_UNITS = ", gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        console.log("MAX_TEXTURE_SIZE = ", gl.getParameter(gl.MAX_TEXTURE_SIZE));
        console.log("MAX_CUBE_MAP_TEXTURE_SIZE = ", gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
    }
    static triggerContextLostEvent(gl) {
        let ret = gl.getExtension('WEBGL_lose_context');
        if (ret !== null) {
            ret.loseContext();
        }
    }
    static checkGLError(gl) {
        let err = gl.getError();
        if (err === 0) {
            return false;
        }
        else {
            console.log("WebGL Error NO: ", err);
            return true;
        }
    }
    static setDefaultState(gl) {
        // default [r=0,g=0,b=0,a=0]
        gl.clearColor(0.0, 0.0, 0.0, 0.0); // 每次清屏时，将颜色缓冲区设置为全透明黑色
        gl.clearDepth(1.0); // 每次清屏时，将深度缓冲区设置为1.0
        gl.enable(gl.DEPTH_TEST); //开启深度测试
        gl.enable(gl.CULL_FACE); //开启背面剔除
        gl.enable(gl.SCISSOR_TEST); // 开启裁剪测试
    }
    static setViewport(gl, v) {
        gl.viewport(v[0], v[1], v[2], v[3]);
    }
    static createShader(gl, type) {
        let shader = null;
        if (type === EShaderType.VS_SHADER) {
            shader = gl.createShader(gl.VERTEX_SHADER);
        }
        else {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }
        if (shader === null) {
            // 如果创建WebGLShader对象失败，我们采取抛错错误的处理方式
            throw new Error("WebGLShader创建失败！");
        }
        return shader;
    }
    static compileShader(gl, code, shader) {
        gl.shaderSource(shader, code); // 载入shader源码
        gl.compileShader(shader); // 编译shader源码
        // 检查编译错误
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
            // 如果编译出现错误，则弹出对话框，了解错误的原因
            alert(gl.getShaderInfoLog(shader));
            // 然后将shader删除掉，防止内存泄漏
            gl.deleteShader(shader);
            // 编译错误返回false
            return false;
        }
        // 编译成功返回true
        return true;
    }
    static createProgram(gl) {
        let program = gl.createProgram();
        if (program === null) {
            // 直接抛出错误
            throw new Error("WebGLProgram创建失败！");
        }
        return program;
    }
    static linkProgram(gl, // 渲染上下文对象
    program, // 链接器对象
    vsShader, // 要链接的顶点着色器
    fsShader, // 要链接的片段着色器
    beforeProgramLink = null, afterProgramLink = null) {
        // 1、使用attachShader方法将顶点和片段着色器与当前的连接器相关联
        gl.attachShader(program, vsShader);
        gl.attachShader(program, fsShader);
        // 2、在调用linkProgram方法之前，按需触发beforeProgramLink回调函数
        if (beforeProgramLink !== null) {
            beforeProgramLink(gl, program);
        }
        // 3、调用linkProgram进行链接操作
        gl.linkProgram(program);
        // 4、使用带gl.LINK_STATUS参数的getProgramParameter方法，进行链接状态检查
        if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
            // 4.1 如果链接出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 4.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 4.3 返回链接失败状态
            return false;
        }
        // 5、使用validateProgram进行链接验证
        gl.validateProgram(program);
        // 6、使用带gl.VALIDATE_STATUS参数的getProgramParameter方法，进行验证状态检查
        if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
            // 6.1 如果验证出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 6.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 6.3 返回链接失败状态
            return false;
        }
        // 7、全部正确，按需调用afterProgramLink回调函数
        if (afterProgramLink !== null) {
            afterProgramLink(gl, program);
        }
        // 8、返回链接正确表示
        return true;
    }
    static getProgramActiveAttribs(gl, program, out) {
        //获取当前active状态的attribute和uniform的数量
        //很重要一点，active_attributes/uniforms必须在link后才能获得
        let attributsCount = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        //很重要一点，所谓active是指uniform已经被使用的，否则不属于uniform,uniform在shader中必须是读取，不能赋值
        //很重要一点，attribute在shader中只能读取，不能赋值,如果没有被使用的话，也是不算入activeAttrib中去的
        for (let i = 0; i < attributsCount; i++) {
            let info = gl.getActiveAttrib(program, i);
            if (info) {
                out[info.name] = new GLAttribInfo(info.size, info.type, gl.getAttribLocation(program, info.name));
            }
        }
    }
    static getProgramAtciveUniforms(gl, program, out) {
        let uniformsCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformsCount; i++) {
            let info = gl.getActiveUniform(program, i);
            if (info) {
                let loc = gl.getUniformLocation(program, info.name);
                if (loc !== null) {
                    out[info.name] = new GLUniformInfo(info.size, info.type, loc);
                }
            }
        }
    }
    static createBuffer(gl) {
        let buffer = gl.createBuffer();
        if (buffer === null) {
            throw new Error("WebGLBuffer创建失败！");
        }
        return buffer;
    }
    static getColorBufferData(gl) {
        let pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
        gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels;
    }
}


/***/ }),

/***/ "./src/webgl/WebGLMatrixStack.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLMatrixStack.ts ***!
  \***************************************/
/*! exports provided: EMatrixMode, GLMatrixStack, GLWorldMatrixStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMatrixMode", function() { return EMatrixMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMatrixStack", function() { return GLMatrixStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLWorldMatrixStack", function() { return GLWorldMatrixStack; });
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/MathHelper */ "./src/common/math/MathHelper.ts");


var EMatrixMode;
(function (EMatrixMode) {
    EMatrixMode[EMatrixMode["MODELVIEW"] = 0] = "MODELVIEW";
    EMatrixMode[EMatrixMode["PROJECTION"] = 1] = "PROJECTION";
    EMatrixMode[EMatrixMode["TEXTURE"] = 2] = "TEXTURE";
})(EMatrixMode || (EMatrixMode = {}));
class GLMatrixStack {
    constructor() {
        //初始化时每个矩阵栈都先添加一个正交归一化后的矩阵
        this._mvStack = [];
        this._mvStack.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]());
        this._projStack = [];
        this._projStack.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]());
        this._texStack = [];
        this._texStack.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]());
        this.matrixMode = EMatrixMode.MODELVIEW;
    }
    get modelViewMatrix() {
        if (this._mvStack.length <= 0) {
            throw new Error("model view matrix stack为空！");
        }
        return this._mvStack[this._mvStack.length - 1];
    }
    get projectionMatrix() {
        if (this._projStack.length <= 0) {
            throw new Error("projection matrix stack为空！");
        }
        return this._projStack[this._projStack.length - 1];
    }
    get modelViewProjectionMatrix() {
        let ret = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this.projectionMatrix.copy(ret);
        ret.multiply(this.modelViewMatrix);
        return ret;
    }
    get normalMatrix() {
        let ret = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this.modelViewMatrix.copy(ret);
        this.modelViewMatrix.inverse(ret);
        ret.transpose();
        return ret;
    }
    get textureMatrix() {
        if (this._texStack.length <= 0) {
            throw new Error("projection matrix stack为空！");
        }
        return this._texStack[this._texStack.length - 1];
    }
    pushMatrix() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                let mv = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
                this.modelViewMatrix.copy(mv);
                this._mvStack.push(mv);
                break;
            case EMatrixMode.PROJECTION:
                let proj = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
                this.projectionMatrix.copy(proj);
                this._projStack.push(proj);
                break;
            case EMatrixMode.TEXTURE:
                let tex = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
                this.textureMatrix.copy(tex);
                this._texStack.push(tex);
                break;
        }
        return this;
    }
    popMatrix() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this._mvStack.pop();
                break;
            case EMatrixMode.PROJECTION:
                this._projStack.pop();
                break;
            case EMatrixMode.TEXTURE:
                this._texStack.pop();
                break;
        }
        return this;
    }
    loadIdentity() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.setIdentity();
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.setIdentity();
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.setIdentity();
                break;
        }
        return this;
    }
    loadMatrix(mat) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                mat.copy(this.modelViewMatrix);
                break;
            case EMatrixMode.PROJECTION:
                mat.copy(this.projectionMatrix);
                break;
            case EMatrixMode.TEXTURE:
                mat.copy(this.textureMatrix);
                break;
        }
        return this;
    }
    perspective(fov, aspect, near, far, isRadians = false) {
        this.matrixMode = EMatrixMode.PROJECTION;
        if (isRadians == false) {
            fov = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(fov);
        }
        let mat = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].perspective(fov, aspect, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    frustum(left, right, bottom, top, near, far) {
        this.matrixMode = EMatrixMode.PROJECTION;
        let mat = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].frustum(left, right, bottom, top, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    ortho(left, right, bottom, top, near, far) {
        this.matrixMode = EMatrixMode.PROJECTION;
        let mat = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].orthographic(left, right, bottom, top, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    lookAt(pos, target, up = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].up) {
        this.matrixMode = EMatrixMode.MODELVIEW;
        let mat = _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"].lookAt(pos, target, up);
        this.loadMatrix(mat);
        return this;
    }
    makeView(pos, xAxis, yAxis, zAxis) {
        zAxis.normalize();
        //forward cross right = up
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(zAxis, xAxis, yAxis);
        yAxis.normalize();
        //up cross forward = right
        _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(yAxis, zAxis, xAxis);
        xAxis.normalize();
        let x = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(xAxis, pos);
        let y = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(yAxis, pos);
        let z = -_common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(zAxis, pos);
        let mat = this._mvStack[this._mvStack.length - 1];
        mat.values[0] = xAxis.x;
        mat.values[1] = yAxis.x;
        mat.values[2] = zAxis.x;
        mat.values[3] = 0.0;
        mat.values[4] = xAxis.y;
        mat.values[5] = yAxis.y;
        mat.values[6] = zAxis.y;
        mat.values[7] = 0.0;
        mat.values[8] = xAxis.z;
        mat.values[9] = yAxis.z;
        mat.values[10] = zAxis.z;
        mat.values[11] = 0.0;
        mat.values[12] = x;
        mat.values[13] = y;
        mat.values[14] = z;
        mat.values[15] = 1.0;
        return this;
    }
    multMatrix(mat) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.multiply(mat);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.multiply(mat);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.multiply(mat);
                break;
        }
        return this;
    }
    translate(pos) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.translate(pos);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.translate(pos);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.translate(pos);
                break;
        }
        return this;
    }
    rotate(angle, axis, isRadians = false) {
        if (isRadians === false) {
            angle = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(angle);
        }
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.rotate(angle, axis);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.rotate(angle, axis);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.rotate(angle, axis);
                break;
        }
        return this;
    }
    scale(s) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.scale(s);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.scale(s);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.scale(s);
                break;
        }
        return this;
    }
}
class GLWorldMatrixStack {
    constructor() {
        //初始化时每个矩阵栈都先添加一个正交归一化后的矩阵
        this._worldMatrixStack = [];
        this._worldMatrixStack.push(new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]());
    }
    get modelViewMatrix() {
        if (this._worldMatrixStack.length <= 0) {
            throw new Error(" model matrix stack为空！");
        }
        return this._worldMatrixStack[this._worldMatrixStack.length - 1];
    }
    pushMatrix() {
        let mv = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        this.modelViewMatrix.copy(mv);
        this._worldMatrixStack.push(mv);
        return this;
    }
    popMatrix() {
        this._worldMatrixStack.pop();
        return this;
    }
    loadIdentity() {
        this.modelViewMatrix.setIdentity();
        return this;
    }
    loadMatrix(mat) {
        mat.copy(this.modelViewMatrix);
        return this;
    }
    multMatrix(mat) {
        this.modelViewMatrix.multiply(mat);
        return this;
    }
    translate(pos) {
        this.modelViewMatrix.translate(pos);
        return this;
    }
    rotate(angle, axis, isRadians = false) {
        if (isRadians === false) {
            angle = _common_math_MathHelper__WEBPACK_IMPORTED_MODULE_1__["MathHelper"].toRadian(angle);
        }
        this.modelViewMatrix.rotate(angle, axis);
        return this;
    }
    scale(s) {
        this.modelViewMatrix.scale(s);
        return this;
    }
}


/***/ }),

/***/ "./src/webgl/WebGLMesh.ts":
/*!********************************!*\
  !*** ./src/webgl/WebGLMesh.ts ***!
  \********************************/
/*! exports provided: GLMeshBase, GLStaticMesh, GLIndexedStaticMesh, EVertexLayout, GLMeshBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMeshBase", function() { return GLMeshBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLStaticMesh", function() { return GLStaticMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLIndexedStaticMesh", function() { return GLIndexedStaticMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVertexLayout", function() { return EVertexLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMeshBuilder", function() { return GLMeshBuilder; });
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");
/* harmony import */ var _WebGLProgram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebGLProgram */ "./src/webgl/WebGLProgram.ts");




// 使用abstract声明抽象类
class GLMeshBase {
    constructor(gl, attribState, drawMode = gl.TRIANGLES) {
        this.gl = gl;
        // 获取VAO的步骤：
        // 1、使用gl.getExtension( "OES_vertex_array_object" )方式获取VAO扩展
        let vao = this.gl.getExtension("OES_vertex_array_object");
        if (vao === null) {
            throw new Error("Not Support OES_vertex_array_object");
        }
        this._vao = vao;
        // 2、调用createVertexArrayOES获取VAO对象
        let vaoTarget = this._vao.createVertexArrayOES();
        if (vaoTarget === null) {
            throw new Error("Not Support WebGLVertexArrayObjectOES");
        }
        this._vaoTarget = vaoTarget;
        // 顶点属性格式，和绘制当前网格时使用的GLProgram具有一致的attribBits
        this._attribState = attribState;
        // 调用GLAttribState的getVertexByteStride方法，根据attribBits计算出顶点的stride字节数
        this._attribStride = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getVertexByteStride(this._attribState);
        // 设置当前绘制时使用的基本几何图元类型，默认为三角形集合
        this.drawMode = drawMode;
    }
    bind() {
        // 绑定VAO对象
        this._vao.bindVertexArrayOES(this._vaoTarget);
    }
    unbind() {
        // 解绑VAO
        this._vao.bindVertexArrayOES(null);
    }
    get vertexStride() {
        return this._attribStride;
    }
}
class GLStaticMesh extends GLMeshBase {
    constructor(gl, attribState, vbo, ibo = null, drawMode = gl.TRIANGLES) {
        // 调用基类的构造函数
        super(gl, attribState, drawMode);
        this._vertCount = 0; // 顶点的数量
        // GLStaticMesh内置了一个可选的索引缓冲区
        this._ibo = null;
        this._indexCount = 0; // 索引的数量
        // 关键的操作：
        // 要使用VAO来管理VBO和EBO的话，必须要在VBO和EBO创建绑定之前先绑定VAO对象，这个顺序不能搞错！！！
        // 先绑定VAO后，那么后续创建的VBO和EBO对象都归属VAO管辖！！！
        this.bind();
        // 在创建并绑定vbo
        let vb = gl.createBuffer();
        if (vb === null) {
            throw new Error("vbo creation fail");
        }
        this._vbo = vb;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._vbo); // 绑定VBO
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vbo, this.gl.STATIC_DRAW); // 将顶点数据载入到VBO中
        // 然后计算出交错存储的顶点属性attribOffsetMap相关的值
        let offsetMap = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getInterleavedLayoutAttribOffsetMap(this._attribState);
        // 计算出顶点的数量
        this._vertCount = vbo.byteLength / offsetMap[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].ATTRIBSTRIDE];
        // 使用VAO后，我们只要初始化时设置一次setAttribVertexArrayPointer和setAttribVertexArrayState就行了
        // 当我们后续调用基类的bind方法绑定VAO对象后，VAO会自动处理顶点地址绑定和顶点属性寄存器开启相关操作，这就简化了很多操作
        _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(gl, offsetMap);
        _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(gl, this._attribState);
        // 再创建IBO（IBO表示Index Buffer Object,EBO表示Element Buffer Object，表示一样的概念）
        this.setIBO(ibo);
        // 必须放在这里
        this.unbind();
        this.mins = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]();
        this.maxs = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]();
    }
    setIBO(ibo) {
        if (ibo === null) {
            return; // 按需创建IBO
        }
        // 创建ibo
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        // 绑定ibo
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        // 将索引数据上传到ibo中
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, ibo, this.gl.STATIC_DRAW);
        // 计算出索引个数
        this._indexCount = ibo.length;
    }
    draw() {
        this.bind(); // 绘制前先要绑定VAO
        if (this._ibo !== null) {
            // 如果有IBO，使用drawElements方法绘制静态网格对象
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            // 如果没有IBO，则使用drawArrays方法绘制静态网格对象
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind(); // 绘制好后解除VAO绑定
    }
    // 很重要的几点说明：
    // drawElements中的offset是以字节为单位！！！！！
    // 而count是以索引个数为单位
    // drawRange绘制从offset偏移的字节数开始，绘制count个索引
    // drawRange内部并没有调用bind和unbind方法，因此要调用drawRange方法的话，必须如下方式：
    /*
        mesh.bind(); // 绑定VAO
        mesh.drawRange( 2, 5); // 调用drawRange方法
        mesh.unbind(); // 解绑VAO
    */
    drawRange(offset, count) {
        if (this._ibo !== null) {
            this.gl.drawElements(this.drawMode, count, this.gl.UNSIGNED_SHORT, offset);
        }
        else {
            this.gl.drawArrays(this.drawMode, offset, count);
        }
    }
}
class GLIndexedStaticMesh extends GLStaticMesh {
    constructor(gl, attribState, vbo, drawMode = gl.TRIANGLES) {
        super(gl, attribState, vbo, null, drawMode);
        this._indices = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Uint16Array, 90);
    }
    addIndex(idx) {
        this._indices.push(idx);
        this._indexCount = this._indices.length;
        return this;
    }
    clearIndices() {
        this._indices.clear();
        this._indexCount = 0;
        return this;
    }
    setIBO(ibo) {
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
    }
    draw() {
        this.bind();
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount);
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind();
    }
    // 很重要的一点
    // drawElements中的offset是以字节为单位！！！！！
    // 而count是以索引个数为单位
    // 所以偏移的寻址方式是 : offset 
    // count的字节数:        sizeof (gl . UNSIGNED_SHORT) * count
    drawRange(offset, count) {
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount);
            this.gl.drawElements(this.drawMode, count, this.gl.UNSIGNED_SHORT, offset);
        }
        else {
            this.gl.drawArrays(this.drawMode, offset, count);
        }
    }
}
var EVertexLayout;
(function (EVertexLayout) {
    EVertexLayout[EVertexLayout["INTERLEAVED"] = 0] = "INTERLEAVED";
    EVertexLayout[EVertexLayout["SEQUENCED"] = 1] = "SEQUENCED";
    EVertexLayout[EVertexLayout["SEPARATED"] = 2] = "SEPARATED";
})(EVertexLayout || (EVertexLayout = {}));
class GLMeshBuilder extends GLMeshBase {
    constructor(gl, state, program, texture = null, layout = EVertexLayout.INTERLEAVED) {
        super(gl, state); // 调用基类的构造方法
        // 为了简单起见，只支持顶点的位置坐标、纹理0坐标、颜色和法线这四种顶点属性格式
        // 表示当前正在输入的顶点属性值
        this._color = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec4"]([0, 0, 0, 0]);
        this._texCoord = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec2"]([0, 0]);
        this._normal = new _common_math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]([0, 0, 1]);
        // 渲染的数据源
        this._lists = {};
        // 渲染用的VBO
        this._buffers = {};
        // 要渲染的顶点数量
        this._vertCount = 0;
        this._indexCount = -1;
        // 根据attribBits，测试是否使用了下面几种类型的顶点属性格式
        this._hasColor = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasColor(this._attribState);
        this._hasTexcoord = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_0(this._attribState);
        this._hasNormal = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasNormal(this._attribState);
        this._ibo = null;
        // 默认情况下，使用INTERLEAVED存储顶点
        this._layout = layout;
        // 设置当前使用的GLProgram和GLTexture2D对象
        this.program = program;
        this.texture = texture;
        // 先绑定VAO对象
        this.bind();
        // 生成索引缓存
        let buffer = this.gl.createBuffer();
        buffer = this.gl.createBuffer();
        if (buffer === null) {
            throw new Error("WebGLBuffer创建不成功!");
        }
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // interleaved的话：
            // 使用一个arraylist,一个顶点缓存
            // 调用的是GLAttribState.getInterleavedLayoutAttribOffsetMap方法
            this._lists[GLMeshBuilder.INTERLEAVED] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            this._buffers[GLMeshBuilder.INTERLEAVED] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            let map = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getInterleavedLayoutAttribOffsetMap(this._attribState);
            // 调用如下两个方法
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(this.gl, map);
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(this.gl, this._attribState);
        }
        else if (this._layout === EVertexLayout.SEQUENCED) {
            // sequenced的话：
            // 使用n个arraylist,一个顶点缓存
            // 无法在初始化时调用的是getSequencedLayoutAttribOffsetMap方法
            // 无法使用GLAttribState.setAttribVertexArrayPointer方法预先固定地址
            // 能够使用GLAttribState.setAttribVertexArrayState开启顶点属性寄存器
            this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            if (this._hasColor) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            }
            if (this._hasTexcoord) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            }
            if (this._hasNormal) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            }
            buffer = this.gl.createBuffer();
            if (buffer === null) {
                throw new Error("WebGLBuffer创建不成功!");
            }
            this._buffers[GLMeshBuilder.SEQUENCED] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            // sequenced没法预先设置指针，因为是动态的
            // 但是可以预先设置顶点属性状态
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(this.gl, this._attribState);
        }
        else {
            // seperated的话：
            // 使用n个arraylist,n个顶点缓存
            // 调用的是getSepratedLayoutAttribOffsetMap方法
            // 能够使用能够使用GLAttribState.setAttribVertexArrayPointer方法预先固定地址
            // 能够使用GLAttribState.setAttribVertexArrayState开启顶点属性寄存器
            // 肯定要有的是位置数据
            this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
            this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION, 3, gl.FLOAT, false, 0, 0);
            this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION);
            if (this._hasColor) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
                buffer = this.gl.createBuffer();
                if (buffer === null) {
                    throw new Error("WebGLBuffer创建不成功!");
                }
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION);
            }
            if (this._hasTexcoord) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_BIT, 2, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_BIT);
            }
            if (this._hasNormal) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_2__["TypedArrayList"](Float32Array);
                buffer = this.gl.createBuffer();
                if (buffer === null) {
                    throw new Error("WebGLBuffer创建不成功!");
                }
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION, 3, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION);
            }
            //GLAttribState.setAttribVertexArrayPointer( this.gl, map );
            //GLAttribState.setAttribVertexArrayState( this.gl, this._attribState );
        }
        this.unbind();
    }
    setTexture(tex) {
        this.texture = tex.texture;
    }
    setIBO(data) {
        // 创建ibo
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        // 绑定ibo
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        // 将索引数据上传到ibo中
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
        this._indexCount = data.length;
    }
    // 输入rgba颜色值，取值范围为[ 0 , 1 ]之间,返回this,都是链式操作
    color(r, g, b, a = 1.0) {
        if (this._hasColor) {
            this._color.r = r;
            this._color.g = g;
            this._color.b = b;
            this._color.a = a;
        }
        return this;
    }
    // 输入uv纹理坐标值，返回this,都是链式操作
    texcoord(u, v) {
        if (this._hasTexcoord) {
            this._texCoord.x = u;
            this._texCoord.y = v;
        }
        return this;
    }
    // 输入法线值xyz，返回this,都是链式操作
    normal(x, y, z) {
        if (this._hasNormal) {
            this._normal.x = x;
            this._normal.y = y;
            this._normal.z = z;
        }
        return this;
    }
    // vertex必须要最后调用，输入xyz,返回this,都是链式操作
    vertex(x, y, z) {
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // 针对interleaved存储方式的操作
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            // position
            list.push(x);
            list.push(y);
            list.push(z);
            // texcoord
            if (this._hasTexcoord) {
                list.push(this._texCoord.x);
                list.push(this._texCoord.y);
            }
            // normal
            if (this._hasNormal) {
                list.push(this._normal.x);
                list.push(this._normal.y);
                list.push(this._normal.z);
            }
            // color
            if (this._hasColor) {
                list.push(this._color.r);
                list.push(this._color.g);
                list.push(this._color.b);
                list.push(this._color.a);
            }
        }
        else { // sequenced和separated都是具有多个ArrayList
            // 针对除interleaved存储方式外的操作
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            list.push(x);
            list.push(y);
            list.push(z);
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list.push(this._texCoord.x);
                list.push(this._texCoord.y);
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list.push(this._normal.x);
                list.push(this._normal.y);
                list.push(this._normal.z);
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list.push(this._color.r);
                list.push(this._color.g);
                list.push(this._color.b);
                list.push(this._color.a);
            }
        }
        // 记录更新后的顶点数量
        this._vertCount++;
        return this;
    }
    // 每次调用上述几个添加顶点属性的方法之前，必须要先调用begin方法，返回this指针，链式操作
    begin(drawMode = this.gl.TRIANGLES) {
        this.drawMode = drawMode; // 设置要绘制的mode，7种基本几何图元
        this._vertCount = 0; // 清空顶点数为0
        if (this._layout === EVertexLayout.INTERLEAVED) {
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            list.clear(); // 使用自己实现的动态类型数组，重用
        }
        else {
            // 使用自己实现的动态类型数组，重用
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            list.clear();
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list.clear();
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list.clear();
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list.clear();
            }
        }
        return this;
    }
    // end方法用于渲染操作
    end(mvp) {
        this.program.bind(); // 绑定GLProgram
        this.program.setMatrix4(_WebGLProgram__WEBPACK_IMPORTED_MODULE_3__["GLProgram"].MVPMatrix, mvp); // 载入MVPMatrix uniform变量
        if (this.texture !== null) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            this.program.loadSampler();
        }
        this.bind(); // 绑定VAO
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // 获取数据源
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            // 获取VBO
            let buffer = this._buffers[GLMeshBuilder.INTERLEAVED];
            // 绑定VBO
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            // 上传渲染数据到VBO中
            this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
        }
        else if (this._layout === EVertexLayout.SEQUENCED) {
            // 针对sequenced存储方式的渲染处理
            let buffer = this._buffers[GLMeshBuilder.SEQUENCED];
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            //用的是预先分配显存机制
            this.gl.bufferData(this.gl.ARRAY_BUFFER, this._attribStride * this._vertCount, this.gl.DYNAMIC_DRAW);
            let map = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getSequencedLayoutAttribOffsetMap(this._attribState, this._vertCount);
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, list.subArray());
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME], list.subArray());
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME], list.subArray());
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME], list.subArray());
            }
            // 每次都要重新计算和绑定顶点属性数组的首地址
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(this.gl, map);
        }
        else {
            // 针对seperated存储方式的渲染数据处理
            // 需要每个VBO都绑定一次
            // position
            let buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            // texture
            if (this._hasTexcoord) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
            // normal
            if (this._hasNormal) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
            // color
            if (this._hasColor) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
        }
        // GLMeshBuilder不使用索引缓冲区绘制方式，因此调用drawArrays方法
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            //this.gl.bufferData( this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount );
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind(); // 解绑VAO
        this.program.unbind(); // 解绑GLProgram
    }
}
// 字符串常量key
GLMeshBuilder.SEQUENCED = "SEQUENCED";
GLMeshBuilder.INTERLEAVED = "INTERLEAVED";


/***/ }),

/***/ "./src/webgl/WebGLProgram.ts":
/*!***********************************!*\
  !*** ./src/webgl/WebGLProgram.ts ***!
  \***********************************/
/*! exports provided: GLProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLProgram", function() { return GLProgram; });
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLShaderSource */ "./src/webgl/WebGLShaderSource.ts");
/* harmony import */ var _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebGLHepler */ "./src/webgl/WebGLHepler.ts");



/*
比较特别的是Texture Unit
glActiveTexture 激活某个TextureUnit
glBindTexture   激活的TextureUnit中放入纹理
glUniform1i     将unit所绑定的纹理sampler传输到GPU

绘制时，不需要ActiveTexture了，只要bingTexture就可以了
*/
// camera相关transform uniform可以预先设定
// texture相关，固定化，可以预先设定
// 其他需要每帧更新
class GLProgram {
    constructor(context, attribState, vsShader = null, fsShader = null) {
        this._vsShaderDefineStrings = [];
        this._fsShaderDefineStrings = [];
        this.gl = context;
        this._attribState = attribState; //最好从shader中抽取
        this.bindCallback = null;
        this.unbindCallback = null;
        let shader = _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createShader(this.gl, _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["EShaderType"].VS_SHADER);
        if (shader === null) {
            throw new Error("Create Vertex Shader Object Fail!!!");
        }
        this.vsShader = shader;
        shader = null;
        shader = _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createShader(this.gl, _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["EShaderType"].FS_SHADER);
        if (shader === null) {
            throw new Error("Create Fragment Shader Object Fail!!!");
        }
        this.fsShader = shader;
        let program = _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createProgram(this.gl);
        if (program === null) {
            throw new Error("Create WebGLProgram Object Fail!!!");
        }
        this.program = program;
        this.attribMap = {};
        this.uniformMap = {};
        if (vsShader !== null && fsShader !== null) {
            this.loadShaders(vsShader, fsShader);
        }
        this.name = name;
    }
    get attribState() {
        return this._attribState;
    }
    progromBeforeLink(gl, program) {
        //链接前才能使用bindAttribLocation函数
        //1 attrib名字必须和shader中的命名要一致
        //2 数量必须要和mesh中一致
        //3 mesh中的数组的component必须固定
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasPosition(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasNormal(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_0(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_1(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD1_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD1_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasColor(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTangent(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TANGENT_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TANGENT_NAME);
        }
    }
    // 链接后的回调函数实际上在本类中是多余的
    // 因为我们已经固定了attribue的索引号以及getUniformLocation方法获取某个uniform变量
    // 这里只是为了输出当前Program相关的uniform和attribute变量的信息
    progromAfterLink(gl, program) {
        //获取当前active状态的attribute和uniform的数量
        //很重要一点，active_attributes/uniforms必须在link后才能获得
        _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].getProgramActiveAttribs(gl, program, this.attribMap);
        _WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].getProgramAtciveUniforms(gl, program, this.uniformMap);
        console.log(JSON.stringify(this.attribMap));
        console.log(JSON.stringify(this.uniformMap));
    }
    // 在Vertex Shader中动态添加宏
    addVSShaderMacro(str) {
        if (str.indexOf("#define ") === -1) {
            str = "#define " + str;
        }
        this._vsShaderDefineStrings.push(str);
    }
    // 在Fragment Shader中动态添加宏
    addFSShaderMacro(str) {
        if (str.indexOf("#define ") === -1) {
            str = "#define " + str;
        }
        this._fsShaderDefineStrings.push(str);
    }
    // vs fs都要添加的宏，例如在VS / FS中添加如下宏：
    // #ifdef GL_ES
    //   precision highp float;
    // #endif
    addShaderMacro(str) {
        this.addVSShaderMacro(str);
        this.addFSShaderMacro(str);
    }
    loadShaders(vs, fs) {
        if (this._vsShaderDefineStrings.length > 0) {
            let join = this._vsShaderDefineStrings.join("\n");
            vs = join + vs;
        }
        if (this._fsShaderDefineStrings.length > 0) {
            let join = this._fsShaderDefineStrings.join("\n");
            fs = join + fs;
        }
        if (_WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].compileShader(this.gl, vs, this.vsShader) === false) {
            throw new Error(" WebGL顶点Shader链接不成功! ");
        }
        if (_WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].compileShader(this.gl, fs, this.fsShader) === false) {
            throw new Error(" WebGL像素片段Shader链接不成功! ");
        }
        if (_WebGLHepler__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].linkProgram(this.gl, this.program, this.vsShader, this.fsShader, this.progromBeforeLink.bind(this), this.progromAfterLink.bind(this)) === false) {
            throw new Error(" WebGLProgram链接不成功! ");
        }
        console.log(JSON.stringify(this.attribMap));
    }
    bind() {
        this.gl.useProgram(this.program);
        if (this.bindCallback !== null) {
            this.bindCallback(this);
        }
    }
    unbind() {
        if (this.unbindCallback !== null) {
            this.unbindCallback(this);
        }
        this.gl.useProgram(null);
    }
    getUniformLocation(name) {
        return this.gl.getUniformLocation(this.program, name);
    }
    getAttributeLocation(name) {
        return this.gl.getAttribLocation(this.program, name);
    }
    setAttributeLocation(name, loc) {
        this.gl.bindAttribLocation(this.program, loc, name);
    }
    setInt(name, i) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1i(loc, i);
            return true;
        }
        return false;
    }
    setFloat(name, f) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1f(loc, f);
            return true;
        }
        return false;
    }
    setVector2(name, v2) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform2fv(loc, v2.values);
            return true;
        }
        return false;
    }
    setVector3(name, v3) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform3fv(loc, v3.values);
            return true;
        }
        return false;
    }
    setVector4(name, v4) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform4fv(loc, v4.values);
            return true;
        }
        return false;
    }
    setQuat(name, q) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform4fv(loc, q.values);
            return true;
        }
        return false;
    }
    setMatrix3(name, mat) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniformMatrix3fv(loc, false, mat.values);
            return true;
        }
        return false;
    }
    setMatrix4(name, mat) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniformMatrix4fv(loc, false, mat.values);
            return true;
        }
        return false;
    }
    setSampler(name, sampler) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1i(loc, sampler);
            return true;
        }
        return false;
    }
    loadModeViewMatrix(mat) {
        return this.setMatrix4(GLProgram.MVMatrix, mat);
    }
    loadSampler(unit = 0) {
        return this.setSampler(GLProgram.Sampler, unit);
    }
    /*
    public static createDefaultTextureProgram ( gl: WebGLRenderingContext ): GLProgram
    {
        let pro: GLProgram = new GLProgram( gl, GLAttribState.POSITION_BIT | GLAttribState.TEXCOORD_BIT,
            GLShaderSource.textureShader.vs, GLShaderSource.textureShader.fs );
        return pro;
    }

    public static createDefaultColorProgram ( gl: WebGLRenderingContext ): GLProgram
    {
        let pro: GLProgram = new GLProgram( gl, GLAttribState.POSITION_BIT | GLAttribState.COLOR_BIT,
            GLShaderSource.colorShader.vs, GLShaderSource.colorShader.fs );
        return pro;
    }
    */
    static createDefaultTextureProgram(gl) {
        let pro = new GLProgram(gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].makeVertexAttribs(true, false, false, false, false), _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].textureShader.vs, _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].textureShader.fs);
        return pro;
    }
    static createDefaultColorProgram(gl) {
        let pro = new GLProgram(gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].makeVertexAttribs(false, false, false, false, true), _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].colorShader.vs, _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].colorShader.fs);
        return pro;
    }
}
// uniforms相关定义
//vs常用的uniform命名
GLProgram.MVMatrix = "uMVMatrix"; // 模型视图矩阵
GLProgram.ModelMatrix = "uModelMatrix"; // 模型矩阵
GLProgram.ViewMatrix = "uViewMatrix"; // 视矩阵
GLProgram.ProjectMatrix = "uProjectMatrix"; // 投影矩阵
GLProgram.NormalMatrix = "uNormalMatrix"; // 法线矩阵                  
GLProgram.MVPMatrix = "uMVPMatrix"; // 模型_视图_投影矩阵
GLProgram.Color = "uColor"; // 颜色值
//ps常用的uniform命名
GLProgram.Sampler = "uSampler"; // 纹理取样器
GLProgram.DiffuseSampler = "uDiffuseSampler"; // 漫反射取样器
GLProgram.NormalSampler = "uNormalSampler"; // 法线取样器
GLProgram.SpecularSampler = "uSpecularSampler"; // 高光取样器
GLProgram.DepthSampler = "uDepthSampler"; // 深度取样器


/***/ }),

/***/ "./src/webgl/WebGLProgramCache.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLProgramCache.ts ***!
  \****************************************/
/*! exports provided: GLProgramCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLProgramCache", function() { return GLProgramCache; });
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");

// 单例设计模式
class GLProgramCache {
    // 私有构造函数
    constructor() {
        this._dict = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
        console.log("create new GLProgramCache!!");
    }
    set(key, value) {
        this._dict.insert(key, value);
    }
    // 可能返回undefined类型
    getMaybe(key) {
        let ret = this._dict.find(key);
        return ret;
    }
    // 如果返回undefined，直接抛错
    getMust(key) {
        let ret = this._dict.find(key);
        if (ret === undefined) {
            throw new Error(key + "对应的Program不存在!!!");
        }
        return ret;
    }
    remove(key) {
        return this._dict.remove(key);
    }
}
// 只初始化一次，使用的是public static readonly声明方式
GLProgramCache.instance = new GLProgramCache();


/***/ }),

/***/ "./src/webgl/WebGLShaderSource.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLShaderSource.ts ***!
  \****************************************/
/*! exports provided: GLShaderSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLShaderSource", function() { return GLShaderSource; });
const GLShaderSource = {
    colorShader: {
        vs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        attribute vec3 aPosition;
        attribute vec4 aColor;
    
        uniform mat4 uMVPMatrix;
    
        varying vec4 vColor;
    
        void main(void){
            gl_Position = uMVPMatrix * vec4(aPosition,1.0);
            vColor = aColor;
        }
        `,
        fs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        varying  vec4 vColor;
        void main(void){
            gl_FragColor = vColor;
        }        
        `
    },
    textureShader: {
        vs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        attribute vec3 aPosition;
        attribute vec2 aTexCoord;
        uniform mat4 uMVPMatrix;
        varying vec2 vTextureCoord;
        void main(void) {
           gl_Position = uMVPMatrix * vec4(aPosition,1.0);;
           vTextureCoord = aTexCoord;
        }
    `,
        fs: `
      #ifdef GL_ES
      precision highp float;
      #endif

      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      void main(void) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
      }
    `
    }
};


/***/ }),

/***/ "./src/webgl/WebGLTexture.ts":
/*!***********************************!*\
  !*** ./src/webgl/WebGLTexture.ts ***!
  \***********************************/
/*! exports provided: EGLTexWrapType, GLTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGLTexWrapType", function() { return EGLTexWrapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return GLTexture; });
/* harmony import */ var _WebGLHepler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLHepler */ "./src/webgl/WebGLHepler.ts");

var EGLTexWrapType;
(function (EGLTexWrapType) {
    EGLTexWrapType[EGLTexWrapType["GL_REPEAT"] = 0] = "GL_REPEAT";
    EGLTexWrapType[EGLTexWrapType["GL_MIRRORED_REPEAT"] = 1] = "GL_MIRRORED_REPEAT";
    EGLTexWrapType[EGLTexWrapType["GL_CLAMP_TO_EDGE"] = 2] = "GL_CLAMP_TO_EDGE";
})(EGLTexWrapType || (EGLTexWrapType = {}));
class GLTexture {
    constructor(gl, name = '') {
        this.gl = gl;
        this.isMipmap = false;
        this.width = this.height = 0;
        this.format = gl.RGBA;
        this.type = gl.UNSIGNED_BYTE;
        let tex = gl.createTexture();
        if (tex === null) {
            throw new Error("WebGLTexture创建不成功!");
        }
        this.texture = tex;
        this.target = gl.TEXTURE_2D;
        this.name = name;
        this.wrap();
        this.filter();
    }
    // 下面三个静态辅助方法用于生成纹理的mipmap使用
    // 1、静态辅助数学方法，判断参数x（必须是4）是否是2的n次方，即x是不是1、2、4、8、16、32、64、.....
    static isPowerOfTwo(x) {
        return (x & (x - 1)) == 0;
    }
    // 2、静态辅助数学方法，给定整数参数x，取下一个2的n次方数
    // 如果x为3，则返回4
    // 如果x为4，则返回4
    // 如果x为5，则返回8
    // 依次类推
    static getNextPowerOfTwo(x) {
        if (x <= 0) {
            throw new Error("参数必须要大于0!");
        }
        --x;
        for (var i = 1; i < 32; i <<= 1) {
            x = x | x >> i;
        }
        return x + 1;
    }
    // 3、将非2的n次方的srcImage转换成2的n次方的CanvasRenderingContext2D对象
    // 然后后续用来生成mipmap纹理
    static createPowerOfTwoCanvas(srcImage) {
        let canvas = document.createElement("canvas");
        canvas.width = GLTexture.getNextPowerOfTwo(srcImage.width);
        canvas.height = GLTexture.getNextPowerOfTwo(srcImage.height);
        let ctx = canvas.getContext("2d");
        if (ctx === null) {
            throw new Error("未能成功创建CanvasRenderingContext2D对象");
        }
        ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height, 0, 0, canvas.width, canvas.height);
        return canvas;
    }
    // 下面的静态方法和成员变量用来创建默认的2的n方的纹理对象
    static createDefaultTexture(gl) {
        let step = 4;
        let canvas = document.createElement('canvas');
        canvas.width = 32 * step;
        canvas.height = 32 * step;
        let context = canvas.getContext("2d");
        if (context === null) {
            alert("离屏Canvas获取渲染上下文失败！");
            throw new Error("离屏Canvas获取渲染上下文失败！");
        }
        for (let i = 0; i < step; i++) {
            for (let j = 0; j < step; j++) {
                let idx = step * i + j;
                context.save();
                context.fillStyle = GLTexture.Colors[idx];
                context.fillRect(i * 32, j * 32, 32, 32);
                context.restore();
            }
        }
        let tex = new GLTexture(gl);
        tex.wrap();
        tex.upload(canvas);
        return tex;
    }
    bind(unit = 0) {
        if (this.texture !== null) {
            this.gl.activeTexture(this.gl.TEXTURE0 + unit);
            this.gl.bindTexture(this.target, this.texture);
        }
    }
    unbind() {
        if (this.texture) {
            this.gl.bindTexture(this.target, null);
        }
    }
    //TEXTURE_MIN_FILTER: NEAREST_MIPMAP_LINEAR(默认)
    //TEXTURE_MAG_FILTER: LINEAR(默认)
    filter(minLinear = true, magLinear = true) {
        // 在设置filter时先要绑定当前的纹理目标
        this.gl.bindTexture(this.target, this.texture);
        if (this.isMipmap) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, minLinear ? this.gl.LINEAR_MIPMAP_LINEAR : this.gl.NEAREST_MIPMAP_NEAREST);
        }
        else {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, minLinear ? this.gl.LINEAR : this.gl.NEAREST);
        }
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, magLinear ? this.gl.LINEAR : this.gl.NEAREST);
    }
    wrap(mode = EGLTexWrapType.GL_REPEAT) {
        this.gl.bindTexture(this.target, this.texture);
        if (mode === EGLTexWrapType.GL_CLAMP_TO_EDGE) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        }
        else if (mode === EGLTexWrapType.GL_REPEAT) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        }
        else {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.MIRRORED_REPEAT);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.MIRRORED_REPEAT);
        }
    }
    destory() {
        this.gl.deleteTexture(this.texture);
    }
    upload(source, unit = 0, mipmap = false) {
        this.bind(unit); // 先绑定当前要操作的WebGLTexture对象，默认为0
        //否则贴图会倒过来
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1);
        this.width = source.width;
        this.height = source.height;
        if (mipmap === true) // 使用mipmap生成纹理
         {
            let isWidthPowerOfTwo = GLTexture.isPowerOfTwo(this.width);
            let isHeightPowerOfTwo = GLTexture.isPowerOfTwo(this.height);
            // 如果源图像的宽度和高度都是2的n次方格式的，则直接载入像素数据然后调用generateMipmap方法
            if (isWidthPowerOfTwo === true && isHeightPowerOfTwo === true) {
                this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, source);
                this.gl.generateMipmap(this.target);
            }
            else // 否则说明至少有一个不是2的n次方的，需要特别处理
             {
                let canvas = GLTexture.createPowerOfTwoCanvas(source);
                this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, canvas);
                _WebGLHepler__WEBPACK_IMPORTED_MODULE_0__["GLHelper"].checkGLError(this.gl);
                this.gl.generateMipmap(this.target);
                _WebGLHepler__WEBPACK_IMPORTED_MODULE_0__["GLHelper"].checkGLError(this.gl);
                this.width = canvas.width;
                this.height = canvas.height;
            }
            this.isMipmap = true;
        }
        else {
            this.isMipmap = false;
            this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, source);
        }
        console.log("当前纹理尺寸为: ", this.width, this.height);
        this.unbind(); //// 解绑当前要操作的WebGLTexture对象
    }
}
// css标准色字符串
GLTexture.Colors = [
    'aqua',
    'black',
    'blue',
    'fuchsia',
    'gray',
    'green',
    'lime',
    'maroon',
    'navy',
    'olive',
    'orange',
    'purple',
    'red',
    'silver',
    'teal',
    'yellow',
    'white' //白色
];


/***/ }),

/***/ "./src/webgl/WebGLTextureCache.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLTextureCache.ts ***!
  \****************************************/
/*! exports provided: GLTextureCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTextureCache", function() { return GLTextureCache; });
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");

class GLTextureCache {
    // 私有构造函数
    constructor() {
        this._dict = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
    }
    set(key, value) {
        this._dict.insert(key, value);
    }
    getMaybe(key) {
        let ret = this._dict.find(key);
        return ret;
    }
    getMust(key) {
        let ret = this._dict.find(key);
        if (ret === undefined) {
            throw new Error(key + "对应的Program不存在!!!");
        }
        return ret;
    }
    remove(key) {
        return this._dict.remove(key);
    }
}
GLTextureCache.instance = new GLTextureCache();


/***/ })

/******/ });