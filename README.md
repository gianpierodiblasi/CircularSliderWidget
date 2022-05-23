# CircularSliderWidget
An extension to visualize a circular slider.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget to visualize a circular slider. The widget allows an high level of customization in colors, labels, tooltips, etc.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- numberOfKnobs - INTEGER (default = 1): the number of knobs
- Value1, ..., Value\<numberOfKnobs\> - NUMBER (no default value): dynamic properties based on the value of numberOfKnobs, they are the knobs values
- min - INTEGER (default = 0): the minimum value
- max - INTEGER (default = 100): the maximum value
- startAngle - INTEGER (default = 0): the start angle (in degree), 0 = north, clockwise
- sliderStrokeWidth - INTEGER (default = 20): the stroke width of the slider
- sliderBackgroundColor - STRING (default = '#D8DBDE'): the background color of the slider
- knobsRadius - INTEGER (default = 15): the radius of the knobs
- knobsFontSize - INTEGER (default = 10): the font size of the knobs
- knobsBackgroundColor - STRING (default = '#FFFFFF'): the background color of the knobs
- knobsFontColor - STRING (default = '#787878'): the font color of the knobs
- knobsFontFamily - STRING (default = 'sans-serif'): the font family of the knobs
- knobsBorderWidth - INTEGER (default = 1): the border width of the knobs
- knobsBorderColor - STRING (default = '#D8DBDE'): the border color of the knobs
- knobSelectedBorderColor - STRING (default = '#0094C8'): the border color of the selected knob
- knobsFormatFunction - STRING (default = 'result = value;'): the function to define the format of the knobs values, the function has an input "value" and has to return a "result" value
- showValuesSummary - BOOLEAN (default = false): true to show a "summary" of all values
- valuesSummaryFormatFunction - STRING (default = 'result = values.toString();'): the function to define the format of the "summary" of all values, the function has a sorted array input "values" and has to return a "result" value
- valuesSummaryFontSize - INTEGER (default = 10): the font size of the "summary" of all values
- valuesSummaryFontColor - STRING (default = '#787878'): The font color of the "summary" of all values
- valuesSummaryFontFamily - STRING (default = 'sans-serif'): The font family of the "summary" of all values
- animation - STRING (default = 'STEP'): the animation (options: STEP, SMOOTH)
- showTicks - STRING (default = 'NO'): enables the ticks visualization (options: NO, PRIMARY, SECONDARY, ALL)
- primaryTicksStep - INTEGER (default = 10): the step of the primary ticks
- primaryTicksRadius - INTEGER (default = 5): the radius of the primary ticks
- secondaryTicksRadius - INTEGER (default = 2): the radius of the secondary ticks
- primaryTicksColor - STRING (default = '#787878'): the color of the primary ticks
- secondaryTicksColor - STRING (default = '#787878'): the color of the secondary ticks
- showTicksTooltip - BOOLEAN (default = false): true to show the ticks tooltip
- ticksTooltipFormatFunction - STRING (default = 'result = value;'): the function to define the format of the ticks tooltip, the function has an input "value" and has to return a "result" value

## Events
- ValuesChanged: event to notify that a value has changed
  
## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
