import Vue from "vue";
import jsdom from "jsdom";
import Hello from "@/components/Hello";

const renderer = require("vue-server-renderer").createRenderer();

describe("Test suite for Hello component", () => {
  it("Test data msg", () => {
    const Contructor = Vue.extend(Hello);
    const vm = new Contructor({
      data(){
        return {
          msg: "I'm a message",
        };
      },
    }).$mount();
    renderer.renderToString(vm, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector("h1");
      expect(firstHeading.textContent).toContain("I'm a message");
    });
  });
  it('Test toggling method', () => {
    const Component = Vue.extend(Hello);
    const vm = new Component().$mount();
    renderer.renderToString(vm, (err, str) => {
      let dom = new jsdom.JSDOM(str);
      let firstHeading = dom.window.document.querySelector('h1');
      expect(firstHeading.classList.length).toBe(1);
      expect(firstHeading.classList).toContain("blue");
      vm.toggleClass();

      renderer.renderToString(vm, (errToggleClass, strToggleClass) => {
        dom = new jsdom.JSDOM(strToggleClass);
        firstHeading = dom.window.document.querySelector("h1");
        expect(firstHeading.classList.length).toBe(2);
        expect(firstHeading.classList).toContain("red");
        expect(firstHeading.classList).toContain("shadow");
      });
    });
  });
});
