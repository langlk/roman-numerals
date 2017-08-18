# _Roman Numeral Converter_

#### _Epicodus practice in Javascript, 8.18.2017_

#### By _**Megan Olson and Kelsey Langlois**_

## Description

_This page has a form that allows the user to enter a number. After pressing the submit button, the user will receive the number they entered as a roman numeral._

## Setup/Installation Requirements

* _Clone GitHub repository_
* _Open folder named roman-numerals_
* _Open index.html with web browser of choice_

## Specifications

* Program returns an error when the input is empty.
  * Example Input: ""
  * Example Output: "Error: empty field"
* Program returns an error when the input is not an integer.
  * Example Input: 3.14
  * Example Output: "Error: please enter a valid value"
* Program returns an error when the input is negative.
  * Example Input: -5
  * Example Output: "Error: Negative"
* Program returns "nulla" when the input is 0.
  * Example Input: 0
  * Example Output: "nulla"
* When the input equals a single roman numeral, the program returns that numeral. Numbers that equal single RNs are: 1=I, 5=V, 10=X, 50=L, 100=C, 500=D, 1000=M
  * Example Input: 1
  * Example Output: "I"
  * Example Input: 50
  * Example Output: "L"
* When the input does not equal a single roman numeral, the program returns a string of RNs that add up to the input.
  * Example Input: 2
  * Example Output: "II"
  * Example Input: 66
  * Example Output: "LXVI"
* If the RN output has 4 of the same numeral in a row, replace those numerals with the first numeral greater than the input preceded by one of the original numeral.
  * Example Input: 4
  * Example Output: "IV"
  * Example Input: 90
  * Example Output: "XC"
* Program returns a separate group of numerals for 1s, 10s, 100s, and 1000s of input.
 * Example Input: 99
 * Example Output: "XCIX"

 ## Known Bugs

 _There are no known bugs at this time._

 ## Support and contact details

 _Feel free to email Kelsey at kels.langlois@gmail.com or Megan at meganannetteolson@yahoo.com_

 ## Technologies Used

 _HTML CSS JavaScript jQuery_

 ### License

 *This software is licensed under the MIT license*
 Copyright (c) 2017 **Megan Olson and Kelsey Langlois**
