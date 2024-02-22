"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/js-cookie";
exports.ids = ["vendor-chunks/js-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/***/ ((module) => {

eval("\n(function(global, factory) {\n     true ? module.exports = factory() : 0;\n})(void 0, function() {\n    \"use strict\";\n    /* eslint-disable no-var */ function assign(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                target[key] = source[key];\n            }\n        }\n        return target;\n    }\n    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {\n        read: function(value) {\n            if (value[0] === '\"') {\n                value = value.slice(1, -1);\n            }\n            return value.replace(/(%[\\dA-F]{2})+/gi, decodeURIComponent);\n        },\n        write: function(value) {\n            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);\n        }\n    };\n    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {\n        function set(name, value, attributes) {\n            if (typeof document === \"undefined\") {\n                return;\n            }\n            attributes = assign({}, defaultAttributes, attributes);\n            if (typeof attributes.expires === \"number\") {\n                attributes.expires = new Date(Date.now() + attributes.expires * 864e5);\n            }\n            if (attributes.expires) {\n                attributes.expires = attributes.expires.toUTCString();\n            }\n            name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);\n            var stringifiedAttributes = \"\";\n            for(var attributeName in attributes){\n                if (!attributes[attributeName]) {\n                    continue;\n                }\n                stringifiedAttributes += \"; \" + attributeName;\n                if (attributes[attributeName] === true) {\n                    continue;\n                }\n                // Considers RFC 6265 section 5.2:\n                // ...\n                // 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n                //     character:\n                // Consume the characters of the unparsed-attributes up to,\n                // not including, the first %x3B (\";\") character.\n                // ...\n                stringifiedAttributes += \"=\" + attributes[attributeName].split(\";\")[0];\n            }\n            return document.cookie = name + \"=\" + converter.write(value, name) + stringifiedAttributes;\n        }\n        function get(name) {\n            if (typeof document === \"undefined\" || arguments.length && !name) {\n                return;\n            }\n            // To prevent the for loop in the first place assign an empty array\n            // in case there are no cookies at all.\n            var cookies = document.cookie ? document.cookie.split(\"; \") : [];\n            var jar = {};\n            for(var i = 0; i < cookies.length; i++){\n                var parts = cookies[i].split(\"=\");\n                var value = parts.slice(1).join(\"=\");\n                try {\n                    var found = decodeURIComponent(parts[0]);\n                    jar[found] = converter.read(value, found);\n                    if (name === found) {\n                        break;\n                    }\n                } catch (e) {}\n            }\n            return name ? jar[name] : jar;\n        }\n        return Object.create({\n            set,\n            get,\n            remove: function(name, attributes) {\n                set(name, \"\", assign({}, attributes, {\n                    expires: -1\n                }));\n            },\n            withAttributes: function(attributes) {\n                return init(this.converter, assign({}, this.attributes, attributes));\n            },\n            withConverter: function(converter) {\n                return init(assign({}, this.converter, converter), this.attributes);\n            }\n        }, {\n            attributes: {\n                value: Object.freeze(defaultAttributes)\n            },\n            converter: {\n                value: Object.freeze(converter)\n            }\n        });\n    }\n    var api = init(defaultConverter, {\n        path: \"/\"\n    });\n    /* eslint-enable no-var */ return api;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanMtY29va2llL2Rpc3QvanMuY29va2llLmpzIiwibWFwcGluZ3MiOiI7QUFFQyxVQUFVQSxNQUFNLEVBQUVDLE9BQU87SUFDeEIsS0FBaUQsR0FBY0UsT0FBT0QsT0FBTyxHQUFHRCxZQUNoRixDQUtJO0FBQ04sR0FBRyxRQUFPO0lBQWM7SUFFdEIseUJBQXlCLEdBQ3pCLFNBQVNVLE9BQVFDLE1BQU07UUFDckIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlDLFVBQVVDLE1BQU0sRUFBRUYsSUFBSztZQUN6QyxJQUFJRyxTQUFTRixTQUFTLENBQUNELEVBQUU7WUFDekIsSUFBSyxJQUFJSSxPQUFPRCxPQUFRO2dCQUN0QkosTUFBTSxDQUFDSyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSTtZQUMzQjtRQUNGO1FBQ0EsT0FBT0w7SUFDVDtJQUNBLHdCQUF3QixHQUV4Qix5QkFBeUIsR0FDekIsSUFBSU0sbUJBQW1CO1FBQ3JCQyxNQUFNLFNBQVVDLEtBQUs7WUFDbkIsSUFBSUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLO2dCQUNwQkEsUUFBUUEsTUFBTUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMxQjtZQUNBLE9BQU9ELE1BQU1FLE9BQU8sQ0FBQyxvQkFBb0JDO1FBQzNDO1FBQ0FDLE9BQU8sU0FBVUosS0FBSztZQUNwQixPQUFPSyxtQkFBbUJMLE9BQU9FLE9BQU8sQ0FDdEMsNENBQ0FDO1FBRUo7SUFDRjtJQUNBLHdCQUF3QixHQUV4Qix5QkFBeUIsR0FFekIsU0FBU0csS0FBTUMsU0FBUyxFQUFFQyxpQkFBaUI7UUFDekMsU0FBU0MsSUFBS0MsSUFBSSxFQUFFVixLQUFLLEVBQUVXLFVBQVU7WUFDbkMsSUFBSSxPQUFPQyxhQUFhLGFBQWE7Z0JBQ25DO1lBQ0Y7WUFFQUQsYUFBYXBCLE9BQU8sQ0FBQyxHQUFHaUIsbUJBQW1CRztZQUUzQyxJQUFJLE9BQU9BLFdBQVdFLE9BQU8sS0FBSyxVQUFVO2dCQUMxQ0YsV0FBV0UsT0FBTyxHQUFHLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBS0osV0FBV0UsT0FBTyxHQUFHO1lBQ2xFO1lBQ0EsSUFBSUYsV0FBV0UsT0FBTyxFQUFFO2dCQUN0QkYsV0FBV0UsT0FBTyxHQUFHRixXQUFXRSxPQUFPLENBQUNHLFdBQVc7WUFDckQ7WUFFQU4sT0FBT0wsbUJBQW1CSyxNQUN2QlIsT0FBTyxDQUFDLHdCQUF3QkMsb0JBQ2hDRCxPQUFPLENBQUMsU0FBU2U7WUFFcEIsSUFBSUMsd0JBQXdCO1lBQzVCLElBQUssSUFBSUMsaUJBQWlCUixXQUFZO2dCQUNwQyxJQUFJLENBQUNBLFVBQVUsQ0FBQ1EsY0FBYyxFQUFFO29CQUM5QjtnQkFDRjtnQkFFQUQseUJBQXlCLE9BQU9DO2dCQUVoQyxJQUFJUixVQUFVLENBQUNRLGNBQWMsS0FBSyxNQUFNO29CQUN0QztnQkFDRjtnQkFFQSxrQ0FBa0M7Z0JBQ2xDLE1BQU07Z0JBQ04saUVBQWlFO2dCQUNqRSxpQkFBaUI7Z0JBQ2pCLDJEQUEyRDtnQkFDM0QsaURBQWlEO2dCQUNqRCxNQUFNO2dCQUNORCx5QkFBeUIsTUFBTVAsVUFBVSxDQUFDUSxjQUFjLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RTtZQUVBLE9BQVFSLFNBQVNTLE1BQU0sR0FDckJYLE9BQU8sTUFBTUgsVUFBVUgsS0FBSyxDQUFDSixPQUFPVSxRQUFRUTtRQUNoRDtRQUVBLFNBQVNJLElBQUtaLElBQUk7WUFDaEIsSUFBSSxPQUFPRSxhQUFhLGVBQWdCbEIsVUFBVUMsTUFBTSxJQUFJLENBQUNlLE1BQU87Z0JBQ2xFO1lBQ0Y7WUFFQSxtRUFBbUU7WUFDbkUsdUNBQXVDO1lBQ3ZDLElBQUlhLFVBQVVYLFNBQVNTLE1BQU0sR0FBR1QsU0FBU1MsTUFBTSxDQUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2hFLElBQUlJLE1BQU0sQ0FBQztZQUNYLElBQUssSUFBSS9CLElBQUksR0FBR0EsSUFBSThCLFFBQVE1QixNQUFNLEVBQUVGLElBQUs7Z0JBQ3ZDLElBQUlnQyxRQUFRRixPQUFPLENBQUM5QixFQUFFLENBQUMyQixLQUFLLENBQUM7Z0JBQzdCLElBQUlwQixRQUFReUIsTUFBTXhCLEtBQUssQ0FBQyxHQUFHeUIsSUFBSSxDQUFDO2dCQUVoQyxJQUFJO29CQUNGLElBQUlDLFFBQVF4QixtQkFBbUJzQixLQUFLLENBQUMsRUFBRTtvQkFDdkNELEdBQUcsQ0FBQ0csTUFBTSxHQUFHcEIsVUFBVVIsSUFBSSxDQUFDQyxPQUFPMkI7b0JBRW5DLElBQUlqQixTQUFTaUIsT0FBTzt3QkFDbEI7b0JBQ0Y7Z0JBQ0YsRUFBRSxPQUFPQyxHQUFHLENBQUM7WUFDZjtZQUVBLE9BQU9sQixPQUFPYyxHQUFHLENBQUNkLEtBQUssR0FBR2M7UUFDNUI7UUFFQSxPQUFPSyxPQUFPQyxNQUFNLENBQ2xCO1lBQ0VyQjtZQUNBYTtZQUNBUyxRQUFRLFNBQVVyQixJQUFJLEVBQUVDLFVBQVU7Z0JBQ2hDRixJQUNFQyxNQUNBLElBQ0FuQixPQUFPLENBQUMsR0FBR29CLFlBQVk7b0JBQ3JCRSxTQUFTLENBQUM7Z0JBQ1o7WUFFSjtZQUNBbUIsZ0JBQWdCLFNBQVVyQixVQUFVO2dCQUNsQyxPQUFPTCxLQUFLLElBQUksQ0FBQ0MsU0FBUyxFQUFFaEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDb0IsVUFBVSxFQUFFQTtZQUMxRDtZQUNBc0IsZUFBZSxTQUFVMUIsU0FBUztnQkFDaEMsT0FBT0QsS0FBS2YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDZ0IsU0FBUyxFQUFFQSxZQUFZLElBQUksQ0FBQ0ksVUFBVTtZQUNwRTtRQUNGLEdBQ0E7WUFDRUEsWUFBWTtnQkFBRVgsT0FBTzZCLE9BQU9LLE1BQU0sQ0FBQzFCO1lBQW1CO1lBQ3RERCxXQUFXO2dCQUFFUCxPQUFPNkIsT0FBT0ssTUFBTSxDQUFDM0I7WUFBVztRQUMvQztJQUVKO0lBRUEsSUFBSTRCLE1BQU03QixLQUFLUixrQkFBa0I7UUFBRXNDLE1BQU07SUFBSTtJQUM3Qyx3QkFBd0IsR0FFeEIsT0FBT0Q7QUFFVCIsInNvdXJjZXMiOlsid2VicGFjazovL2xscGFpLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9kaXN0L2pzLmNvb2tpZS5qcz84NzYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBqcy1jb29raWUgdjMuMC41IHwgTUlUICovXG47XG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnbG9iYWwuQ29va2llcztcbiAgICB2YXIgZXhwb3J0cyA9IGdsb2JhbC5Db29raWVzID0gZmFjdG9yeSgpO1xuICAgIGV4cG9ydHMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHsgZ2xvYmFsLkNvb2tpZXMgPSBjdXJyZW50OyByZXR1cm4gZXhwb3J0czsgfTtcbiAgfSkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4gIGZ1bmN0aW9uIGFzc2lnbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuICB2YXIgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICByZWFkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksIGRlY29kZVVSSUNvbXBvbmVudClcbiAgICB9LFxuICAgIHdyaXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoXG4gICAgICAgIC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxcbiAgICAgICAgZGVjb2RlVVJJQ29tcG9uZW50XG4gICAgICApXG4gICAgfVxuICB9O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuXG4gIGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlciwgZGVmYXVsdEF0dHJpYnV0ZXMpIHtcbiAgICBmdW5jdGlvbiBzZXQgKG5hbWUsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXR0cmlidXRlcyA9IGFzc2lnbih7fSwgZGVmYXVsdEF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGU1KTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyaWJ1dGVzLmV4cGlyZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSlcbiAgICAgICAgLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuICAgICAgICAucmVwbGFjZSgvWygpXS9nLCBlc2NhcGUpO1xuXG4gICAgICB2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG4gICAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblxuICAgICAgICBpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG4gICAgICAgIC8vIC4uLlxuICAgICAgICAvLyAzLiAgSWYgdGhlIHJlbWFpbmluZyB1bnBhcnNlZC1hdHRyaWJ1dGVzIGNvbnRhaW5zIGEgJXgzQiAoXCI7XCIpXG4gICAgICAgIC8vICAgICBjaGFyYWN0ZXI6XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG4gICAgICAgIC8vIG5vdCBpbmNsdWRpbmcsIHRoZSBmaXJzdCAleDNCIChcIjtcIikgY2hhcmFjdGVyLlxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPVxuICAgICAgICBuYW1lICsgJz0nICsgY29udmVydGVyLndyaXRlKHZhbHVlLCBuYW1lKSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQgKG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IChhcmd1bWVudHMubGVuZ3RoICYmICFuYW1lKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgICAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuXG4gICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuICAgICAgdmFyIGphciA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKTtcbiAgICAgICAgICBqYXJbZm91bmRdID0gY29udmVydGVyLnJlYWQodmFsdWUsIGZvdW5kKTtcblxuICAgICAgICAgIGlmIChuYW1lID09PSBmb3VuZCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYW1lID8gamFyW25hbWVdIDogamFyXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoXG4gICAgICB7XG4gICAgICAgIHNldCxcbiAgICAgICAgZ2V0LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgc2V0KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgYXNzaWduKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgICAgIHJldHVybiBpbml0KHRoaXMuY29udmVydGVyLCBhc3NpZ24oe30sIHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlcykpXG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb252ZXJ0ZXI6IGZ1bmN0aW9uIChjb252ZXJ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdChhc3NpZ24oe30sIHRoaXMuY29udmVydGVyLCBjb252ZXJ0ZXIpLCB0aGlzLmF0dHJpYnV0ZXMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUoZGVmYXVsdEF0dHJpYnV0ZXMpIH0sXG4gICAgICAgIGNvbnZlcnRlcjogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShjb252ZXJ0ZXIpIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICB2YXIgYXBpID0gaW5pdChkZWZhdWx0Q29udmVydGVyLCB7IHBhdGg6ICcvJyB9KTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuICByZXR1cm4gYXBpO1xuXG59KSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWxUaGlzIiwic2VsZiIsImN1cnJlbnQiLCJDb29raWVzIiwibm9Db25mbGljdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJkZWZhdWx0Q29udmVydGVyIiwicmVhZCIsInZhbHVlIiwic2xpY2UiLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbml0IiwiY29udmVydGVyIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJzZXQiLCJuYW1lIiwiYXR0cmlidXRlcyIsImRvY3VtZW50IiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJ0b1VUQ1N0cmluZyIsImVzY2FwZSIsInN0cmluZ2lmaWVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZU5hbWUiLCJzcGxpdCIsImNvb2tpZSIsImdldCIsImNvb2tpZXMiLCJqYXIiLCJwYXJ0cyIsImpvaW4iLCJmb3VuZCIsImUiLCJPYmplY3QiLCJjcmVhdGUiLCJyZW1vdmUiLCJ3aXRoQXR0cmlidXRlcyIsIndpdGhDb252ZXJ0ZXIiLCJmcmVlemUiLCJhcGkiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/js-cookie/dist/js.cookie.js\n");

/***/ })

};
;