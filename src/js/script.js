//  // 1
//  class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(value) {
//     if (value <= 0) {
//       throw new Error('введіть додатнє число');
//     }
//     this._radius = value;
//   }

//   get diameter() {
//     return this.radius * 2;
//   }

//   get area() {
//     return Math.PI * this.radius ** 2;
//   }

//   get circumference() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// // Приклад використання класу
// const circle = new Circle(5);
// console.log(circle.radius); 
// console.log(circle.diameter); 
// console.log(circle.area); 
// console.log(circle.circumference); 

// circle.radius = 10;
// console.log(circle.radius); 
// console.log(circle.diameter); 
// console.log(circle.area); 
// console.log(circle.circumference); 

// 2

// class HtmlElement {
//   constructor(tagName, selfClosing = false, textContent = '') {
//     this.tagName = tagName;
//     this.selfClosing = selfClosing;
//     this.textContent = textContent;
//     this.attributes = [];
//     this.styles = {};
//     this.children = [];
//   }

//   setAttribute(name, value) {
//     this.attributes.push({ name, value });
//   }

//   setStyle(name, value) {
//     this.styles[name] = value;
//   }

//   addChild(child) {
//     this.children.push(child);
//   }

//   prependChild(child) {
//     this.children.unshift(child);
//   }

//   getHtml() {
//     let html = `<${this.tagName}`;

//     // add attributes
//     for (let attribute of this.attributes) {
//       html += ` ${attribute.name}="${attribute.value}"`;
//     }

//     // add styles
//     if (Object.keys(this.styles).length > 0) {
//       let styleString = '';
//       for (let [name, value] of Object.entries(this.styles)) {
//         styleString += `${name}:${value};`;
//       }
//       html += ` style="${styleString}"`;
//     }

//     if (this.selfClosing) {
//       html += '/>';
//     } else {
//       html += '>';

//       // add children
//       for (let child of this.children) {
//         html += child.getHtml();
//       }

//       html += this.textContent;
//       html += `</${this.tagName}>`;
//     }

//     return html;
//   }
// }

// const wrapper = new HtmlElement('div');
// wrapper.setAttribute('id', 'wrapper');

// const title = new HtmlElement('h1', false, 'Hello, world!');
// const paragraph = new HtmlElement('p', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

// wrapper.addChild(title);
// wrapper.addChild(paragraph);

// document.write(wrapper.getHtml());

//3

// class CssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = {};
//   }

//   setStyle(name, value) {
//     this.styles[name] = value;
//   }

//   removeStyle(name) {
//     delete this.styles[name];
//   }

//   getCss() {
//     let css = `.${this.className} {\n`;

//     // add styles
//     for (let [name, value] of Object.entries(this.styles)) {
//       css += `  ${name}: ${value};\n`;
//     }

//     css += `}\n`;

//     return css;
//   }
// }

  // 4

//   class HtmlBlock {
//     constructor() {
//       this.styles = {};
//       this.rootElement = new HtmlElement('div');
//     }
  
//     addStyle(cssClass) {
//       this.styles[cssClass.className] = cssClass;
//     }
  
//     getCode() {
//       let code = '<style>\n';
  
//       // add styles
//       for (let cssClass of Object.values(this.styles)) {
//         code += cssClass.getCss();
//       }
  
//       code += '</style>\n';
  
//       // add root element and its nested elements
//       code += this.rootElement.getHtml();
  
//       return code;
//     }
//   }

//   // створення блоку
// const block = new HtmlBlock();

// // додавання стилів
// const redText = new CssClass('red-text');
// redText.setStyle('color', 'red');
// block.addStyle(redText);

// // додавання вмісту
// const heading = new HtmlElement('h1');
// heading.setText('Hello, world!');
// block.rootElement.addChild(heading);

// // додавання блоку на сторінку
// document.write(block.getCode());