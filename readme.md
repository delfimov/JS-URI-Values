URI values
==========

urivalues javascript library 


Usage
-----

`uriValues.parse(hashValues);`

*hashValues* - URI to decode


`hashValues = uriValues.stringify(obj);`

*obj* - object to be encoded


Example

~~~~~~~~~~
hashValues = location.hash.slice(1);
values = uriValues.parse(hashValues);
hashValues = uriValues.stringify(values);
~~~~~~~~~
