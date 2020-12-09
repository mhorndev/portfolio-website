import React from "react"
import {  navigate } from "gatsby"

const routes = [
  {label: "Home", path: "/"},
  {label: "About", path: "/about"},
  {label: "Projects", path: "/projects"},
  {label: "Contact", path: "/contact"}
]

const Navbar = ({location}) => {
  
  function onBeforeNavigate(e,to) {
    e.preventDefault()

    if (to === location.pathname) {
      return
    }

    let curr = routes.findIndex(obj => obj.path === location.pathname)
    let next = routes.findIndex(obj => obj.path === to)

    console.log(curr + " -> " + next)
    console.log(location.pathname + " -> " + to)
    console.log(next > curr ? "right" : "left")
    
    navigate(to)
  }

  //console.log(location)

  return (
    <nav>
      {routes.map((route,index) => {
        return(
          <a 
            key={route.path} 
            href={route.path}
            onClick={e => onBeforeNavigate(e,route.path)}
          >
            {route.label}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar

/*
Polyfill for IE

https://tc39.github.io/ecma262/#sec-array.prototype.findindex

if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}
*/