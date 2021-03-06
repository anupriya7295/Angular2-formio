import { Component, AfterViewInit, Injectable, ViewEncapsulation, Input, ElementRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, Jsonp, URLSearchParams, QueryEncoder} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None
})

/**
 * form.component.ts
 * @author Anupriya V
 * The form.component.ts act as controller for mentioned templateUrl.
 */
@Injectable()
export class DynamicFormComponent {
  css: any;
  data: any;
  formId: any;
  form: any;
  renderForm:boolean;

  ngOnInit() {
    console.log("ngOnit------->"+this.form);
  }
  formGet(){
    this.http.get('/assets/json/custom/forms/medpass-oasis.json')
      .map((res: Response) => res.json())
      .subscribe((res: Response) => {
           this.data=res;
           this.formId=this.data.id;
          //  this.form = JSON.stringify(this.data);
           this.setStyles(this.formId, this.data.css);
           this.form = this.data;
           console.log("IN HTTP"+this.form);
           this.renderForm = true;
      },
      (err) => {
        console.log("Error in service",err);
      },
      () => {
        console.log("getData function loaded correctl");
      }
      );
  }

  constructor(private http: Http, private Jsonp: Jsonp, elm: ElementRef) {
    // this.src = elm.nativeElement.getAttribute('src');
    console.log(this);

    console.log("In constructor");
  }

  setStyles(formId: any, cssText: any) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('scoped', 'true');
    style.appendChild(document.createTextNode(cssText));
    document.getElementById('form-renderer-outer-div').appendChild(style);
  }

  public form1: any = {
    "components": [
      {
        "type": "panel",
        "input": false,
        "title": "Page 1",
        "theme": "default",
        "components": [
          {
            "type": "panel",
            "isNew": true,
            "components": [
              {
                "key": "html18",
                "input": false,
                "tag": "strong",
                "attrs": [
                  {
                    "value": "",
                    "attr": ""
                  }
                ],
                "className": "",
                "content": "MEDPASS OASIS NURSE START OF CARE",
                "type": "htmlelement",
                "$$hashKey": "object:5058",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "customClass": "text-center"
              },
              {
                "input": false,
                "key": "table16",
                "numRows": 1,
                "numCols": 2,
                "rows": [
                  [
                    {
                      "components": [
                        {
                          "key": "html19",
                          "input": false,
                          "tag": "p",
                          "attrs": [
                            {
                              "value": "",
                              "attr": ""
                            }
                          ],
                          "className": "greenfont",
                          "content": "<font size=\"6\">START OF CARE VERSION</font>",
                          "type": "htmlelement",
                          "$$hashKey": "object:7146",
                          "tags": [],
                          "conditional": {
                            "show": "",
                            "when": null,
                            "eq": ""
                          }
                        },
                        {
                          "key": "html20",
                          "input": false,
                          "tag": "p",
                          "attrs": [
                            {
                              "value": "",
                              "attr": ""
                            }
                          ],
                          "className": "greenfont",
                          "content": "(also used for Resumption of Care following Inpatient Stay)",
                          "type": "htmlelement",
                          "$$hashKey": "object:10626",
                          "tags": [],
                          "conditional": {
                            "show": "",
                            "when": null,
                            "eq": ""
                          }
                        }
                      ],
                      "$$hashKey": "object:3472"
                    },
                    {
                      "components": [
                        {
                          "key": "html21",
                          "input": false,
                          "tag": "p",
                          "attrs": [
                            {
                              "value": "",
                              "attr": ""
                            }
                          ],
                          "className": "greenfont",
                          "content": "Items to be used at this Time Point:",
                          "type": "htmlelement",
                          "$$hashKey": "object:14111",
                          "tags": [],
                          "conditional": {
                            "show": "",
                            "when": null,
                            "eq": ""
                          }
                        },
                        {
                          "key": "html22",
                          "input": false,
                          "tag": "p",
                          "attrs": [
                            {
                              "value": "",
                              "attr": ""
                            }
                          ],
                          "className": "",
                          "content": "Home Health Patient Tracking Sheet, <font color=\" #006633\">M0080-M0110, M1000-M1036, M1100-M1306, M1308, <font></br><font color=\" #006633\">M1320-M1410, M1600-M2002, M2010, M2020-M2250 </font><font color=\"black\">additional Comprehensive Assessment</br> Items and</font><font color=\"red\"> specific 485 Items</font>",
                          "type": "htmlelement",
                          "$$hashKey": "object:8486",
                          "tags": [],
                          "conditional": {
                            "show": "",
                            "when": null,
                            "eq": ""
                          }
                        }
                      ],
                      "$$hashKey": "object:5264"
                    }
                  ]
                ],
                "header": [],
                "caption": "",
                "striped": false,
                "bordered": true,
                "hover": false,
                "condensed": true,
                "type": "table",
                "$$hashKey": "object:3461",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "customClass": "startofcare"
              },
              {
                "key": "panel1",
                "input": false,
                "title": "PATIENT TRACKING SHEET - Fill Out at Start of Care and Update per Agency Policy",
                "theme": "primary",
                "components": [
                  {
                    "input": false,
                    "key": "table1",
                    "numRows": 1,
                    "numCols": 3,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "C M S Certification Number",
                              "labelPrefixHTML": "<img width =\"3%\"; src=\"./assets/img/custom/5.PNG\" alt=\"\" /> <a href=\"\">M0010</a>  ",
                              "labelSuffixHTML": "",
                              "key": "cmsCertificationNumber",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "tags": [],
                              "customClass": "greenfont",
                              "$$hashKey": "object:2031"
                            }
                          ],
                          "$$hashKey": "object:2022"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Branch State",
                              "key": "branchState",
                              "labelPrefixHTML": "<a href=\"\">M0014</a>  ",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "tags": [],
                              "customClass": "greenfont",
                              "$$hashKey": "object:2039"
                            }
                          ],
                          "$$hashKey": "object:2023"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Branch ID Number",
                              "key": "branchIdNumber",
                              "labelPrefixHTML": "<a href=\"\">M0016</a>  ",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:2083",
                              "tags": [],
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:2024"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:857",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table2",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Provider Name, Address and Telephone Number",
                              "key": "providerNameAddressandTelephoneNumber",
                              "labelPrefixHTML": "<img width =\"1%\"; src=\"./assets/img/custom/7.PNG\" alt=\"\" />  ",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "rows": 3,
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "persistent": true,
                              "wysiwyg": false,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": ""
                              },
                              "type": "textarea",
                              "$$hashKey": "object:2935",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "redfont"
                            }
                          ],
                          "$$hashKey": "object:2624"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:2613",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table3",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns1",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "National Provider Identifier (N P I) for the attending physician who has signed the plan of care:",
                                      "key": "nationalProviderIdentifierNpIfortheattendingphysicianwhohassignedtheplanofcare",
                                      "labelPrefixHTML": "<a href=\"\">M0018</a>  ",
                                      "labelSuffixHTML": "",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "tags": [],
                                      "customClass": "greenfont",
                                      "style": {
                                        "margin-right": "30%"
                                      },
                                      "$$hashKey": "object:5412"
                                    }
                                  ],
                                  "$$hashKey": "object:5406"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "inputType": "checkbox",
                                      "tableView": true,
                                      "hideLabel": true,
                                      "label": "UK - Unknown or Not Available",
                                      "datagridLabel": true,
                                      "key": "ukUnknownorNotAvailable",
                                      "defaultValue": false,
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "checkbox",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "$$hashKey": "object:5420",
                                      "style": {
                                        "margin-top": "4%"
                                      },
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:5407"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:4088",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:3719"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:3708",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table4",
                    "numRows": 1,
                    "numCols": 2,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html1",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": " <img width =\"2%\"; src=\"./assets/img/custom/3.PNG\" alt=\"\" /><a href=\"\">M0020</a> Patient ID Number",
                              "type": "htmlelement",
                              "$$hashKey": "object:9623",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "/ Medical Record Number",
                              "key": "patientIdNumberMedicalRecordNumber",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:7336",
                              "tags": [],
                              "style": {
                                "margin-top": "0%"
                              },
                              "customClass": "redfont"
                            }
                          ],
                          "$$hashKey": "object:6886"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Start of Care Date",
                              "key": "startofCareDate",
                              "placeholder": "",
                              "labelPrefixHTML": "<img width =\"3%\"; src=\"./assets/img/custom/Potentially.png\" alt=\"\" /><img width =\"2%\"; src=\"./assets/img/custom/2.PNG\" alt=\"\" /><a href=\"\">M0030</a></br><img width =\"12px\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /><img width =\"12px\"; src=\"./assets/img/custom/image_Home.png\" alt=\"\" />",
                              "labelSuffixHTML": "",
                              "format": "yyyy-MM-dd hh:mm",
                              "enableDate": true,
                              "enableTime": true,
                              "defaultDate": "",
                              "datepickerMode": "day",
                              "datePicker": {
                                "showWeeks": true,
                                "startingDay": 0,
                                "initDate": "",
                                "minMode": "day",
                                "maxMode": "year",
                                "yearRange": "20",
                                "datepickerMode": "day"
                              },
                              "timePicker": {
                                "hourStep": 1,
                                "minuteStep": 1,
                                "showMeridian": true,
                                "readonlyInput": false,
                                "mousewheel": true,
                                "arrowkeys": true
                              },
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "custom": ""
                              },
                              "type": "datetime",
                              "$$hashKey": "object:8254",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "style": {
                                "margin-top": "1%"
                              }
                            }
                          ],
                          "$$hashKey": "object:6887"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:6875",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table5",
                    "numRows": 1,
                    "numCols": 2,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html2",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "<img width =\"2%\"; src=\"./assets/img/custom/3.PNG\" alt=\"\" /> Certification Period",
                              "type": "htmlelement",
                              "$$hashKey": "object:11149",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": false,
                              "key": "columns2",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "label": "From",
                                      "key": "from",
                                      "placeholder": "",
                                      "format": "yyyy-MM-dd hh:mm",
                                      "enableDate": true,
                                      "enableTime": true,
                                      "defaultDate": "",
                                      "datepickerMode": "day",
                                      "datePicker": {
                                        "showWeeks": true,
                                        "startingDay": 0,
                                        "initDate": "",
                                        "minMode": "day",
                                        "maxMode": "year",
                                        "yearRange": "20",
                                        "datepickerMode": "day"
                                      },
                                      "timePicker": {
                                        "hourStep": 1,
                                        "minuteStep": 1,
                                        "showMeridian": true,
                                        "readonlyInput": false,
                                        "mousewheel": true,
                                        "arrowkeys": true
                                      },
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "custom": ""
                                      },
                                      "type": "datetime",
                                      "$$hashKey": "object:12794",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "redfont"
                                    }
                                  ],
                                  "$$hashKey": "object:11670"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "label": "To",
                                      "key": "to",
                                      "placeholder": "",
                                      "format": "yyyy-MM-dd hh:mm",
                                      "enableDate": true,
                                      "enableTime": true,
                                      "defaultDate": "",
                                      "datepickerMode": "day",
                                      "datePicker": {
                                        "showWeeks": true,
                                        "startingDay": 0,
                                        "initDate": "",
                                        "minMode": "day",
                                        "maxMode": "year",
                                        "yearRange": "20",
                                        "datepickerMode": "day"
                                      },
                                      "timePicker": {
                                        "hourStep": 1,
                                        "minuteStep": 1,
                                        "showMeridian": true,
                                        "readonlyInput": false,
                                        "mousewheel": true,
                                        "arrowkeys": true
                                      },
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "custom": ""
                                      },
                                      "type": "datetime",
                                      "$$hashKey": "object:13446",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "redfont"
                                    }
                                  ],
                                  "$$hashKey": "object:11671"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:11665",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:8827"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns3",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "label": "Resumption of Care Date",
                                      "key": "resumptionofCareDate",
                                      "labelPrefixHTML": "<img width =\"7%\"; src=\"./assets/img/custom/Potentially.png\" alt=\"\" /><a href=\"\">M0032</a></br><img width =\"4%\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /><img width =\"4%\"; src=\"./assets/img/custom/image_Home.png\" alt=\"\" />",
                                      "labelSuffixHTML": "",
                                      "placeholder": "",
                                      "format": "yyyy-MM-dd hh:mm",
                                      "enableDate": true,
                                      "enableTime": true,
                                      "defaultDate": "",
                                      "datepickerMode": "day",
                                      "datePicker": {
                                        "showWeeks": true,
                                        "startingDay": 0,
                                        "initDate": "",
                                        "minMode": "day",
                                        "maxMode": "year",
                                        "yearRange": "20",
                                        "datepickerMode": "day"
                                      },
                                      "timePicker": {
                                        "hourStep": 1,
                                        "minuteStep": 1,
                                        "showMeridian": true,
                                        "readonlyInput": false,
                                        "mousewheel": true,
                                        "arrowkeys": true
                                      },
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "custom": ""
                                      },
                                      "type": "datetime",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont",
                                      "style": {
                                        "margin-top": "3%"
                                      },
                                      "$$hashKey": "object:18701"
                                    }
                                  ],
                                  "$$hashKey": "object:18695"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "inputType": "checkbox",
                                      "tableView": true,
                                      "hideLabel": true,
                                      "label": "NA - Not Applicable",
                                      "datagridLabel": true,
                                      "key": "naNotApplicable",
                                      "defaultValue": false,
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "checkbox",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont",
                                      "style": {
                                        "margin-top": "14%"
                                      },
                                      "$$hashKey": "object:18711"
                                    }
                                  ],
                                  "$$hashKey": "object:18696"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:14146",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:8828"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:8816",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table6",
                    "numRows": 1,
                    "numCols": 2,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html3",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "<img width =\"1%\"; src=\"./assets/img/custom/6.PNG\" alt=\"\" /> <a href=\"\">M0040</a>Patient Name",
                              "type": "htmlelement",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "$$hashKey": "object:35801"
                            },
                            {
                              "input": false,
                              "key": "columns4",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns5",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "text",
                                              "inputMask": "",
                                              "label": "First",
                                              "key": "first",
                                              "placeholder": "",
                                              "prefix": "",
                                              "suffix": "",
                                              "multiple": false,
                                              "defaultValue": "",
                                              "protected": false,
                                              "unique": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "pattern": "",
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "type": "textfield",
                                              "tags": [],
                                              "customClass": "redfont",
                                              "$$hashKey": "object:35861"
                                            }
                                          ],
                                          "$$hashKey": "object:35844"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "text",
                                              "inputMask": "",
                                              "label": "MI",
                                              "key": "mi",
                                              "placeholder": "",
                                              "prefix": "",
                                              "suffix": "",
                                              "multiple": false,
                                              "defaultValue": "",
                                              "protected": false,
                                              "unique": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "pattern": "",
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "type": "textfield",
                                              "tags": [],
                                              "customClass": "redfont",
                                              "$$hashKey": "object:35865"
                                            }
                                          ],
                                          "$$hashKey": "object:35845"
                                        }
                                      ],
                                      "type": "columns",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "$$hashKey": "object:35833"
                                    }
                                  ],
                                  "$$hashKey": "object:35811"
                                },
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns6",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "text",
                                              "inputMask": "",
                                              "label": "Last",
                                              "key": "last",
                                              "placeholder": "",
                                              "prefix": "",
                                              "suffix": "",
                                              "multiple": false,
                                              "defaultValue": "",
                                              "protected": false,
                                              "unique": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "pattern": "",
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "type": "textfield",
                                              "tags": [],
                                              "customClass": "redfont",
                                              "$$hashKey": "object:35871"
                                            }
                                          ],
                                          "$$hashKey": "object:35849"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "text",
                                              "inputMask": "",
                                              "label": "Suffix",
                                              "key": "suffix",
                                              "placeholder": "",
                                              "prefix": "",
                                              "suffix": "",
                                              "multiple": false,
                                              "defaultValue": "",
                                              "protected": false,
                                              "unique": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "pattern": "",
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "type": "textfield",
                                              "tags": [],
                                              "customClass": "redfont",
                                              "$$hashKey": "object:35875"
                                            }
                                          ],
                                          "$$hashKey": "object:35850"
                                        }
                                      ],
                                      "type": "columns",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "$$hashKey": "object:35837"
                                    }
                                  ],
                                  "$$hashKey": "object:35812"
                                }
                              ],
                              "type": "columns",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "$$hashKey": "object:35802"
                            }
                          ],
                          "$$hashKey": "object:35795"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputMask": "(999) 999-9999",
                              "label": "# Patient Phone",
                              "key": "patientPhone",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "defaultValue": "",
                              "validate": {
                                "required": false
                              },
                              "type": "phoneNumber",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "$$hashKey": "object:35815",
                              "style": {
                                "margin-top": "11%"
                              }
                            }
                          ],
                          "$$hashKey": "object:35796"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:19540",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table19",
                    "numRows": 1,
                    "numCols": 3,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns22",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Patient Street Address",
                                      "key": "patientStreetAddress",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:10838",
                                      "tags": [],
                                      "customClass": "redfont"
                                    }
                                  ],
                                  "$$hashKey": "object:7258"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "City",
                                      "key": "city",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:14522",
                                      "tags": [],
                                      "customClass": "redfont"
                                    }
                                  ],
                                  "$$hashKey": "object:7259"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:7253",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:3619"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Patient State of Residence",
                              "key": "patientStateofResidence",
                              "labelPrefixHTML": "<a href=\"\">M0050</a>",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:18240",
                              "tags": [],
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:3620"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Patient Zip Code",
                              "key": "patientZipCode",
                              "labelPrefixHTML": "<a href=\"\">M0060</a>",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:21998",
                              "tags": [],
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:3621"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:3608",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table7",
                    "numRows": 2,
                    "numCols": 3,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns7",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "key": "html4",
                                      "input": false,
                                      "tag": "p",
                                      "attrs": [
                                        {
                                          "value": "",
                                          "attr": ""
                                        }
                                      ],
                                      "className": "",
                                      "content": "<img width =\"7%\"; src=\"./assets/img/custom/1.PNG\" alt=\"\" /> <a href=\"\">M0063</a>Medicare Number: (including suffix)",
                                      "type": "htmlelement",
                                      "$$hashKey": "object:41659",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont"
                                    },
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Hi Claim No",
                                      "key": "hiClaimNo",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:42664",
                                      "tags": [],
                                      "customClass": "redfont"
                                    }
                                  ],
                                  "$$hashKey": "object:40672"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "inputType": "checkbox",
                                      "tableView": true,
                                      "hideLabel": true,
                                      "label": "NA - No Medicare",
                                      "datagridLabel": true,
                                      "key": "naNoMedicare",
                                      "defaultValue": false,
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "checkbox",
                                      "$$hashKey": "object:43763",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:40673"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:40667",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:37087"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns8",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Social Security Number",
                                      "key": "socialSecurityNumber",
                                      "labelPrefixHTML": "<a href=\"\">M0064</a>",
                                      "labelSuffixHTML": "",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:45920",
                                      "tags": [],
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:44856"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "inputType": "checkbox",
                                      "tableView": true,
                                      "hideLabel": true,
                                      "label": "UK - Unknown or Not Available",
                                      "datagridLabel": true,
                                      "key": "ukUnknownorNotAvailable1",
                                      "defaultValue": false,
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "checkbox",
                                      "$$hashKey": "object:47085",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:44857"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:44851",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:37088"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns9",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Medicaid Number",
                                      "key": "medicaidNumber",
                                      "labelPrefixHTML": "<a href=\"\">M0065</a>",
                                      "labelSuffixHTML": "",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:49402",
                                      "tags": [],
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:48272"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "inputType": "checkbox",
                                      "tableView": true,
                                      "hideLabel": true,
                                      "label": "NA - No Medicaid",
                                      "datagridLabel": true,
                                      "key": "naNoMedicaid",
                                      "defaultValue": false,
                                      "protected": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "checkbox",
                                      "$$hashKey": "object:50633",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "customClass": "greenfont"
                                    }
                                  ],
                                  "$$hashKey": "object:48273"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:48267",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Effective Date",
                              "key": "effectiveDate",
                              "placeholder": "",
                              "format": "yyyy-MM-dd hh:mm",
                              "enableDate": true,
                              "enableTime": true,
                              "defaultDate": "",
                              "datepickerMode": "day",
                              "datePicker": {
                                "showWeeks": true,
                                "startingDay": 0,
                                "initDate": "",
                                "minMode": "day",
                                "maxMode": "year",
                                "yearRange": "20",
                                "datepickerMode": "day"
                              },
                              "timePicker": {
                                "hourStep": 1,
                                "minuteStep": 1,
                                "showMeridian": true,
                                "readonlyInput": false,
                                "mousewheel": true,
                                "arrowkeys": true
                              },
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "custom": ""
                              },
                              "type": "datetime",
                              "$$hashKey": "object:53113",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:37089"
                        }
                      ],
                      [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Birth Date",
                              "key": "birthDate1",
                              "placeholder": "",
                              "labelPrefixHTML": "<img width =\"3%\"; src=\"./assets/img/custom/8.PNG\" alt=\"\" /><a href=\"\">M0066</a>",
                              "labelSuffixHTML": "",
                              "format": "yyyy-MM-dd hh:mm",
                              "enableDate": true,
                              "enableTime": true,
                              "defaultDate": "",
                              "datepickerMode": "day",
                              "datePicker": {
                                "showWeeks": true,
                                "startingDay": 0,
                                "initDate": "",
                                "minMode": "day",
                                "maxMode": "year",
                                "yearRange": "20",
                                "datepickerMode": "day"
                              },
                              "timePicker": {
                                "hourStep": 1,
                                "minuteStep": 1,
                                "showMeridian": true,
                                "readonlyInput": false,
                                "mousewheel": true,
                                "arrowkeys": true
                              },
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "custom": ""
                              },
                              "type": "datetime",
                              "$$hashKey": "object:60328",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:59656"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "radio",
                              "label": "Gender",
                              "key": "gender",
                              "labelPrefixHTML": "<img width =\"3%\"; src=\"./assets/img/custom/9.PNG\" alt=\"\" /><a href=\"\">M0069</a>",
                              "labelSuffixHTML": "",
                              "values": [
                                {
                                  "value": "1Male",
                                  "label": "1  -  Male"
                                },
                                {
                                  "value": "2Female",
                                  "label": "2  -    Female"
                                }
                              ],
                              "defaultValue": "",
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                              },
                              "type": "radio",
                              "$$hashKey": "object:62409",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:59657"
                        },
                        {
                          "components": [],
                          "$$hashKey": "object:59658"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:37076",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table8",
                    "numRows": 3,
                    "numCols": 2,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Primary Physician's Number",
                              "key": "primaryPhysicianNumber",
                              "placeholder": "(select an Physician)",
                              "data": {
                                "values": [
                                  {
                                    "value": "",
                                    "label": "",
                                    "$$hashKey": "object:76343"
                                  }
                                ],
                                "json": "",
                                "url": "",
                                "resource": "",
                                "custom": ""
                              },
                              "dataSrc": "values",
                              "valueProperty": "",
                              "defaultValue": "",
                              "refreshOn": "",
                              "filter": "",
                              "authenticate": false,
                              "multiple": false,
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "select",
                              "$$hashKey": "object:76155",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "redfont",
                              "template": "<span>{{ item.label }}</span>"
                            }
                          ],
                          "$$hashKey": "object:66096"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns10",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Emergency Contact Number",
                                      "key": "emergencyContactNumber",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:79983",
                                      "tags": []
                                    }
                                  ],
                                  "$$hashKey": "object:77712"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Relationship",
                                      "key": "relationship",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:81532",
                                      "tags": []
                                    }
                                  ],
                                  "$$hashKey": "object:77713"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:77707",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:66097"
                        }
                      ],
                      [
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Address",
                              "key": "address",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:83121",
                              "tags": [],
                              "customClass": "redfont"
                            }
                          ],
                          "$$hashKey": "object:73993"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns12",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Address",
                                      "key": "address1",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:97245",
                                      "tags": []
                                    }
                                  ],
                                  "$$hashKey": "object:88819"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputMask": "(999) 999-9999",
                                      "label": "Phone",
                                      "key": "phone",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "defaultValue": "",
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "phoneNumber",
                                      "$$hashKey": "object:92022",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:88820"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:88814",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:73994"
                        }
                      ],
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns11",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputMask": "(999) 999-9999",
                                      "label": "Physician's Phone",
                                      "key": "physiciansPhone",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "defaultValue": "",
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "phoneNumber",
                                      "$$hashKey": "object:93721",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:86464"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Physician's Fax",
                                      "key": "physiciansFax",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:95460",
                                      "tags": []
                                    }
                                  ],
                                  "$$hashKey": "object:86465"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:86459",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:74001"
                        },
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns13",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputType": "text",
                                      "inputMask": "",
                                      "label": "Secondary Physician's Name",
                                      "key": "secondaryPhysiciansName",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "defaultValue": "",
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "validate": {
                                        "required": false,
                                        "minLength": "",
                                        "maxLength": "",
                                        "pattern": "",
                                        "custom": "",
                                        "customPrivate": false
                                      },
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "type": "textfield",
                                      "$$hashKey": "object:99070",
                                      "tags": []
                                    }
                                  ],
                                  "$$hashKey": "object:90417"
                                },
                                {
                                  "components": [
                                    {
                                      "input": true,
                                      "tableView": true,
                                      "inputMask": "(999) 999-9999",
                                      "label": "Phone",
                                      "key": "phone1",
                                      "placeholder": "",
                                      "prefix": "",
                                      "suffix": "",
                                      "multiple": false,
                                      "protected": false,
                                      "unique": false,
                                      "persistent": true,
                                      "defaultValue": "",
                                      "validate": {
                                        "required": false
                                      },
                                      "type": "phoneNumber",
                                      "$$hashKey": "object:100935",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:90418"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:90412",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:74002"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "customClass": "primaryPhysician",
                    "$$hashKey": "object:66085",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table9",
                    "numRows": 1,
                    "numCols": 6,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html5",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": " <a href=\"\">M0140</a> Race/Ethnicity: (Mark all that apply.)",
                              "type": "htmlelement",
                              "$$hashKey": "object:127506",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "1 - American Indian or Alaska Native",
                              "datagridLabel": true,
                              "key": "americanIndianorAlaska",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:110667",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:102845"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "2 - Asian",
                              "datagridLabel": true,
                              "key": "asian",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:113593",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "style": {
                                "margin-top": "25%"
                              }
                            }
                          ],
                          "$$hashKey": "object:102846"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "3 - Black or African-American",
                              "datagridLabel": true,
                              "key": "blackorAfricanAmerican",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:115537",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "style": {
                                "margin-top": "9%"
                              }
                            }
                          ],
                          "$$hashKey": "object:102847"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "4 - Hispanic or Latino",
                              "datagridLabel": true,
                              "key": "hispanicorLatino",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:121463",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "style": {
                                "margin-top": "12%"
                              },
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:103869"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "5 - Native Hawaiian or Pacific Islander",
                              "datagridLabel": true,
                              "key": "nativeHawaiianorPacificIslander",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:123423",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "style": {
                                "margin-top": "7%"
                              }
                            }
                          ],
                          "$$hashKey": "object:103870"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "inputType": "checkbox",
                              "tableView": true,
                              "hideLabel": true,
                              "label": "6 - White",
                              "datagridLabel": true,
                              "key": "white",
                              "defaultValue": false,
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false
                              },
                              "type": "checkbox",
                              "$$hashKey": "object:125397",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont",
                              "style": {
                                "margin-top": "21%"
                              }
                            }
                          ],
                          "$$hashKey": "object:103871"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": false,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:102834",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table10",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html6",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "",
                              "content": "<a href=\"\">M0150</a> Current Payment Sources for Home Care: (Mark all that apply.)",
                              "type": "htmlelement",
                              "$$hashKey": "object:149517",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont"
                            },
                            {
                              "input": false,
                              "key": "columns14",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns15",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "0  -  None; no charge for current services",
                                              "datagridLabel": true,
                                              "key": "nonenochargeforcurrentservices",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont",
                                              "$$hashKey": "object:181955"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "1  -  Medicare (traditional fee-for-service)",
                                              "datagridLabel": true,
                                              "key": "medicaretraditionalfeeForService",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:185190",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "2  -  Medicare (HMO/managed care/Advantage plan)",
                                              "datagridLabel": true,
                                              "key": "medicareHmOmanagedcareAdvantageplan",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:187294",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "3  -  Medicaid (traditional fee-for-service)",
                                              "datagridLabel": true,
                                              "key": "medicaidtraditionalfeeForService",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:189412",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:181949"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "4  -  Medicaid (HMO/managed care)",
                                              "datagridLabel": true,
                                              "key": "medicaidHmOmanagedcare",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "$$hashKey": "object:181962",
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "5  -  Workers' compensation",
                                              "datagridLabel": true,
                                              "key": "workerscompensation",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:191544",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "6  -  Title programs (for example, Title III, V, or XX)",
                                              "datagridLabel": true,
                                              "key": "titleprogramsforexampleTitleIiiVorXx",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:193690",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "7  -  Other government (for example, TriCare, VA)",
                                              "datagridLabel": true,
                                              "key": "othergovernmentforexampleTriCareVa",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:195850",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:181950"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:175749",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:151518"
                                },
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns16",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "8  -  Private insurance",
                                              "datagridLabel": true,
                                              "key": "privateinsurance",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:209717",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "9  -  Private HMO/managed care",
                                              "datagridLabel": true,
                                              "key": "privateHmOmanagedcare",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:211903",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "10  -  Self-pay",
                                              "datagridLabel": true,
                                              "key": "selfPay",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:214103",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            },
                                            {
                                              "input": false,
                                              "key": "columns17",
                                              "columns": [
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "inputType": "checkbox",
                                                      "tableView": true,
                                                      "hideLabel": true,
                                                      "label": "11  -  Other (specify):",
                                                      "datagridLabel": true,
                                                      "key": "otherspecify",
                                                      "defaultValue": false,
                                                      "protected": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false
                                                      },
                                                      "type": "checkbox",
                                                      "tags": [],
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "customClass": "greenfont",
                                                      "$$hashKey": "object:232018"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:232012"
                                                },
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "tableView": true,
                                                      "inputType": "text",
                                                      "inputMask": "",
                                                      "label": "",
                                                      "key": "textField1",
                                                      "placeholder": "",
                                                      "prefix": "",
                                                      "suffix": "",
                                                      "multiple": false,
                                                      "defaultValue": "",
                                                      "protected": false,
                                                      "unique": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "pattern": "",
                                                        "custom": "",
                                                        "customPrivate": false
                                                      },
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "type": "textfield",
                                                      "tags": [],
                                                      "$$hashKey": "object:232025"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:232013"
                                                }
                                              ],
                                              "type": "columns",
                                              "$$hashKey": "object:225223",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:207581"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "UK  -  Unknown",
                                              "datagridLabel": true,
                                              "key": "ukUnknown1",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:335010",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:207582"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:207576",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:151519"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:151513",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:147472"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": true,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:147461",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  }
                ],
                "type": "panel",
                "$$hashKey": "object:738",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "customClass": "blackpanel"
              },
              {
                "key": "panel2",
                "input": false,
                "title": "CLINICAL RECORD ITEMS",
                "theme": "success",
                "components": [
                  {
                    "input": false,
                    "key": "table11",
                    "numRows": 1,
                    "numCols": 2,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html7",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "<a href=\"\">M0080</a>Discipline of Person Completing Assessment:",
                              "type": "htmlelement",
                              "$$hashKey": "object:239036",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": false,
                              "key": "columns18",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns19",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "rn",
                                              "values": [
                                                {
                                                  "value": "1Rn",
                                                  "label": "1 - RN"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "$$hashKey": "object:250871",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:246124"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "radioField1",
                                              "values": [
                                                {
                                                  "value": "2Pt",
                                                  "label": "2 - PT"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "$$hashKey": "object:253359",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:246125"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:246119",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:243766"
                                },
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns20",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "radioField2",
                                              "values": [
                                                {
                                                  "value": "3SlpSt",
                                                  "label": "3 - SLP/ST"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "$$hashKey": "object:255959",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:248494"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": false,
                                              "key": "columns21",
                                              "columns": [
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "tableView": true,
                                                      "inputType": "radio",
                                                      "label": "",
                                                      "key": "ot",
                                                      "values": [
                                                        {
                                                          "value": "4Ot",
                                                          "label": "4 - OT"
                                                        }
                                                      ],
                                                      "defaultValue": "",
                                                      "protected": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false
                                                      },
                                                      "type": "radio",
                                                      "$$hashKey": "object:261068",
                                                      "tags": [],
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "customClass": "greenfont"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:258541"
                                                },
                                                {
                                                  "components": [
                                                    {
                                                      "key": "html8",
                                                      "input": false,
                                                      "tag": "a",
                                                      "attrs": [
                                                        {
                                                          "value": "",
                                                          "attr": ""
                                                        }
                                                      ],
                                                      "className": "redfont",
                                                      "content": "clear",
                                                      "type": "htmlelement",
                                                      "$$hashKey": "object:263706",
                                                      "tags": [],
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      }
                                                    }
                                                  ],
                                                  "$$hashKey": "object:258542"
                                                }
                                              ],
                                              "type": "columns",
                                              "$$hashKey": "object:258536",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:248495"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:248489",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:243767"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:243761",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:236687"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "label": "Date Assessment Completed: month day year",
                              "key": "dateAssessmentCompletedmonthdayyear",
                              "labelPrefixHTML": "<a href=\"\">M0090</a> ",
                              "labelSuffixHTML": "",
                              "placeholder": "",
                              "format": "yyyy-MM-dd hh:mm",
                              "enableDate": true,
                              "enableTime": true,
                              "defaultDate": "",
                              "datepickerMode": "day",
                              "datePicker": {
                                "showWeeks": true,
                                "startingDay": 0,
                                "initDate": "",
                                "minMode": "day",
                                "maxMode": "year",
                                "yearRange": "20",
                                "datepickerMode": "day"
                              },
                              "timePicker": {
                                "hourStep": 1,
                                "minuteStep": 1,
                                "showMeridian": true,
                                "readonlyInput": false,
                                "mousewheel": true,
                                "arrowkeys": true
                              },
                              "protected": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "custom": ""
                              },
                              "type": "datetime",
                              "$$hashKey": "object:241336",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:236688"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": true,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:236676",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table17",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html9",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "<img width =\"2%\"; src=\"./assets/img/custom/image_OM.png\" alt=\"\" /><img width =\"1%\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /><a href=\"\">M0100</a> This Assessment is Currently Being Completed for the Following Reason:",
                              "type": "htmlelement",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "isNew": false,
                              "$$hashKey": "object:10810"
                            },
                            {
                              "input": false,
                              "key": "columns35",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns23",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": false,
                                              "key": "columns24",
                                              "columns": [
                                                {
                                                  "components": [
                                                    {
                                                      "key": "html10",
                                                      "input": false,
                                                      "tag": "img",
                                                      "attrs": [
                                                        {
                                                          "value": "./assets/img/custom/image_Home.png",
                                                          "attr": "src"
                                                        }
                                                      ],
                                                      "className": "",
                                                      "content": "",
                                                      "type": "htmlelement",
                                                      "tags": [],
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "$$hashKey": "object:16174"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:16147"
                                                },
                                                {
                                                  "components": [],
                                                  "$$hashKey": "object:16148"
                                                }
                                              ],
                                              "type": "columns",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "$$hashKey": "object:16129"
                                            }
                                          ],
                                          "$$hashKey": "object:16120"
                                        },
                                        {
                                          "components": [
                                            {
                                              "key": "html11",
                                              "input": false,
                                              "tag": "u",
                                              "attrs": [
                                                {
                                                  "value": "",
                                                  "attr": ""
                                                }
                                              ],
                                              "className": "greenfont",
                                              "content": "Start/Resumption of Care:",
                                              "type": "htmlelement",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "$$hashKey": "object:16133"
                                            },
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "startofcareFurthervisitsplanned",
                                              "values": [
                                                {
                                                  "value": "1StartOfCareFurtherVisitsPlanned",
                                                  "label": "1  -  Start of care-further visits planned"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont",
                                              "$$hashKey": "object:16134"
                                            },
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "resumptionofcareafterinpatientstay",
                                              "values": [
                                                {
                                                  "value": "3ResumptionOfCareAfterInpatientStay",
                                                  "label": "3  -  Resumption of care (after inpatient stay)"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont",
                                              "$$hashKey": "object:16135"
                                            }
                                          ],
                                          "$$hashKey": "object:16121"
                                        }
                                      ],
                                      "type": "columns",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      },
                                      "isNew": false,
                                      "$$hashKey": "object:16115"
                                    }
                                  ],
                                  "$$hashKey": "object:12590"
                                },
                                {
                                  "components": [],
                                  "$$hashKey": "object:12591"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:12585",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:3551"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:3540",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table12",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns25",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "key": "html12",
                                      "input": false,
                                      "tag": "p",
                                      "attrs": [
                                        {
                                          "value": "",
                                          "attr": ""
                                        }
                                      ],
                                      "className": "greenfont",
                                      "content": "<img width =\"2%\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /> <a href=\"\">M0102</a></br><img width =\"2%\"; src=\"./assets/img/custom/image_Home.png\" alt=\"\" />  <strong>Date of Physician-ordered Start of Care (Resumption of Care):</strong> If the physician indicated a specific start of care (resumption of care) date when the patient was referred for home health services, record the date specified.",
                                      "type": "htmlelement",
                                      "$$hashKey": "object:332210",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:326651"
                                },
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns26",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "label": "Month-day-year",
                                              "key": "monthDayYear",
                                              "placeholder": "",
                                              "format": "yyyy-MM-dd hh:mm",
                                              "enableDate": true,
                                              "enableTime": true,
                                              "defaultDate": "",
                                              "datepickerMode": "day",
                                              "datePicker": {
                                                "showWeeks": true,
                                                "startingDay": 0,
                                                "initDate": "",
                                                "minMode": "day",
                                                "maxMode": "year",
                                                "yearRange": "20",
                                                "datepickerMode": "day"
                                              },
                                              "timePicker": {
                                                "hourStep": 1,
                                                "minuteStep": 1,
                                                "showMeridian": true,
                                                "readonlyInput": false,
                                                "mousewheel": true,
                                                "arrowkeys": true
                                              },
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": ""
                                              },
                                              "type": "datetime",
                                              "$$hashKey": "object:339152",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            },
                                            {
                                              "key": "html13",
                                              "input": false,
                                              "tag": "p",
                                              "attrs": [
                                                {
                                                  "value": "",
                                                  "attr": ""
                                                }
                                              ],
                                              "className": "greenfont",
                                              "content": "[Go to M0110, if date entered]",
                                              "type": "htmlelement",
                                              "$$hashKey": "object:342076",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:329427"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "inputType": "checkbox",
                                              "tableView": true,
                                              "hideLabel": true,
                                              "label": "NA - No specific SOC date ordered by physician",
                                              "datagridLabel": true,
                                              "key": "naNospecificSoCdateorderedbyphysician",
                                              "defaultValue": false,
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false
                                              },
                                              "type": "checkbox",
                                              "$$hashKey": "object:344935",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:329428"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:329422",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:326652"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:326646",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:319760"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:319749",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table13",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns27",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "key": "html14",
                                      "input": false,
                                      "tag": "p",
                                      "attrs": [
                                        {
                                          "value": "",
                                          "attr": ""
                                        }
                                      ],
                                      "className": "greenfont",
                                      "content": "<img width =\"2%\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /> <a href=\"\">M0102</a></br><img width =\"2%\"; src=\"./assets/img/custom/image_Home.png\" alt=\"\" />Date of Referral: Indicate the date that the written or verbal referral for initiation or resumption of care was received by the HHA.",
                                      "type": "htmlelement",
                                      "$$hashKey": "object:353776",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:350883"
                                },
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns28",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "label": "month day year",
                                              "key": "monthdayyear",
                                              "placeholder": "",
                                              "format": "yyyy-MM-dd hh:mm",
                                              "enableDate": true,
                                              "enableTime": true,
                                              "defaultDate": "",
                                              "datepickerMode": "day",
                                              "datePicker": {
                                                "showWeeks": true,
                                                "startingDay": 0,
                                                "initDate": "",
                                                "minMode": "day",
                                                "maxMode": "year",
                                                "yearRange": "20",
                                                "datepickerMode": "day"
                                              },
                                              "timePicker": {
                                                "hourStep": 1,
                                                "minuteStep": 1,
                                                "showMeridian": true,
                                                "readonlyInput": false,
                                                "mousewheel": true,
                                                "arrowkeys": true
                                              },
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": ""
                                              },
                                              "type": "datetime",
                                              "$$hashKey": "object:363987",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:361071"
                                        },
                                        {
                                          "components": [],
                                          "$$hashKey": "object:361072"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:361066",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:350884"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:350878",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:347849"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:347838",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table14",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html15",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "<a href=\"\">M0110</a>Episode Timing: Is the Medicare home health payment episode for which this assessment will define a case mix group an \"early\" episode or a \"later\" episode in the patient current sequence of adjacent Medicare home health payment episodes?",
                              "type": "htmlelement",
                              "$$hashKey": "object:371588",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": false,
                              "key": "columns29",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns30",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "radioField3",
                                              "values": [
                                                {
                                                  "value": "1Early",
                                                  "label": "1  -  Early"
                                                },
                                                {
                                                  "value": "2Later",
                                                  "label": "2  -  Later"
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "$$hashKey": "object:380605",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:377593"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "radio",
                                              "label": "",
                                              "key": "radioField4",
                                              "values": [
                                                {
                                                  "value": "ukUnknown",
                                                  "label": "UK - Unknown"
                                                },
                                                {
                                                  "value": "naNotApplicableNoMedicareCaseMixGroupToBeDefinedByThisAssessment",
                                                  "label": "NA - Not Applicable: No Medicare case mix group to be defined by this assessment."
                                                }
                                              ],
                                              "defaultValue": "",
                                              "protected": false,
                                              "persistent": true,
                                              "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                              },
                                              "type": "radio",
                                              "$$hashKey": "object:386851",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              },
                                              "customClass": "greenfont"
                                            }
                                          ],
                                          "$$hashKey": "object:377594"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:377588",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:374588"
                                },
                                {
                                  "components": [],
                                  "$$hashKey": "object:374589"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:374583",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:368543"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:368532",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table15",
                    "numRows": 1,
                    "numCols": 3,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html16",
                              "input": false,
                              "tag": "img",
                              "attrs": [
                                {
                                  "value": "./assets/img/custom/MonaLisaMedpass.png",
                                  "attr": "src"
                                }
                              ],
                              "className": "",
                              "content": "",
                              "type": "htmlelement",
                              "$$hashKey": "object:393258",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:390055"
                        },
                        {
                          "components": [
                            {
                              "key": "html17",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "greenfont",
                              "content": "Patient Name",
                              "type": "htmlelement",
                              "$$hashKey": "object:396419",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            },
                            {
                              "input": false,
                              "key": "columns31",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "input": false,
                                      "key": "columns32",
                                      "columns": [
                                        {
                                          "components": [
                                            {
                                              "input": false,
                                              "key": "columns34",
                                              "columns": [
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "tableView": true,
                                                      "inputType": "text",
                                                      "inputMask": "",
                                                      "label": "Last",
                                                      "key": "last1",
                                                      "placeholder": "",
                                                      "prefix": "",
                                                      "suffix": "",
                                                      "multiple": false,
                                                      "defaultValue": "",
                                                      "protected": false,
                                                      "unique": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "pattern": "",
                                                        "custom": "",
                                                        "customPrivate": false
                                                      },
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "type": "textfield",
                                                      "$$hashKey": "object:420545",
                                                      "tags": [],
                                                      "customClass": "greenfont"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:417298"
                                                },
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "tableView": true,
                                                      "inputType": "text",
                                                      "inputMask": "",
                                                      "label": "First",
                                                      "key": "first2",
                                                      "placeholder": "",
                                                      "prefix": "",
                                                      "suffix": "",
                                                      "multiple": false,
                                                      "defaultValue": "",
                                                      "protected": false,
                                                      "unique": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "pattern": "",
                                                        "custom": "",
                                                        "customPrivate": false
                                                      },
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "type": "textfield",
                                                      "$$hashKey": "object:423893",
                                                      "tags": [],
                                                      "customClass": "greenfont"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:417299"
                                                }
                                              ],
                                              "type": "columns",
                                              "$$hashKey": "object:417293",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:402766"
                                        },
                                        {
                                          "components": [
                                            {
                                              "input": false,
                                              "key": "columns33",
                                              "columns": [
                                                {
                                                  "components": [
                                                    {
                                                      "input": true,
                                                      "tableView": true,
                                                      "inputType": "text",
                                                      "inputMask": "",
                                                      "label": "MI",
                                                      "key": "first1",
                                                      "placeholder": "",
                                                      "prefix": "",
                                                      "suffix": "",
                                                      "multiple": false,
                                                      "defaultValue": "",
                                                      "protected": false,
                                                      "unique": false,
                                                      "persistent": true,
                                                      "validate": {
                                                        "required": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "pattern": "",
                                                        "custom": "",
                                                        "customPrivate": false
                                                      },
                                                      "conditional": {
                                                        "show": "",
                                                        "when": null,
                                                        "eq": ""
                                                      },
                                                      "type": "textfield",
                                                      "tags": [],
                                                      "customClass": "greenfont",
                                                      "$$hashKey": "object:427332"
                                                    }
                                                  ],
                                                  "$$hashKey": "object:427326"
                                                },
                                                {
                                                  "components": [],
                                                  "$$hashKey": "object:427327"
                                                }
                                              ],
                                              "type": "columns",
                                              "$$hashKey": "object:405949",
                                              "tags": [],
                                              "conditional": {
                                                "show": "",
                                                "when": null,
                                                "eq": ""
                                              }
                                            }
                                          ],
                                          "$$hashKey": "object:402767"
                                        }
                                      ],
                                      "type": "columns",
                                      "$$hashKey": "object:402761",
                                      "tags": [],
                                      "conditional": {
                                        "show": "",
                                        "when": null,
                                        "eq": ""
                                      }
                                    }
                                  ],
                                  "$$hashKey": "object:399590"
                                },
                                {
                                  "components": [],
                                  "$$hashKey": "object:399591"
                                }
                              ],
                              "type": "columns",
                              "$$hashKey": "object:399585",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:390056"
                        },
                        {
                          "components": [
                            {
                              "input": true,
                              "tableView": true,
                              "inputType": "text",
                              "inputMask": "",
                              "label": "Record No",
                              "key": "recordNo",
                              "placeholder": "",
                              "prefix": "",
                              "suffix": "",
                              "multiple": false,
                              "defaultValue": "",
                              "protected": false,
                              "unique": false,
                              "persistent": true,
                              "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false
                              },
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              },
                              "type": "textfield",
                              "$$hashKey": "object:429170",
                              "tags": [],
                              "customClass": "greenfont"
                            }
                          ],
                          "$$hashKey": "object:390057"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": false,
                    "hover": false,
                    "condensed": true,
                    "customClass": "lastRow",
                    "type": "table",
                    "$$hashKey": "object:390044",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "key": "html23",
                    "input": false,
                    "tag": "p",
                    "attrs": [
                      {
                        "value": "",
                        "attr": ""
                      }
                    ],
                    "className": "",
                    "content": "QUALITY MEASURES KEY :<img width =\"2%\"; src=\"./assets/img/custom/image_OM.png\" alt=\"\" /> = Outcomes <img width =\"1%\"; src=\"./assets/img/custom/image_P.png\" alt=\"\" /> = Process <img width =\"2%\"; src=\"./assets/img/custom/Potentially.png\" alt=\"\" /> = Potentially Avoidable Events <img width =\"1%\"; src=\"./assets/img/custom/image_Home.png\" alt=\"\" /> = Home Health Compare  </br>INDICATORS :<img width =\"2%\"; src=\"./assets/img/custom/image_NRS.png\" alt=\"\" /> = Non Routine Supplies <img width =\"1%\"; src=\"./assets/img/custom/image_Spoon.png\" alt=\"\" /> = Nutritional Risk Factors ",
                    "type": "htmlelement",
                    "$$hashKey": "object:3560",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    }
                  },
                  {
                    "input": false,
                    "key": "table18",
                    "numRows": 1,
                    "numCols": 1,
                    "rows": [
                      [
                        {
                          "components": [
                            {
                              "key": "html24",
                              "input": false,
                              "tag": "p",
                              "attrs": [
                                {
                                  "value": "",
                                  "attr": ""
                                }
                              ],
                              "className": "",
                              "content": "Caregiver Signature:\tThis form has not been electronically signed by you.",
                              "type": "htmlelement",
                              "$$hashKey": "object:3595",
                              "tags": [],
                              "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                              }
                            }
                          ],
                          "$$hashKey": "object:3585"
                        }
                      ]
                    ],
                    "header": [],
                    "caption": "",
                    "striped": false,
                    "bordered": true,
                    "hover": false,
                    "condensed": true,
                    "type": "table",
                    "$$hashKey": "object:3574",
                    "tags": [],
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    },
                    "customClass": "lastTable"
                  }
                ],
                "type": "panel",
                "$$hashKey": "object:234394",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                }
              }
            ],
            "input": false,
            "key": "1",
            "$$hashKey": "object:709",
            "theme": "default",
            "title": ""
          }
        ],
        "$$hashKey": "object:14",
        "tags": [],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "customClass": "form1"
      },
      {
        "type": "panel",
        "title": "Page 2",
        "isNew": true,
        "components": [],
        "input": false,
        "key": "page2",
        "$$hashKey": "object:3300"
      }
    ],
    "display": "wizard",
    "page": 0,
    "numPages": 2
  };

  entity = {};
  check: any;
  getcountry(event: any) {
    console.log(event);
    console.log(this.check.indexOf(event));
    console.log(this.check);
  }

  formdata = {
    name: 'Customer',
    id: '101',
    function: "saveform",
    fields: [
      {
        name: 'Name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        material_icon: 'person_outline',
        id: 'name',
        errormessage: 'Username is required (minimum 5 characters).',
        pattern: '[A-Za-z]*',
        isRequired: 'true',
        minLength: '5'
      },
      {
        name: 'Password',
        label: 'Password',
        type: 'password',
        placeholder: 'Placeholder',
        material_icon: 'lock_outline',
        id: 'Password',
        errormessage: 'Password must have at least 6 characters,and a number.',
        pattern: '^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$',
        isRequired: 'true'
      },
      {
        name: 'Number',
        label: 'Number',
        type: 'number',
        placeholder: 'Number',
        icon: 'line/add-circle-1.svg',
        id: 'Number',
        errormessage: 'min 2 max 8',
        min: 2,
        max: 8,
        isRequired: 'true'
      },
      {
        name: 'textarea',
        label: 'textarea',
        type: 'textarea',
        placeholder: 'Textarea',
        icon: 'line/pencil-2.svg',
        //material_icon: 'lock_outline',
        id: 'textarea',
        errormessage: 'Textarea is requried (min 5 characters)',
        pattern: '[A-Za-z]*',
        isRequired: 'true'
      },
      {
        name: 'dropdown',
        label: 'dropdown',
        type: 'dropdown',
        placeholder: 'dropdown',
        icon: 'line/location-map-1.svg',
        id: 'dropdown',
        options: ['chennai', 'coimbatore', 'trichy', 'Bangalore', 'cochin', 'kerala', 'munnar']
      },
      {
        name: 'checkbox',
        label: 'checkbox',
        type: 'checkbox',
        placeholder: 'dropdown',
        icon: 'line/user-add.svg',
        errormessage: 'gender required',
        isRequired: 'true',
        options: ['Male', 'Female']
      },
      {
        name: 'multiselect',
        label: 'multiselect',
        type: 'multiselect',
        placeholder: 'multiselect',
        icon: 'line/user-add.svg',
        errormessage: 'gender required',
        isRequired: 'true',
        options: ['apple', 'banana', 'grapes', 'mango', 'passion']
      },
      {
        name: 'radiobutton',
        label: 'radiobutton',
        type: 'radiobutton',
        placeholder: 'radiobutton',
        icon: 'line/user-add.svg',
        id: '',
        errormessage: 'gender required',
        isRequired: 'true',
        options: ['Male', 'Female']
      },
      {
        name: 'submit',
        label: 'submit',
        type: 'submit',
        placeholder: 'submit',
        isdisabled: "true",

      }
    ]
  } //form object ends

  saveform() {
    console.log("entity");
    console.log(this.entity);
  }

  checkboxManagement(value: any, checked: any, type: any) {
    if (this.entity[type]) {
      this.checkboxService(value, checked, type);
    } else {
      this.entity[type] = [];
      this.checkboxService(value, checked, type);
    }
  }

  checkboxService(value: any, checked: any, type: any) {
    if (checked == true) {
      this.entity[type].push(value);
    } else {
      this.entity[type].pop("value");
    }
  }

}
