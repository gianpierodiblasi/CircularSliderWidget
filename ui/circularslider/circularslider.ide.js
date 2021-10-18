/* global TW, TWX */
TW.IDE.Dialogs.CircularSliderCustomEditor = function () {
  var uid = new Date().getTime() + "_" + Math.floor(1000 * Math.random());
  this.title = 'Circular Slider Editor';

  this.renderDialogHtml = function (widgetObj) {
    var style = parseFloat(TWX.App.version) <= 9 ? "width:100%;height:100%" : "width:98%;height:96%";
    var html =
            "<div class='CircularSliderCustomEditor_" + uid + "' style='" + style + ";position:absolute'>" +
            "  <div style='float:left'>" +
            "    <div style='margin-bottom:15px'>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_sliderBackgroundColor'>sliderBackgroundColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_sliderBackgroundColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_sliderBackgroundColor' value='" + widgetObj.properties['sliderBackgroundColor'] + "'/>" +
            "    </div>" +
            "    <div>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_knobsBackgroundColor'>knobsBackgroundColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_knobsBackgroundColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_knobsBackgroundColor' value='" + widgetObj.properties['knobsBackgroundColor'] + "'/>" +
            "    </div>" +
            "    <div>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_knobsFontColor'>knobsFontColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_knobsFontColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_knobsFontColor' value='" + widgetObj.properties['knobsFontColor'] + "'/>" +
            "    </div>" +
            "    <div>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_knobsBorderColor'>knobsBorderColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_knobsBorderColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_knobsBorderColor' value='" + widgetObj.properties['knobsBorderColor'] + "'/>" +
            "    </div>" +
            "    <div style='margin-bottom:15px'>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_knobSelectedBorderColor'>knobSelectedBorderColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_knobSelectedBorderColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_knobSelectedBorderColor' value='" + widgetObj.properties['knobSelectedBorderColor'] + "'/>" +
            "    </div>" +
            "    <div style='margin-bottom:15px'>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_valuesSummaryFontColor'>valuesSummaryFontColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_valuesSummaryFontColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_valuesSummaryFontColor' value='" + widgetObj.properties['valuesSummaryFontColor'] + "'/>" +
            "    </div>" +
            "    <div>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_primaryTicksColor'>primaryTicksColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_primaryTicksColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_primaryTicksColor' value='" + widgetObj.properties['primaryTicksColor'] + "'/>" +
            "    </div>" +
            "    <div>" +
            "      <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_secondaryTicksColor'>secondaryTicksColor</label>" +
            "      <input type='color' id='CircularSliderCustomEditor_" + uid + "_secondaryTicksColor' style='width:140px' class='CircularSliderCustomEditor_" + uid + "_secondaryTicksColor' value='" + widgetObj.properties['secondaryTicksColor'] + "'/>" +
            "    </div>" +
            "  </div>" +
            "  <div style='float:right;height:100%;width:87%'>" +
            "    <div style='height:33%;width:100%'>" +
            "      <div style='width:100%;height:100%'>" +
            "        <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_knobsFormatFunction'>knobsFormatFunction</label>" +
            "        <textarea id='CircularSliderCustomEditor_" + uid + "_knobsFormatFunction' style='width:100%;height:80%;resize:none;font-size:14px;font-family:monospaced;white-space:nowrap' class='CircularSliderCustomEditor_" + uid + "_knobsFormatFunction'>" + widgetObj.properties['knobsFormatFunction'] + "</textarea>" +
            "      </div>" +
            "    </div>" +
            "    <div style='height:33%;width:100%'>" +
            "      <div style='width:100%;height:100%'>" +
            "        <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_valuesSummaryFormatFunction'>valuesSummaryFormatFunction</label>" +
            "        <textarea id='CircularSliderCustomEditor_" + uid + "_valuesSummaryFormatFunction' style='width:100%;height:80%;resize:none;font-size:14px;font-family:monospaced;white-space:nowrap' class='CircularSliderCustomEditor_" + uid + "_valuesSummaryFormatFunction'>" + widgetObj.properties['valuesSummaryFormatFunction'] + "</textarea>" +
            "      </div>" +
            "    </div>" +
            "    <div style='height:33%;width:100%'>" +
            "      <div style='width:100%;height:100%'>" +
            "        <label style='font-weight:bold' for='CircularSliderCustomEditor_" + uid + "_ticksTooltipFormatFunction'>ticksTooltipFormatFunction</label>" +
            "        <textarea id='CircularSliderCustomEditor_" + uid + "_ticksTooltipFormatFunction' style='width:100%;height:80%;resize:none;font-size:14px;font-family:monospaced;white-space:nowrap' class='CircularSliderCustomEditor_" + uid + "_ticksTooltipFormatFunction'>" + widgetObj.properties['ticksTooltipFormatFunction'] + "</textarea>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    return html;
  };

  this.afterRender = function (domElementId) {
  };

  this.updateProperties = function (widgetObj) {
    widgetObj.setProperty('sliderBackgroundColor', $('.CircularSliderCustomEditor_' + uid + '_sliderBackgroundColor').val());
    widgetObj.setProperty('knobsBackgroundColor', $('.CircularSliderCustomEditor_' + uid + '_knobsBackgroundColor').val());
    widgetObj.setProperty('knobsFontColor', $('.CircularSliderCustomEditor_' + uid + '_knobsFontColor').val());
    widgetObj.setProperty('knobsBorderColor', $('.CircularSliderCustomEditor_' + uid + '_knobsBorderColor').val());
    widgetObj.setProperty('knobSelectedBorderColor', $('.CircularSliderCustomEditor_' + uid + '_knobSelectedBorderColor').val());
    widgetObj.setProperty('valuesSummaryFontColor', $('.CircularSliderCustomEditor_' + uid + '_valuesSummaryFontColor').val());
    widgetObj.setProperty('knobsFormatFunction', $('.CircularSliderCustomEditor_' + uid + '_knobsFormatFunction').val());
    widgetObj.setProperty('valuesSummaryFormatFunction', $('.CircularSliderCustomEditor_' + uid + '_valuesSummaryFormatFunction').val());
    widgetObj.setProperty('primaryTicksColor', $('.CircularSliderCustomEditor_' + uid + '_primaryTicksColor').val());
    widgetObj.setProperty('secondaryTicksColor', $('.CircularSliderCustomEditor_' + uid + '_secondaryTicksColor').val());
    widgetObj.setProperty('ticksTooltipFormatFunction', $('.CircularSliderCustomEditor_' + uid + '_ticksTooltipFormatFunction').val());
    return true;
  };
};

TW.IDE.Widgets.circularslider = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/CircularSliderWidget/ui/circularslider/circularslider.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'CircularSlider',
      'description': 'Widget to visualize a circular slider',
      'category': ['Common'],
      'iconImage': 'circularslider.png',
      'supportsAutoResize': true,
      customEditor: 'CircularSliderCustomEditor',
      customEditorMenuText: 'Edit Circular Slider',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 300
        },
        'Height': {
          'description': 'height',
          'defaultValue': 300
        },
        'numberOfKnobs': {
          'description': 'The number of knobs',
          'baseType': 'INTEGER',
          'defaultValue': 1
        },
        'min': {
          'description': 'The minimum value',
          'baseType': 'INTEGER',
          'defaultValue': 0,
          'isBindingTarget': true
        },
        'max': {
          'description': 'The maximum value',
          'baseType': 'INTEGER',
          'defaultValue': 100,
          'isBindingTarget': true
        },
        'startAngle': {
          'description': 'The start angle (in degree), 0 = north, clockwise',
          'baseType': 'INTEGER',
          'defaultValue': 0
        },
        'sliderStrokeWidth': {
          'description': 'The stroke width of the slider',
          'baseType': 'INTEGER',
          'defaultValue': 20
        },
        'sliderBackgroundColor': {
          'description': 'The background color of the slider',
          'baseType': 'STRING',
          'defaultValue': '#D8DBDE'
        },
        'knobsRadius': {
          'description': 'The radius of the knobs',
          'baseType': 'INTEGER',
          'defaultValue': 15
        },
        'knobsFontSize': {
          'description': 'The font size of the knobs',
          'baseType': 'INTEGER',
          'defaultValue': 10
        },
        'knobsBackgroundColor': {
          'description': 'The background color of the knobs',
          'baseType': 'STRING',
          'defaultValue': '#FFFFFF'
        },
        'knobsFontColor': {
          'description': 'The font color of the knobs',
          'baseType': 'STRING',
          'defaultValue': '#787878'
        },
        'knobsBorderWidth': {
          'description': 'The border width of the knobs',
          'baseType': 'INTEGER',
          'defaultValue': 1
        },
        'knobsBorderColor': {
          'description': 'The border color of the knobs',
          'baseType': 'STRING',
          'defaultValue': '#D8DBDE'
        },
        'knobSelectedBorderColor': {
          'description': 'The border color of the selected knob',
          'baseType': 'STRING',
          'defaultValue': '#0094C8'
        },
        'knobsFormatFunction': {
          'description': 'The function to define the format of the knobs values, the function has an input "value" and has to return a "result" value',
          'baseType': 'STRING',
          'defaultValue': 'result = value;'
        },
        'showValuesSummary': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to show a "summary" of all values'
        },
        'valuesSummaryFormatFunction': {
          'description': 'The function to define the format of the "summary" of all values, the function has a sorted array input "values" and has to return a "result" value',
          'baseType': 'STRING',
          'defaultValue': 'result = values.toString();'
        },
        'valuesSummaryFontSize': {
          'description': 'The font size of the "summary" of all values',
          'baseType': 'INTEGER',
          'defaultValue': 10
        },
        'valuesSummaryFontColor': {
          'description': 'The font color of the "summary" of all values',
          'baseType': 'STRING',
          'defaultValue': '#787878'
        },
        'animation': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'The animation',
          'defaultValue': 'STEP',
          'selectOptions': [
            {value: 'STEP', text: 'Step'},
            {value: 'SMOOTH', text: 'Smooth'}
          ]
        },
        'showTicks': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'Enables the ticks visualization',
          'defaultValue': 'NO',
          'selectOptions': [
            {value: 'NO', text: 'No'},
            {value: 'PRIMARY', text: 'Primary Ticks'},
            {value: 'SECONDARY', text: 'Secondary Ticks'},
            {value: 'ALL', text: 'All Ticks'}
          ]
        },
        'primaryTicksStep': {
          'description': 'The Step of the primary ticks',
          'baseType': 'INTEGER',
          'defaultValue': 10
        },
        'primaryTicksRadius': {
          'description': 'The radius of the primary ticks',
          'baseType': 'INTEGER',
          'defaultValue': 5
        },
        'secondaryTicksRadius': {
          'description': 'The radius of the secondary ticks',
          'baseType': 'INTEGER',
          'defaultValue': 2
        },
        'primaryTicksColor': {
          'description': 'The color of the primary ticks',
          'baseType': 'STRING',
          'defaultValue': '#787878'
        },
        'secondaryTicksColor': {
          'description': 'The color of the secondary ticks',
          'baseType': 'STRING',
          'defaultValue': '#787878'
        },
        'showTicksTooltip': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to show the ticks tooltip'
        },
        'ticksTooltipFormatFunction': {
          'description': 'The function to define the format of the ticks tooltip, the function has an input "value" and has to return a "result" value',
          'baseType': 'STRING',
          'defaultValue': 'result = value;'
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
    };
  };

  this.widgetEvents = function () {
    return {
      'ValuesChanged': {}
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-circularslider">' + '<span class="circularslider-property">Circular Slider</span>' + '</div>';
  };

  this.afterRender = function () {
    this.addNewKnobParameters(this.getProperty("numberOfKnobs"));
  };

  this.afterSetProperty = function (name, value) {
    if (name === 'numberOfKnobs') {
      if (value < 1) {
        TW.IDE.showStatusText('error', 'numberOfKnobs less than 1.');
        this.setProperty("numberOfKnobs", 1);
      } else {
        this.deleteOldKnobParameters();
        this.addNewKnobParameters(value);
      }
      return false;
    }
  };

  this.deleteOldKnobParameters = function () {
    var properties = this.allWidgetProperties().properties;

    for (var key in properties) {
      if (key.toLowerCase().startsWith("value")) {
        delete properties[key];
      }
    }
  };

  this.addNewKnobParameters = function (numberOfKnobs) {
    var properties = this.allWidgetProperties().properties;

    for (var knobN = 1; knobN <= numberOfKnobs; knobN++) {
      properties['Value' + knobN] = {
        isBaseProperty: false,
        name: 'Value' + knobN,
        type: 'property',
        description: 'Value N. ' + knobN,
        isBindingTarget: true,
        isBindingSource: true,
        baseType: "NUMBER",
        isVisible: true,
        isEditable: true
      };
    }

    this.updatedProperties({
      updateUI: true
    });
  };
};