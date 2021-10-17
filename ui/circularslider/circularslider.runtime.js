/* global TW, result */
TW.Runtime.Widgets.circularslider = function () {
  var thisWidget = this;
  var uid = new Date().getTime() + "_" + Math.floor(1000 * Math.random());
  var TWO_PI = 2 * Math.PI;
  var HALF_PI = Math.PI / 2;
  var degToRad = Math.PI / 180;

  var editing = false;
  var markerIndex = -1;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html =
            '<div class="widget-content widget-circularslider widget-circularslider-' + uid + '">' +
            '  <canvas class="widget-circularslider-canvas widget-circularslider-canvas-' + uid + '"></canvas>' +
            '</div>';
    return html;
  };

  this.afterRender = function () {
    var shift = angle => angle < 0 ? angle + TWO_PI : angle > TWO_PI ? angle - TWO_PI : angle;

    var debugMode = thisWidget.getProperty('debugMode');
    var numberOfKnobs = thisWidget.getProperty('numberOfKnobs');
    var startAngle = thisWidget.getProperty('startAngle') * degToRad;
    var sliderStrokeWidth = thisWidget.getProperty('sliderStrokeWidth');
    var knobsRadius = thisWidget.getProperty('knobsRadius');

    var div = $('.widget-circularslider-' + uid)[0];
    new ResizeObserver(thisWidget.draw).observe(div);

    var canvas = $('.widget-circularslider-canvas-' + uid)[0];
    canvas.onmousemove = function (event) {
      var min = thisWidget.getProperty('min');
      var max = thisWidget.getProperty('max');
      var diff = max - min + 1;
      var offset = TWO_PI / (2 * diff);

      var x = canvas.width / 2;
      var y = canvas.height / 2;

      if (editing) {
        var deltaX = event.offsetX - x;
        var deltaY = event.offsetY - y;
        var angle = shift(Math.atan2(deltaY, deltaX) + HALF_PI);
        angle = shift(angle - startAngle);
        angle = shift(angle + offset);

        var oldValue = thisWidget.getProperty('Value' + markerIndex);
        var newValue = Math.floor(diff * angle / TWO_PI + min);
        if (oldValue !== newValue) {
          if (numberOfKnobs > 1) {
            var prevValue = thisWidget.getProperty('Value' + (markerIndex > 1 ? markerIndex - 1 : numberOfKnobs));
            var nextValue = thisWidget.getProperty('Value' + (markerIndex < numberOfKnobs ? markerIndex + 1 : 1));

            if (debugMode) {
              console.log("CircularSlider - editing - prevValue = " + prevValue + ", newValue = " + newValue + ", nextValue = " + nextValue);
            }

            if (newValue !== prevValue && newValue !== nextValue) {
              thisWidget.setProperty("Value" + markerIndex, newValue);
              thisWidget.jqElement.triggerHandler('ValuesChanged');
              thisWidget.draw();
            }
          } else {
            thisWidget.setProperty("Value" + markerIndex, newValue);
            thisWidget.jqElement.triggerHandler('ValuesChanged');
            thisWidget.draw();
          }
        }
      } else {
        var newMarkerIndex = -1;

        var radius = Math.min(canvas.width, canvas.height) / 2 - sliderStrokeWidth;

        for (var knobN = 1; knobN <= numberOfKnobs; knobN++) {
          var value = thisWidget.getProperty('Value' + knobN);
          var angle = TWO_PI * (value - min) / diff - HALF_PI + startAngle;
          var xx = radius * Math.cos(angle);
          var yy = radius * Math.sin(angle);

          var xxx = x + xx - event.offsetX;
          var yyy = y + yy - event.offsetY;

          if (Math.sqrt(xxx * xxx + yyy * yyy) < knobsRadius) {
            newMarkerIndex = knobN;
          }
        }

        if (newMarkerIndex !== markerIndex) {
          markerIndex = newMarkerIndex;
          thisWidget.draw();
        }
      }
    };

    canvas.onmousedown = function (event) {
      if (markerIndex !== -1) {
        editing = true;
      }
    };

    canvas.onmouseup = function (event) {
      editing = false;
    };
  };

  this.serviceInvoked = function (serviceName) {
  };

  this.draw = function () {
    var numberOfKnobs = thisWidget.getProperty('numberOfKnobs');
    var min = thisWidget.getProperty('min');
    var max = thisWidget.getProperty('max');
    var startAngle = thisWidget.getProperty('startAngle') * degToRad;
    var sliderStrokeWidth = thisWidget.getProperty('sliderStrokeWidth');
    var sliderBackgroundColor = thisWidget.getProperty('sliderBackgroundColor');
    var knobsRadius = thisWidget.getProperty('knobsRadius');
    var knobsFontSize = thisWidget.getProperty('knobsFontSize');
    var knobsBackgroundColor = thisWidget.getProperty('knobsBackgroundColor');
    var knobsFontColor = thisWidget.getProperty('knobsFontColor');
    var knobsBorderWidth = thisWidget.getProperty('knobsBorderWidth');
    var knobsBorderColor = thisWidget.getProperty('knobsBorderColor');
    var knobSelectedBorderColor = thisWidget.getProperty('knobSelectedBorderColor');
    var knobsFormatFunction = thisWidget.getProperty('knobsFormatFunction');
    var showValuesSummary = thisWidget.getProperty('showValuesSummary');

    var diff = max - min + 1;

    var div = $('.widget-circularslider-' + uid)[0];
    var canvas = $('.widget-circularslider-canvas-' + uid)[0];

    if (div && canvas) {
      canvas.width = div.offsetWidth - 1;
      canvas.height = div.offsetHeight - 1;

      var radius = Math.min(canvas.width, canvas.height) / 2 - sliderStrokeWidth;
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      var ctx = canvas.getContext('2d');
      ctx.font = knobsFontSize + "px sans-serif";
      ctx.lineWidth = sliderStrokeWidth;
      ctx.strokeStyle = sliderBackgroundColor;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();

      var values = [];
      for (var knobN = 1; knobN <= numberOfKnobs; knobN++) {
        values[knobN] = thisWidget.getProperty('Value' + knobN);

        var completeCode = "try {var result;var value = " + values[knobN] + ";" + knobsFormatFunction + "} catch (exception) {console.log(exception);}";
        eval(completeCode);

        var angle = TWO_PI * (values[knobN] - min) / diff - HALF_PI + startAngle;
        var xx = radius * Math.cos(angle);
        var yy = radius * Math.sin(angle);

        ctx.fillStyle = knobsBackgroundColor;
        ctx.beginPath();
        ctx.arc(x + xx, y + yy, knobsRadius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.lineWidth = knobsBorderWidth;
        ctx.strokeStyle = markerIndex === knobN ? knobSelectedBorderColor : knobsBorderColor;
        ctx.beginPath();
        ctx.arc(x + xx, y + yy, knobsRadius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.textBaseline = "middle";
        ctx.lineWidth = 1;
        ctx.fillStyle = knobsFontColor;
        ctx.fillText(result, x + xx - ctx.measureText(result).width / 2, y + yy);
      }

      if (showValuesSummary) {
        var valuesSummaryFormatFunction = thisWidget.getProperty('valuesSummaryFormatFunction');
        var valuesSummaryFontSize = thisWidget.getProperty('valuesSummaryFontSize');
        var valuesSummaryFontColor = thisWidget.getProperty('valuesSummaryFontColor');

        values = values.slice(1);
        values.sort((o1, o2) => o1 - o2);
        var completeCode = "try {var result;" + valuesSummaryFormatFunction + "} catch (exception) {console.log(exception);}";
        eval(completeCode);

        ctx.font = valuesSummaryFontSize + "px sans-serif";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 1;
        ctx.fillStyle = valuesSummaryFontColor;
        ctx.fillText(result, x - ctx.measureText(result).width / 2, y);
      }
    }
  };
};