# NPM包开发脚手架使用说明

<br/>

## 项目结构

<br/>

一个完整的项目有源码、生产环境代码、项目说明文档、测试代码等

  ```javascript
    |-- project_name
      |-- lib/         // 打包输出目录
      |-- docs/        // 文档目录
      |-- test/        // 测试代码
      |-- src/         // 项目源码
      |-- package.json
      |-- .gitignore
  ```

<br/>

## ESLINT

<br/>

Eslint 是一个JS代码的检测工具，可以用来检测一些常见的JS代码错误，也可以用来制定一些代码约束，来保证代码风格的一致性，公司现在也在制定推行各种语言的代码规范，针对JS的规范可查看 [编码规范](https://git.woa.com/standards/javascript)，所以对于新开发的项目最好也是跟着公司级的标准走。

脚手架目前默认接入了 [@tencent/eslint-config-tencent](https://mirrors.tencent.com/#/private/npm/detail?repo_id=537&project_name=%40tencent%2Feslint-config-tencent)，你不需要额外做些什么。

<br/>

相关命令

  ```javascript
    tnpm run lint // 提示存在的代码规范问题

    tnpm run lint:fix // 自动修改部分规范问题
  ```

<br/>

## BABEL

<br/>

我们在项目开发时，JS一般会使用ES6语法来进行开发工作，但是在某些低版本浏览器、node环境中并不支持 ES6 的某些语法，所以这时候我们需要引入 babel 来将 src 目录中的源码编译到 lib 目录中，对外开放的库代码也会 lib 中的，相对应的也需要将 package.json 中的 main 入口改成 lib/index.js，这样在第三方使用时才能减少一些兼容性的问题

脚手架已默认安装 babel，你不需要额外做些什么。

<br/>

相关命令

  ```javascript
    tnpm run build // 将 src 目录中代码编译进 lib 中

    tnpm run build:watch // watch src 目录中的代码，有变动即编译
  ```

<br/>

## 测试框架

<br/>

具有鲁棒性的NPM包，一定是要编写测试用例的，这样才能够保障我们的代码质量，第三方使用者才能放心地使用。这里可以使用一种比较常见的测试方案 mocha+chai，[mocha](https://mochajs.org/) 是 JS 的一种单元测试框架，[chai](https://www.chaijs.com/) 是一个断言判断工具，能够验证代码执行结果是否符合预期。

脚手架已默认安装 mocha+chai，你不需要额外做些什么。

mocha的各种使用姿势可以参考阮老师的[这篇文章](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)，简介明了，一学就会。

<br/>

相关命令

  ```javascript
    tnpm run test // 执行你的测试用例
  ```

<br/>

以脚手架中的代码为例

  ```javascript
    // src/index.js
    
    const add = function (a, b) {
      const sum = a + b;
      return sum;
    };

    const minus = function (a, b) {
      const result = a - b;
      return result;
    };

    module.exports = {
      add,
      minus,
    };
  ```

<br/>

编写测试代码

 ```javascript
    // src/index.js
    
    const { expect } = require('chai');
    const A = require('../src/index.js');

    describe('test add', () => {
      it('100+11=111', () => {
        expect(A.add(100, 11)).to.be.equal(111);
      });
    });

    describe('test minus', () => {
      it('100-11=89', () => {
        expect(A.minus(100, 11)).to.be.equal(89);
      });
    });

  ```

<br/>

执行测试命令

  ```javascript
    npm test
  ```

<br/>

输出结果

  ```javascript
    test add
    ✔ 100+11=111

    test minus
    ✔ 100-11=89

    2 passing (4ms)
  ```

<br/>

## NPM link

<br/>

在本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试。

具体使用方法可以参考[官方文档](https://docs.npmjs.com/cli/v7/commands/npm-link) 或者 [这篇简单的介绍](https://www.jianshu.com/p/aaa7db89a5b2)。

<br/>

## 包发布

<br/>

在项目开发以及测试完毕之后，我们就需要进行项目包的发布，因为我们的包主要是提供给内网用，所以可以使用公司的 tnpm 服务，详见[内部NPM服务](https://mirrors.tencent.com/#/private/npm)。

包发布流程：

参考这个[链接](https://iwiki.woa.com/pages/viewpage.action?pageId=113585381)。

<br/>