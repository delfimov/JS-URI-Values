/*
 * urivalues javascript library 
 * https://github.com/Groozly/JS-URI-Values
 *
 * Copyright (c) 2011 by Dmitry Elfimov
 * Released under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2011-09-16
 */

var uriValues = {

	parse: function (q) {
		var obj = {},
			p,
			r = /([^&;=]+)=?([^&;]*)/g,
			d = function (s) { return decodeURIComponent(s); };

		while (p = r.exec(q)) {
			obj[d(p[1])] = d(p[2]);
		}
		return obj;
	},

	stringify: function (obj) {
		var k, 
			i = 0, 
			e = function (s) { return encodeURIComponent(s); },
			arr = [];  
		for (k in obj) {
			arr[i++] = e(k) + '=' + e(obj[k].toString());  
		}  
		return arr.join('&');  
	}

};